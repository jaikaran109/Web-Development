# CSS Grid — Complete Guide 

CSS Grid ek **2-dimensional layout system** hai — ye **rows aur columns dono** ko ek saath control karne deta hai. Flexbox sirf **1 direction** (row YA column) mein achha kaam karta hai, lekin Grid tumhe **poora 2D grid** banake usme elements precisely place karne deta hai.

> **Grid vs Flexbox — one-liner:** Flexbox = 1-dimensional (ek line mein items arrange/align karna). Grid = 2-dimensional (rows + columns dono ko ek saath control karna).

---

## 1. Basic Terminology (sabse pehle ye samjho)

| Term | Matlab |
|---|---|
| **Grid Container** | Wo parent element jis pe `display: grid` lagaya gaya hai |
| **Grid Item** | Container ke **direct children** |
| **Grid Line** | Wo invisible horizontal/vertical lines jo grid ko divide karti hain (numbered: 1, 2, 3...) |
| **Grid Track** | Do consecutive grid lines ke beech ki space — ek **row** ya ek **column** |
| **Grid Cell** | Ek single row aur ek single column ka intersection — sabse chhota unit |
| **Grid Area** | Ek ya zyada cells ka rectangular group (jisme item placed hota hai) |
| **Gutter / Gap** | Tracks ke beech ki spacing |

```html
<div class="parent">     <!-- Grid Container -->
  <div>Item 1</div>      <!-- Grid Item -->
  <div>Item 2</div>      <!-- Grid Item -->
  <div>Item 3</div>      <!-- Grid Item -->
</div>
```

---

## 2. `display: grid` vs `display: inline-grid`

| Value | Behavior |
|---|---|
| `display: grid` | Container **block-level** ban jata hai (full width) |
| `display: inline-grid` | Container **inline-level** ban jata hai (sirf content jitni width) |

---

## 3. THE MOST IMPORTANT CONCEPT — Grid Lines

Jab tum grid banate ho, browser automatically **numbered lines** create karta hai. Agar tumhare paas **3 columns** hain, to **4 vertical lines** banegi (n tracks → n+1 lines).

```
Line 1   Line 2   Line 3   Line 4
  |        |        |        |
  | Col 1  | Col 2  | Col 3  |
  |        |        |        |
```

Ye line numbers tumhe baad mein items ko **precisely position** karne ke liye use honge (`grid-column: 1 / 3` jaisa syntax).

---

## 4. PARENT (Container) Properties

### 4.1 `grid-template-columns` & `grid-template-rows`

Decide karta hai kitne columns/rows banenge aur unka size kya hoga.

```css
.parent {
  display: grid;
  grid-template-columns: 100px 200px 100px;  /* 3 fixed-size columns */
  grid-template-rows: 50px 100px;            /* 2 fixed-size rows */
}
```

---

### 4.2 The `fr` Unit (Fraction) — bahut important

`fr` matlab **"fraction of available space"** — flexbox ke `flex-grow` jaisa concept.

```css
.parent {
  grid-template-columns: 1fr 1fr 1fr;   /* 3 equal-width columns */
  grid-template-columns: 1fr 2fr 1fr;   /* middle column doosron se DOUBLE width ka */
}
```

> Agar fixed px aur `fr` dono mix karo, to `fr` sirf **remaining space** mein se hissa leta hai:
```css
grid-template-columns: 100px 1fr 1fr;
/* pehla column fixed 100px, baaki space 2 equal parts mein bant jayega */
```

---

### 4.3 `repeat()` Function — likhne mein time bachata hai

```css
.parent {
  grid-template-columns: repeat(3, 1fr);
  /* same as: grid-template-columns: 1fr 1fr 1fr; */

  grid-template-columns: repeat(4, 100px);
  /* 4 columns, har ek 100px ka */
}
```

---

### 4.4 `minmax()` Function

Track ka **minimum aur maximum** size set karta hai — responsive design ke liye bahut useful.

```css
.parent {
  grid-template-columns: repeat(3, minmax(150px, 1fr));
  /* har column kam se kam 150px, zyada se zyada available space ka equal hissa */
}
```

---

### 4.5 🚨 `auto-fill` vs `auto-fit` (sabse bada confusion point — Flexbox ke `align-content` jaisa)

Dono **responsive grids** banane ke liye `repeat()` ke saath use hote hain, lekin behavior **alag** hota hai jab columns poori row fill nahi kar paate.

```css
.parent {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
}
```
```css
.parent {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
}
```

#### Farak kya hai:

