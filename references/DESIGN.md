# guvi DESIGN.md

> Auto-generated design system — reverse-engineered via static analysis by skillui.
> Frameworks: None detected
> Colors: 20 · Fonts: 3 · Components: 10
> Icon library: not detected · State: not detected
> Primary theme: light · Dark mode toggle: no · Motion: expressive

## Visual Reference

**Match this design exactly** — study colors, fonts, spacing, and component shapes before writing any UI code.

![guvi Homepage](../screenshots/homepage.png)

---

## 1. Visual Theme & Atmosphere

This is a **light-themed** interface with a neutral, approachable feel. The light background emphasizes content clarity. Typography pairs **DM Sans** for display/headings with **Jones** for body text, creating clear visual hierarchy through type contrast. Spacing follows a **4px base grid** (compact density), with scale: 2, 4, 6, 8, 10, 12, 14, 16px. Motion is expressive — spring physics, layout animations, and staggered reveals are part of the visual language.

---

## 2. Color Palette & Roles

| Token | Hex | Role | Use |
|---|---|---|---|
| tw-ring-offset-color | `#ffffff` | background | Page background, darkest surface |
| text-primary | `#1f2937` | text-primary | Headings and body text |
| text-muted | `#334155` | text-muted | Captions, placeholders, secondary info |
| border | `#4d4d4d` | border | Dividers, card borders, outlines |
| success | `#000d02` | success | Success states, positive indicators |
| unknown | `#e5e7eb` | unknown | Palette color |
| unknown | `#f2f2f2` | unknown | Palette color |
| unknown | `#0c0b0e` | unknown | Palette color |
| unknown | `#b5b5b5` | unknown | Palette color |
| unknown | `#6c757d` | unknown | Palette color |
| unknown | `#5f6b78` | unknown | Palette color |
| plyr-color-main | `#0dba4b` | unknown | Palette color |
| unknown | `#18181b` | unknown | Palette color |
| unknown | `#2b3440` | unknown | Palette color |
| unknown | `#262626` | unknown | Palette color |
| unknown | `#475569` | unknown | Palette color |
| ss-disabled-color | `#d7dde4` | unknown | Palette color |
| unknown | `#0ad652` | unknown | Palette color |
| unknown | `#56f68f` | unknown | Palette color |
| unknown | `#9ca3af` | unknown | Palette color |

### CSS Variable Tokens

```css
--border-btn: 1px;
--tab-border: 1px;
--tw-border-spacing-x: 0;
--tw-border-spacing-y: 0;
--tw-border-spacing-x: 0;
--tw-border-spacing-y: 0;
--tw-border-opacity: 1;
--tw-border-opacity: 1;
--tw-border-opacity: 1;
--tw-border-opacity: 1;
--tw-border-opacity: 1;
--tw-border-opacity: .2;
--tw-border-opacity: 0;
--tw-border-opacity: 1;
--tw-border-opacity: 1;
--glass-border-opacity: 15%;
--glass-border-opacity: 15%;
--tw-border-opacity: 1;
--tw-border-opacity: 0;
--tw-border-opacity: 0;
```


---

## 3. Typography Rules

**Font Stack:**
- **Jones** — Heading 1, Heading 2, Heading 3
- **DM Sans** — Body, Caption
- **SFMono-Regular** — Code

**Font Sources:**

```css
@font-face {
  font-family: "DM Sans";
  src: url("fonts/DMSans-Bold.ttf") format("truetype");
  font-weight: 700;
}
@font-face {
  font-family: "DM Sans";
  src: url("fonts/DMSans-Regular.ttf") format("truetype");
  font-weight: 400;
}
@font-face {
  font-family: "Jones";
  src: url("fonts/Jones-Regular.woff2") format("woff2");
  font-weight: 400;
}
@font-face {
  font-family: "Jones";
  src: url("fonts/Jones-700.woff2") format("woff2");
  font-weight: 700;
}
@font-face {
  font-family: "Wanted Sans";
  src: url("fonts/WantedSans-Regular.woff2") format("woff2");
  font-weight: 400;
}
@font-face {
  font-family: "Wanted Sans";
  src: url("fonts/WantedSans-700.woff2") format("woff2");
  font-weight: 700;
}
@font-face {
  font-family: "Inter";
  src: url("fonts/Inter-Bold.ttf") format("truetype");
  font-weight: 700;
}
@font-face {
  font-family: "Inter";
  src: url("fonts/Inter-Regular.ttf") format("truetype");
  font-weight: 400;
}
```

