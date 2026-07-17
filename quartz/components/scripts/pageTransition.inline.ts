// ── Page transition — re-trigger the fade/slide-in animation on SPA nav ──────
function setupPageTransition() {
  const article = document.querySelector("article")
  if (article) {
    article.classList.remove("page-enter")
    void (article as HTMLElement).offsetWidth
    article.classList.add("page-enter")
  }
}

document.addEventListener("nav", setupPageTransition)