| | `auto-fill` | `auto-fit` |
|---|---|---|
| **Jab items kam hain, space khaali bachta hai** | **Empty (invisible) tracks bana ke chhod deta hai** — jaise extra khaali columns reserved ho gaye | Khaali tracks ko **collapse** kar deta hai, baaki items extra space le lete hain aur **stretch** ho jate hain |

#### Visual Example (container width = 600px, items = 2, har ek minmax 150px-1fr):

```
auto-fill:
[Item1: 150px][Item2: 150px][empty: 150px][empty: 150px]
                                ↑ khaali columns reserved rehte hain (invisible)

auto-fit:
[Item1: 300px][Item2: 300px]
   ↑ khaali columns collapse ho gaye, items ne unki jagah le li
```

> **Rule of thumb:** Agar chahte ho ki items available space ko **poora bhar de** jab kam items ho, to `auto-fit` use karo. Agar consistent column-width chahte ho (chahe items kam ho), to `auto-fill` use karo.

---

### 4.6 `grid-template-areas` — Named Layout (bahut powerful, visual tarika)

Layout ko **literally naam de ke** design karne ka tarika.

```css
.parent {
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: auto 1fr auto;
  grid-template-areas:
    "header header"
    "sidebar main"
    "footer footer";
}

.header  { grid-area: header; }
.sidebar { grid-area: sidebar; }
.main    { grid-area: main; }
.footer  { grid-area: footer; }
```

Is se layout **visually** CSS mein hi dikh jata hai — bahut readable hai.

---

### 4.7 `grid-template` (Shorthand)
`grid-template-rows` + `grid-template-columns` + `grid-template-areas` ka shortcut — lekin practically log isse rarely use karte hain (alag-alag likhna zyada readable hota hai).

---

### 4.8 `gap`, `row-gap`, `column-gap`

```css
.parent {
  gap: 20px;          /* rows aur columns dono ke beech 20px gap */
  row-gap: 10px;
  column-gap: 15px;
}
```

---

### 4.9 `justify-content` vs `align-content` — POORE GRID ko container ke andar position karna

Ye properties **tab kaam karti hain jab grid ka total size container se chhota ho** (jaise fixed-size tracks ho aur container bada ho).

```css
.parent {
  justify-content: center;   /* poora grid horizontally center ho jayega */
  align-content: center;     /* poora grid vertically center ho jayega */
}
```
Values: `start | end | center | space-between | space-around | space-evenly | stretch`

> **Yaad rakho:** `justify-content` = horizontal (columns direction), `align-content` = vertical (rows direction) — Flexbox jaisa nahi yahan "main axis" ka concept nahi hai, Grid mein direction fix hoti hai: justify = horizontal, align = vertical, hamesha.

---

### 4.10 `justify-items` vs `align-items` — items ko UNKI OWN CELL ke andar position karna

Ye properties control karti hain ki har item apni **assigned cell ke andar** kahan baithega.

```css
.parent {
  justify-items: center;   /* har item apni cell mein horizontally center */
  align-items: center;     /* har item apni cell mein vertically center */
}
```
Values: `start | end | center | stretch (default)`

#### Farak `*-content` vs `*-items` mein:
```
*-content  → poore GRID ko container ke andar position karta hai
*-items    → har ITEM ko uski apni CELL ke andar position karta hai
```

---

### 4.11 `place-content` & `place-items` (Shorthand)

```css
.parent {
  place-content: center;        /* align-content + justify-content shorthand */
  place-items: center;          /* align-items + justify-items shorthand */
}
```

---

### 4.12 `grid-auto-rows` / `grid-auto-columns` — Implicit Grid sizing

Agar items tumhare defined grid se zyada hain, to browser **automatically extra rows/columns** bana deta hai — ye unka size control karta hai.

```css
.parent {
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 100px;   /* koi bhi naya/extra row automatically 100px ka banega */
}
```

---

### 4.13 `grid-auto-flow`

Decide karta hai ki **extra (un-positioned) items** automatically kaise placed honge.

```css
.parent {
  grid-auto-flow: row;     /* DEFAULT — row by row fill hoga */
  grid-auto-flow: column;  /* column by column fill hoga */
  grid-auto-flow: dense;   /* khaali gaps ko automatically fill karne ki koshish karega */
}
```

---

## 5. CHILDREN (Item) Properties

### 5.1 `grid-column-start` / `grid-column-end` / `grid-row-start` / `grid-row-end`

Item ko **specific grid lines** ke beech place karta hai.

```css
.item {
  grid-column-start: 1;
  grid-column-end: 3;     /* item line 1 se line 3 tak phaila hua (matlab 2 columns cover karega) */
}
```

---

### 5.2 `grid-column` / `grid-row` (Shorthand)