| Role | Font | Size | Weight |
|---|---|---|---|
| Heading 1 | Jones | 4rem | 700 |
| Heading 2 | Jones | 3.75rem | 700 |
| Heading 3 | Jones | 55px | 700 |
| Body | DM Sans | 1rem | 400 |
| Caption | DM Sans | .875rem | 400 |
| Code | SFMono-Regular | 14px | 400 |

**Typographic Rules:**
- Limit to 3 font families max per screen
- Use **Jones** for body/UI text, **DM Sans** for display/headings
- Maintain consistent hierarchy: no more than 3-4 font sizes per screen
- Headings use bold (600-700), body uses regular (400)
- Line height: 1.5 for body text, 1.2 for headings
- Use color and opacity for secondary hierarchy, not additional font sizes


---

## 4. Component Stylings

### Navigation (1)

**Navigation** — `html`

### Data Display (3)

**Card** — `html`
- Variants: `container`, `contents`, `header`, `body`, `compact`

**Badge** — `html`

**List** — `html`

### Data Input (2)

**Button** — `html`
- Variants: `size`, `brochure`, `sm`, `ghost`, `primary`
- Animation: 

**Input** — `html`
- State: :focus, :placeholder

### Overlay (1)

**Modal** — `html`

### Media (3)

**Image** — `html`

**Icon** — `html`

**Map/Canvas** — `html`



---

## 5. Layout Principles

- **Base spacing unit:** 4px
- **Spacing scale:** 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24
- **Border radius:** .25rem, 1.9rem, inherit, unset, .125rem, .15rem, .375rem, .5rem, .75rem, 1rem, 1px, 1.5rem, 1.625rem, 2px, 2.5px, 3px, 3rem, 3px 3px 0px 0px, 4px, 5px, 6px, 7px, 8px, 9px, 10px, 12px, 14px, 15px, 16px, 16.92px, 17px, 18px, 20px, 24px, 25px, 26px, 30px, 32px, 40px, 50px, 100%, 100px, 999px
- **Max content width:** 1250px

**Spacing as Meaning:**
| Spacing | Use |
|---|---|
| 4-8px | Tight: related items within a group |
| 12-16px | Medium: between groups |
| 24-32px | Wide: between sections |
| 48px+ | Vast: major section breaks |


---

## 6. Depth & Elevation

### Flat — subtle depth hints

- `0 0#0000,0 0#0000,0 1px 2px #0000000d`
- `-1.5rem 0 0 2px #fff inset,0 0 0 2px #fff inset,0 0`
- `var(--handleoffsetcalculator)0 0 2px var(--tglbg) inset,0 0 0 2px var(--tglbg) inset,var(--togglehandleborder)`

### Raised — cards, buttons, interactive elements

- `0 0#0000,0 0#0000,0 0#0000`
- `0 0 0 4px #fff inset,0 0 0 4px #fff inset`
- `0 0 0 4px var(--fallback-b1,oklch(var(--b1)/1)) inset,0 0 0 4px var(--fallback-b1,oklch(var(--b1)/1)) inset`

### Floating — dropdowns, popovers, modals

- `0 0 0 12px #fff inset,0 0 0 12px #fff inset`
- `0 0 0 12px var(--fallback-b1,oklch(var(--b1)/1)) inset,0 0 0 12px var(--fallback-b1,oklch(var(--b1)/1)) inset`
- `0 0#0000,0 0#0000,0 10px 15px -3px #0000001a,0 4px 6px -4px #0000001a`

### Overlay — full-screen overlays, top-level dialogs

- `#00000040 0 25px 50px -12px`
- `0 0#0000,0 0#0000,0 25px 50px -12px #00000040`
- `0 0#0000,0 0#0000,0 20px 25px -5px #0000001a,0 8px 10px -6px #0000001a`

### Z-Index Scale

`0, 1, 2, 3, 5, 6, 8, 9, 10, 11, 20, 30, 40, 50, 60, 99, 100, 999, 1000, 1060, 9999, 10000, 999999, 9999999, 10000000`



---

## 7. Animation & Motion

This project uses **expressive motion**. Animations are an integral part of the experience.

### CSS Animations

