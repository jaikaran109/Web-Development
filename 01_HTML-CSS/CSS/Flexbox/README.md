# Flexbox CSS — Complete Guide 

Flexbox ek **layout system** hai jo elements ko ek row ya column mein arrange karne, unke beech space distribute karne, aur unhe align karne ke liye banaya gaya hai. Isse pehle log floats aur inline-block ka jugaad karte the, jo bahut painful tha — Flexbox ne layout banana **bahut easy** bana diya.

---

## 1. Basic Terminology (sabse pehle ye samjho)

Flexbox mein **2 roles** hote hain:

| Role | Matlab |
|---|---|
| **Flex Container** | Wo parent element jis pe `display: flex` lagaya gaya hai |
| **Flex Item** | Container ke **direct children** (sirf direct children — andar wale grandchildren nahi) |

```css
.parent {
  display: flex;   /* parent ban gaya flex container */
}
```
```html
<div class="parent">     <!-- Flex Container -->
  <div>Item 1</div>      <!-- Flex Item -->
  <div>Item 2</div>      <!-- Flex Item -->
  <div>Item 3</div>      <!-- Flex Item -->
</div>
```

> **Important:** `display: flex` sirf **direct children** ko flex item banata hai. Andar nested elements automatically affect nahi hote.

---

## 2. `display: flex` vs `display: inline-flex`

| Value | Behavior |
|---|---|
| `display: flex` | Container apne aap mein **block-level** element ban jata hai (full width leta hai) |
| `display: inline-flex` | Container **inline-level** element ban jata hai (sirf content jitni width leta hai, side-by-side flow karta hai) |

Dono mein internal flex behavior (children arrangement) **same** hota hai — farak sirf container khud kaise behave karta hai uske bahar.

---

## 3. THE MOST IMPORTANT CONCEPT — Main Axis vs Cross Axis

Flexbox samajhne ke liye ye concept **sabse zaroori** hai. Har flex container mein 2 axes hoti hain:

- **Main Axis** — jis direction mein items primarily arrange hote hain (controlled by `flex-direction`)
- **Cross Axis** — main axis ke **perpendicular** (90°)

```css
.parent {
  flex-direction: row;     /* Main Axis = Horizontal (→), Cross Axis = Vertical (↓) */
}
```
```css
.parent {
  flex-direction: column;  /* Main Axis = Vertical (↓), Cross Axis = Horizontal (→) */
}
```

### Yaad rakhne wali sabse important baat:
```
justify-content   → hamesha MAIN AXIS pe kaam karta hai
align-items        → hamesha CROSS AXIS pe kaam karta hai
align-content      → hamesha CROSS AXIS pe kaam karta hai (multiple lines)
```

Agar `flex-direction: row` hai, to `justify-content` horizontally align karega aur `align-items` vertically.
Agar `flex-direction: column` hai, to ye **ulta** ho jata hai — `justify-content` vertically align karega aur `align-items` horizontally!

---

## 4. PARENT (Container) Properties

Ye saari properties **container** pe lagti hain (jiske upar `display: flex` hai).

### 4.1 `flex-direction`
Decide karta hai main axis ki direction.

```css
.parent {
  flex-direction: row;            /* default → left to right */
  flex-direction: row-reverse;    /* right to left */
  flex-direction: column;         /* top to bottom */
  flex-direction: column-reverse; /* bottom to top */
}
```

---

### 4.2 `flex-wrap`
Decide karta hai ki agar items ek line mein fit nahi ho rahe, to wo **next line pe jaayenge ya nahi.**

```css
.parent {
  flex-wrap: nowrap;        /* DEFAULT — sab items ek hi line mein force-fit honge (shrink ho sakte hain) */
  flex-wrap: wrap;          /* jab space khatam ho jaye, items next line pe chale jayenge */
  flex-wrap: wrap-reverse;  /* wrap jaisa hi, but lines ka order reverse ho jata hai (cross axis ke direction se) */
}
```

> **Default value `nowrap` hai** — matlab agar tum kuch na likho, items hamesha ek single line mein squeeze hone ki koshish karenge.

---

