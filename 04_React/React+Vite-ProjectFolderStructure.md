
## 1. `node_modules/`

Ye folder **saare installed packages** (react, react-dom, vite, eslint, etc.) store karta hai.

- Banta hai jab `npm install` chalate ho
- **Manually edit mat karo**
- **GitHub pe push mat karo** (`.gitignore` me daal do)

> 🔥 Real Example: Jaise ek **tool-box** hai jisme sare औzaar (hammer, screwdriver) pade hain jo ghar banane me kaam aayenge. Tool-box khud ghar ka hissa nahi hai, isliye usko GitHub pe "dikhana" zaruri nahi.

---

## 2. `public/`

**Static files** yaha rehti hain - jo **directly browser se access** ho sakti hain, bina import kiye.

```
public/
├── favicon.svg   → Browser tab wala chota icon
└── icons.svg     → Project ke icons
```

Use karne ka tarika:
```jsx
<img src="/icons.svg" />
```
👉 Import karne ki zarurat nahi, seedha path se chal jayega.

---

## 3. `src/`

Ye **sabse important folder** hai - zyada tar React ka code yahi likha jata hai.

```
src/
├── assets/
├── components/
├── App.css
├── App.jsx
├── index.css
└── main.jsx
```

---

## 4. `src/assets/`

Images, SVGs, icons yaha rehti hain.

```
assets/
├── hero.png    → Website ki main image
├── react.svg   → React ka logo
└── vite.svg    → Vite ka logo
```

⚠️ Inhe use karne se pehle **import karna padta hai:**

```jsx
import hero from "./assets/hero.png";

function App() {
  return <img src={hero} alt="Hero" />;
}
```

---

## 5. `src/components/`

Yaha **reusable UI parts** rakhe jate hain - jaise Card, Navbar, Footer.

```
components/
├── Card.jsx
├── Navbar.jsx
└── Footer.jsx
```

Example - Job Card:
```jsx
function Card() {
  return (
    <div>
      <h2>Google</h2>
      <p>Frontend Developer</p>
    </div>
  );
}

export default Card;
```

**Kaam:** Code clean rakhna, UI reusable banana, badi page ko chote-chote parts me todna.

---

## 6. `src/App.jsx`

Ye **main component** hai - poori UI yahi se shuru hoti hai.

```jsx
import Card from "./components/Card";

function App() {
  return (
    <div>
      <Card />
      <Card />
      <Card />
    </div>
  );
}

export default App;
```

**Kaam:** Components import karna, data manage karna, `.map()` se multiple cards dikhana:

```jsx
{jobs.map((job) => {
  return <Card job={job} />;
})}
```

---

## 7. `src/App.css`

`App.jsx` se related **styling** yaha likhi jati hai - card layout, button design, spacing, etc.

```css
.card-container {
  display: flex;
  gap: 20px;
}
```

---

## 8. `src/index.css`

Ye **global CSS** hoti hai - poori website pe apply hoti hai.

```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background-color: #f5f5f5;
  font-family: Arial, sans-serif;
}
```

**Kaam:** Body styling, font-family, margin/padding reset, common styles.

---

## 9. `src/main.jsx`

Ye **React app ka actual starting point** hai.

```jsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
```

**3 kaam karta hai:**
1. `App.jsx` import karta hai
2. `index.css` import karta hai
3. React app ko HTML ke root div me render karta hai

**Flow:**
```
index.html → <div id="root"></div> → main.jsx → createRoot() → <App /> → Browser UI
```

---

## 10. `.gitignore`

Ye file batati hai **Git ko kya-kya push nahi karna** GitHub pe.

```
node_modules
dist
.env
```

> 🔥 Real Example: Jaise packing list me likha ho "ye cheezein saath mat le jaana" - waisa hi `.gitignore` Git ko bolta hai kaunsi files ignore karni hain.

---

## 11. `eslint.config.js`

**ESLint** ek code checker hai - ye pakadta hai:
- Unused variables
- Syntax mistakes
- Bad coding practices
- Formatting issues

Example warning:
```
'name' is assigned a value but never used
```

**Kaam:** Code clean rakhna, mistakes se bachana, quality improve karna.

---

## 12. `index.html`

Project ki **main HTML file**.

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <title>Card Project</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
```

**Important lines:**
- `<div id="root"></div>` → Khaali div jaha React app dikhega
- `<script src="/src/main.jsx">` → HTML ko React app se connect karta hai

---

## 13. `package.json`

Project ki **sabse important file** - isme hota hai:
- Project name & version
- Scripts
- Dependencies & Dev Dependencies

```json
{
  "name": "card-project",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "react": "^19.0.0",
    "react-dom": "^19.0.0"
  }
}
```

**Important commands:**
| Command | Kaam |
|---|---|
| `npm run dev` | Project local pe chalao |
| `npm run build` | Production build banao |
| `npm run preview` | Production build preview karo |

---

## 14. `package-lock.json`

Ye file **exact versions** store karti hai installed packages ki.

**Kaam:** Ensure karta hai ki jab bhi koi project clone kare aur `npm install` chalaye, **same versions** install ho har system pe. Ise GitHub pe push karna chahiye.

---

## 15. `README.md`

GitHub repo open karne pe sabse pehle ye file dikhti hai. Isme hota hai:
- Project name & description
- Features
- Tech stack
- Run karne ka tarika
- Screenshot / Live link

```md
# Card Project

A React job card project built using Vite.

## Tech Stack
- React JS
- Vite
- CSS

## Run Locally
npm install
npm run dev
```

---

## 16. `vite.config.js`

Vite ki **configuration file** - ye batati hai ki project React use kar raha hai.

```js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
});
```

Agar live reload OneDrive folder me thik na chale, to ye add karo:
```js
server: {
  watch: {
    usePolling: true,
  },
},
```

---

## React App Ka Flow (Step by Step) 🔁

```
npm run dev
   ↓
Vite server start hota hai
   ↓
index.html load hota hai
   ↓
index.html, main.jsx run karta hai
   ↓
main.jsx, App.jsx render karta hai
   ↓
App.jsx components use karta hai
   ↓
Components CSS aur assets use karte hain
   ↓
Final UI browser me dikhta hai
```

---

## `public` vs `src/assets` - Farak Kya Hai?

| Point | `public` | `src/assets` |
|---|---|---|
| Use karne ka tarika | Direct path se | Import karke |
| Example | `<img src="/icons.svg" />` | `import hero from "./assets/hero.png"` |
| Import zaruri? | ❌ Nahi | ✅ Haan |

**Simple yaad:**
```
public     = direct path
src/assets = import and use
```

---

## VS Code me Green `U` ka Matlab

Source Control me `U` ka matlab hai **Untracked** - Git ko file mil gayi hai, par abhi tak **tracking me add nahi hui**.

Track aur push karne ke liye:
```bash
git add .
git commit -m "Add card project"
git push origin main
```

---

## Beginners Ke Liye Sabse Important Files 🎯

| File/Folder | Matlab |
|---|---|
| `index.html` | HTML entry point |
| `main.jsx` | React ka starting point |
| `App.jsx` | Main UI component |
| `components/` | Reusable UI parts |
| `App.css` | App-level styling |
| `index.css` | Global styling |
| `package.json` | Project scripts & dependencies |

---

### 💡 One-Line Yaad Rakhne Wali Baat
> Har file ka apna ek fixed kaam hota hai - `main.jsx` shuruaat karta hai, `App.jsx` UI banata hai, `components/` usko reusable parts me todta hai, aur `package.json` pura project manage karta hai.
