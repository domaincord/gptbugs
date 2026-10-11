const slugify = (text) =>
  text
    .toLowerCase()
    .replace(/<[^>]+>/g, "")
    .replace(/['\u2019]|&#39;|&rsquo;/g, "")
    .replace(/&[a-z]+;|&#\d+;/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

export default function (eleventyConfig) {
  // Static CSS, JS and fonts: copied as-is to dist/assets
  eleventyConfig.addPassthroughCopy("src/assets");

  // Give every markdown heading a stable id so sections can be linked to.
  eleventyConfig.amendLibrary("md", (md) => {
    md.core.ruler.push("heading_ids", (state) => {
      const used = new Set();
      state.tokens.forEach((token, i) => {
        if (token.type !== "heading_open" || token.attrGet("id")) return;
        const base = slugify(state.tokens[i + 1].content) || "section";
        let id = base;
        for (let n = 2; used.has(id); n++) id = `${base}-${n}`;
        used.add(id);
        token.attrSet("id", id);
      });
    });

    // Code blocks scroll sideways, so make them keyboard-focusable and expose the language.
    const fence = md.renderer.rules.fence;
    md.renderer.rules.fence = (tokens, idx, ...rest) => {
      const lang = md.utils.escapeHtml(tokens[idx].info.trim().split(/\s+/)[0] || "");
      const label = lang ? `${lang} code` : "Code";
      return fence(tokens, idx, ...rest).replace(
        /^<pre/,
        `<pre tabindex="0" aria-label="${label}"${lang ? ` data-lang="${lang}"` : ""}`
      );
    };
  });

  // List the h2s in rendered HTML: [{ id, text }], for tables of contents.
  eleventyConfig.addFilter("toc", (html = "") =>
    [...html.matchAll(/<h2 id="([^"]+)"[^>]*>([\s\S]*?)<\/h2>/g)].map(([, id, inner]) => ({
      id,
      text: inner.replace(/<[^>]+>/g, "").trim(),
    }))
  );
}

export const config = {
  dir: {
    input: "src",
    includes: "views/_includes",
    layouts: "views/_layouts",
    data: "data",
    output: "dist"
  }
};
