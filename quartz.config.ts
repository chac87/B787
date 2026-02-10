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
          light: "#F5F7FA",         // Dein Wunsch: Cooles "Tech-Papier" Weiß
          lightgray: "#E2E7EE",     // Zartes Grau-Blau für Linien (wie Wolken)
          gray: "#758696",          // Gedämpftes Metall-Grau für Datum/Meta
          darkgray: "#334155",      // Dunkles Slate-Blue für Fließtext (weicher als Schwarz)
          dark: "#05164D",          // LHG Deep Blue: Für mächtige Überschriften
          secondary: "#3257BC",     // LHG Core Blue: Das klassische Link-Blau
          tertiary: "#5291ED",      // LHG Red: Für Hover-Effekte (der "Crane" Akzent)
          highlight: "rgba(50, 87, 188, 0.10)", // Zartes LHG Blau für Code-Hintergründe
          textHighlight: "rgba(156, 143, 122, 0.4)", // LHG Sand: Stilvolles Gold zum Markieren
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
