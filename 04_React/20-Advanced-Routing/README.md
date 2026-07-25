# 20 - Advanced React Router - Notes 📘

Is project me React Router DOM ke **advanced concepts** cover kiye gaye hain - Nested Routes, Dynamic Routes, `useNavigate`, aur 404 Not Found page - real code ke saath.

---

## Project Structure

```
src/
├── components/
│   ├── Navbar.jsx
│   ├── Nav2.jsx
│   └── Footer.jsx
├── Pages/
│   ├── About.jsx
│   ├── Courses.jsx
│   ├── CoursesDetail.jsx
│   ├── Home.jsx
│   ├── Men.jsx
│   ├── NotFound.jsx
│   ├── Product.jsx
│   └── Women.jsx
├── App.jsx
└── main.jsx
```

---

## 1. `main.jsx` - Entry Point

```jsx
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)
```

Poore `App` ko **`BrowserRouter`** se wrap kiya gaya hai - ye zaruri hai kyunki `BrowserRouter` hi poore app ko **routing ki capability** deta hai. Isके bina `Routes`, `Route`, `Link` kuch bhi kaam nahi karega.

---

## 2. `App.jsx` - Sare Routes Yaha Define Hain

```jsx
import { Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <div className='h-screen w-screen bg-black text-white'>
      <Navbar />
      <Nav2 />
      <Routes>
        <Route path='/' element={<h1>Home Page</h1>} />
        <Route path='/about' element={<About/>} />

        <Route path='/product' element={<Product />} >
          <Route path='men' element={<Men />} />
          <Route path='women' element={<Women />} />
        </Route>

        <Route path='/courses' element={<Courses />} />
        <Route path='/courses/:id' element={<CoursesDetail />} />

        <Route path='*' element={<NotFound/>} />
      </Routes>

      <Footer />
    </div>
  )
}
```

**Important Point:** `Navbar`, `Nav2`, aur `Footer` - ye teeno `<Routes>` ke **bahar** hain, isliye ye **har page pe hamesha dikhte hain**, chahe URL kuch bhi ho. Sirf `<Routes>` ke andar wala hissa URL ke hisaab se badalta hai.

---

## 3. Nested Routes - `/product` Ka Example

```jsx
<Route path='/product' element={<Product />} >
  <Route path='men' element={<Men />} />
  <Route path='women' element={<Women />} />
</Route>
```

Yaha `Men` aur `Women` route, `Product` route ke **andar (nested)** define kiye gaye hain. Matlab:
```
/product         → Sirf Product page dikhega
/product/men     → Product page + uske andar Men dikhega
/product/women   → Product page + uske andar Women dikhega
```

### `Product.jsx` Me `Outlet` Ka Use

```jsx
import {Link, Outlet} from 'react-router-dom'

const Product = () => {
  return (
    <div>
      <div className='flex gap-10 justify-center py-4'>
        <Link to='/product/men'>Mens</Link>
        <Link to='/product/women'>Women's</Link>
      </div>
      <Outlet />
    </div>
  )
}
```

`<Outlet />` ek **placeholder** hai - jab URL `/product/men` hoga, to `Men` component **isi `<Outlet />` ki jagah** render hoga. `Product` component ka baaki layout (Links wala part) **as it is** rahega.

### 🔥 Real World Example
Jaise ek **clothing store** hai jiska naam hi "Product" hai. Store ke andar 2 sections hain - "Men's" aur "Women's". Store ka **gate/entrance (Product layout) same** rehta hai, bas jis section me tum jaate ho (`/men` ya `/women`), wahi **display change** hota hai. Poori shop dobara nahi banti.

---

## 4. Dynamic Routes - `/courses/:id` Ka Example

```jsx
<Route path='/courses/:id' element={<CoursesDetail />} />
```

`:id` ek **dynamic parameter** hai - iski jagah URL me kuch bhi aa sakta hai:
```
/courses/react     → CoursesDetail page khulega, id = "react"
/courses/nodejs    → CoursesDetail page khulega, id = "nodejs"
/courses/123       → CoursesDetail page khulega, id = "123"
```

### `CoursesDetail.jsx` Me `useParams` Ka Use

```jsx
import { useParams } from 'react-router-dom'

const CoursesDetail = () => {
  const params = useParams()   // URL ke parameters ko access karne ke liye

  return (
    <div>
      <h1>{params.id} Courses Detail Page</h1>
    </div>
  )
}
```

`useParams()` hook URL me se `:id` ki **actual value nikal kar deta hai**, jisse `params.id` se access kar sakte hain.

### 🔥 Real World Example
Jaise Udemy pe har course ka apna URL hota hai - `udemy.com/course/react-js`. Udemy ne har course ke liye **alag page nahi banaya**, ek hi **CourseDetail template** hai, bas URL se course ka naam/id nikal kar wahi data dikha dete hain.

---

## Dynamic Route vs Wildcard (`*`) - Farak Samjho

