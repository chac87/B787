// ── Registration variant selector (aircraft-specific content blocks) ─────────
function setupRegVariant() {
  const regBar = document.querySelector<HTMLElement>(".reg-selector-bar")
  if (!regBar) return

  const blocks = document.querySelectorAll<HTMLElement>(".reg-variant-block")
  const btns = regBar.querySelectorAll<HTMLButtonElement>(".reg-btn")

  function applyVariant(variant: string | null) {
    blocks.forEach(b => b.classList.toggle("hidden", !!variant && b.dataset.variant !== variant))
    btns.forEach(b => b.classList.toggle("active", b.dataset.variant === variant))
  }

  applyVariant(localStorage.getItem("reg-variant") || null)

  btns.forEach(btn => {
    btn.addEventListener("click", () => {
      const next = btn.classList.contains("active") ? null : (btn.dataset.variant ?? null)
      localStorage.setItem("reg-variant", next ?? "")
      applyVariant(next)
    })
  })
}

document.addEventListener("nav", setupRegVariant)
