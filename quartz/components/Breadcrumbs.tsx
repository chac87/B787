import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import style from "./styles/breadcrumbs.scss"
import { classNames } from "../util/lang"
import { resolveRelative, joinSegments } from "../util/path"

type Options = {
  spacerSymbol: string 
  rootName: string     
  resolveFrontmatterTitle: boolean 
  hideOnRoot: boolean  
}

const defaultOptions: Options = {
  spacerSymbol: "❯",
  rootName: "Home",
  resolveFrontmatterTitle: true,
  hideOnRoot: true,
}

// FORMATTER: Putzt den Namen, falls keine Datei gefunden wird
function formatFallbackTitle(slugSegment: string): string {
  // 1. Decodieren (falls %20 im URL steht)
  let decoded = decodeURIComponent(slugSegment)
  
  // 2. Entferne führende Nummerierung (z.B. "01-", "01_", "1.")
  let clean = decoded.replace(/^(\d+[-_\.])+/, "")
  
  // 3. Ersetze alle Bindestriche und Unterstriche durch Leerzeichen
  clean = clean.replace(/[-_]/g, " ")
  
  // 4. Wörter großschreiben (Title Case)
  return clean.replace(/\b\w/g, (c) => c.toUpperCase()).trim()
}

export default ((opts?: Partial<Options>) => {
  const options = { ...defaultOptions, ...opts }

  const Breadcrumbs: QuartzComponent = ({ fileData, allFiles, displayClass }: QuartzComponentProps) => {
    // Auf der Startseite ausblenden
    if (options.hideOnRoot && fileData.slug === "index") {
      return null
    }

    // Pfad zerlegen
    const slugParts = fileData.slug?.split("/") || []
    
    // Breadcrumbs generieren
    const crumbs = slugParts.map((part, index) => {
      // Den Pfad bis zu diesem Punkt rekonstruieren
      const pathSoFar = joinSegments(...slugParts.slice(0, index + 1))
      
      // Standard-Titel (Fallback), falls wir keine Datei finden
      let title = formatFallbackTitle(part)
      
      if (options.resolveFrontmatterTitle && allFiles) {
        // SUCHE 1: Exakter Match (z.B. "folder/datei")
        let matchingFile = allFiles.find((f) => f.slug === pathSoFar)
        
        // SUCHE 2: Folder Note Match (z.B. "folder" -> sucht "folder/index")
        if (!matchingFile) {
           matchingFile = allFiles.find((f) => f.slug === joinSegments(pathSoFar, "index"))
        }

        // Wenn Datei gefunden und Titel vorhanden: Nimm den Titel!
        if (matchingFile && matchingFile.frontmatter?.title && matchingFile.frontmatter.title !== "Untitled") {
          title = matchingFile.frontmatter.title
        }
      }

      return {
        displayName: title,
        path: resolveRelative(fileData.slug!, pathSoFar),
      }
    })

    return (
      <nav class={classNames(displayClass, "breadcrumb-container")} aria-label="breadcrumbs">
        <div class="breadcrumb-inner">
          <a href={resolveRelative(fileData.slug!, "/")}>{options.rootName}</a>
          {crumbs.map((crumb, i) => (
            <div style={{ display: "contents" }}>
              <span class="breadcrumb-spacer">{options.spacerSymbol}</span>
              <a href={crumb.path}>{crumb.displayName}</a>
            </div>
          ))}
        </div>
      </nav>
    )
  }

  Breadcrumbs.css = style
  return Breadcrumbs
}) satisfies QuartzComponentConstructor