- `@keyframes button-pop`
- `@keyframes checkmark`
- `@keyframes modal-pop`
- `@keyframes progress-loading`
- `@keyframes radiomark`
- `@keyframes rating-pop`
- `@keyframes skeleton`
- `@keyframes toast-pop`

### Animated Components

- **Button**: 

### Motion Guidelines

- Duration: 150-300ms for micro-interactions, 300-500ms for page transitions
- Easing: `ease-out` for enters, `ease-in` for exits
- Always respect `prefers-reduced-motion`


---

## 8. Do's and Don'ts

### Do's

- Use `#ffffff` as the primary page background
- Pair **Jones** (body) with **DM Sans** (display) — these are the only allowed fonts
- Follow the **4px** spacing grid for all margins, padding, and gaps
- Use the defined shadow tokens for elevation — see Section 6
- Use border-radius from the scale: .25rem, 1.9rem, inherit, unset, .125rem
- Reuse existing components from Section 4 before creating new ones

### Don'ts

- Don't introduce colors outside this palette — extend the design tokens first
- Don't introduce additional font families beyond Jones and DM Sans and SFMono-Regular
- Don't use arbitrary spacing values — stick to multiples of 4px
- Don't create custom box-shadow values outside the system tokens
- Don't use arbitrary border-radius values — pick from the defined scale
- Don't duplicate component patterns — check Section 4 first
- Don't use backdrop-blur or blur effects

### Anti-Patterns (detected from codebase)

- No blur or backdrop-blur effects
- No zebra striping on tables/lists


---

## 9. Responsive Behavior

| Name | Value | Source |
|---|---|---|
| md | 48rem | css |
| xs | 380px | css |
| xs | 400px | css |
| xs | 420px | css |
| xs | 425px | css |
| xs | 480px | css |
| sm | 500px | css |
| sm | 556px | css |
| sm | 557px | css |
| sm | 576px | css |
| sm | 577px | css |
| sm | 586px | css |
| sm | 600px | css |
| sm | 639px | css |
| sm | 640px | css |
| md | 650px | css |
| md | 652px | css |
| md | 680px | css |
| md | 767px | css |
| md | 768px | css |
| lg | 769px | css |
| lg | 820px | css |
| lg | 830px | css |
| lg | 959px | css |
| lg | 960px | css |
| lg | 992px | css |
| lg | 1000px | css |
| lg | 1023px | css |
| lg | 1024px | css |
| xl | 1025px | css |
| xl | 1200px | css |
| xl | 1215px | css |
| xl | 1220px | css |
| xl | 1250px | css |
| xl | 1279px | css |
| xl | 1280px | css |
| 2xl | 1360px | css |
| 2xl | 1366px | css |
| 2xl | 1376px | css |
| 2xl | 1377px | css |
| 2xl | 1400px | css |
| 2xl | 1440px | css |
| 2xl | 1800px | css |

**Approach:** Use `@media (min-width: ...)` queries matching the breakpoints above.


---

## 10. Agent Prompt Guide

Use these as starting points when building new UI:

### Build a Card

```
Background: #ffffff
Border: 1px solid #4d4d4d
Radius: 7px
Padding: 16px
Font: Jones
Use shadow tokens from Section 6.
```

### Build a Button

```
Primary: bg var(--accent), text white
Ghost: bg transparent, border #4d4d4d
Padding: 8px 16px
Radius: 7px
Hover: opacity 0.9 or lighter shade
Focus: ring with var(--accent)
```

### Build a Page Layout

```
Background: #ffffff
Max-width: 1250px, centered
Grid: 4px base
Responsive: mobile-first, breakpoints from Section 9
```

### Build a Stats Card

```
Surface: #ffffff
Label: #334155 (muted, 12px, uppercase)
Value: #1f2937 (primary, 24-32px, bold)
Status: use success/warning/danger from Section 2
```

### Build a Form

```
Input bg: #ffffff
Input border: 1px solid #4d4d4d
Focus: border-color var(--accent)
Label: #334155 12px
Spacing: 16px between fields
Radius: 7px
```

### General Component

```
1. Read DESIGN.md Sections 2-6 for tokens
2. Colors: only from palette
3. Font: Jones, type scale from Section 3
4. Spacing: 4px grid
5. Components: match patterns from Section 4
6. Elevation: shadow tokens
```
