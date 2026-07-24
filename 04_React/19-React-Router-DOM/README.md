# React Router DOM - Complete Notes 📘

## Routing Kya Hota Hai? (Pehle Ye Samjho)

Normal websites me jab tum ek link pe click karte ho (jaise Home se About page pe jana), to **poora naya page server se mangwaya jata hai** aur **browser reload** hota hai.

React ek **Single Page Application (SPA)** banata hai - matlab poori website **sirf ek hi HTML file** pe chalti hai. To phir Home, About, Contact jaise **alag-alag "pages" ka feel** kaise diya jaye, bina reload kiye?

Isi kaam ke liye **"Routing"** ka concept aata hai, aur React me isko handle karne wali library hai - **React Router DOM**.

**Simple Definition:** Routing ka matlab hai - **URL ke hisaab se decide karna ki screen pe kaunsa component dikhana hai**, bina page reload kiye.

```bash
npm install react-router-dom
```

---

## Routing Ke Main Parts (Building Blocks)

### 1️⃣ `<Routes>`
Ye ek **container/wrapper** hai jiske andar tumhare sare routes (raste) define hote hain. Isko socho ek **directory board** ki tarah jo batata hai "kaunsa raasta kaha jata hai".

### 2️⃣ `<Route>`
Ye **ek single path ka definition** hai - "agar URL ye hai, to ye component dikhao".

```jsx
<Route path="/about" element={<About/>} />
```
Matlab: **"agar URL `/about` hai, to `About` component dikhao"**

### 3️⃣ `path`
Ye batata hai **URL kaisa dikhna chahiye** (jaise `/`, `/about`, `/contact`).

### 4️⃣ `element`
Ye batata hai **kaunsa component render hoga** us path pe.

### 5️⃣ `<Link>`
Ye normal `<a>` tag jaisa dikhta hai, jiske through user **navigate** karta hai (ek route se doosre route pe jata hai) - **bina page reload kiye**. (Isko neeche detail me samjhenge)

---

## Router Ke Types (Sabse Pehle Ye Choose Karna Padta Hai)

Routing use karne se pehle, tumhe decide karna padta hai ki **URL ko kaise manage karna hai**. Iske liye React Router alag-alag "Router" deta hai. In sabko poore app ke **sabse bahar wrap** kiya jata hai.

### 1️⃣ Browser Router (Sabse Zyada Use Hota Hai)

Ye **browser ke real URL bar** pe kaam karta hai. Jo address bar me dikhta hai, wahi actual route hota hai.

```
mysite.com/          → Home Page
mysite.com/about     → About Page
```

```jsx
import { BrowserRouter } from 'react-router-dom';

<BrowserRouter>
  {/* Routes yaha andar aayenge */}
</BrowserRouter>
```

🔥 **Real Example:** Jaise ek building ke room numbers hote hain (Room 101, 102) - address clearly bahar se dikhta hai, sabko pata chalta hai kaunsa room hai.

---

### 2️⃣ Hash Router

Agar tum route ko **server se chupa kar rakhna** chahte ho, tab ise use karte hain. URL me `#` lag jata hai:

```
mysite.com/#/about
```

`#` ke baad wala part sirf **browser handle karta hai**, server tak jata hi nahi.

🔥 **Real Example:** Jaise ek envelope pe bahar sirf "House No. 5" likha ho, par andar ek chit ho jo sirf ghar wale (browser) hi padh sakte hain - postman (server) ko wo nahi dikhti.

---

### 3️⃣ Memory Router

Ye routing ko **memory (RAM) me save** karta hai - na URL change hota hai, na kahi permanently store hota hai. Refresh/close hote hi routing history **gayab** ho jati hai.

Zyada tar **testing** ya **non-browser environments** (React Native, embedded apps) me use hota hai.

🔥 **Real Example:** Jaise tumne kuch apne **dimaag me yaad rakha** - kahi likha nahi. Neend aayi (refresh/close), to sab bhool gaye.

---

### 4️⃣ Static Router

Ye tab use hota hai jab app **browser me nahi, server pe render** ho raha ho (Server-Side Rendering - SSR). URL manually, fixed value ki tarah pass kiya jata hai.

🔥 **Real Example:** Jaise ek **printed newspaper** - content already print/fix ho chuka hai, reader interactively kuch badal nahi sakta. Server pehle se "print" karke bhejta hai.

---

### Quick Comparison

| Router | URL Kaisa Dikhta Hai | Kab Use Karein |
|---|---|---|
| **BrowserRouter** | `/about` (clean URL) | Normal production websites (sabse common) |
| **HashRouter** | `/#/about` | Jab server ko route chupana ho |
| **MemoryRouter** | Kahi dikhta nahi | Testing, React Native, embedded apps |
| **StaticRouter** | Server-side fixed URL | Server-Side Rendering (SSR) |

> Is poore note me aage hum **BrowserRouter** use karke hi example dekhenge, kyunki wahi sabse common hai.

---

## Real World Example - YouTube 🎥

Ye samjhna sabse zaruri hai.

Socho tum YouTube pe ho aur ek video pe click karte ho:
- Video **turant play** ho jata hai
- URL **upar change** ho jata hai (jaise `youtube.com/watch?v=abc123`)
- Lekin **poora page reload nahi hota** - Navbar, sidebar, comments section, sab kuch **waisa hi** rehta hai, sirf **beech wala video/content part badalta hai**