Code me hi ek zaruri comment hai jo ye clear karta hai:

> `/courses/:id` sirf **`courses` ke baad** kuch bhi likhne par trigger hota hai (jaise `/courses/react`). `*` (wildcard) **poore app me kahi bhi**, koi bhi **unknown/invalid route** likhne par trigger hota hai (jaise `/randomjunk`).

```jsx
<Route path='/courses/:id' element={<CoursesDetail />} />  {/* specific - sirf /courses/kuch pe */}
<Route path='*' element={<NotFound/>} />                    {/* general - kahi bhi na-match hone wale URL pe */}
```

---

## 5. 404 - Not Found Page

```jsx
// NotFound.jsx
const NotFound = () => {
  return (
    <div>
      <h1 className='text-red-600'>Not Found -- Entered Route is Not present</h1>
    </div>
  )
}
```

```jsx
<Route path='*' element={<NotFound/>} />
```

`*` (wildcard/star) ka matlab hai - **koi bhi aisa URL jo upar diye gaye kisi bhi route se match na ho**, uske liye ye route trigger hoga. Isiliye ye `<Routes>` me **sabse aakhri** likha jata hai - warna baaki routes kabhi trigger hi nahi honge.

---

## 6. `useNavigate` - `Nav2.jsx` Ka Example

`Nav2` component me 3 buttons hain jo **JavaScript code ke through navigate** karte hain (na ki `Link` ke through):

```jsx
import { useNavigate } from 'react-router-dom'

const Nav2 = () => {
  let navigate = useNavigate();

  return (
    <div className='bg-cyan-800'>
      <button onClick={() => { navigate('/') }}>
        Return to Home
      </button>

      <button onClick={() => { navigate(-1) }}>
        Back
      </button>

      <button onClick={() => { navigate(+1) }}>
        Next
      </button>
    </div>
  )
}
```

### `navigate()` Ke Alag-Alag Use

| Code | Kaam |
|---|---|
| `navigate('/')` | Directly ek **specific path** pe le jata hai (jaise Home) |
| `navigate(-1)` | Browser history me **ek step peeche** jata hai (jaise browser ka "Back" button) |
| `navigate(+1)` | Browser history me **ek step aage** jata hai (jaise browser ka "Forward" button) |

### 🔥 Real World Example
Jaise tum apni **car me GPS** use kar rahe ho:
- `navigate('/')` = "Mujhe seedha ghar le chalo" (specific destination)
- `navigate(-1)` = "Wahi wapas le chalo jaha se aaye the" (peeche jaana)
- `navigate(+1)` = "Jaha se peeche aaye the, wahi wapas aage le chalo"

---

## 7. `Navbar.jsx` - Normal Navigation With `Link`

```jsx
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex py-4 px-2 bg-cyan-900 items-center justify-between'>
      <h2>JK Cement</h2>
      <div className='flex gap-8'>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/courses'>Courses</Link>
        <Link to='/product'>Product</Link>
      </div>
    </div>
  )
}
```

`Navbar` me `Link` use hua hai kyunki ye **user ke click** se navigate hota hai (normal navigation), jabki `Nav2` me `useNavigate` use hua hai kyunki wo **button click hone par, code ke andar se** navigate karta hai.

---

## `Link` vs `useNavigate` - Kab Kya Use Karein

| Point | `Link` | `useNavigate` |
|---|---|---|
| Kaise trigger hota hai | User seedha click karta hai | Function ke andar se, code se call hota hai |
| Kaha use hota hai | Navbar, menu, normal links | Form submit hone ke baad, condition check hone ke baad, "Back/Next" buttons |
| Is project me example | `Navbar.jsx` (Home, About, Courses, Product) | `Nav2.jsx` (Return to Home, Back, Next buttons) |

---

## Quick Summary Table

| Concept | File | Kya Sikhaya |
|---|---|---|
| Basic Routing Setup | `main.jsx`, `App.jsx` | `BrowserRouter`, `Routes`, `Route` |
| Nested Routes | `App.jsx`, `Product.jsx` | `<Outlet />` - parent ke andar child render karna |
| Dynamic Routes | `App.jsx`, `CoursesDetail.jsx` | `:id` aur `useParams()` - URL se value nikalna |
| `useNavigate` | `Nav2.jsx` | Code se navigate karna - `navigate('/')`, `navigate(-1)`, `navigate(+1)` |
| 404 Page | `App.jsx`, `NotFound.jsx` | `path='*'` - kisi bhi unknown route ke liye fallback |
| Normal Navigation | `Navbar.jsx` | `<Link>` - click se navigate, page reload nahi hota |

---

### 💡 One-Line Yaad Rakhne Wali Baat
> **Nested Routes** = parent ke andar child (`Outlet`). **Dynamic Routes** = URL se value nikalna (`:id` + `useParams`). **`useNavigate`** = code se navigate karna. **`*`** = jo kuch match na ho, use "Not Found" pe bhej do.