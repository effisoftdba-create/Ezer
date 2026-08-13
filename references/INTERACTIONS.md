# Interaction Reference

> Micro-interactions extracted from live DOM. Recreate these exactly for authentic feel.

## Coverage

| Component Type | Count | States Captured |
|----------------|-------|----------------|
| Button | 3 | default, hover, focus |
| Role Button | 1 | default, hover, focus |
| Link | 3 | default, hover, focus |
| Input | 3 | default, hover, focus |

## Transition System

These transition declarations were extracted from interactive elements:

```css
transition: all;
transition: 0.25s linear;
```

Apply these to all interactive elements. Never invent new durations or easings.

## Button Interactions

### Button 1 — `Close banner`

**States:**

- Default: `../screens/states/button-1-default.png`
- Hover: `../screens/states/button-1-hover.png`
- Focus: `../screens/states/button-1-focus.png`

**On focus:**

```css
/* outline: rgb(33, 37, 41) none 3px → */ outline: rgb(86, 246, 143) solid 2px;
/* outline-color: rgb(33, 37, 41) → */ outline-color: rgb(86, 246, 143);
```

**Transition:** `all`

### Button 2 — `button`

**States:**

- Default: `../screens/states/button-2-default.png`
- Hover: `../screens/states/button-2-hover.png`
- Focus: `../screens/states/button-2-focus.png`

**Transition:** `all`

_No visible style changes detected for this element._

### Button 3 — `button`

**States:**

- Default: `../screens/states/button-3-default.png`
- Hover: `../screens/states/button-3-hover.png`
- Focus: `../screens/states/button-3-focus.png`

**Transition:** `all`

_No visible style changes detected for this element._

## Role Button Interactions

### Role Button 1 — `Chat Widget`

**States:**

- Default: `../screens/states/role-button-1-default.png`
- Hover: `../screens/states/role-button-1-hover.png`
- Focus: `../screens/states/role-button-1-focus.png`

**On focus:**

```css
/* outline: rgb(255, 255, 255) none 3px → */ outline: rgb(103, 41, 255) solid 2px;
/* outline-color: rgb(255, 255, 255) → */ outline-color: rgb(103, 41, 255);
```

**Transition:** `0.25s linear`

## Link Interactions

### Link 1 — `Explore More`

**States:**

- Default: `../screens/states/link-1-default.png`
- Hover: `../screens/states/link-1-hover.png`
- Focus: `../screens/states/link-1-focus.png`

**On focus:**

```css
/* outline: rgb(10, 15, 20) none 3px → */ outline: rgb(16, 16, 16) auto 1px;
/* outline-color: rgb(10, 15, 20) → */ outline-color: rgb(16, 16, 16);
```

**Transition:** `all`

### Link 2 — `Explore More`

**States:**

- Default: `../screens/states/link-2-default.png`
- Hover: `../screens/states/link-2-hover.png`
- Focus: `../screens/states/link-2-focus.png`

**On focus:**

```css
/* outline: rgb(10, 15, 20) none 3px → */ outline: rgb(16, 16, 16) auto 1px;
/* outline-color: rgb(10, 15, 20) → */ outline-color: rgb(16, 16, 16);
```

**Transition:** `all`

### Link 3 — `Try Now >`

**States:**

- Default: `../screens/states/link-3-default.png`
- Hover: `../screens/states/link-3-hover.png`
- Focus: `../screens/states/link-3-focus.png`

**On focus:**

```css
/* outline: rgb(10, 15, 20) none 3px → */ outline: rgb(16, 16, 16) auto 1px;
/* outline-color: rgb(10, 15, 20) → */ outline-color: rgb(16, 16, 16);
```

**Transition:** `all`

## Input Interactions

### Input 1 — `Name`

**States:**

- Default: `../screens/states/input-1-default.png`
- Hover: `../screens/states/input-1-hover.png`
- Focus: `../screens/states/input-1-focus.png`

**On focus:**

```css
/* border-color: rgb(229, 231, 235) → */ border-color: rgb(8, 175, 67);
```

**Transition:** `all`

### Input 2 — `Email`

**States:**

- Default: `../screens/states/input-2-default.png`
- Hover: `../screens/states/input-2-hover.png`
- Focus: `../screens/states/input-2-focus.png`

**On focus:**

```css
/* border-color: rgb(229, 231, 235) → */ border-color: rgb(8, 175, 67);
```

**Transition:** `all`

### Input 3 — `Mobile Number`

**States:**

- Default: `../screens/states/input-3-default.png`
- Hover: `../screens/states/input-3-hover.png`
- Focus: `../screens/states/input-3-focus.png`

**On focus:**

```css
/* border-color: rgb(229, 231, 235) → */ border-color: rgb(8, 175, 67);
/* outline: rgb(10, 15, 20) none 3px → */ outline: rgba(0, 0, 0, 0) solid 2px;
/* outline-color: rgb(10, 15, 20) → */ outline-color: rgba(0, 0, 0, 0);
```

**Transition:** `all`

## Interaction Rules

- Focus states use **outline** (not box-shadow) — always match the extracted focus ring
- Transition durations in use: `0.25s`
- Always respect `prefers-reduced-motion` — set all transitions to `0s` when enabled

