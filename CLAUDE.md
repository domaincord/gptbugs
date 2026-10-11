
# GPTBugs.com

GPT Bugs is a static website built on Eleventy. It sources data from json files stored in `src/data`. 

Do not edit the eleventy configuration (located in `.eleventy.js`) for the various directories.

Use markdown files (md) for non-data content and documentation. 

## About GPT Bugs
The site features detailed information on LLM prompt injections such as what is prompt injection, how to protect your ai apps and services from prompt injection, and a rolling list of prompt injections discovered in the wild.

### UI
The user interface of GPT Bugs is designed to be clean and intuitive, making it easy for users to navigate through the information on prompt injections. It includes features such as a searchable list of prompt injections, detailed views for each injection, and guidance on protecting AI applications from such attacks.

The UI stack is built using modern web technologies including HTML, CSS, and JavaScript, with Eleventy serving as the static site generator. This ensures a fast, responsive, and maintainable user interface.

Do not use any third-party UI libraries or frameworks. All UI components should be built from scratch using the core web technologies mentioned above.

The site theme should support automatic light/dark mode based on the user's system preferences. The UI should be primarily black and white with high contrast to ensure readability and accessibility. All interactive elements should have clear focus states to aid keyboard navigation and improve overall accessibility.

## Site Footer 

Make a simple site footer that includes the following information in a stylized way:
- Home
- About
- Contact
- DCMA

&copy; 2026 [Domaincord](https://domaincord.com) Ventures LLC

## Design Context

### Users
The main readers are **developers building AI apps**: engineers adding LLM features (chat widgets, agents, RAG, tool use) who need to know how prompt injection works, which real products have been hit, and how to protect their own apps. They come in two modes:
- **Scanning:** looking through the list of reported injections for patterns relevant to their stack.
- **Studying:** reading the explainers and defense guides closely, often with code open beside them.

What they need from the site: understand the attack, see real examples, and leave with fixes they can apply.

### Brand Personality
**Blunt. Unvarnished. Urgent.**
- Raw and brutalist, with the energy of a hacker zine. The interface states the facts directly, without marketing gloss.
- It should come across as a public record of failures: things are broken, here is the evidence, here is how to fix it.
- The emotional goal is to make the risk feel real without slipping into fear-mongering. Readers should leave feeling more alert and better equipped.
- Copy should be terse and specific. No hype words, no "revolutionary", no emoji.

### Aesthetic Direction
- **Monochrome first.** Use near-black and near-white, tinted rather than pure #000 or #fff, with high contrast.
- **One signal color**, a sharp alert red. It is used only to mark severity, unpatched status and similar warnings, never as decoration. Because it is rare, it stays meaningful.
- **Brutalist structure:**
  - The grid and the rules between sections are visible.
  - Corners are hard, with no rounded cards and no drop shadows.
  - Type is big and blunt, and density is used on purpose.
  - Structure comes from borders and type weight rather than containers.
- **Light and dark** follow the system setting automatically (`prefers-color-scheme`), and both themes get equal care.
- **No third-party UI libraries or frameworks.** Everything is hand-built HTML, CSS and JS on Eleventy.
- **Anti-references:**
  - The usual "AI startup" look: purple-to-blue gradients, cyan on dark, glassmorphism, glowing accents.
  - SaaS landing-page templates and grids of identical icon cards.
  - Polished, soft, friendly corporate design.
  - Monospace everywhere as a lazy way to say "technical". Use mono only for actual code and payloads.

### Accessibility
- **WCAG 2.2 AAA:**
  - Text contrast is at least 7:1, and at least 4.5:1 for large text.
  - Interactive targets are at least 44×44px.
  - Text spacing can be overridden without breaking the layout.
- **Color never carries meaning alone.** Severity and patched status always have a text label too, plus a weight or fill difference.
- **Focus states are thick and obvious** (for example, an offset outline at least 3px thick) and work in both themes.
- **`prefers-reduced-motion` is respected.** Motion is minimal in any case.
- Use semantic HTML, landmarks and a skip link. The feed and its filters must be fully usable from the keyboard.

### Design Principles
1. **Evidence over ornament.** Every element shows information or structure. If it is only decoration, cut it.
2. **Red means danger.** The signal color is kept for real risk. If everything is red, nothing is.
3. **Structure is visible.** Rules, grids and type weight build the hierarchy. Do not wrap content in cards.
4. **Scan fast, read deep.** The feed is dense and easy to scan. Long-form pages use comfortable line lengths and a clear reading rhythm.
5. **AAA by default.** High contrast is the aesthetic as well as the compliance requirement. Never trade legibility for style.
