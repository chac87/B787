import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import style from "./styles/bookNavigation.scss"
import { resolveRelative } from "../util/path"
import fs from "fs"
import path from "path"

export default (() => {
  const BookNavigation: QuartzComponent = ({ fileData, allFiles, displayClass }: QuartzComponentProps) => {
    
    // 1. Lade book.md
    let bookTargets: string[] = []
    try {
      const bookPath = path.join(process.cwd(), "content", "book.md")
      if (fs.existsSync(bookPath)) {
        const bookContent = fs.readFileSync(bookPath, "utf8")
        const linkRegex = /\[\[([^\]|]+)(?:\|[^\]]+)?\]\]/g
        let match
        while ((match = linkRegex.exec(bookContent)) !== null) {
          bookTargets.push(match[1].trim())
        }
      }
    } catch (e) {
      console.error("Fehler beim Lesen der book.md:", e)
    }

    if (bookTargets.length === 0) return null

    // NEU: HILFSFUNKTION
    // Macht aus "General Infos", "general-infos" oder "General_Infos" immer "generalinfos"
    // So findet das Skript die Datei garantiert, egal was Quartz oder Obsidian damit machen.
    const simplify = (str: string) => str.toLowerCase().replace(/&/g, "and").replace(/[-_ ]/g, "")

    // 2. Obsidian-Links in echte Quartz-Slugs übersetzen
    const orderedSlugs = bookTargets.map(target => {
      const cleanTarget = simplify(target)

      // Priorität 1: Exakter Pfad (z.B. "Systems/index")
      let match = allFiles.find(f => f.slug && simplify(f.slug) === cleanTarget)
      if (match) return match.slug

      // Priorität 2: Ordner Index (z.B. Ziel "Systems" -> echter Slug "Systems/index")
      match = allFiles.find(f => f.slug && simplify(f.slug) === simplify(`${target}/index`))
      if (match) return match.slug

      // Priorität 3: Reiner Dateiname (Ignoriert den Ordnerpfad wie Obsidian)
      match = allFiles.find(f => {
        if (!f.slug) return false
        const parts = f.slug.split('/')
        return simplify(parts[parts.length - 1]) === cleanTarget
      })
      if (match) return match.slug

      return target 
    })

    // 3. Wo befinden wir uns aktuell?
    const currentSlug = fileData.slug || "index"
    const currentIndex = orderedSlugs.findIndex(slug => slug === currentSlug)

    if (currentIndex === -1) return null

    const prevSlug = currentIndex > 0 ? orderedSlugs[currentIndex - 1] : null
    const nextSlug = currentIndex < orderedSlugs.length - 1 ? orderedSlugs[currentIndex + 1] : null

    // Hilfsfunktion für den Titel
    const getTitle = (targetSlug: string) => {
      const file = allFiles.find(f => f.slug === targetSlug)
      if (file?.frontmatter?.title && file.frontmatter.title !== "Untitled") {
        return file.frontmatter.title
      }
      const parts = targetSlug.split('/')
      let last = parts[parts.length - 1]
      if (last === "index" && parts.length > 1) {
        last = parts[parts.length - 2]
      }
      return last.replace(/^\d+[-_]/, "").replace(/[-_]/g, " ")
    }

return (
      <div class={`book-navigation ${displayClass ?? ""}`}>
        {prevSlug ? (
          <a href={resolveRelative(currentSlug as any, prevSlug as any)} class="nav-btn prev">
            <span class="nav-label">← Zurück</span>
            <span class="nav-title">{getTitle(prevSlug!)}</span>
          </a>
        ) : <div class="nav-spacer"></div>}

        {nextSlug ? (
          <a href={resolveRelative(currentSlug as any, nextSlug as any)} class="nav-btn next">
            <span class="nav-label">Weiter →</span>
            <span class="nav-title">{getTitle(nextSlug!)}</span>
          </a>
        ) : <div class="nav-spacer"></div>}
      </div>
    )
  }

  BookNavigation.css = style
  return BookNavigation
}) satisfies QuartzComponentConstructor