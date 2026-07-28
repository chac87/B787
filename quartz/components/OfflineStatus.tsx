import { QuartzComponent, QuartzComponentConstructor } from "./types"
// @ts-ignore
import offlineStatusScript from "./scripts/offlineStatus.inline"
import style from "./styles/offlineStatus.scss"

const OfflineStatus: QuartzComponent = () => <></>

OfflineStatus.afterDOMLoaded = offlineStatusScript
OfflineStatus.css = style

export default (() => OfflineStatus) satisfies QuartzComponentConstructor
