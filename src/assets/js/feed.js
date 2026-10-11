// Progressive enhancement for the injections list: search + severity/status filters.
// Without JS the full list renders and the filter form stays hidden.
(() => {
  const feed = document.querySelector("[data-feed]");
  if (!feed) return;

  const form = feed.querySelector(".feed-filters");
  const items = [...feed.querySelectorAll(".bug-list > li")];
  const countEl = feed.querySelector("[data-feed-count]");
  const empty = feed.querySelector("[data-feed-empty]");
  const reset = feed.querySelector("[data-feed-reset]");
  const total = items.length;
  const noun = (n) => (n === 1 ? "report" : "reports");

  // Restore state from the URL so filtered views can be shared.
  const params = new URLSearchParams(location.search);
  form.q.value = params.get("q") ?? "";
  for (const name of ["severity", "status"]) {
    const value = params.get(name);
    const radio = value && form.querySelector(`input[name="${name}"][value="${CSS.escape(value)}"]`);
    if (radio) radio.checked = true;
  }

  function apply() {
    const terms = form.q.value.trim().toLowerCase().split(/\s+/).filter(Boolean);
    const severity = form.severity.value;
    const status = form.status.value;
    let shown = 0;

    for (const li of items) {
      const bug = li.firstElementChild;
      const match =
        (severity === "all" || bug.dataset.severity === severity) &&
        (status === "all" || bug.dataset.status === status) &&
        terms.every((t) => bug.dataset.search.includes(t));
      li.hidden = !match;
      if (match) shown++;
    }

    countEl.textContent =
      shown === total ? `${total} ${noun(total)}` : `Showing ${shown} of ${total} ${noun(total)}`;
    empty.hidden = shown > 0;

    const next = new URLSearchParams();
    if (terms.length) next.set("q", form.q.value.trim());
    if (severity !== "all") next.set("severity", severity);
    if (status !== "all") next.set("status", status);
    const query = next.toString();
    history.replaceState(null, "", query ? `?${query}${location.hash}` : location.pathname + location.hash);
  }

  form.addEventListener("input", apply);
  form.addEventListener("submit", (e) => e.preventDefault());
  reset.addEventListener("click", () => {
    form.reset();
    apply();
    form.q.focus();
  });

  form.hidden = false;
  apply();
})();
