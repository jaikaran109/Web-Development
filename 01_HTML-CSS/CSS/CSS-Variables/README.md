# CSS Variables 

CSS Variables (officially called **Custom Properties**) let you store **reusable values** in your CSS — like colors, spacing, or fonts — that you define **once** and reuse **everywhere** across your site. For all examples in this guide, we'll build out a portfolio website for our friend **Jaikaran**, so the concepts stick in a real context.

---

## 1. The Problem — Why Did We Need This?

Suppose Jaikaran's portfolio site uses a **brand color** (`#6c5ce7`) in **20 different places**:

```css
/* THE OLD, REPETITIVE WAY */
.navbar      { background-color: #6c5ce7; }
.button      { background-color: #6c5ce7; }
.heading     { color: #6c5ce7; }
.card-border { border: 2px solid #6c5ce7; }
/* ...16 more places... */
```

If Jaikaran wants to change his brand color tomorrow, he'd have to **manually edit all 20 places** — error-prone and time-consuming.

**CSS Variables exist exactly to solve this problem.**

---

## 2. Basic Syntax

### Declaring a variable (with the `--` prefix)
```css
:root {
  --jaikaran-primary-color: #6c5ce7;
}
```

### Using a variable (with the `var()` function)
```css
.navbar {
  background-color: var(--jaikaran-primary-color);
}
.button {
  background-color: var(--jaikaran-primary-color);
}
```

Now if Jaikaran wants to change the color, he edits **only one place** (inside `:root`) — and all 20 usages update automatically.

> **Naming Rule:** A custom property name must always start with `--`. `--jaikaran-primary-color` is valid; `jaikaran-primary-color` (without `--`) is **invalid**.

---

## 3. The `:root` Selector — Why Use It?

`:root` is a **pseudo-class** that represents the `<html>` element — the **topmost element** in the entire document.

```css
:root {
  --jaikaran-primary-color: #6c5ce7;
  --jaikaran-secondary-color: #00cec9;
  --jaikaran-font-family: "Poppins", sans-serif;
  --jaikaran-spacing-unit: 8px;
}
```

