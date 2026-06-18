# CSS Units

CSS units define the size of elements such as text, width, height, margin, and padding.

---

# 1. Absolute Units

Absolute units have a fixed size and do not change based on the parent element or screen size.

## px (Pixels)

The most commonly used absolute unit.

### Example

```css
.box{
    width: 300px;
    height: 150px;
}
```

### Characteristics

- Fixed size
- Does not scale relative to parent
- Easy to control
- Less responsive than relative units

### Best Used For

- Borders
- Icons
- Shadows
- Small UI elements
- Precise spacing

**One-liner:** `px` is a fixed unit that always represents the same number of pixels.

---

# 2. Relative Units (Recommended ✅)

Relative units change according to their reference, making layouts responsive.

---

## % (Percentage)

Relative to the size of the parent element.

### Example

```css
.parent{
    width: 800px;
}

.child{
    width: 50%;
}
```

Result:

```
Child width = 400px
```

### Best Used For

- Responsive widths
- Flexible layouts
- Images

**One-liner:** `%` is calculated relative to the parent element.

---

## rem (Root em)

Relative to the **root (`html`) font size**.

### Syntax

```css
html{
    font-size:16px;
}

.box{
    font-size:1.5rem;
}
```

Calculation

```
1.5 × 16px = 24px
```

Even if the parent font size changes, `rem` remains based on the root.

### Best Used For

- Font sizes
- Margin
- Padding
- Consistent spacing

**One-liner:** `rem` is always relative to the root (`html`) font size.

---

## em

Relative to the **parent element's font size**.

### Example

```css
.parent{
    font-size:20px;
}

.child{
    font-size:1.5em;
}
```

Calculation

```
1.5 × 20px = 30px
```

If the parent size changes, the child size changes automatically.

### Nested Example

```css
.parent{
    font-size:20px;
}

.child{
    font-size:2em;
}

.grandchild{
    font-size:2em;
}
```

Calculation

```
Parent = 20px

Child = 40px

Grandchild = 80px
```

This is called **cascading**.

### Best Used For

- Components that should scale with their parent
- Buttons
- Cards
- Nested elements

**One-liner:** `em` is relative to the parent element's font size.

---

## vh (Viewport Height)

Relative to the browser window's height.

```
100vh = Full screen height
50vh = Half screen height
```

### Example

```css
.hero{
    height:100vh;
}
```

### Best Used For

- Hero sections
- Full-screen layouts

**One-liner:** `vh` is relative to the viewport height.

---

## vw (Viewport Width)

Relative to the browser window's width.

```
100vw = Full screen width
50vw = Half screen width
```

### Example

```css
.container{
    width:100vw;
}
```

### Best Used For

- Responsive sections
- Full-width containers

**One-liner:** `vw` is relative to the viewport width.

---

# Summary

| Unit | Relative To | Responsive | Common Use |
|------|-------------|------------|------------|
| px | Fixed pixels | ❌ | Borders, Icons, Shadows |
| % | Parent element | ✅ | Width, Height |
| rem | Root (`html`) font-size | ✅ | Fonts, Margin, Padding |
| em | Parent font-size | ✅ | Nested Components |
| vh | Viewport Height | ✅ | Hero Sections |
| vw | Viewport Width | ✅ | Full-width Layouts |

---

# Interview Difference

### `px` vs `%`

- `px` → Fixed size
- `%` → Relative to parent

### `em` vs `rem`

- `em` → Relative to the parent font size (cascades).
- `rem` → Relative to the root (`html`) font size (consistent).

---

# Quick Trick

```
px  → Fixed 📌

%   → Parent 📦

em  → Parent Font 👨‍👦

rem → Root Font 🌳

vh  → Viewport Height 📱⬆️⬇️

vw  → Viewport Width 📱⬅️➡️
```