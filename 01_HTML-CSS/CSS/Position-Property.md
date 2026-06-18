# CSS Position Property

The **position** property controls where elements are placed on the screen and how they behave in the document flow.

---

# 1. position: static

Default position of every HTML element.

### Characteristics

- Follows normal document flow
- `top`, `right`, `bottom`, `left` have no effect
- No special positioning

### Example

```css
.box{
    position: static;
}
```

**One-liner:** Static elements remain in their normal position in the document flow.

---

# 2. position: relative

Moves an element relative to its original position.

### Characteristics

- Remains in document flow
- Original space is preserved
- Other elements are unaffected
- Supports offsets

### Offsets

```css
top
right
bottom
left
```

### Example

```css
.box{
    position: relative;
    top: 20px;
    left: 30px;
}
```

Meaning:

```text
Move 20px down
Move 30px right
```

**One-liner:** Relative positioning offsets an element from its normal position while keeping its original space.

---

# 3. position: absolute

Removes the element from the normal document flow.

### Characteristics

- Removed from flow
- No space is reserved
- Other elements behave as if it doesn't exist
- Positioned relative to the nearest positioned parent

### Example

```css
.parent{
    position: relative;
}

.child{
    position: absolute;
    top: 0;
    right: 0;
}
```

### Common Uses

- Notification badges
- Tooltips
- Dropdown menus
- Icons inside inputs

**One-liner:** Absolute positioning removes an element from the flow and positions it relative to its nearest positioned ancestor.

---

# 4. position: fixed

Fixes an element relative to the viewport.

### Characteristics

- Removed from flow
- Doesn't move while scrolling
- Always remains visible at the specified position

### Example

```css
.navbar{
    position: fixed;
    top: 0;
    left: 0;
}
```

### Common Uses

- Navigation bars
- Chat widgets
- Floating action buttons

**One-liner:** Fixed elements stay attached to the viewport even when the page scrolls.

---

# 5. position: sticky

Combination of relative and fixed positioning.

### Characteristics

- Behaves like `relative` initially
- Becomes `fixed` after reaching a scroll threshold
- Requires an offset (`top`, `bottom`, etc.)

### Example

```css
.header{
    position: sticky;
    top: 0;
}
```

### Common Uses

- Sticky headers
- Section headings
- Side navigation

**One-liner:** Sticky elements scroll normally until a threshold is reached, then stick to the viewport.

---

# Offsets

Used with:

```css
relative
absolute
fixed
sticky
```

Properties:

```css
top
right
bottom
left
```

Example:

```css
.box{
    position: relative;
    top: 20px;
    left: 40px;
}
```

Meaning:

```text
20px down
40px right
```

---

# Summary

| Position | In Flow? | Relative To | Common Use |
|-----------|----------|-------------|------------|
| static | ✅ Yes | Normal document flow | Default |
| relative | ✅ Yes | Its own position | Small adjustments |
| absolute | ❌ No | Nearest positioned parent | Badges, Tooltips |
| fixed | ❌ No | Viewport | Navbars, Floating Buttons |
| sticky | ✅ → ❌ | Parent / Viewport | Sticky Headers |

---

# Quick Revision

```text
static   → Default

relative → Move myself

absolute → Find nearest positioned parent

fixed    → Stick to viewport

sticky   → Relative first, Fixed later
```

---

# Interview Answer

The `position` property determines how an element is placed on a webpage.

- `static` → Default document flow.
- `relative` → Moves relative to its original position.
- `absolute` → Removed from flow and positioned relative to the nearest positioned parent.
- `fixed` → Fixed to the viewport and remains visible while scrolling.
- `sticky` → Behaves like relative until a scroll threshold is reached, then acts like fixed.