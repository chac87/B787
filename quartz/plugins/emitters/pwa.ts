import { QuartzEmitterPlugin } from "../types"
import { write } from "./helpers"
import { FullSlug } from "../../util/path"
import { glob } from "../../util/glob"

export const PWA: QuartzEmitterPlugin = () => ({
  name: "PWA",

  externalResources() {
    const swScript = `if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .catch(err => console.warn('SW registration failed:', err))
  })
}`
    return {
      js: [
        {
          loadTime: "afterDOMReady" as const,
          contentType: "inline" as const,
          script: swScript,
          spaPreserve: true,
        },
      ],
    }
  },

  async *emit(ctx, content) {
    const cfg = ctx.cfg.configuration
    const cacheName = `b787-v${Date.now()}`

    // All HTML page paths
    const pages = content.map(([_tree, vfile]) => {
      const slug = vfile.data.slug!
      return slug === "index" ? "/" : `/${slug}`
    })

    // All images from the content directory
    const imageFiles = await glob(
      "**/*.{png,jpg,jpeg,webp,svg,gif}",
      ctx.argv.directory,
      cfg.ignorePatterns,
    )
    const imageUrls = imageFiles.map((f) => `/${f}`)

    const staticAssets = [
      "/index.css",
      "/postscript.js",
      "/static/contentIndex.json",
      "/static/icon.png",
    ]

    const allToCache = [...new Set([...pages, ...staticAssets, ...imageUrls])]

    // manifest.webmanifest
    const manifest = {
      name: cfg.pageTitle,
      short_name: "B787",
      description: "Boeing 787 Study Guide",
      start_url: "/",
      display: "standalone",
      background_color: "#FAF8F4",
      theme_color: "#3257BC",
      icons: [{ src: "/static/icon.png", sizes: "any", type: "image/png" }],
    }

    yield write({
      ctx,
      slug: "manifest" as FullSlug,
      ext: ".webmanifest",
      content: JSON.stringify(manifest, null, 2),
    })

    // sw.js — baked-in pre-cache list
    const sw = `const CACHE = '${cacheName}';
const PRECACHE = ${JSON.stringify(allToCache, null, 2)};

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE).then(cache =>
      Promise.all(PRECACHE.map(url => cache.add(url).catch(() => {})))
    ).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  const url = new URL(e.request.url);
  if (url.origin !== location.origin) return;

  const isAsset = url.pathname.startsWith('/static/') ||
    /\\.(png|jpe?g|webp|svg|gif|woff2?|ttf|otf)$/i.test(url.pathname);

  if (isAsset) {
    // Cache-first for images and static assets
    e.respondWith(
      caches.match(e.request).then(cached => {
        if (cached) return cached;
        return fetch(e.request).then(res => {
          const clone = res.clone();
          caches.open(CACHE).then(c => c.put(e.request, clone));
          return res;
        });
      })
    );
  } else {
    // Network-first with offline fallback for HTML
    e.respondWith(
      fetch(e.request).then(res => {
        const clone = res.clone();
        caches.open(CACHE).then(c => c.put(e.request, clone));
        return res;
      }).catch(() => caches.match(e.request))
    );
  }
});`

    yield write({
      ctx,
      slug: "sw" as FullSlug,
      ext: ".js",
      content: sw,
    })
  },

  async *partialEmit() {},
})
