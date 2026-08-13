---
name: artifactor
description: Create an AI-generated HTML artifact that is Artifactor-ready — or refactor an existing artifact to the contract — so it opens at full strength in the Artifactor editor (palette panel, font pickers, block editing, PDF export, presentation mode). Use when the user asks for an artifact they will edit or ship with Artifactor, says "make this artifactor-ready", or wants an HTML document refactored for editing.
---

# /artifactor — make artifacts Artifactor-ready

Artifactor (a Chrome extension) lets people edit AI-generated HTML documents as files
they own: recolor via a palette panel, swap fonts, move and edit blocks, export PDF,
present fullscreen. It works best when the document follows a small contract. Your job
is to produce (or repair) that shape.

## Modes

**Create** — the user asks for a new document (report, one-pager, deck, memo).
Generate it to the contract below.

**Refactor** — the user gives you an existing HTML artifact. Rewrite it to the
contract **without changing content, copy, or visual appearance**. Same words, same
look, better bones. List what you changed at the end (one line per change).

## The contract

Produce one self-contained `.html` file:

1. **Self-contained** — all CSS in one `<style>` in `<head>`; images as `data:` URIs
   or absolute URLs; no external `.css`/`.js`; no build step. Must render from disk,
   offline.

2. **Semantic top-level sections** — major parts are sibling `<section>` elements
   (optionally `<header>`/`<main>`/`<footer>`), one per topic — or one per slide for
   decks. Presentation mode steps through these; PDF breaks between them.

3. **Palette as CSS variables** — declare every color once on `:root` with role names
   (`--bg`, `--ink`, `--muted`, `--accent`, …) and reference only the variables.
   5–10 roles; never the same literal value for two different roles.

4. **Fonts declared once** — one body `font-family` on `body`; at most one heading
   family on `h1, h2, h3, h4, h5, h6`. Prefer system stacks. Keep existing webfont
   `<link>`s when refactoring; never add ones that break offline rendering.

5. **Static markup** — all content present in the HTML. No DOM built at runtime, no
   `document.write`, no innerHTML-assembled sections, no framework needing a build.
   Scripts may enhance (highlighting, a small interaction) but never construct
   content. When refactoring a script-built document: render the script's output
   into static markup, keep the visual result identical, and remove only the
   construction code — never behavior the reader uses.

6. **Block-shaped content** — text in `<p>`, `<h1>–<h6>`, `<li>`, `<blockquote>`,
   `<figcaption>`; cards as containers with block children; no bare text nodes in
   `<div>`s, no layout tables.

7. **Print-friendly** — scroll animations end visible; nothing `position: fixed`;
   no scroll-jacking. Viewport-height sections are allowed only for decks (they
   print as slides).

8. **Valid HTML** — `<!DOCTYPE html>`, `<html lang>`, `<meta charset>`, `<title>`,
   exactly one `<h1>`.

## Checklist before returning

- [ ] Opens from disk with network off — nothing missing?
- [ ] Every color a `var(--…)`? No literal appears twice with different meanings?
- [ ] Top-level = clean sibling sections?
- [ ] View source: is all the content there, verbatim?
- [ ] Would printing it produce sensible pages?

Keep any `data-artifactor-badge` element you find at the end of a refactored file —
it's a deliberate user choice, not clutter.
