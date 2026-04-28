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

  for (const h2 of Array.from(article.querySelectorAll("h2"))) {
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
    outer.className = "h2-section-content is-collapsed"
    outer.style.gridTemplateRows = "0fr"
    const inner = document.createElement("div")
    siblings.forEach((s) => inner.appendChild(s))
    outer.appendChild(inner)
    h2.after(outer)

    // Visual indicator button (non-interactive — h2 handles click)
    const btn = document.createElement("span")
    btn.className = "h2-collapse-btn is-collapsed"
    h2.appendChild(btn)

    const toggle = (e: Event) => {
      // Don't toggle when clicking the heading anchor link
      if ((e.target as Element).closest('a[role="anchor"]')) return
      const collapsed = outer.classList.toggle("is-collapsed")
      outer.style.gridTemplateRows = collapsed ? "0fr" : "1fr"
      btn.classList.toggle("is-collapsed", collapsed)
      h2.classList.toggle("is-collapsed", collapsed)
    }
    h2.addEventListener("click", toggle)
    window.addCleanup(() => h2.removeEventListener("click", toggle))
  }
}

document.addEventListener("nav", setupH2Collapse)