### 4.3 `flex-flow` (Shorthand)
`flex-direction` + `flex-wrap` ek saath likhne ka shortcut.

```css
.parent {
  flex-flow: row wrap;   /* same as: flex-direction: row; flex-wrap: wrap; */
}
```

---

### 4.4 `justify-content` — MAIN AXIS alignment

Items ko **main axis** ke along align/distribute karta hai.

```css
.parent {
  justify-content: flex-start;     /* DEFAULT — items start se chipke rahenge */
  justify-content: flex-end;       /* items end pe chale jayenge */
  justify-content: center;         /* items center mein aa jayenge */
  justify-content: space-between;  /* pehla item start pe, last item end pe, beech mein equal gap */
  justify-content: space-around;   /* har item ke around equal space (corners pe half space) */
  justify-content: space-evenly;   /* sab gaps (including edges) bilkul equal */
}
```

#### Visual Difference (row direction, 3 items):
```
flex-start:      [A][B][C]____________________
flex-end:        ____________________[A][B][C]
center:          _________[A][B][C]_________
space-between:   [A]__________[B]__________[C]
space-around:    __[A]________[B]________[C]__
space-evenly:    ___[A]_______[B]_______[C]___
```

---

### 4.5 `align-items` — CROSS AXIS alignment (per line)

Items ko **cross axis** ke along align karta hai — sirf single line ke andar.

```css
.parent {
  align-items: stretch;     /* DEFAULT — items cross-axis mein poora available space le lete hain (jaise height stretch ho jati) */
  align-items: flex-start;  /* cross axis ke start pe align */
  align-items: flex-end;    /* cross axis ke end pe align */
  align-items: center;      /* cross axis ke center mein align */
  align-items: baseline;    /* sab items ke text baseline align ho jate hain */
}
```

> **Default `stretch` hai** — isiliye jab tum naya flex container banate ho aur kuch height set nahi karte, to saare items automatically same height ke ho jate hain — ye `align-items: stretch` ki wajah se hota hai!

---

### 4.6 `align-content` — CROSS AXIS alignment (MULTIPLE LINES) ⚠️ (yahi confusion ka point hai)

Jab `flex-wrap: wrap` ki wajah se **multiple lines** ban jaati hain, to `align-content` un **poori lines ke group** ko cross axis pe align karta hai (`align-items` single line ke andar items ko align karta hai, `align-content` poori lines ko ek doosre se align karta hai).

```css
.parent {
  align-content: stretch;        /* DEFAULT */
  align-content: flex-start;
  align-content: flex-end;
  align-content: center;
  align-content: space-between;
  align-content: space-around;
  align-content: space-evenly;
}
```

### 🚨 SABSE BADA GOTCHA: `align-content` kab kaam NAHI karta?

```
flex-wrap: nowrap (default) → align-content KAAM NAHI KAREGA
flex-wrap: wrap              → align-content KAAM KAREGA (agar extra cross-axis space ho)
```

**Kyun?** Kyunki `nowrap` mein hamesha sirf **ek hi line** banti hai (saare items squeeze hokar ek line mein aate hain). Aur `align-content` ka kaam hi **multiple lines ko ek doosre se distribute karna** hai. Agar line hi ek hai, to "lines ke beech space distribute" karne wala koi concept hi nahi bachta — wo single line khud poora cross-axis space le leti hai, to `align-content` ka koi visible effect nahi hota.

```css
/* YE KAAM NAHI KAREGA (effect nahi dikhega) */
.parent {
  flex-wrap: nowrap;          /* sirf ek line banegi */
  align-content: space-between;  /* iska koi asar nahi padega */
}

/* YE KAAM KAREGA */
.parent {
  flex-wrap: wrap;                /* multiple lines bann sakti hain */
  align-content: space-between;   /* ab lines ke beech space distribute hoga */
}
```

#### Quick Comparison Table

| Property | Kya align karta hai | `flex-wrap: nowrap` mein effect? | `flex-wrap: wrap` mein effect? |
|---|---|---|---|
| `align-items` | Single line ke andar items | ✅ Haan, kaam karta hai | ✅ Haan, kaam karta hai (per line) |
| `align-content` | Multiple lines ek doosre se | ❌ **Nahi karta** (sirf 1 line hoti hai) | ✅ Haan, kaam karta hai |

