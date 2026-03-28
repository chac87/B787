document.addEventListener("nav", () => {
  const container = document.querySelector<HTMLDivElement>(".floating-home")
  const fill = document.querySelector<SVGCircleElement>(".progress-ring__fill")
  const topBtn = document.querySelector<HTMLButtonElement>(".floating-home__top")
  if (!container || !fill || !topBtn) return

  const r = 19
  const circumference = 2 * Math.PI * r
  fill.style.strokeDasharray = String(circumference)
  fill.style.strokeDashoffset = String(circumference)

  const onScroll = () => {
    const scrollTop = window.scrollY
    const docHeight = document.documentElement.scrollHeight - window.innerHeight
    const progress = docHeight > 0 ? scrollTop / docHeight : 0
    container.classList.toggle("is-visible", scrollTop > 150)
    fill.style.strokeDashoffset = String(circumference * (1 - progress))
  }

  const onTopClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  window.addEventListener("scroll", onScroll, { passive: true })
  topBtn.addEventListener("click", onTopClick)
  window.addCleanup(() => {
    window.removeEventListener("scroll", onScroll)
    topBtn.removeEventListener("click", onTopClick)
  })
  onScroll()
})
