# React Components - Project Structure Notes 📘

## Maine kya kiya?

- Vite ke through ek React project banaya (`react-component` naam ka folder)
- `index.css` ko apne hisaab se change kiya
- `App.jsx` ka existing (default) code hata kar apna khud ka code likha
- `src` ke andar ek alag folder banaya **component** naam se
- Usme 2 components banaye:
  - **Navbar** component
  - **Card** component (Name: Jaikaran, Age: 21)
- Dono ko `App.jsx` me **import** karke show karaya

---

## 2 Tarike Hote Hain Code Likhne Ke 🛤️

Jab React project banate ho, tumhare paas 2 options hote hain:

### 1️⃣ Sara code seedha App.jsx me likhna

Matlab Navbar, Card, sab kuch **ek hi file** (`App.jsx`) ke andar likh do.

### 2️⃣ Component-wise alag folder banana (Maine ye choose kiya ✅)

`src` ke andar ek `component` folder banao, usme har cheez (Navbar, Card, Footer, etc) ka **alag-alag file** banao, aur unhe `App.jsx` me **import** karke use karo.

```
src/
├── component/
│   ├── Navbar.jsx
│   └── Card.jsx
├── App.jsx
└── index.css
```

```jsx
// App.jsx
import Navbar from './component/Navbar';
import Card from './component/Card';

function App() {
  return (
    <>
      <Navbar />
      <Card name="Jaikaran" age={21} />
    </>
  );
}

export default App;
```

---

## 🔥 Real World Example - Dono Approach Samjho

### Approach 1 (Sab kuch App.jsx me) 
> Jaise ek hi **kitchen me** khana banana, kapde dhona, aur so bhi jana - sab ek hi kamre me. Chota ghar ho to chal jayega, par jaise-jaise cheezein badhengi, sab **gaddmadd (messy)** ho jayega.

### Approach 2 (Alag components banake import karna)
> Jaise ek **proper ghar** hota hai - kitchen alag, bedroom alag, bathroom alag. Har kamre ka apna kaam hai. Agar kitchen me kuch repair karna ho, to bedroom disturb nahi hota. **Organized aur manageable** rehta hai.

---

## Dono Approach Ke Advantages ⚖️

### Approach 1 - Sab kuch App.jsx me (Advantages)
- Chote project ya quick testing ke liye **fast** hai
- Ek hi file me sab kuch dikh jata hai, dhundhna nahi padta (jab code kam ho)
- Beginners ke liye samajhna easy hai starting me

### Approach 2 - Component Folder Banana (Advantages) ✅ (Maine ye use kiya)
- **Reusability** - Card component ko baar-baar, alag-alag jagah use kar sakte ho (bas naya data pass karo)
- **Readability** - Code clean aur organized rehta hai, dhundhna easy hota hai
- **Team work** me easy - alag-alag developer alag-alag component pe kaam kar sakte hain, ek doosre ko disturb kiye bina
- **Debugging easy** - agar Card me error hai, to sirf Card.jsx check karna hai, pura App.jsx nahi khangalna padega
- **Scalability** - project bada ho to bhi manage karna easy rehta hai
- Real projects (jaise Facebook, Instagram) me **hamesha ye approach** use hoti hai, kyunki UI hazaro components se bana hota hai

---

## Components Project Me Kaise Kaam Aate Hain? 🧩

- Ek **Navbar** component banao, use har page pe reuse karo (Home, About, Contact - sabme same Navbar)
- Ek **Card** component banao, use loop me chala kar 100 alag-alag users ke data ke saath dikhao (bas props change hote rahenge - jaise name, age)
- Agar kal ko Navbar ka design change karna ho, to **sirf ek file (Navbar.jsx)** update karo - jaha-jaha use ho raha hai, sab jagah **automatically update** ho jayega

Yehi React ki asli taakat hai - **"Ek baar banao, jaha chaho use karo"**

---

### 💡 One-Line Yaad Rakhne Wali Baat
> **Chota kaam** ho to sab ek file me theek hai, par **real projects** me hamesha component-wise folder structure use hoti hai - kyunki isse code **reusable, clean, aur manageable** rehta hai.