# CSS Box Model

Every HTML element is treated as a **rectangular box** by the browser.

Each box consists of **4 layers**, starting from the inside and moving outward.

```
+---------------------------+
|          Margin           |
|  +---------------------+  |
|  |       Border        |  |
|  | +-----------------+ |  |
|  | |    Padding      | |  |
|  | | +-------------+ | |  |
|  | | |   Content   | | |  |
|  | | +-------------+ | |  |
|  | +-----------------+ |  |
|  +---------------------+  |
+---------------------------+
```

---

# 1. Content

The actual content of the element.

It can contain:

- Text
- Images
- Videos
- Buttons
- Other HTML elements

### Example

```css
div{
    width:200px;
    height:100px;
}
```

The width and height define the **content area** (by default).

**One-liner:** The content is the actual data displayed inside an element.

---

# 2. Padding

Padding is the **space between the content and the border**.

### Example

```css
padding:20px;
```

```
Border
┌──────────────────┐
│    Padding       │
│  ┌────────────┐  │
│  │  Content   │  │
│  └────────────┘  │
└──────────────────┘
```

### Uses

- Creates inner spacing
- Makes buttons look better
- Prevents content from touching the border

**One-liner:** Padding adds space inside an element, between the content and border.

---

# 3. Border

The border surrounds the padding and content.

### Example

```css
border:2px solid black;
```

Components:

- Border Width
- Border Style
- Border Color

Example:

```css
border:3px dashed red;
```

**One-liner:** Border is the visible outline around an element.

---

# 4. Margin

Margin is the **space outside the border**.

### Example

```css
margin:20px;
```

```
Margin
┌───────────────────────┐

    Border

└───────────────────────┘
```

### Uses

- Creates space between elements
- Separates components
- Improves layout

**One-liner:** Margin creates space outside an element.

---

# Complete Example

```css
.box{
    width:200px;
    height:100px;

    padding:20px;

    border:2px solid black;

    margin:30px;
}
```

---

# Order of the Box Model

```
Content
   ↓
Padding
   ↓
Border
   ↓
Margin
```

or

```
Content → Padding → Border → Margin
```

---

# Total Size Formula

By default:

```
Total Width

=

Content Width

+

Left Padding + Right Padding

+

Left Border + Right Border

+

Left Margin + Right Margin
```

Similarly,

```
Total Height

=

Content Height

+

Top Padding + Bottom Padding

+

Top Border + Bottom Border

+

Top Margin + Bottom Margin
```

---

# Quick Revision

| Layer | Position | Purpose |
|--------|----------|---------|
| Content | Innermost | Actual text, image, etc. |
| Padding | Around content | Inner spacing |
| Border | Around padding | Visible outline |
| Margin | Outermost | Space between elements |

---

# Interview Answer

**The CSS Box Model states that every HTML element is treated as a rectangular box consisting of four layers: Content, Padding, Border, and Margin. Content holds the actual data, Padding provides inner spacing, Border surrounds the element, and Margin creates space outside the element.**