---

### 4.7 `gap`, `row-gap`, `column-gap`

Items ke beech spacing add karta hai (margin ka jhanjhat nahi).

```css
.parent {
  gap: 20px;            /* row aur column dono gaps = 20px */
  row-gap: 10px;        /* sirf rows ke beech gap */
  column-gap: 15px;     /* sirf columns ke beech gap */
}
```

---

## 5. CHILDREN (Item) Properties

Ye saari properties **individual flex items** pe lagti hain (parent pe nahi).

### 5.1 `order`
Visual order change karta hai, **HTML order nahi badalta**.

```css
.item-1 { order: 3; }
.item-2 { order: 1; }
.item-3 { order: 2; }
/* Visual output: item-2, item-3, item-1 — even though HTML mein item-1 sabse pehle likha hai */
```
> Default value `0` hai. Jitna **chhota** number, item utna pehle dikhega.

---

### 5.2 `flex-grow`
Decide karta hai item **extra available space** mein se kitna hissa lega, **agar space bachta hai**.

```css
.item-1 { flex-grow: 1; }
.item-2 { flex-grow: 2; }
/* item-2 extra space ka DOUBLE hissa lega item-1 ke comparison mein */
```
> Default `0` hai — matlab by default items grow nahi karte, apne natural content size pe ruk jate hain.

---

### 5.3 `flex-shrink`
Decide karta hai item **kitna shrink** hoga, **agar space kam pad jaaye**.

```css
.item-1 { flex-shrink: 1; }   /* DEFAULT — space kam padne par shrink hoga */
.item-2 { flex-shrink: 0; }   /* ye item KABHI shrink nahi hoga, apna size maintain karega */
```
> Default `1` hai — matlab by default sab items shrink ho sakte hain agar space kam pade.

---

### 5.4 `flex-basis`
Item ka **starting/ideal size** (grow/shrink hone se pehle), main axis ke along.

```css
.item-1 { flex-basis: 200px; }  /* item ka base size 200px se start hoga */
.item-2 { flex-basis: auto; }   /* DEFAULT — item ke content/width se size decide hota hai */
```

---

### 5.5 `flex` (Shorthand) — sabse zyada use hone wali property

`flex-grow`, `flex-shrink`, aur `flex-basis` teeno ek saath likhne ka shortcut.

```css
.item {
  flex: 1 1 0;     /* grow=1, shrink=1, basis=0 — common pattern for "equal width items" */
  flex: 1;         /* shorthand for: flex: 1 1 0% — bahut common */
  flex: none;      /* shorthand for: flex: 0 0 auto — item bilkul grow/shrink nahi karega */
  flex: auto;      /* shorthand for: flex: 1 1 auto */
}
```

#### Sabse common real-world pattern:
```css
.equal-width-items {
  flex: 1;   /* har item available space ko EQUALLY divide karega */
}
```

---

### 5.6 `align-self`
`align-items` ko **sirf ek specific item** ke liye **override** karta hai.

```css
.parent {
  align-items: flex-start;  /* sab items top pe align honge */
}
.item-2 {
  align-self: center;       /* SIRF item-2 center mein align hoga, baaki sab top pe rahenge */
}
```

---

## 6. PARENT vs CHILD Properties — Side by Side

| Where it applies | Property | Purpose |
|---|---|---|
| **Parent** | `display: flex` | Flex layout activate karta hai |
| **Parent** | `flex-direction` | Main axis ki direction set karta hai |
| **Parent** | `flex-wrap` | Multi-line wrapping on/off karta hai |
| **Parent** | `flex-flow` | direction + wrap shorthand |
| **Parent** | `justify-content` | Main axis pe items align/distribute |
| **Parent** | `align-items` | Cross axis pe items align (per line) |
| **Parent** | `align-content` | Cross axis pe MULTIPLE LINES align |
| **Parent** | `gap` | Items ke beech spacing |
| **Child** | `order` | Visual display order |
| **Child** | `flex-grow` | Extra space lene ki capability |
| **Child** | `flex-shrink` | Kam space mein simat jaane ki capability |
| **Child** | `flex-basis` | Item ka starting/ideal size |
| **Child** | `flex` | grow+shrink+basis shorthand |
| **Child** | `align-self` | `align-items` ko individually override |