> **One-liner:** Variables declared inside `:root` become **global** — usable anywhere on the page, because CSS variables **cascade** (they're inherited from parent to child, just like normal CSS properties).

---

## 4. Scope — Global vs Local

CSS Variables can be declared inside **any selector**, not just `:root` — and when declared elsewhere, their scope is limited to **that element and its children**.

```css
:root {
  --button-bg: blue;       /* GLOBAL — available everywhere */
}

.jaikaran-danger-card {
  --button-bg: red;        /* LOCAL — valid only inside this card */
}
```

```html
<button style="background: var(--button-bg);">Normal Button</button>   <!-- blue -->

<div class="jaikaran-danger-card">
  <button style="background: var(--button-bg);">Danger Button</button> <!-- red -->
</div>
```

> This is exactly the same behavior as normal CSS cascade/inheritance — the **closest defined value wins**.

---

## 5. The `var()` Function — Fallback Values

`var()` can take a **second argument** — a fallback value, used if the variable isn't defined.

```css
.jaikaran-badge {
  color: var(--badge-color, black);
  /* if --badge-color is not defined, "black" is used */
}
```

### Nested Fallbacks (chaining)
```css
.jaikaran-badge {
  color: var(--badge-color, var(--jaikaran-primary-color, black));
  /* try --badge-color first, then --jaikaran-primary-color, 
     then fall back to black */
}
```

---

## 6. Use Case #1 — Theming (Dark Mode / Light Mode)

This is the **single most popular use case** for CSS Variables.

```css
:root {
  --bg-color: white;
  --text-color: #1a1a1a;
  --card-bg: #f5f5f5;
}

[data-theme="dark"] {
  --bg-color: #1a1a1a;
  --text-color: white;
  --card-bg: #2d2d2d;
}

body {
  background-color: var(--bg-color);
  color: var(--text-color);
}

.jaikaran-card {
  background-color: var(--card-bg);
}
```

```html
<body data-theme="light">  <!-- or data-theme="dark" -->
  <div class="jaikaran-card">Jaikaran's Project Card</div>
</body>
```

```js
// JavaScript toggle button
document.querySelector("#theme-toggle").addEventListener("click", () => {
  const current = document.body.getAttribute("data-theme");
  document.body.setAttribute("data-theme", current === "dark" ? "light" : "dark");
});
```

> **Why does this work?** Because once the `[data-theme="dark"]` selector matches, the **same variable names get new values**, and the whole site re-renders automatically — with no separate dark-mode stylesheet needed!

---

## 7. Use Case #2 — Design System Consistency

In larger projects, keeping **spacing, fonts, and colors** consistent matters a lot.

```css
:root {
  --jaikaran-spacing-sm: 8px;
  --jaikaran-spacing-md: 16px;
  --jaikaran-spacing-lg: 32px;

  --jaikaran-font-heading: "Poppins", sans-serif;
  --jaikaran-font-body: "Inter", sans-serif;
}

.jaikaran-section {
  padding: var(--jaikaran-spacing-lg);
  margin-bottom: var(--jaikaran-spacing-md);
}

h1 {
  font-family: var(--jaikaran-font-heading);
}
p {
  font-family: var(--jaikaran-font-body);
}
```

> **Benefit:** The entire design system is **documented in one place** — a new developer just has to look at `:root` to understand the site's colors, spacing, and fonts.

---

## 8. Use Case #3 — Component Variants (Local Override)

Jaikaran's portfolio has 3 types of buttons: Primary, Secondary, Danger.

```css
.jaikaran-btn {
  background-color: var(--btn-bg, gray);
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 6px;
}

.jaikaran-btn--primary {
  --btn-bg: #6c5ce7;
}
.jaikaran-btn--secondary {
  --btn-bg: #636e72;
}
.jaikaran-btn--danger {
  --btn-bg: #d63031;
}
```

```html
<button class="jaikaran-btn jaikaran-btn--primary">Hire Jaikaran</button>
<button class="jaikaran-btn jaikaran-btn--secondary">View Resume</button>
<button class="jaikaran-btn jaikaran-btn--danger">Delete Project</button>
```

> Notice that the core CSS for `.jaikaran-btn` **never changes** — each variant only defines its own `--btn-bg`. This pattern is **much cleaner and more scalable** than repeating the entire `background-color` line for every variant.

---

## 9. Use Case #4 — Combining With Responsive Design

A variable's value can also be changed **inside media queries**.

```css
:root {
  --container-padding: 16px;
  --heading-size: 1.8rem;
}

@media (min-width: 768px) {
  :root {
    --container-padding: 32px;
    --heading-size: 2.5rem;
  }
}

.jaikaran-container {
  padding: var(--container-padding);
}
h1 {
  font-size: var(--heading-size);
}
```

> **Benefit:** You don't need to rewrite the `.jaikaran-container` rule inside the media query — only the variable's value changes, and it automatically reflects everywhere it's used.

---

## 10. Use Case #5 — Dynamic Updates via JavaScript

This is the **most powerful feature** of CSS Variables — they can be updated **live** from JavaScript.

```js
// For Jaikaran's "favorite color picker" feature
document.querySelector("#color-picker").addEventListener("input", (e) => {
  document.documentElement.style.setProperty(
    "--jaikaran-primary-color", 
    e.target.value
  );
});
```

```js
// READING the current value of a variable
const currentColor = getComputedStyle(document.documentElement)
  .getPropertyValue("--jaikaran-primary-color");
console.log(currentColor);
```

> **This is never possible with SASS/LESS variables** — those only work at **compile-time** (they're converted to plain CSS once, before the browser ever sees them). CSS Variables are **runtime/live** — the browser itself understands them, and JavaScript can interact with them directly.

---

## 11. CSS Variables vs Preprocessor Variables (SASS/LESS) — Important Distinction

| | CSS Variables (`--var`) | SASS/LESS Variables (`$var`) |
|---|---|---|
| **When do they resolve** | **Runtime** (live, in the browser) | **Compile-time** (once, during the build step) |
| **Can JS update them?** | ✅ Yes | ❌ No (already compiled into static CSS) |
| **Can media queries change their value?** | ✅ Yes | ❌ No (just static text-substitution) |
| **Follow cascade/inheritance?** | ✅ Yes (just like normal CSS) | ❌ No (purely text replacement) |
| **Can be scoped per-element?** | ✅ Yes (inside any selector) | ❌ No (limited to global or SCSS-block scope) |
| **Requires a build tool?** | ❌ No (native browser feature) | ✅ Yes (needs a Sass/Less compiler) |

---

## 12. Advantages of CSS Variables — Summary with Examples

### ✅ 1. Single Source of Truth (Maintainability)
```css
:root { --jaikaran-primary-color: #6c5ce7; }
/* Need to change the color? Just edit this one line. */
```

### ✅ 2. Live/Dynamic — Controllable via JS AND Media Queries
Already shown in Sections 6, 9, and 10 — dark mode toggle, responsive breakpoints, JS color picker.

### ✅ 3. Cascade & Scope — Enables Component-Level Overrides
```css
.jaikaran-btn--danger { --btn-bg: red; }
/* only this component's value changes, the rest of the site is untouched */
```

### ✅ 4. Better Readability (Semantic Naming)
```css
/* BEFORE */
.card { box-shadow: 0 2px 8px rgba(0,0,0,0.15); }

/* AFTER */
.card { box-shadow: var(--jaikaran-card-shadow); }
```
The second version tells you more about **what** this is for (clear intent), rather than just raw numbers.

### ✅ 5. No Build Step Required
It's a native browser feature — write it directly in a `.css` file, no compiler/preprocessor needed.

### ✅ 6. Easier Theming
Dark mode/light mode, multiple brand themes — all without separate stylesheets, just by switching variable values.

### ✅ 7. Reduces Repetition (DRY Principle)
Instead of writing the same value in 20 places, define it once and reuse it in 20 places.

---

## 13. Common Mistakes / Gotchas

| Mistake | Reality |
|---|---|
| "Variable names are case-insensitive (like normal CSS)" | **No!** `--Color` and `--color` are **two different variables** — CSS Custom Properties **are case-sensitive** |
| "You can use `var()` inside a media query condition" | No — `@media (min-width: var(--bp))` **doesn't work** in standard CSS |
| "A variable can be declared anywhere" | Only inside selectors (`:root`, `.class`, etc.) — not inside property names or selector names |
| "If a variable is undefined and there's no fallback, you'll get an error" | No — the browser silently treats that property as **unset/initial** (no crash, no visible error) |
| "CSS Variables are only useful for colors" | No — any valid CSS value (numbers, strings, lists, even `calc()` expressions) can be stored |

---

## 14. Quick Cheat Sheet

```css
/* Declare (global) */
:root {
  --jaikaran-primary-color: #6c5ce7;
  --jaikaran-spacing: 16px;
}

/* Declare (local/scoped) */
.jaikaran-card {
  --card-radius: 12px;
}

/* Use */
.element {
  color: var(--jaikaran-primary-color);
  padding: var(--jaikaran-spacing);
  border-radius: var(--card-radius, 8px);  /* with fallback */
}

/* Update with JS */
document.documentElement.style.setProperty('--jaikaran-primary-color', '#00cec9');

/* Read with JS */
getComputedStyle(document.documentElement).getPropertyValue('--jaikaran-primary-color');
```

---

## 15. Common Interview Questions

**Q: What are CSS Variables?**
Reusable values (colors, spacing, fonts, etc.) declared with the `--` prefix and used via the `var()` function — a native CSS feature that requires no compiler.

**Q: What's the basic difference between CSS Variables and SASS Variables?**
CSS Variables resolve at runtime (live, in the browser) and can be updated via JS or media queries. SASS variables are purely text-substitution at compile-time — they become static CSS before the browser ever sees them.

**Q: What is `:root`?**
A pseudo-class representing the `<html>` element — variables declared here are globally available throughout the document (due to cascade/inheritance).

**Q: What is the scope of a CSS Variable?**
It extends from the selector where it's declared down to its children — just like normal CSS cascade. Declaring it inside `:root` gives it global scope.

**Q: How do you provide a fallback value with `var()`?**
`var(--my-var, fallback-value)` — if `--my-var` is undefined, the fallback is used instead.

**Q: Are CSS Variable names case-sensitive?**
Yes — `--Color` and `--color` are treated as completely different variables.

**Q: What's the biggest advantage of CSS Variables over preprocessors?**
They can be updated dynamically at runtime — via JavaScript or media queries — without any rebuild/recompile. This is a game-changer for theming (dark mode) and interactive features.

---

## 16. What You Must Master

- Basic syntax (declaring `--variable-name`, using it via `var()`)
- `:root` scope vs local/component scope
- Fallback values in `var()`
- Theming use case (dark/light mode)
- Component variant pattern (local override)
- Combining with Responsive Design (changing values inside media queries)
- Dynamic updates from JavaScript (`setProperty`, `getPropertyValue`)
- The fundamental difference between CSS Variables and SASS/LESS Variables

CSS Variables, Flexbox, Grid, and Media Queries — together, these form the **complete toolkit** for building modern, maintainable, theme-able websites. Jaikaran's portfolio site is now clean, consistent, and dark-mode ready! 🎉
