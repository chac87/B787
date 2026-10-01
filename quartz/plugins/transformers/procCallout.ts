import { QuartzTransformerPlugin } from "../types"
import { Root, Blockquote, Heading } from "mdast"
import { visit } from "unist-util-visit"

// [!proc] callouts write the PM's lines as `######` so they stay quick to type in
// Obsidian. They are not headings, though: render them as p.proc-pm so screen
// readers don't announce a jump from H1 to H6. Must run after ObsidianFlavoredMarkdown,
// which turns the blockquote into a callout.
export const ProcCalloutLines: QuartzTransformerPlugin = () => ({
  name: "ProcCalloutLines",
  markdownPlugins() {
    return [
      () => (tree: Root) => {
        visit(tree, "blockquote", (callout: Blockquote) => {
          if (callout.data?.hProperties?.["data-callout"] !== "proc") return
          visit(callout, "heading", (heading: Heading) => {
            if (heading.depth !== 6) return
            heading.data = {
              ...heading.data,
              hName: "p",
              hProperties: { ...heading.data?.hProperties, className: ["proc-pm"] },
            }
          })
        })
      },
    ]
  },
})