```css
.item {
  grid-column: 1 / 3;      /* same as start:1, end:3 */
  grid-row: 2 / 4;
}
```

#### `span` keyword — exact line number ki jagah "kitne tracks cover karna hai" bolna
```css
.item {
  grid-column: 1 / span 2;   /* line 1 se start, 2 columns cover karega */
  grid-column: span 3;       /* current position se 3 columns cover karega */
}
```

---

### 5.3 `grid-area` (Shorthand) — 2 tarah se use hota hai

**Tarika 1 — Line numbers se:**
```css
.item {
  grid-area: 1 / 1 / 3 / 3;  
  /* row-start / column-start / row-end / column-end */
}
```

**Tarika 2 — Named area se (Section 4.6 wala):**
```css
.item {
  grid-area: header;   /* "grid-template-areas" mein diye naam se match karega */
}
```

---

### 5.4 `justify-self` & `align-self`

`justify-items`/`align-items` ko **sirf ek specific item** ke liye override karta hai.

```css
.parent {
  justify-items: start;   /* sab items left-aligned apni cell mein */
}
.item-2 {
  justify-self: center;   /* SIRF item-2 center hoga, baaki sab left-aligned rahenge */
}
```

---

### 5.5 `place-self` (Shorthand)
```css
.item {
  place-self: center;   /* align-self + justify-self shorthand */
}
```

---

### 5.6 `order`
Flexbox ki tarah Grid mein bhi kaam karta hai — visual order change karta hai, HTML order nahi badalta.

---

## 6. PARENT vs CHILD Properties — Side by Side

| Where it applies | Property | Purpose |
|---|---|---|
| **Parent** | `display: grid` | Grid layout activate karta hai |
| **Parent** | `grid-template-columns/rows` | Tracks define karta hai |
| **Parent** | `grid-template-areas` | Named layout design |
| **Parent** | `gap` | Tracks ke beech spacing |
| **Parent** | `justify-content` / `align-content` | POORE grid ko container ke andar position karta hai |
| **Parent** | `justify-items` / `align-items` | Har item ko uski apni cell ke andar position karta hai |
| **Parent** | `grid-auto-rows/columns` | Implicit (extra) tracks ka size |
| **Parent** | `grid-auto-flow` | Un-positioned items kaise auto-place honge |
| **Child** | `grid-column` / `grid-row` | Item kahan se kahan tak phailega (line numbers se) |
| **Child** | `grid-area` | Item ki position/area (line-based ya named) |
| **Child** | `justify-self` / `align-self` | Individual item ki position override |
| **Child** | `order` | Visual display order |

---

## 7. Explicit Grid vs Implicit Grid

> **Explicit Grid — one-liner:** Wo rows/columns jo tumne `grid-template-columns`/`grid-template-rows` se khud define kiye hain.

> **Implicit Grid — one-liner:** Jab items tumhare defined grid se zyada ho jate hain, browser **khud se extra rows/columns** bana deta hai — unka size `grid-auto-rows`/`grid-auto-columns` se control hota hai.

```css
.parent {
  display: grid;
  grid-template-columns: repeat(3, 100px);  /* explicit: sirf 3 columns defined */
  grid-auto-rows: 80px;                     /* implicit rows ka size, agar zyada items aaye */
}
```
Agar isme 10 items daal do (3 columns ke liye), to browser khud-ba-khud naye rows bana ke baaki 7 items ko fit karega — har naya row `80px` ka hoga.

---

## 8. 🚨 Nested Grid — Parent `display: grid` + Child mein bhi `display: grid`

Exactly waisa hi independent-context concept jo Flexbox mein tha:

```html
<div class="parent">          <!-- display: grid -->
  <div class="child">         <!-- display: grid (yahan bhi!) -->
    <div>Grandchild 1</div>
    <div>Grandchild 2</div>
  </div>
</div>
```

`.child` 2 alag roles play karta hai:
- **Grid Item** apne `.parent` ke respect mein — `grid-column`, `grid-row`, `justify-self`, `align-self` ye control karte hain ki `.child` parent ke andar kahan baithega
- **Grid Container** apne andar wale Grandchildren ke respect mein — `.child` ka apna `grid-template-columns`, `justify-items`, etc. ye control karta hai ki **Grandchild 1 aur 2** kaise arrange honge

> **Same rule jo Flexbox mein tha:** `.child` ka apna `justify-items`/`align-items` **kabhi bhi** control nahi karega ki `.child` khud `.parent` ke andar kahan position hoga — wo sirf Grandchildren ko control karta hai. `.child` ki apni position `.parent` ke `justify-items` ya `.child` ke `justify-self`/`align-self` se hi control hoti hai.

---

