# React Events - Functions Calling

## Ye Folder Kis Baare Me Hai?

Is folder me React me **events handle karna** aur **functions ko call/initialize karna** sikhaya gaya hai - jaise button click hone pe, mouse hover hone pe, ya input type karte waqt kya karna hai.

```jsx
import React from 'react'

const App = () => {

  function showAlert(){
    alert("Button clicked");
  }

  function mouseEnter(){
    console.log("Mouse Entered");
  }

  function inputChanging(){
    console.log("User is Typing");
  }

  return (
    <div>
      <h1>React Events</h1>

      <button type='button' onMouseEnter={mouseEnter} onClick={showAlert}
        style={{ backgroundColor: "black", color: "white" }}>
        Click here
      </button>

      <button type='button' style={{ marginLeft: "20px", padding: "10px 20px" }}
        onClick={function(){
          console.log("btn is clicked");
        }}>
        Click This
      </button>

      <input onChange={inputChanging} type="text" placeholder='Enter your name' />
    </div>
  )
}

export default App
```

---

## React Events Kya Hote Hain?

React me hum HTML jaise hi events use karte hain (click, hover, typing, etc.), bas naam **camelCase** me likhte hain aur value me **`{}`** ke andar function pass karte hain.

| HTML | React |
|---|---|
| `onclick` | `onClick` |
| `onmouseenter` | `onMouseEnter` |
| `onchange` | `onChange` |

---

## Function Call Karne Ke Tarike 🛠️

### 1️⃣ Pehle se bana hua function reference se dena

```jsx
function showAlert(){
  alert("Button clicked");
}

<button onClick={showAlert}>Click here</button>
```

Yaha `showAlert` function pehle se bana hua hai, aur usko **naam se refer** kar diya `onClick={showAlert}`.

⚠️ **Important Point:** `onClick={showAlert}` likha hai, `onClick={showAlert()}` **nahi**.

> Agar tum `showAlert()` likhte (bracket ke saath), to React usko **turant, page load hote hi call** kar deta - button click hone ka wait nahi karta. Bracket lagate hi function **turant execute** ho jata hai.
> Bina bracket ke (`showAlert`), tum React ko sirf **function ka reference** de rahe ho, jo React **button click hone par khud call karega**.

### 🔥 Real World Example
Ye aisa hai jaise tum kisi ko keh rahe ho **"jab ghanti baje, tab ye number dial karna"** (`onClick={showAlert}`) - vs - khud hi abhi call laga dena (`onClick={showAlert()}`). Pehla wala **condition pe depend** karta hai (button click), doosra **turant ho jata hai**.

---

### 2️⃣ Multiple Events Ek Element Pe Lagana

```jsx
<button onMouseEnter={mouseEnter} onClick={showAlert}>
  Click here
</button>
```

Ek hi button pe **do alag events** lag sakte hain:
- `onMouseEnter` → jab mouse button ke upar aaye
- `onClick` → jab button click ho

Dono **independent** hain, apna-apna kaam alag time pe karte hain.

---

### 3️⃣ Inline Function Likhna (Directly andar function define karna)

```jsx
<button onClick={function(){
  console.log("btn is clicked");
}}>
  Click This
</button>
```

Yaha function **kahi bahar bana hi nahi**, seedha `onClick` ke andar hi likh diya. Chota, one-time-use logic ke liye ye tarika kaafi use hota hai.

**Arrow function se bhi likh sakte ho (zyada common/modern tarika):**

```jsx
<button onClick={() => {
  console.log("btn is clicked");
}}>
  Click This
</button>
```

---

### 4️⃣ Input Events - `onChange`

```jsx
function inputChanging(){
  console.log("User is Typing");
}

<input onChange={inputChanging} type="text" placeholder='Enter your name' />
```

`onChange` event tab trigger hota hai jab bhi input box me **kuch type/change** hota hai. Har character type karte hi ye function call hota hai.

---

## Common Mistake - Function ko Call vs Reference Dena

| Likhna | Kya Hota Hai |
|---|---|
| `onClick={showAlert}` | ✅ Sahi - click hone par call hoga |
| `onClick={showAlert()}` | ❌ Galat - page load hote hi turant call ho jayega, click ka wait nahi karega |

---

## Quick Summary Table

| Event | Kab Trigger Hota Hai | Example |
|---|---|---|
| `onClick` | Element pe click karne par | `<button onClick={showAlert}>` |
| `onMouseEnter` | Mouse element ke upar aane par | `<button onMouseEnter={mouseEnter}>` |
| `onChange` | Input ki value change hone par | `<input onChange={inputChanging}>` |

---

### 💡 One-Line Yaad Rakhne Wali Baat
> Function ko **reference (`funcName`)** ki tarah do, **call (`funcName()`)** karke mat do - warna wo event ka wait kiye bina, **turant execute** ho jayega.