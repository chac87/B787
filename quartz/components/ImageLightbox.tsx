import { QuartzComponent, QuartzComponentConstructor } from "./types"
// @ts-ignore
import lightboxScript from "./scripts/imageLightbox.inline"
// @ts-ignore
import pageTransitionScript from "./scripts/pageTransition.inline"
// @ts-ignore
import nncFilterScript from "./scripts/nncFilter.inline"
// @ts-ignore
import regVariantScript from "./scripts/regVariant.inline"
import style from "./styles/imageLightbox.scss"

const ImageLightbox: QuartzComponent = () => <></>

ImageLightbox.afterDOMLoaded =
  lightboxScript + pageTransitionScript + nncFilterScript + regVariantScript
ImageLightbox.css = style

export default (() => ImageLightbox) satisfies QuartzComponentConstructor