## 9. Common Mistakes / Gotchas

| Mistake | Reality |
|---|---|
| "`auto-fill` aur `auto-fit` same hain" | Nahi — `auto-fill` empty tracks reserve karta hai, `auto-fit` unhe collapse kar deta hai aur items stretch ho jate hain |
| "`justify-content` har item ko move karega" | Nahi — `justify-content` POORE grid ko move karta hai, individual items ke liye `justify-items` use karo |
| "Grid lines `0` se start hoti hain" | Nahi — grid lines **`1` se start** hoti hain |
| "`fr` ek fixed unit hai jaise `px`" | Nahi — `fr` sirf **remaining/available space** ka fraction leta hai, fixed sizes ke baad jo bacha hai usi mein se |
| "Child pe `display: grid` lagane se uski apni position parent ke andar control ho jayegi" | Nahi — wo sirf Grandchildren ko control karta hai, khud ki position parent ke properties ya `self` properties se control hoti hai |

---

## 10. Grid vs Flexbox — Kab Kaunsa Use Karein

| Situation | Use |
|---|---|
| Navbar, button group, ek single row/column ka layout | **Flexbox** |
| Poora page layout (header, sidebar, main, footer) | **Grid** |
| Cards ka responsive gallery (rows + columns dono control karne hain) | **Grid** |
| Items ko ek line mein space-distribute karna | **Flexbox** |
| Precise 2D positioning (kis row, kis column mein) chahiye | **Grid** |

> Real projects mein dono saath use hote hain — Grid se overall page structure banao, andar ke chhote components (jaise navbar) Flexbox se.

---

## 11. Quick Cheat Sheet

```css
/* ===== PARENT (Container) ===== */
.parent {
  display: grid;                              /* ya inline-grid */
  grid-template-columns: repeat(3, 1fr);       /* tracks define karo */
  grid-template-rows: auto 1fr auto;
  gap: 20px;
  justify-content: start;                      /* poore grid ki position */
  align-content: start;
  justify-items: stretch;                      /* har item ki position uski cell mein */
  align-items: stretch;
  grid-auto-flow: row;
  grid-auto-rows: auto;
}

/* ===== CHILD (Item) ===== */
.item {
  grid-column: 1 / 3;          /* line 1 se line 3 tak */
  grid-row: span 2;            /* 2 rows cover karega */
  justify-self: auto;
  align-self: auto;
}
```

---

## 12. Common Interview Questions

**Q: CSS Grid ka main purpose kya hai?**
2-dimensional layouts (rows aur columns dono ek saath) ko precisely control karna.

**Q: Grid aur Flexbox mein basic farak?**
Flexbox 1-dimensional hai (ek line), Grid 2-dimensional hai (rows + columns).

**Q: `fr` unit kya hota hai?**
Available/remaining space ka fraction representing karta hai — fixed sizes allocate hone ke baad jo space bacha hai usi mein se hissa milta hai.

**Q: `auto-fill` aur `auto-fit` mein farak?**
`auto-fill` empty tracks ko reserve (invisible) chhod deta hai; `auto-fit` unhe collapse karke baaki items ko stretch kar deta hai.

**Q: `justify-content` aur `justify-items` mein farak?**
`justify-content` poore grid ko container ke andar position karta hai; `justify-items` har item ko uski apni cell ke andar position karta hai.

**Q: Grid lines kis number se start hoti hain?**
`1` se (zero-indexed nahi hoti).

**Q: Implicit grid kya hai?**
Jab items defined tracks se zyada ho jate hain, browser khud extra rows/columns generate karta hai — unka size `grid-auto-rows`/`grid-auto-columns` se control hota hai.

**Q: Agar parent aur child dono pe `display: grid` ho, to child ka apna `justify-items` kya affect karega?**
Sirf child ke apne grandchildren ko — child khud parent ke andar kaise position hoga ye parent ke properties ya child ke `justify-self`/`align-self` se decide hota hai.

---

## 13. What You Must Master

- Grid Lines, Tracks, Cells, Areas (terminology)
- Parent Properties: `grid-template-columns/rows`, `gap`, `justify-content`/`align-content`, `justify-items`/`align-items`
- `fr` unit, `repeat()`, `minmax()`
- `auto-fill` vs `auto-fit` (sabse common confusion)
- `grid-template-areas` (named layouts)
- Child Properties: `grid-column`/`grid-row`, `grid-area`, `justify-self`/`align-self`
- Explicit vs Implicit grid
- Nested grids ka independent-context behavior

Flexbox + Grid dono mil ke modern CSS layout ka **poora foundation** banate hain — real-world projects mein dono saath-saath use hote hain.
