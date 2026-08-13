# Animation Reference

> Cinematic motion design extracted from live DOM. Follow these specs exactly to recreate the experience.

## Motion Technology Stack

| Library | Type | Notes |
|---------|------|-------|
| **Web Animations API (6 active)** | animation |  |

## Scroll Journey

The page is **9,043px** tall. Each frame below shows what the user sees at that scroll depth.

> **Use these screenshots to understand WHAT animates, WHEN it animates, and HOW it moves.**

### 0% — Top / Hero
Scroll position: 0px

![Scroll 0%](../screens/scroll/scroll-000.png)

### 17% — Opening Section
Scroll position: 1,386px

![Scroll 17%](../screens/scroll/scroll-017.png)

### 33% — First Feature Section
Scroll position: 2,687px

![Scroll 33%](../screens/scroll/scroll-033.png)

### 50% — Mid-Page
Scroll position: 4,072px

![Scroll 50%](../screens/scroll/scroll-050.png)

### 67% — Lower Content
Scroll position: 5,456px

![Scroll 67%](../screens/scroll/scroll-067.png)

### 83% — Near Footer
Scroll position: 6,759px

![Scroll 83%](../screens/scroll/scroll-083.png)

### 100% — Bottom / Footer
Scroll position: 8,143px

![Scroll 100%](../screens/scroll/scroll-100.png)

## Scroll Animation Patterns

| Pattern | Library | Element Count | Duration | Delay | Easing |
|---------|---------|---------------|----------|-------|--------|
| parallax / sticky scroll | CSS | 4 | — | — | — |

### CSS Implementation

## CSS Keyframes (19 extracted)

### `@keyframes button-pop`

Duration: `0s` · Easing: `ease-out` · Delay: `0s` · Iteration: `1` · Fill: `none`

Used by: `.btn:active:hover, .btn:active:focus`, `.\!btn:active:hover, .\!btn:active:focus`

```css
@keyframes button-pop {
  0% {
    transform: scale(var(--btn-focus-scale, .98));
  }
  40% {
    transform: scale(1.02);
  }
  100% {
    transform: scale(1);
  }
}
```

> Transform/motion animation

### `@keyframes modal-pop`

Duration: `0.2s` · Easing: `ease-out` · Delay: `0s` · Iteration: `1` · Fill: `none`

Used by: `.modal:not(dialog:not(.modal-open)), .modal::backdrop`, `.\!modal:not(dialog:not(.modal-open)), .\!modal::backdrop`

```css
@keyframes modal-pop {
  0% {
    opacity: 0;
  }
}
```

> Opacity fade

### `@keyframes progress-loading`

Duration: `5s` · Easing: `ease-in-out` · Delay: `0s` · Iteration: `infinite` · Fill: `none`

Used by: `.progress:indeterminate`

```css
@keyframes progress-loading {
  50% {
    background-position-x: -115%;
  }
}
```

> Background color/gradient shift · Background position (shimmer/scroll)

### `@keyframes skeleton`

Duration: `1.8s` · Easing: `ease-in-out` · Delay: `0s` · Iteration: `infinite` · Fill: `none`

Used by: `.skeleton`

```css
@keyframes skeleton {
  0% {
    background-position-x: 150%;
    background-position-y: center;
  }
  100% {
    background-position-x: -50%;
    background-position-y: center;
  }
}
```

> Background color/gradient shift · Background position (shimmer/scroll)

### `@keyframes toast-pop`

Duration: `0.25s` · Easing: `ease-out` · Delay: `0s` · Iteration: `1` · Fill: `none`

Used by: `.toast > *`

```css
@keyframes toast-pop {
  0% {
    transform: scale(0.9);
    opacity: 0;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}
```

> Fade + motion enter animation

### `@keyframes ping`

Duration: `1s` · Easing: `cubic-bezier(0, 0, 0.2, 1)` · Delay: `0s` · Iteration: `infinite` · Fill: `none`

Used by: `.animate-ping`

```css
@keyframes ping {
  75%, 100% {
    transform: scale(2);
    opacity: 0;
  }
}
```

> Fade + motion enter animation

### `@keyframes spin`

Duration: `1s` · Easing: `linear` · Delay: `0s` · Iteration: `infinite` · Fill: `none`

Used by: `.animate-spin`

```css
@keyframes spin {
  100% {
    transform: rotate(360deg);
  }
}
```

> Transform/motion animation

### `@keyframes ss-valueIn`

Duration: `var(--ss-animation-timing)` · Easing: `ease-out` · Fill: `both`

Used by: `.ss-main .ss-values .ss-value`

```css
@keyframes ss-valueIn {
  0% {
    transform: scale(0);
    opacity: 0;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}
```

> Fade + motion enter animation

### `@keyframes ss-valueOut`

Duration: `var(--ss-animation-timing)` · Easing: `ease-out`

Used by: `.ss-main .ss-values .ss-value.ss-value-out`

```css
@keyframes ss-valueOut {
  0% {
    transform: scale(1);
    opacity: 1;
  }
  100% {
    transform: scale(0);
    opacity: 0;
  }
}
```

> Fade + motion enter animation

### `@keyframes load`

Duration: `8s` · Easing: `ease` · Delay: `0s` · Iteration: `1` · Fill: `forwards`

Used by: `.progressValueSec`

```css
@keyframes load {
  0% {
    width: 0.1px;
  }
  100% {
    width: 100%;
  }
}
```

> Dimension expand/collapse

### `@keyframes plyr-progress`

Duration: `1s` · Easing: `linear` · Delay: `0s` · Iteration: `infinite` · Fill: `none`

