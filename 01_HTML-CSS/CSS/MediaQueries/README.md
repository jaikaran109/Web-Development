# CSS Media Queries 

**"One website — every screen size."**

Media Queries CSS ka woh feature hain jo **screen ki width, height, orientation, ya user preferences** ke hisaab se **alag-alag CSS rules apply karne** dete hain. Yahi Responsive Design ka core building block hai.

## Table of Contents
1. [Basic Syntax](#1-basic-syntax)
2. [`min-width` vs `max-width`](#2-min-width-vs-max-width)
3. [Standard Breakpoints](#3-standard-breakpoints)
4. [Mobile-First vs Desktop-First](#4-mobile-first-vs-desktop-first)
5. [Use Cases](#5-use-cases)
6. [Advantages](#6-advantages)
7. [The `max-width` Ordering Bug](#7-the-max-width-ordering-bug)
8. [Range Queries](#8-range-queries)
9. [Common Mistakes](#9-common-mistakes)
10. [Cheat Sheet](#10-cheat-sheet)
11. [Interview Questions](#11-interview-questions)

---

## 1. Basic Syntax

```css
@media (condition) {
  /* yahan likhi CSS sirf tab apply hogi jab condition true ho */
}
```

```css
@media (min-width: 768px) {
  .sidebar {
    display: block;
  }
}
```
Matlab: screen width `>= 768px` hone par hi `.sidebar` visible hoga.

---

## 2. `min-width` vs `max-width`

| Query | Matlab | Kab active |
|---|---|---|
| `min-width: 768px` | "768px aur usse zyada" | width `>= 768px` |
| `max-width: 768px` | "768px aur usse kam" | width `<= 768px` |

```
min-width: 768px  →  768px ───────────────► ∞
max-width: 768px  →  0 ───────────────► 768px
```

---

## 3. Standard Breakpoints

| Device | Width Range |
|---|---|
| Mobile | `< 480px` |
| Large Mobile | `480px – 767px` |
| Tablet | `768px – 1023px` |
| Laptop | `1024px – 1279px` |
| Desktop | `>= 1280px` |

> Ye numbers fixed "rule" nahi hain — industry convention hai, project ke content ke hisaab se adjust ho sakte hain.

---

## 4. Mobile-First vs Desktop-First

| | Mobile-First | Desktop-First |
|---|---|---|
| Base styles | Mobile ke liye | Desktop ke liye |
| Query property | `min-width` | `max-width` |
| Required order | Ascending (small → large) | Descending (large → small) |

```css
/* ===== MOBILE-FIRST (Recommended) ===== */
.container { flex-direction: column; }            /* base = mobile */

@media (min-width: 768px) {
  .container { flex-direction: row; }
}
@media (min-width: 1024px) {
  .container { max-width: 1200px; }
}
```

> Modern standard = **Mobile-First**, kyunki aaj zyada traffic mobile se aata hai, aur CSS halka rehta hai (kam overrides chahiye).

---

## 5. Use Cases

### 5.1 Responsive Navigation
```css
.nav-links { display: none; }      /* mobile: links hidden, hamburger icon dikhega */
.hamburger { display: block; }

@media (min-width: 1024px) {
  .nav-links { display: flex; }    /* desktop: full nav visible */
  .hamburger { display: none; }
}
```

### 5.2 Responsive Grid Layout (column count badalna)
```css
.product-grid {
  display: grid;
  grid-template-columns: 1fr;              /* mobile: 1 column */
}

@media (min-width: 768px) {
  .product-grid { grid-template-columns: repeat(2, 1fr); }  /* tablet: 2 columns */
}

@media (min-width: 1280px) {
  .product-grid { grid-template-columns: repeat(4, 1fr); }  /* desktop: 4 columns */
}
```

### 5.3 Responsive Typography
```css
h1 { font-size: 1.8rem; }

@media (min-width: 1024px) {
  h1 { font-size: 3rem; }
}
```

### 5.4 Hiding/Showing Elements (Sidebar, Ads, etc.)
```css
.sidebar { display: none; }

@media (min-width: 1024px) {
  .sidebar { display: block; }
}
```

### 5.5 Dark Mode Detection (User Preference)
```css
@media (prefers-color-scheme: dark) {
  body {
    background-color: #111;
    color: #f0f0f0;
  }
}
```
> User ke **OS-level** dark mode setting ko detect karta hai — koi toggle button banaye bina automatic theming.

### 5.6 Reduced Motion (Accessibility)
```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation: none !important;
    transition: none !important;
  }
}
```
> Jo users motion-sensitivity ki wajah se animations off rakhte hain (OS setting), unke liye animations disable kar do — accessibility ke liye important.

### 5.7 Print Stylesheets
```css
@media print {
  .navbar, .sidebar, .ads, button {
    display: none;     /* print karte waqt ye elements hata do */
  }
  body {
    color: black;
    font-size: 12pt;
  }
}
```
> Jab user `Ctrl+P` (print) dabata hai, tab ye styles apply hoti hain — navigation/ads hata ke clean printed page banata hai.

### 5.8 High-Resolution (Retina) Images
```css
.logo {
  background-image: url("logo.png");
}

@media (min-resolution: 2dppx) {
  .logo {
    background-image: url("logo@2x.png");  /* sharper image high-DPI screens ke liye */
  }
}
```

### 5.9 Orientation-Based Layout
```css
@media (orientation: landscape) {
  .video-player { height: 100vh; }
}
@media (orientation: portrait) {
  .video-player { height: 50vh; }
}
```

---

## 6. Advantages

| Advantage | Explanation |
|---|---|
| **Single Codebase** | Ek hi HTML/CSS se mobile, tablet, desktop sab handle ho jate hain — alag mobile site (`m.example.com`) banane ki zarurat nahi |
| **Better User Experience** | Har device pe content readable aur usable rehta hai, chahe screen kitni bhi chhoti/badi ho |
| **SEO Friendly** | Google mobile-friendly sites ko rank mein priority deta hai — ek hi URL structure maintain karna SEO ke liye bhi better hai |
| **Cost & Time Efficient** | Alag-alag platforms (mobile app/website) ke liye alag se design/develop karne ki zarurat nahi |
| **Future-Proof** | Naye devices/screen-sizes aane par (foldables, large TVs) bina major rewrite ke adapt ho jata hai |
| **Accessibility Support** | `prefers-color-scheme`, `prefers-reduced-motion` jaise features se users ki personal accessibility needs respect hoti hain |
| **No JavaScript Required** | Pure CSS se layout/behavior change ho jata hai — performance behtar rehta hai (JS-based solutions se halka) |

---

## 7. The `max-width` Ordering Bug

### Rule
```
max-width queries hamesha LARGEST se SMALLEST order mein likho.
```

### Kyun
CSS Cascade rule: agar 2 rules same specificity ke saath same element pe apply hote hain, to **source mein last likha hua rule jeetega**.

`max-width` ranges overlap karti hain — `max-width:1024px` aur `max-width:1280px` dono ek `500px` screen ko match karengi.

### ❌ Galat Order
```css
@media (max-width: 1024px) {
  h1 { background-color: red; }
}
@media (max-width: 1280px) {
  h1 { background-color: green; }
}
```
**Result:** `red` KABHI show nahi hoga, kyunki `1280px` ka rule baad mein likha hai aur har `<=1024` screen pe bhi match karke usse dominate karta hai.

### ✅ Sahi Order
```css
@media (max-width: 1280px) {
  h1 { background-color: green; }   /* badi range pehle */
}
@media (max-width: 1024px) {
  h1 { background-color: red; }     /* chhoti range baad mein - isiliye jeetegi */
}
```

### Yaad rakhne ka tarika
```
max-width  →  BADA pehle, CHHOTA baad mein   (descending)
min-width  →  CHHOTA pehle, BADA baad mein   (ascending)
```

---

## 8. Range Queries

```css
/* Sirf Tablet (768px - 1023px) target karna */
@media (min-width: 768px) and (max-width: 1023px) {
  .container { background-color: lightblue; }
}
```

---

## 9. Common Mistakes

| Mistake | Reality |
|---|---|
| "`max-width` order matter nahi karta" | Karta hai — bada-to-chhota rakho |
| "Mobile-first matlab sirf mobile design karna" | Nahi — base CSS mobile ke liye, phir progressively enhance |
| "`px` hi sirf valid unit hai" | `em`/`rem` bhi use ho sakte hain (accessibility-friendly) |
| "Media queries JavaScript replace kar sakti hain" | Nahi — layout/style changes ke liye haan, lekin complex logic/interactivity ke liye JS hi chahiye |
| "`prefers-color-scheme` automatically dark mode toggle button bana deta hai" | Nahi — ye sirf OS-level preference detect karta hai; manual toggle banane ke liye JS + `data-theme` attribute jaisa approach chahiye |

---

## 10. Cheat Sheet

```css
/* MOBILE-FIRST (ascending order) */
@media (min-width: 480px)  { /* Large Mobile */ }
@media (min-width: 768px)  { /* Tablet */ }
@media (min-width: 1024px) { /* Laptop */ }
@media (min-width: 1280px) { /* Desktop */ }

/* DESKTOP-FIRST (descending order) */
@media (max-width: 1279px) { /* Laptop and below */ }
@media (max-width: 1023px) { /* Tablet and below */ }
@media (max-width: 767px)  { /* Large Mobile and below */ }
@media (max-width: 479px)  { /* Mobile */ }

/* RANGE QUERY */
@media (min-width: 768px) and (max-width: 1023px) { /* Tablet only */ }

/* USER PREFERENCES */
@media (prefers-color-scheme: dark)   { /* dark mode */ }
@media (prefers-reduced-motion: reduce) { /* less animation */ }

/* PRINT */
@media print { /* print-only styles */ }

/* ORIENTATION */
@media (orientation: landscape) { }
@media (orientation: portrait)  { }
```

---

## 11. Interview Questions

**Q: Media query kya hai?**
CSS feature jo screen/user-preference conditions ke hisaab se alag CSS apply karta hai.

**Q: `min-width` aur `max-width` mein farak?**
`min-width` = "X aur usse zyada"; `max-width` = "X aur usse kam".

**Q: `max-width` queries ka sahi order?**
Sabse bada pehle, sabse chhota last — warna bada wala chhote ko hamesha override kar dega.

**Q: Media queries ke 3-4 real use cases batao.**
Responsive navigation, responsive grid layouts, dark mode detection, print stylesheets, reduced-motion accessibility support.

**Q: Media queries ka sabse bada advantage kya hai?**
Single codebase se sab devices handle ho jate hain — alag mobile/desktop site banane ki zarurat nahi padti.

**Q: `prefers-reduced-motion` kis liye use hota hai?**
Motion-sensitive users ke liye (jo apne OS mein "reduce motion" on karte hain) animations/transitions disable karne ke liye — accessibility feature hai.

**Q: Kya media queries JavaScript ko replace kar sakti hain?**
Sirf style/layout changes ke liye — complex interactivity/logic ke liye JS hi zaroori hai.

---

## What You Must Master
- `min-width` vs `max-width`
- Standard breakpoints
- Mobile-first approach + ascending order
- 🚨 `max-width` descending order rule
- Real use cases: navigation, grids, typography, dark mode, print, accessibility
- Range queries
