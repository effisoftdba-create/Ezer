# Layout Reference

> Auto-extracted from live DOM. Use this to understand how the site is structured spatially.

## Spacing System

**Base grid:** 4px

**Scale:** `2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30` px

| Spacing | Semantic Use |
|---------|-------------|
| 4px | Tight — within a component |
| 8px | Medium — between sibling items |
| 16px | Wide — between sections |
| 32px | Vast — major section breaks |

## Flex Layouts

| Element | Direction | Justify | Align | Gap | Children |
|---------|-----------|---------|-------|-----|----------|
| `section.⭐️87j9b8-0.w-full` | row | center | — | — | 1 |
| `div.⭐️wcmjx1-0.flex` | column | center | — | — | 4 |
| `div.⭐️8gl0ai-0.container` | row | space-around | center | 16px | 2 |
| `div.⭐️f6lmuc-0.w-full` | row | space-between | center | — | 4 |
| `div.⭐️qrcgsc-0.modal-box` | column | — | — | — | 1 |
| `div.⭐️jbpdca-0.relative` | row | center | center | — | 2 |
| `div.⭐️x0vbc8-0.⭐️8ghoqu-5` | column | — | center | — | 6 |
| `div.⭐️1gjhl2-0.pb-10` | row | center | center | — | 1 |
| `div.⭐️1gjhl2-0.flex` | row | center | center | — | 1 |
| `div.⭐️5s6fye-4.hidden` | row | center | — | — | 1 |
| `ul.⭐️3kaq5m-0.flex` | row | space-between | — | — | 5 |
| `div.⭐️3kaq5m-0.flex` | row | center | — | — | 1 |
| `div.⭐️h0el3s-0.modal-box` | column | — | — | — | 2 |
| `div.⭐️h0el3s-0.modal-box` | column | space-between | center | — | 3 |
| `article.⭐️8cyr8k-0.wrapper` | column | — | — | 11.4286px | 3 |

## Grid Layouts

| Element | Template Columns | Gap | Children |
|---------|-----------------|-----|----------|
| `section.py-12.md:pt-20` | `1440px` | — | 1 |
| `div.⭐️l86cqc-0.grid` | `208.391px 208.391px 208.391px 208.391px 208.391px` | 32px | 2 |
| `div.⭐️xkcuy0-0.grid` | `208.391px 208.406px 208.391px 208.406px 208.391px` | 32px | 5 |
| `div.⭐️l86cqc-0.grid` | `8.0625px 8.0625px 8.0625px 8.0625px 8.0625px 8.062` | 32px | 2 |

## Structural Containers

### `<main>` (`main.index.relative`)

```
display:          block
children:         48
```

### `<header>` (`header#header-container.⭐️f6lmuc-0.header`)

```
display:          block
padding:          10px 80px
children:         2
```

### `<section>` (`section.py-6.md:py-8`)

```
display:          block
padding:          32px 0px
children:         3
```

### `<section>` (`section.⭐️x0vbc8-0.⭐️8ghoqu-5`)

```
display:          block
padding:          80px 0px 96px
children:         1
```

### `<section>` (`section.⭐️87j9b8-0.w-full`)

```
display:          flex
flex-direction:   row
justify-content:  center
align-items:      —
padding:          48px
children:         1
```

### `<section>` (`section.⭐️1gjhl2-0.py-10`)

```
display:          block
padding:          80px 0px
children:         4
```

### `<section>` (`section.py-12.md:pt-20`)

```
display:          inline-grid
grid-template-columns: 1440px
padding:          80px 0px 128px
children:         1
```

### `<section>` (`section.⭐️5s6fye-4.py-12`)

```
display:          block
padding:          80px 16px 96px
children:         7
```

### `<section>` (`section.⭐️xx4i6m-2.py-12`)

```
display:          block
padding:          80px 0px 96px
children:         1
```

### `<section>` (`section.⭐️3kaq5m-0.max-md:py-12`)

```
display:          block
padding:          120px 16px
children:         4
```

### `<section>` (`section.⭐️8gl0ai-0.bg-white`)

```
display:          block
padding:          80px 0px 0px
children:         1
```

### `<section>` (`section.bg-white.pt-2`)

```
display:          block
padding:          80px 0px 56px
children:         1
```

## Layout Rules

- **Container max-width:** `1200px` — always center with `margin: auto`
- Primary layout system: **Flexbox**
- Secondary layout system: **CSS Grid** (used for card grids and multi-column layouts)
- Every spacing value must be a multiple of **4px**
- Never use arbitrary margin/padding values outside the spacing scale

