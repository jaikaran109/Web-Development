# CSS Display Property

The **display** property controls how an element behaves in the document flow and how it occupies space on the page.

---

# 1. display: block

A block element:

- Starts on a new line
- Takes the full available width by default
- Supports width and height

### Examples

```css
display: block;
```

Block Elements:

```html
<div></div>
<p></p>
<h1></h1>
<section></section>
```

**One-liner:** Block elements start on a new line and occupy the full available width.

---

# 2. display: inline

An inline element:

- Does not start on a new line
- Takes only the width of its content
- Width and height do not work properly

### Example

```css
display: inline;
```

Inline Elements:

```html
<span></span>
<a></a>
<strong></strong>
```

**One-liner:** Inline elements stay on the same line and only take the space their content needs.

---

# 3. display: inline-block

Combines features of both block and inline.

- Stays on the same line
- Accepts width and height
- Allows padding and margin

### Example

```css
display: inline-block;
width: 200px;
height: 100px;
```

**One-liner:** Inline-block elements stay inline but can have custom width and height.

---

# 4. display: none

Completely removes the element from the page layout.

### Example

```css
display: none;
```

Effects:

- Element is not visible
- Occupies no space
- Removed from document flow

**One-liner:** Removes the element completely from the layout.

---

# 5. display: flex

Activates the Flexbox layout system on a container.

### Example

```css
.container{
    display: flex;
}
```

Benefits:

- Easy horizontal alignment
- Easy vertical alignment
- Responsive layouts

**One-liner:** Flex creates a flexible one-dimensional layout system.

---

# 6. display: grid

Activates the CSS Grid layout system.

### Example

```css
.container{
    display: grid;
}
```

Benefits:

- Rows and columns
- Complex layouts
- Better control than Flexbox for 2D layouts

**One-liner:** Grid creates a two-dimensional layout using rows and columns.

---

# Visual Comparison

```
display: block

[Element 1]
[Element 2]
[Element 3]
```

```
display: inline

[Element 1] [Element 2] [Element 3]
```

```
display: inline-block

[Element 1] [Element 2] [Element 3]
(Width & Height work)
```

```
display: none

Element removed completely
```

---

# Summary

| Display Value | New Line | Width/Height | Common Use |
|--------------|-----------|--------------|------------|
| block | ✅ Yes | ✅ Yes | Sections, Divs |
| inline | ❌ No | ❌ No | Text, Links |
| inline-block | ❌ No | ✅ Yes | Buttons, Cards |
| none | N/A | N/A | Hide Elements |
| flex | Depends | ✅ Yes | One-dimensional Layouts |
| grid | Depends | ✅ Yes | Two-dimensional Layouts |

---

# Interview Answer

The `display` property determines how an element behaves in the document flow. Common values include:

- `block` → Starts on a new line and takes full width.
- `inline` → Takes only content width and stays on the same line.
- `inline-block` → Inline behavior with support for width and height.
- `none` → Removes the element from the layout.
- `flex` → Enables Flexbox layout.
- `grid` → Enables CSS Grid layout.