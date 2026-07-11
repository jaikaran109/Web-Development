# React + Tailwind CSS Setup - Steps 📘

*(Reference: Sheryians - Sarthak's 11hr video)*

Ye steps batate hain ki React (Vite) project me **Tailwind CSS** kaise connect karte hain - kaha se kya install/copy karna hai, aur kaha paste karna hai.

---

## Step 1: React + Vite Project Banao (agar pehle se nahi bana)

Terminal me:

```bash
npm create vite@latest my-project
cd my-project
npm install
```

---

## Step 2: Tailwind CSS Install Karo

Project ke terminal me ye command chalao:

```bash
npm install tailwindcss @tailwindcss/vite
```

👉 Ye 2 packages install karta hai:
- `tailwindcss` - Tailwind ka core
- `@tailwindcss/vite` - Vite ke saath Tailwind ko connect karne wala plugin

---

## Step 3: `vite.config.js` Me Plugin Add Karo

`vite.config.js` file kholo aur ye copy-paste karo:

```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
})
```

👉 **Kaha paste karna hai:** `vite.config.js` file (project ke root me hoti hai)
👉 **Kya change hua:** `tailwindcss` import add kiya, aur `plugins` array me `tailwindcss()` daal diya

---

## Step 4: `index.css` Me Tailwind Import Karo

`src/index.css` file kholo, **jo bhi purana CSS hai usse hata do**, aur sirf ye ek line likho:

```css
@import "tailwindcss";
```

👉 **Kaha paste karna hai:** `src/index.css`
👉 Ye line Tailwind ke saare utility classes (`flex`, `text-center`, `bg-red-500`, etc.) ko project me activate kar deti hai

---

## Step 5: Check Karo `main.jsx` Me `index.css` Import Ho Raha Hai

`src/main.jsx` me ye line already honi chahiye (Vite default me hoti hai):

```jsx
import './index.css'
```

Agar nahi hai, to ye line add kar do `main.jsx` ke upar.

---

## Step 6: Project Run Karo

```bash
npm run dev
```

---

## Step 7: Test Karo Tailwind Kaam Kar Raha Hai Ya Nahi

`App.jsx` me test ke liye ye likh kar dekho:

```jsx
function App() {
  return (
    <h1 className="text-3xl font-bold text-red-500">
      Tailwind is working!
    </h1>
  );
}

export default App;
```

Agar text **bada, bold aur red color** me dikhe browser me, to Tailwind successfully connect ho gaya hai ✅

---

## Quick Summary - Kaha Se Kya Copy Karna Hai

| Step | File | Kya Karna Hai |
|---|---|---|
| 1 | Terminal | `npm install tailwindcss @tailwindcss/vite` |
| 2 | `vite.config.js` | `tailwindcss` import karo, `plugins` array me add karo |
| 3 | `src/index.css` | Purana CSS hata ke `@import "tailwindcss";` likho |
| 4 | `src/main.jsx` | `import './index.css'` line honi chahiye |
| 5 | Terminal | `npm run dev` se run karo |

---

### 💡 One-Line Yaad Rakhne Wali Baat
> Sirf 2 files touch karni padti hain Tailwind connect karne ke liye - **`vite.config.js`** (plugin add karna) aur **`index.css`** (`@import "tailwindcss";` likhna). Baaki sab utility classes seedhe JSX me use karo.