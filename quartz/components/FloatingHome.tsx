import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
// @ts-ignore
import floatingHomeScript from "./scripts/floatingHome.inline"

export default (() => {
  const FloatingHome: QuartzComponent = ({ displayClass }: QuartzComponentProps) => {
    return (
      <a href="/" class={`floating-home ${displayClass ?? ""}`} aria-label="Home">
        <svg class="progress-ring" viewBox="0 0 50 50" aria-hidden="true">
          <circle class="progress-ring__track" cx="25" cy="25" r="21" />
          <circle class="progress-ring__fill" cx="25" cy="25" r="21" />
        </svg>
        <svg class="home-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
          <polyline points="9 22 9 12 15 12 15 22"/>
        </svg>
      </a>
    )
  }

  FloatingHome.afterDOMLoaded = floatingHomeScript

  return FloatingHome
}) satisfies QuartzComponentConstructor
