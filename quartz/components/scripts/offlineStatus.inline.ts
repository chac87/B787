// ── Offline status pill — built once, persists across SPA navigations ─────────
if ("serviceWorker" in navigator && !document.getElementById("offline-status")) {
  const pill = document.createElement("div")
  pill.id = "offline-status"
  pill.setAttribute("role", "status")
  pill.className = "is-hidden"
  document.body.appendChild(pill)

  let hideTimer: number | undefined
  let state: "hidden" | "syncing" | "incomplete" | "ready" = "hidden"

  const show = (text: string, cls: typeof state, autohideMs?: number) => {
    window.clearTimeout(hideTimer)
    state = cls
    pill.textContent = text
    pill.className = `is-${cls}`
    if (autohideMs) {
      hideTimer = window.setTimeout(() => {
        state = "hidden"
        pill.className = "is-hidden"
      }, autohideMs)
    }
  }

  pill.addEventListener("click", () => {
    if (state !== "incomplete") return
    show("Offline-Download …", "syncing")
    navigator.serviceWorker.controller?.postMessage({ type: "backfill" })
  })

  navigator.serviceWorker.addEventListener("message", (e) => {
    const msg = e.data ?? {}
    if (msg.type === "progress") {
      show(`Offline-Download … ${msg.done}/${msg.total}`, "syncing")
    } else if (msg.type === "complete" || msg.type === "status") {
      const complete = msg.cached >= msg.total && (msg.failed ?? 0) === 0
      if (complete) {
        // brief confirmation only when a download just ran or on app start
        if (state === "syncing" || msg.type === "status") {
          show("✓ Offline bereit", "ready", 2500)
        }
      } else {
        const pct = msg.total > 0 ? Math.round((msg.cached / msg.total) * 100) : 0
        show(`Offline unvollständig (${pct}%) – tippen zum Laden`, "incomplete")
      }
    }
  })

  // ask the SW for the current coverage once it controls the page
  navigator.serviceWorker.ready.then((reg) => {
    reg.active?.postMessage({ type: "status" })
  })
}
