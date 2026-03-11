import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"
import BookNavigation from "./quartz/components/BookNavigation"
import FloatingHome from "./quartz/components/FloatingHome"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [Component.Search(), Component.Darkmode()],
  afterBody: [BookNavigation(), FloatingHome()],
  footer: Component.Footer({ links: {} }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.ConditionalRender({
      component: Component.Breadcrumbs(),
      condition: (page) => page.fileData.slug !== "index",
    }),
    BookNavigation(),
    Component.TagList(),
  ],
  left: [],
  right: [],
}

// components for pages that display lists of pages (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.Breadcrumbs()],
  left: [],
  right: [],
}