Used by: `.plyr--loading .plyr__progress__buffer`

```css
@keyframes plyr-progress {
  100% {
  }
}
```

> Background color/gradient shift · Background position (shimmer/scroll)

### `@keyframes plyr-popup`

Duration: `0.2s` · Easing: `ease` · Delay: `0s` · Iteration: `1` · Fill: `none`

Used by: `.plyr__menu__container`

```css
@keyframes plyr-popup {
  0% {
    opacity: 0.5;
    transform: translateY(10px);
  }
  100% {
    opacity: 1;
    transform: translateY(0px);
  }
}
```

> Fade + motion enter animation

### `@keyframes plyr-fade-in`

Duration: `0.3s` · Easing: `ease` · Delay: `0s` · Iteration: `1` · Fill: `none`

Used by: `.plyr__captions`

```css
@keyframes plyr-fade-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
```

> Opacity fade

### `@keyframes scroll-x`

Duration: `30s` · Easing: `linear` · Delay: `0s` · Iteration: `infinite` · Fill: `none`

Used by: `.marquee__group.⭐️8cyr8k-0`

```css
@keyframes scroll-x {
  0% {
    transform: translate(0px);
  }
  100% {
    transform: translate(calc(-100% - (0.0714286 * clamp(10rem, 1rem + 40vmin, 3rem))));
  }
}
```

> Transform/motion animation

### `@keyframes hprogress`

Duration: `4s` · Easing: `ease` · Delay: `0s` · Iteration: `1` · Fill: `forwards`

Used by: `.awards .awardsProgress::after`

```css
@keyframes hprogress {
  0% {
    width: 0%;
  }
  100% {
    width: 100%;
  }
}
```

> Dimension expand/collapse

### `@keyframes checkmark`

```css
@keyframes checkmark {
  0% {
    background-position-y: 5px;
  }
  50% {
    background-position-y: -2px;
  }
  100% {
    background-position-y: 0px;
  }
}
```

> Background color/gradient shift · Background position (shimmer/scroll)

### `@keyframes radiomark`

```css
@keyframes radiomark {
  0% {
    box-shadow: 0 0 0 12px var(--fallback-b1,oklch(var(--b1)/1)) inset,0 0 0 12px var(--fallback-b1,oklch(var(--b1)/1)) inset;
  }
  50% {
    box-shadow: 0 0 0 3px var(--fallback-b1,oklch(var(--b1)/1)) inset,0 0 0 3px var(--fallback-b1,oklch(var(--b1)/1)) inset;
  }
  100% {
    box-shadow: 0 0 0 4px var(--fallback-b1,oklch(var(--b1)/1)) inset,0 0 0 4px var(--fallback-b1,oklch(var(--b1)/1)) inset;
  }
}
```

> Shadow pulse/glow effect

### `@keyframes rating-pop`

```css
@keyframes rating-pop {
  0% {
    transform: translateY(-0.125em);
  }
  40% {
    transform: translateY(-0.125em);
  }
  100% {
    transform: translateY(0px);
  }
}
```

> Transform/motion animation

### `@keyframes scroll-y`

```css
@keyframes scroll-y {
  0% {
    transform: translateY(0px);
  }
  100% {
    transform: translateY(calc(-100% - (0.0714286 * clamp(10rem, 1rem + 40vmin, 3rem))));
  }
}
```

> Transform/motion animation

## Motion Tokens (CSS Variables)

### Easing Tokens

```css
--ss-animation-timing: .2s;
```

### Animation Tokens

```css
--animation-btn: .25s;
--animation-input: .2s;
```

## Global Transition Declarations

These `transition` values were extracted from CSS rules across the site:

```css
transition: height 0.2s;
transition: left 0.2s, top, width, height;
transition: grid-template-rows 0.2s;
transition: padding 0.2s ease-out, background-color 0.2s ease-out;
transition: 1s cubic-bezier(1, 0, 0, 1);
transition: background,box-shadow var(--animation-input, .2s) ease-out;
transition: background-color 0.2s ease-out;
transition: background-color var(--ss-animation-timing);
transition: var(--ss-animation-timing);
transition: transform var(--ss-animation-timing),opacity var(--ss-animation-timing);
transition: filter 0.2s;
transition: opacity 0.15s;
```

## How to Recreate This Motion Design

### Step 1 — Install Dependencies

```bash
```

### Step 2 — Scroll-Reveal Pattern

Elements that animate into view follow this pattern:

```css
/* Initial hidden state */
.reveal {
  opacity: 0;
  transform: translateY(40px);
  transition: opacity 0.2s .2s,
              transform 0.2s .2s;
}
.reveal.visible {
  opacity: 1;
  transform: translateY(0);
}
```

### Step 3 — Key Motion Principles

- **Duration scale:** `0.2s` — use these values, never invent new durations
- **Always add** `@media (prefers-reduced-motion: reduce) { * { animation-duration: 0.01ms !important; transition-duration: 0.01ms !important; } }`

### Step 4 — Scroll Journey Reference

Match what happens at each scroll position:

- **0%** (`0px`) → `screens/scroll/scroll-000.png`
- **17%** (`1386px`) → `screens/scroll/scroll-017.png`
- **33%** (`2687px`) → `screens/scroll/scroll-033.png`
- **50%** (`4072px`) → `screens/scroll/scroll-050.png`
- **67%** (`5456px`) → `screens/scroll/scroll-067.png`
- **83%** (`6759px`) → `screens/scroll/scroll-083.png`
- **100%** (`8143px`) → `screens/scroll/scroll-100.png`

