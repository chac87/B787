function setupH2Collapse() {
  const article = document.querySelector("article")
  if (!article) return

  // Idempotency: unwrap any existing sections before re-wrapping (SPA nav)
  for (const wrapper of Array.from(article.querySelectorAll(".h2-section-content"))) {
    const parent = wrapper.parentElement!
    const inner = wrapper.firstElementChild!
    while (inner.firstChild) parent.insertBefore(inner.firstChild, wrapper)
    wrapper.remove()
  }
  article.querySelectorAll(".h2-collapse-btn").forEach((b) => b.remove())

  const isHomeIndex = article.querySelector("h1")?.textContent?.trim() === "B787 Guide"
  // hidden="until-found" keeps collapsed text findable via Cmd+F (browser
  // fires beforematch and we expand). Without support, fall back to inert.
  const supportsUntilFound = "onbeforematch" in document.body
  // Matches the grid-template-rows transition in _h2collapse.scss
  const collapseMs = 200
  const expanders = new Map<Element, () => void>()

  for (const [index, h2] of Array.from(article.querySelectorAll("h2")).entries()) {
    if (h2.classList.contains("h2-no-collapse")) continue
    const h2Link = h2.querySelector("a.internal") as HTMLAnchorElement | null
    if (
      isHomeIndex &&
      h2.textContent?.trim() === "Operational" &&
      h2Link?.getAttribute("href") === "/Operational/"
    ) {
      continue
    }

    const siblings: Element[] = []
    let next = h2.nextElementSibling
    while (
      next &&
      next.tagName !== "H2" &&
      !next.classList.contains("h2-collapse-break")
    ) {
      siblings.push(next)
      next = next.nextElementSibling
    }
    if (!siblings.length) continue

    // Outer = grid container, inner = min-height:0 child for 0fr collapse
    const outer = document.createElement("div")
    outer.className = "h2-section-content"
    outer.id = `h2-section-${h2.id || index}`
    const inner = document.createElement("div")
    siblings.forEach((s) => inner.appendChild(s))
    outer.appendChild(inner)
    h2.after(outer)

    // Real button so the section is reachable by keyboard and screen readers.
    // Its click bubbles to the h2 handler, which also serves mouse clicks on the text.
    const btn = document.createElement("button")
    btn.type = "button"
    btn.className = "h2-collapse-btn"
    btn.setAttribute("aria-controls", outer.id)
    if (h2.id) btn.setAttribute("aria-labelledby", h2.id)
    else btn.setAttribute("aria-label", h2.textContent?.trim() ?? "")
    btn.appendChild(document.createElement("span")).className = "h2-collapse-icon"
    h2.appendChild(btn)

    let hideTimer: number | undefined
    const setCollapsed = (collapsed: boolean) => {
      window.clearTimeout(hideTimer)
      outer.classList.toggle("is-collapsed", collapsed)
      outer.style.gridTemplateRows = collapsed ? "0fr" : "1fr"
      btn.classList.toggle("is-collapsed", collapsed)
      btn.setAttribute("aria-expanded", String(!collapsed))
      h2.classList.toggle("is-collapsed", collapsed)

      if (!collapsed) {
        inner.removeAttribute("hidden")
        outer.inert = false
        return
      }
      // inert right away so focus can't land in the closing section;
      // swap to until-found once the collapse animation has finished.
      outer.inert = true
      if (supportsUntilFound) {
        hideTimer = window.setTimeout(() => {
          inner.setAttribute("hidden", "until-found")
          outer.inert = false
        }, collapseMs)
      }
    }

    setCollapsed(true)
    expanders.set(outer, () => setCollapsed(false))

    const toggle = (e: Event) => {
      // Don't toggle when clicking the heading anchor link
      if ((e.target as Element).closest('a[role="anchor"]')) return
      setCollapsed(!outer.classList.contains("is-collapsed"))
    }
    const onBeforeMatch = () => setCollapsed(false)
    h2.addEventListener("click", toggle)
    inner.addEventListener("beforematch", onBeforeMatch)
    window.addCleanup(() => {
      window.clearTimeout(hideTimer)
      h2.removeEventListener("click", toggle)
      inner.removeEventListener("beforematch", onBeforeMatch)
    })
  }

  // Anchor target inside a collapsed section: expand it, then scroll once it has
  // opened — the SPA already scrolled to the still-hidden position.
  const revealAnchor = (hash: string) => {
    if (!hash) return
    const target = document.getElementById(decodeURIComponent(hash.slice(1)))
    const section = target?.closest(".h2-section-content.is-collapsed")
    const expand = section && expanders.get(section)
    if (!target || !expand) return
    expand()
    window.setTimeout(() => target.scrollIntoView(), collapseMs)
  }
  revealAnchor(location.hash)

  // Same-page anchor clicks don't fire "nav", so catch them before the SPA scrolls
  const onAnchorClick = (e: MouseEvent) => {
    const link = (e.target as Element).closest<HTMLAnchorElement>('a[href*="#"]')
    if (!link) return
    const url = new URL(link.href)
    if (url.pathname === location.pathname) revealAnchor(url.hash)
  }
  document.addEventListener("click", onAnchorClick)
  window.addCleanup(() => document.removeEventListener("click", onAnchorClick))
}

document.addEventListener("nav", setupH2Collapse)
