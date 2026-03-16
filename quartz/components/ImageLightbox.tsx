import { QuartzComponent, QuartzComponentConstructor } from "./types"
// @ts-ignore
import script from "./scripts/imageLightbox.inline"
import style from "./styles/imageLightbox.scss"

const ImageLightbox: QuartzComponent = () => <></>

ImageLightbox.afterDOMLoaded = script
ImageLightbox.css = style

export default (() => ImageLightbox) satisfies QuartzComponentConstructor
