document.addEventListener("nav", () => {
  const btn = document.querySelector<HTMLAnchorElement>(".floating-home")
  const fill = document.querySelector<SVGCircleElement>(".progress-ring__fill")
  if (!btn || !fill) return

  const r = 21
  const circumference = 2 * Math.PI * r
  fill.style.strokeDasharray = String(circumference)
  fill.style.strokeDashoffset = String(circumference)

  const onScroll = () => {
    const scrollTop = window.scrollY
    const docHeight = document.documentElement.scrollHeight - window.innerHeight
    const progress = docHeight > 0 ? scrollTop / docHeight : 0
    btn.classList.toggle("is-visible", scrollTop > 150)
    fill.style.strokeDashoffset = String(circumference * (1 - progress))
  }

  window.addEventListener("scroll", onScroll, { passive: true })
  window.addCleanup(() => window.removeEventListener("scroll", onScroll))
  onScroll()
})
