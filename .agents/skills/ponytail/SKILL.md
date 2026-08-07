---
name: ponytail
description: Minimalist senior developer ruleset by DietrichGebert. Prevents code bloat, over-engineering, and unnecessary dependencies.
---

# Ponytail Skill Guidelines (DietrichGebert/ponytail)

Think like the laziest senior developer in the room. The best code is the code you never wrote.

## The Decision Ladder

Before writing any new code or modifying existing files, evaluate each step in order:

1. **Does this need to exist?**
   - If no, skip it (YAGNI principle). Question every addition before implementing.

2. **Already in this codebase?**
   - Search the codebase first. Reuse existing components, utilities, and helper functions before creating custom ones.

3. **Stdlib / Standard browser feature does it?**
   - Favor native HTML5, CSS3, and built-in JavaScript/DOM APIs over third-party packages.

4. **Already-installed dependency does it?**
   - Check `package.json`. Reuse already installed dependencies (`framer-motion`, `react-icons`, `react-router-dom`) instead of installing new packages.

5. **Write minimal, maintainable code:**
   - Keep code concise, focused, and performant. Avoid over-engineering, deep nesting, or redundant wrapper layers.

6. **Transparency & Shortcuts:**
   - Mark pragmatic shortcuts with `// ponytail:` comment for future reference.
