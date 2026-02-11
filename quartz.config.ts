import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

const config: QuartzConfig = {
  configuration: {
    pageTitle: "B787 Guide",
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "plausible",
    },
    locale: "en-US",
    baseUrl: "quartz.jzhao.xyz",
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
          light: "#F1EDE3",        // Warmes Sand-Papier (statt kühles Weiß)
lightgray: "#E3DCCD",    // Helles Leinen / Sandgrau für Linien
gray: "#8A7F6B",         // Warmes Mittelgrau (mehr Braunanteil)
darkgray: "#3F3A33",     // Weiches Espresso-Grau für Fließtext
dark: "#1E2A44",         // Tiefes Navy mit weniger Sättigung
secondary: "#3E5FA8",    // Gedämpftes LHG-Blau
tertiary: "#6B8FD6",     // Entsättigtes Akzentblau
highlight: "rgba(62, 95, 168, 0.08)", 
textHighlight: "rgba(181, 162, 117, 0.45)", // Wärmeres Sand-Gold
        },
        darkMode: {
          light: "#070D1F",         // Stratosphäre bei Nacht (ganz tiefes Blau)
          lightgray: "#1C2638",     // Cockpit-Panel Dunkelgrau
          gray: "#8D9EB6",          // Instrumenten-Beleuchtung (gedimmt)
          darkgray: "#E2E8F0",      // Helles Silber für Text
          dark: "#FFFFFF",          // Reines Weiß für Überschriften
          secondary: "#5291ED",     // LHG Light Blue: Leuchtendes Cyan-Blau für Links
          tertiary: "#FF526B",      // LHG Red (heller): Akzente im Darkmode
          highlight: "rgba(82, 145, 237, 0.15)", // Leuchtendes Blau transparent
          textHighlight: "rgba(156, 143, 122, 0.4)", // LHG Sand
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
      // Comment out CustomOgImages to speed up build time
      Plugin.CustomOgImages(),
    ],
  },
}

export default config
