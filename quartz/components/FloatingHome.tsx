import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
// @ts-ignore
import floatingHomeScript from "./scripts/floatingHome.inline"

export default (() => {
  const FloatingHome: QuartzComponent = ({ displayClass }: QuartzComponentProps) => {
    return (
      <div class={`floating-home ${displayClass ?? ""}`}>
        <a href="/" class="floating-home__home" aria-label="Home">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
            <polyline points="9 22 9 12 15 12 15 22"/>
          </svg>
        </a>
        <div class="floating-home__divider" aria-hidden="true"></div>
        <button class="floating-home__top" aria-label="Scroll to top">
          <svg class="progress-ring" viewBox="0 0 46 46" aria-hidden="true">
            <circle class="progress-ring__track" cx="23" cy="23" r="19" fill="none" />
            <circle class="progress-ring__fill" cx="23" cy="23" r="19" fill="none" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <polyline points="18 15 12 9 6 15"/>
          </svg>
        </button>
      </div>
    )
  }

  FloatingHome.afterDOMLoaded = floatingHomeScript

  return FloatingHome
}) satisfies QuartzComponentConstructor
