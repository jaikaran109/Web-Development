# CSS Color Formats

CSS provides multiple ways to specify colors.

## 1. Named Colors

These are predefined color names supported by CSS.

### Examples

```css
color: red;
color: blue;
color: green;
color: black;
color: white;
color: orange;
```

**One-liner:** Uses predefined color names.

---

# 2. RGB (Red, Green, Blue)

RGB stands for:

- Red
- Green
- Blue

These are the **primary colors of light**. Different combinations of these three colors produce millions of colors.

### Syntax

```css
color: rgb(red, green, blue);
```

Each value ranges from **0 to 255**.

- 0 → No intensity
- 255 → Maximum intensity

### Examples

```css
color: rgb(255, 0, 0);      /* Red */
color: rgb(0, 255, 0);      /* Green */
color: rgb(0, 0, 255);      /* Blue */
color: rgb(255, 255, 255);  /* White */
color: rgb(0, 0, 0);        /* Black */
```

### Total Possible Colors

```
256 × 256 × 256
= 16,777,216 colors
```

**One-liner:** RGB defines a color by mixing Red, Green, and Blue values.

---

# 3. RGBA (Red, Green, Blue, Alpha)

RGBA is an extension of RGB.

It adds an **Alpha** channel, which controls the transparency (opacity) of the color.

### Syntax

```css
color: rgba(red, green, blue, alpha);
```

### Alpha Value

- 0 → Completely transparent
- 0.5 → 50% transparent
- 1 → Fully visible (opaque)

### Examples

```css
color: rgba(255, 0, 0, 1);
color: rgba(255, 0, 0, 0.5);
color: rgba(255, 0, 0, 0);
```

**One-liner:** RGBA adds transparency to RGB using the Alpha value.

---

# 4. HEX (Hexadecimal)

HEX uses the **Hexadecimal Number System (Base-16).**

Hexadecimal digits:

```
0 1 2 3 4 5 6 7 8 9 A B C D E F
```

Where:

```
A = 10
B = 11
C = 12
D = 13
E = 14
F = 15
```

### Structure

```
#RRGGBB
```

- RR → Red
- GG → Green
- BB → Blue

Each pair ranges from:

```
00 → Minimum
FF → Maximum
```

### Examples

```css
color: #ff0000;   /* Red */
color: #00ff00;   /* Green */
color: #0000ff;   /* Blue */
color: #ffffff;   /* White */
color: #000000;   /* Black */
color: #3f001c;
```

### HEX with Alpha

CSS also supports transparency using an 8-digit HEX value.

```
#RRGGBBAA
```

Example:

```css
color: #ff000080;
```

Here:

- `FF` → Red
- `00` → Green
- `00` → Blue
- `80` → Alpha (about 50% opacity)

**One-liner:** HEX represents colors using hexadecimal values for Red, Green, and Blue.

---

# Summary

| Format | Example | Transparency |
|---------|---------|--------------|
| Named | `red` | ❌ No |
| RGB | `rgb(255,0,0)` | ❌ No |
| RGBA | `rgba(255,0,0,0.5)` | ✅ Yes |
| HEX | `#ff0000` | ❌ No |
| HEXA | `#ff000080` | ✅ Yes |

---

# Interview Answer

**CSS supports multiple color formats:**

- **Named Colors** → Uses predefined color names like `red` and `blue`.
- **RGB** → Defines colors using Red, Green, and Blue values (0–255).
- **RGBA** → Adds an Alpha channel to RGB for transparency.
- **HEX** → Uses hexadecimal values in the format `#RRGGBB`, and `#RRGGBBAA` when transparency is included.