Yehi **Routing** hai:
- **`path`** = video ka URL (`/watch?v=abc123`)
- **`element`** = wo video player component jo dikh raha hai
- Jab tum doosre video pe click karte ho (`Link` use karke), sirf **content change** hota hai, **poora page reload nahi hota**

Agar YouTube normal (non-SPA) website hoti, to har video click pe **poora page dobara load hota** (jaisa `<a>` tag se hota hai) - slow aur flash-y experience. React Router isi ko rokta hai.

---

## Ab Isi Concept Ko Apne Project Ke Code Me Dekhte Hain

Project Structure (Reference):

```
19-React-Router-DOM/
├── src/
│   ├── assets/
│   ├── components/
│   │   └── Navbar.jsx
│   ├── Pages/
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   └── Home.jsx
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
```

Yaha `Pages` folder me har route ke liye **alag component** rakha gaya hai (Home, About, Contact) - aur `components` folder me reusable cheezein (jaise Navbar) rakhi hain.

---

## App.jsx Code

```jsx
import React from 'react'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Home from './Pages/Home'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
      </Routes>
    </div>
  )
}

export default App
```

### Isme Ho Kya Raha Hai

- `<Navbar/>` - Ye **hamesha** dikhega, chahe koi bhi page ho (Home/About/Contact) - kyunki ye `<Routes>` ke **bahar** hai
- `<Routes>` - Sare routes ko group karta hai
- `<Route path='/' element={<Home/>} />` - Jab URL `/` ho, to `Home` component dikhega
- `<Route path='/about' element={<About/>} />` - Jab URL `/about` ho, to `About` component dikhega
- Same tarah `/contact` pe `Contact` component dikhega

---

## Real World Example - YouTube 🎥

Socho tum **YouTube** pe ho. Jab tum kisi **video pe click** karte ho:
- Video **turant play** ho jata hai
- URL **upar change** ho jata hai (jaise `youtube.com/watch?v=abc123`)
- Lekin **page reload nahi hota** - Navbar, sidebar, comments section - sab kuch waisa hi rehta hai, sirf **video wala part change** hota hai

Yehi exactly React Router karta hai:
- URL change hoga (`/`, `/about`, `/contact`)
- Sirf `<Routes>` ke andar wala component change hoga
- Baaki cheezein (jaise Navbar) **as it is** rahengi, dobara render nahi hongi
- **Poora page reload nahi hoga** - yehi to SPA (Single Page Application) ka fayda hai

---

## `<a>` Tag vs `<Link>` Tag - Bahut Zaruri Concept ⚠️

Agar tum navigation ke liye normal HTML **`<a>` tag** use karoge:

```jsx
<a href="/about">About</a>
```

To ye kaam to karega, **par page reload ho jayega** - jaise ek normal multi-page website me hota hai. Iska matlab:
- Poora React app **dobara mount** hoga
- State, data - sab **reset** ho jayega
- Thoda **slow bhi feel** hoga (flash/blink dikhega)

### Isiliye React Router DOM me `Link` Tag Aata Hai

```jsx
import { Link } from 'react-router-dom';

<Link to="/about">About</Link>
```

`Link` dikhne me bilkul `<a>` tag jaisa hi hai (aur HTML me render bhi `<a>` hi hota hai), **lekin** ye React Router ko internally batata hai:
> "Page reload mat karo, sirf URL change karo aur sahi component dikhao"

### 🔥 Real World Example
`<a>` tag = jaise tum YouTube video dekhte-dekhte **poora browser tab band karke naya khol** dete ho next video dekhne ke liye - sab kuch dobara load hoga, time lagega.

`Link` tag = jaise tum **YouTube ke andar hi next video pe click** karte ho - video badalta hai, URL badalta hai, par tab wahi ka wahi rehta hai, kuch reload nahi hota, turant smooth transition hota hai.

---

## Navbar Me `Link` Ka Use (Real Example)

```jsx
// components/Navbar.jsx
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  );
}

export default Navbar;
```

Ab jab bhi tum in links pe click karoge, **URL change hoga, component switch hoga, par page reload nahi hoga** - bilkul YouTube jaisa smooth experience.

---

## Quick Summary Table

| Point | `<a>` Tag | `<Link>` Tag |
|---|---|---|
| Page reload hota hai? | ✅ Haan | ❌ Nahi |
| Speed | Slow (poora page dobara load) | Fast (sirf component change) |
| State/data reset hota hai? | ✅ Haan, sab reset | ❌ Nahi, safe rehta hai |
| Kaha se aata hai | Normal HTML | `react-router-dom` library se |
| SPA ke liye sahi hai? | ❌ Nahi | ✅ Haan |

---

## Poora Flow Kaise Kaam Karta Hai

```
User Link pe click karta hai (<Link to="/about">)
        ↓
React Router URL change karta hai (browser bar me /about dikhega)
        ↓
Page reload NAHI hota
        ↓
<Routes> dekhta hai kaunsa path match hua
        ↓
Sahi component (<About/>) render hota hai
        ↓
Baaki UI (Navbar, etc.) waisa hi rehta hai
```

---

### 💡 One-Line Yaad Rakhne Wali Baat
> `<a>` tag se **poora page reload** hota hai (normal website ki tarah), `<Link>` tag se sirf **URL aur component change** hote hain, page reload nahi hota - bilkul **YouTube pe video click karne** jaisa smooth experience.