---

## 7. 🚨 BIG QUESTION: Agar `display: flex` Parent mein bhi de aur Child mein bhi de — kya hota hai?

Ye ek **bahut common confusion** hai jiska clear answer ye hai:

```html
<div class="parent">         <!-- display: flex -->
  <div class="child">        <!-- display: flex (yahan bhi!) -->
    <div>Grandchild 1</div>
    <div>Grandchild 2</div>
  </div>
</div>
```

```css
.parent { display: flex; }
.child  { display: flex; }
```

Yahan `.child` **2 alag-alag roles** ek saath play kar raha hai, jo **completely independent** hain:

### Role 1: `.child` ek FLEX ITEM hai (apne `.parent` ke respect mein)
Iska matlab — `.child` pe lagi **item-properties** (`flex-grow`, `flex-shrink`, `flex-basis`, `flex`, `align-self`, `order`) ye control karte hain ki `.child` **`.parent` ke andar kaise behave karega.**

### Role 2: `.child` ek FLEX CONTAINER hai (apne andar wale Grandchild elements ke respect mein)
Iska matlab — `.child` pe lagi **container-properties** (`flex-direction`, `justify-content`, `align-items`, `flex-wrap`, etc.) ye control karte hain ki **Grandchild 1 aur Grandchild 2** kaise arrange honge `.child` ke andar.

### 🔑 Sabse Important Point
```
.child pe lagaya hua justify-content / align-items
KABHI BHI ye control nahi karega ki .child khud .parent ke andar kahan position hoga.

Wo sirf control karega ki Grandchild 1 aur Grandchild 2
.child ke ANDAR kahan position honge.
```

To agar tumhe control karna hai ki **`.child` khud `.parent` ke andar** kahan align ho, to tumhe `.parent` ka `justify-content`/`align-items` use karna padega, **ya** `.child` pe `align-self` lagana padega — `.child` ka apna `justify-content`/`align-items` iske liye **bekaar** hai (kyunki wo apne grandchildren ke liye hai, khud ke liye nahi).

#### Example to clear the confusion completely:

```css
.parent {
  display: flex;
  justify-content: center;   /* .child ko horizontally center karega .parent ke andar */
  align-items: center;       /* .child ko vertically center karega .parent ke andar */
}

.child {
  display: flex;
  justify-content: space-between;  /* Grandchild 1 aur 2 ko space-between karega .child ke andar */
  align-items: flex-end;           /* Grandchild 1 aur 2 ko bottom-align karega .child ke andar */
}
```

Yahan dono `justify-content`/`align-items` ekdum independent kaam kar rahe hain — `.parent` wala `.child` ki position decide karta hai, `.child` wala Grandchildren ki position decide karta hai. Ye **ek doosre ko bilkul affect nahi karte.**

---

## 8. flex-grow, flex-shrink, flex-basis — Real Math Example

Maan lo 3 items hain, container ki width = `900px`:

```css
.item-1 { flex-grow: 1; flex-basis: 100px; }
.item-2 { flex-grow: 2; flex-basis: 100px; }
.item-3 { flex-grow: 1; flex-basis: 100px; }
```

**Calculation:**
1. Total basis = `100 + 100 + 100 = 300px`
2. Extra space available = `900 - 300 = 600px`
3. Total grow ratio = `1 + 2 + 1 = 4`
4. Har "ratio unit" ki value = `600 / 4 = 150px`
5. Final widths:
   - item-1 = `100 + (1 × 150) = 250px`
   - item-2 = `100 + (2 × 150) = 400px`
   - item-3 = `100 + (1 × 150) = 250px`

Total = `250 + 400 + 250 = 900px` ✅ (poori width use ho gayi)

---

## 9. Common Mistakes / Gotchas (interview mein bhi puchhe jate hain)

