import { ComponentChildren } from "preact"
import { htmlToJsx } from "../../util/jsx"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "../types"

const Content: QuartzComponent = ({ fileData, tree }: QuartzComponentProps) => {
  const content = htmlToJsx(fileData.filePath!, tree) as ComponentChildren
  const classes: string[] = fileData.frontmatter?.cssclasses ?? []
  const classString = ["popover-hint", ...classes].join(" ")
  // The page has no <main>: .center also wraps header and navigation, so the
  // article itself is the main landmark (role=main is allowed on <article>)
  return (
    <article class={classString} role="main">
      {content}
    </article>
  )
}

export default (() => Content) satisfies QuartzComponentConstructor
