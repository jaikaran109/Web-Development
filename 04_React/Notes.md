# React JS - Notes 📘

## React JS kya hai?

React JS ek **JavaScript library** hai jo **UI (User Interface)** banane ke kaam aati hai.

- Banaya gaya hai **Meta (Facebook)** ke dwara
- Ye websites/apps ko **interactive** banane me help karta hai
- Matlab: user jo bhi action kare (click, type, scroll), page usko turant react kare, bina reload kiye

---

## HTML/CSS/JS vs React - Farak kya hai?

HTML, CSS, JS - ye bhi frontend banane ke liye use hote hain. Toh sawal ye uthta hai ki React alag kaise hai?

### 🔥 Real World Example - Facebook Friend Request

**Normal HTML/CSS/JS se:**
> Maan lo kisi ne tumhe Facebook pe friend request bheji.
> - Tumhe wo request dikhne ke liye **page refresh** karna padega
> - Agar 5 min baad koi aur request aayi, toh usko dekhne ke liye **fir se refresh** karna padega

**React JS se:**
> - Jaise hi request aayi, **notification turant pop-up** ho jayega
> - Koi refresh karne ki zarurat nahi
> - Page ka sirf wahi part update hota hai jaha change hua hai, pura page nahi

Isi wajah se React apps **fast aur smooth** feel hote hain.

---

## React ka Core Idea - Components 🧩

React me pura UI ko **chote-chote parts (components)** me divide kar diya jata hai.

### Real World Example:
Ek Facebook page ko socho as a **LEGO set** 🧱

```
Facebook Page
├── Navbar Component
├── Sidebar Component
├── Post Component
│   ├── Profile Pic Component
│   ├── Like Button Component
│   └── Comment Box Component
└── Chat Component
```

- Har component apna kaam khud sambhalta hai
- Ek component me change karo, baaki sab safe rehte hain
- Reusable hote hain - ek "Post Component" bana ke usko baar-baar use kar sakte ho

---

## Framework vs Library 🏗️

Ye difference samajhna bahut important hai.

### 📚 Library - "Plot mila hai, ghar khud banao"

> Maan lo tumhe ek **khaali plot** mil gaya. Ab ghar kaisa banana hai, room kaha rakhna hai, kitna bada rakhna hai - sab **tumhare hath me** hai. Full freedom milti hai customization ki.

- Har kaam ke liye alag-alag library use kar sakte ho apni marzi se
- Tum decide karte ho ki kaunsi cheez kaise use karni hai

**Examples:**
| Library | Kaam |
|---|---|
| React JS | UI banane ke liye |
| GSAP | Animations ke liye |
| Lenis | Smooth scrolling ke liye |

---

### 🏠 Framework - "Bana banaya ghar khareeda"

> Maan lo tumne ek **ready-made ghar** khareed liya. Ab tum usme koi room tod ke bada-chota nahi kar sakte. Sab kuch already **fixed structure** me set hai, tumhe usi rule ke hisaab se chalna padega.

- Kam customization milta hai
- Framework khud decide karta hai ki kaam kaise hoga (structure, rules already set hai)

**Examples:**
- Next JS
- Angular

---

## Quick Summary Table

| Point | Library (React) | Framework (Next JS/Angular) |
|---|---|---|
| Control | Tumhare hath me zyada | Framework ke rules follow karne padte hain |
| Flexibility | High | Limited |
| Example | Plot mila, ghar khud banao | Bana banaya ghar khareeda |
| Real Example | React, GSAP, Lenis | Next JS, Angular |

---

### 💡 One-Line Yaad Rakhne Wali Baat
> **Library** = Tumhare paas control hai kya use karna hai
> **Framework** = Framework ke paas control hai tum kya use kar sakte ho