| Mistake | Reality |
|---|---|
| "`align-content` aur `align-items` same hain" | Nahi — `align-items` single line ke items ko align karta hai, `align-content` multiple LINES ko align karta hai |
| "`align-content` hamesha kaam karega" | Sirf `flex-wrap: wrap` ke saath kaam karta hai, `nowrap` (default) mein koi effect nahi |
| "`flex: 1` aur `flex-grow: 1` same hain" | `flex: 1` actually `flex-grow: 1; flex-shrink: 1; flex-basis: 0%;` set karta hai — sirf grow nahi |
| "Child pe `display:flex` lagane se wo parent ke andar apni position khud control kar lega" | Nahi — child khud ek flex ITEM hai apne parent ke liye; uska apna `justify-content` sirf uske bachon (grandchildren) ke liye kaam karega |
| "`flex-direction: column` mein `justify-content` vertical hi rahega" | Nahi — `column` mein main axis vertical ho jata hai, to `justify-content` bhi vertical ho jata hai (aur `align-items` horizontal) |

---

## 10. Quick Cheat Sheet

```css
/* ===== PARENT (Container) ===== */
.parent {
  display: flex;                 /* ya inline-flex */
  flex-direction: row;            /* row | row-reverse | column | column-reverse */
  flex-wrap: nowrap;              /* nowrap | wrap | wrap-reverse */
  justify-content: flex-start;    /* main-axis alignment */
  align-items: stretch;           /* cross-axis alignment (single line) */
  align-content: stretch;         /* cross-axis alignment (multiple lines, needs wrap) */
  gap: 0px;                       /* spacing between items */
}

/* ===== CHILD (Item) ===== */
.item {
  order: 0;
  flex-grow: 0;
  flex-shrink: 1;
  flex-basis: auto;
  flex: 0 1 auto;                 /* grow shrink basis shorthand */
  align-self: auto;               /* overrides parent's align-items for this item */
}
```

---

## 11. Common Interview Questions

**Q: Flexbox ka main purpose kya hai?**
1-dimensional layouts (ek row ya column) ko easily arrange, align, aur space-distribute karna.

**Q: Main axis aur cross axis mein farak?**
Main axis `flex-direction` se decide hoti hai; cross axis hamesha uske perpendicular hoti hai.

**Q: `justify-content` aur `align-items` mein farak?**
`justify-content` main axis pe kaam karta hai, `align-items` cross axis pe.

**Q: `align-items` aur `align-content` mein farak?**
`align-items` single line ke andar items ko align karta hai; `align-content` poori lines (jab `flex-wrap: wrap` se multiple lines bani ho) ko align karta hai.

**Q: `align-content` kab koi effect nahi dikhata?**
Jab `flex-wrap: nowrap` ho (default) — kyunki tab sirf ek hi line banti hai, aur `align-content` ka kaam hi multiple lines ko distribute karna hai.

**Q: Agar parent aur child dono pe `display: flex` ho, to child ka apna `justify-content` kisko affect karega?**
Sirf child ke apne grandchildren ko — child khud apne parent ke andar kaise position hoga, ye parent ke `justify-content`/`align-items` ya child ke `align-self` se decide hota hai, child ke apne `justify-content` se nahi.

**Q: Default `flex-shrink` value kya hai?**
`1` — matlab by default sab items zaroorat padne par shrink ho sakte hain.

**Q: Default `flex-grow` value kya hai?**
`0` — matlab by default items extra space nahi lete, apne natural size pe rehte hain.

---

## 12. What You Must Master

- Main Axis vs Cross Axis (ye sabse zaroori concept hai)
- Parent Properties: `flex-direction`, `flex-wrap`, `justify-content`, `align-items`, `align-content`, `gap`
- Child Properties: `order`, `flex-grow`, `flex-shrink`, `flex-basis`, `flex`, `align-self`
- `align-content` ka `flex-wrap` pe dependency
- Nested flex containers mein parent vs child properties ka independent behavior

Ye sab concepts mil ke Flexbox ka **poora foundation** bana dete hain — isse zyada gehराई CSS Grid mein jaati hai, jo 2-dimensional layouts ke liye hai.
