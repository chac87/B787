import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

const config: QuartzConfig = {
  configuration: {
    pageTitle: "B787 Guide",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "plausible",
    },
    locale: "en-US",
    baseUrl: "lh787.netlify.app",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Schibsted Grotesk",
        body: "Source Sans Pro",
        code: "IBM Plex Mono",
      },
      colors: {
        lightMode: {
          light: "#F1EDE3",                           // Warmes Sand-Papier
          lightgray: "#E3DCCD",                       // Helles Leinen für Linien
          gray: "#8A7F6B",                            // Warmes Mittelgrau
          darkgray: "#3F3A33",                        // Espresso-Grau für Fließtext
          dark: "#05164D",                            // LHG Core Blue Dark
          secondary: "#3257BC",                       // LHG Core Blue
          tertiary: "#5291ED",                        // LHG Light Blue
          highlight: "rgba(50, 87, 188, 0.08)",       // LHG Core Blue tint
          textHighlight: "rgba(181, 162, 117, 0.45)", // Sand-Gold
        },
        darkMode: {
          light: "#070D1F",                           // Stratosphäre bei Nacht
          lightgray: "#1C2638",                       // Cockpit-Panel Dunkelgrau
          gray: "#8D9EB6",                            // Instrumenten-Beleuchtung
          darkgray: "#E2E8F0",                        // Helles Silber für Text
          dark: "#EDF0FA",                            // Soft Blue-White für Überschriften
          secondary: "#5291ED",                       // LHG Light Blue
          tertiary: "#4B9DA1",                        // LHG Teal
          highlight: "rgba(82, 145, 237, 0.15)",      // LHG Light Blue tint
          textHighlight: "rgba(156, 143, 122, 0.4)",  // LHG Sand
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
      Plugin.CustomOgImages(),
      Plugin.PWA(),
    ],
  },
}

export default config
