// ── Registration variant selector (aircraft-specific content blocks) ─────────
function setupRegVariant() {
  const regBar = document.querySelector<HTMLElement>(".reg-selector-bar")
  if (!regBar) return

  const blocks = document.querySelectorAll<HTMLElement>(".reg-variant-block")
  const btns = regBar.querySelectorAll<HTMLButtonElement>(".reg-btn")

  function applyVariant(variant: string | null) {
    blocks.forEach(b => b.classList.toggle("hidden", !!variant && b.dataset.variant !== variant))
    btns.forEach(b => {
      const on = b.dataset.variant === variant
      b.classList.toggle("active", on)
      b.setAttribute("aria-pressed", String(on))
    })
  }

  // Storage can throw (Safari private mode, blocked site data) — the selector
  // must still work, it just won't remember the choice.
  let saved: string | null = null
  try {
    saved = localStorage.getItem("reg-variant")
  } catch {}
  applyVariant(saved || null)

  btns.forEach(btn => {
    btn.addEventListener("click", () => {
      const next = btn.classList.contains("active") ? null : (btn.dataset.variant ?? null)
      try {
        localStorage.setItem("reg-variant", next ?? "")
      } catch {}
      applyVariant(next)
    })
  })
}

document.addEventListener("nav", setupRegVariant)
