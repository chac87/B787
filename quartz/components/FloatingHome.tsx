import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import style from "./styles/custom.scss" // Wir nutzen dein globales CSS

export default (() => {
  const FloatingHome: QuartzComponent = ({ displayClass, cfg }: QuartzComponentProps) => {
    return (
      <a href="/" class={`floating-home ${displayClass ?? ""}`} aria-label="Home">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
          <polyline points="9 22 9 12 15 12 15 22"/>
        </svg>
      </a>
    )
  }
  
  return FloatingHome
}) satisfies QuartzComponentConstructor