# React Hooks

## Hooks kya hote hain?

Hooks React ka ek **special feature** hain jo function components ko **superpowers** dete hain - jaise state rakhna, side effects handle karna, etc.

Pehle ye sab sirf **class components** me hi possible tha. Hooks aane ke baad **function components** me bhi ye sab ho sakta hai.

**Simple definition:** Hooks aise functions hain jo `use` se start hote hain (`useState`, `useEffect`, `useRef`, etc.) aur inhe hum apne function component ke **andar** call karte hain.

---

## Hooks - Ek Nazar Me (Overview) 👀

| Hook | Kaam |
|---|---|
| `useState` | State ko manage karne ke liye |
| `useEffect` | Side effects handle karne ke liye (jaise API call, DOM manipulation, event listener) |
| `useContext` | Global state ko consume karne ke liye, without prop drilling |
| `useReducer` | Complex state management ke liye (Redux jaisa chota version) |
| `useRef` | Mutable values hold karne ke liye jo re-render trigger na kare, ya DOM access karne ke liye |
| `useMemo` & `useCallback` | Optimization ke liye, unnecessary re-renders avoid karne ke liye |

Ab in sabko detail me samajhte hain 👇

---

## Sabse Important Hook: `useState`

Jab bhi tumhe kisi value ko **track/remember** karna ho, aur jab wo value change ho to **UI automatically update** ho jaye, tab `useState` use hota hai.

```jsx
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);   // 0 = starting value

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
}
```

- `count` → current value
- `setCount` → is value ko update karne wala function
- `useState(0)` → shuruaati (initial) value 0 hai

### 🔥 Real World Example
Socho ek **digital counter machine** hai jo cinema hall ke bahar lagi hoti hai (kitne log andar hain).
- `count` = wo number jo screen pe dikh raha hai
- `setCount` = wo button jo number ko badhata hai

Jaise hi number update hota hai, **screen turant refresh** ho jaati hai - bilkul waise hi jaise `useState` se React ka UI turant update hota hai.

### Normal Variable se Difference

Agar tum normal variable use karte (`let count = 0`), to value change hone par bhi **React ko pata hi nahi chalta ki UI update karna hai**.

`useState` hi React ko batata hai: **"ye value change hui hai, screen dobara render karo."**

### `useState` Ke Andar Ki Baatein

**1. Ye Array Destructuring Hai**
```jsx
const [count, setCount] = useState(0);
```
`useState(0)` ek array return karta hai `[currentValue, updaterFunction]`, jisko hum destructure kar lete hain.

**2. Multiple States Bana Sakte Ho**
```jsx
const [name, setName] = useState("");
const [age, setAge] = useState(18);
const [isLoggedIn, setIsLoggedIn] = useState(false);
```
Har state **independent** hoti hai, apna alag box hai.

**3. Direct vs Functional Update**
```jsx
setCount(count + 1);           // Direct - purani value use karke
setCount((prev) => prev + 1);  // Functional - guaranteed latest value milegi
```
Agar naya value **purani value pe depend** kare, to functional update (`prev => prev+1`) safe hai - kyunki React kabhi-kabhi updates ko batch kar deta hai, jisse direct wala tarika stale (purani) value use kar sakta hai.

**4. Object/Array State Update Karte Waqt**
```jsx
const [user, setUser] = useState({ name: "Jaikaran", age: 21 });

setUser({ ...user, age: 22 });   // spread operator se purana data copy, sirf age change
```
⚠️ Direct `user.age = 22` **kabhi mat karo** - React ko change ka pata hi nahi chalega. Hamesha **naya object/array** banao (spread `...` use karke).

**5. State Update Asynchronous Hoti Hai**
```jsx
setCount(count + 1);
console.log(count); // ye purani value dikhayega, turant update nahi hoti
```

---

## Doosra Important Hook: `useEffect`

Jab tumhe koi kaam karna ho jaise **API call**, ya kuch **automatically** hona ho jab component load ho ya koi value change ho, tab `useEffect` use hota hai.

```jsx
import { useEffect, useState } from 'react';

function Example() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Count change hua:", count);
  }, [count]);   // ye array batata hai kab-kab ye effect chalega

  return <button onClick={() => setCount(count + 1)}>Click</button>;
}
```

### 🔥 Real World Example
Jaise ek **security guard** hai jo sirf tab action leta hai jab koi specific gate (`count`) pe activity ho. Baaki sab jagah wo chup rehta hai. `[count]` wala array batata hai kaunsa "gate" watch karna hai.

### `useEffect` Ke Andar Ki Baatein

**Dependency Array Ke 3 Variations:**

```jsx
// 1. Array hi nahi diya - har render pe chalega
useEffect(() => {
  console.log("Har render pe chalega");
});

// 2. Empty array [] - sirf ek baar, component mount hone par
useEffect(() => {
  console.log("Sirf ek baar chalega");
}, []);

// 3. Specific values [count] - jab bhi wo value change ho
useEffect(() => {
  console.log("count change hote hi chalega");
}, [count]);
```

**Cleanup Function:**
```jsx
useEffect(() => {
  const timer = setInterval(() => {
    console.log("Har second chal raha hai");
  }, 1000);

  return () => {
    clearInterval(timer);   // component hatne se pehle ye chalega
  };
}, []);
```
🔥 **Real Example:** Jaise tum **Netflix subscription** cancel karke ghar chhodte ho - warna wo background me chalta rahega aur paisa katega. Cleanup function isi tarah purane timers/listeners ko **band** karta hai jab component screen se hatta hai, warna memory leak ho jata hai.

---

## `useContext` - Global State Ko Consume Karna

Jab data ko **parent → child → grandchild** tak baar-baar props se pass karna pade (isko **prop drilling** kehte hain), tab `useContext` us jhanjhat ko khatam kar deta hai - koi bhi component seedha global data **directly** utha sakta hai, beech ke components ko touch kiye bina.

```jsx
import { createContext, useContext, useState } from 'react';

const UserContext = createContext();

function App() {
  const [user, setUser] = useState("Jaikaran");
  return (
    <UserContext.Provider value={user}>
      <Profile />
    </UserContext.Provider>
  );
}

function Profile() {
  const user = useContext(UserContext);   // directly value mil gayi, props ki zarurat nahi
  return <h1>Hello, {user}</h1>;
}
```

🔥 **Real World Example:** Jaise ek **WiFi router** hai ghar me - har room me alag se cable dalne (prop drilling) ki jagah, jo bhi device WiFi range me hai wo **directly connect** kar sakta hai. `Context.Provider` = router, `useContext` = device ka WiFi se directly connect hona.

---

## `useReducer` - Complex State Management

Jab state complex ho aur usme **multiple tarah ke updates** (actions) hote ho, tab `useState` ke bajaye `useReducer` use karte hain - ye **Redux ka chota version** hai.

```jsx
import { useReducer } from 'react';

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      return state;
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
    </div>
  );
}
```

🔥 **Real World Example:** Jaise ek **complaint department** hai - tum sirf ek "action" (complaint type) bhejte ho jaise "increment" ya "decrement", aur department (`reducer`) khud decide karta hai ki us action pe kya karna hai. `useState` me tum khud directly value change karte ho, `useReducer` me tum sirf **"kya karna hai" bolte ho**, logic alag se defined hota hai.

---

## `useMemo` & `useCallback` - Optimization Ke Liye

Ye dono hooks **unnecessary re-renders/re-calculations avoid** karne ke kaam aate hain - performance better karne ke liye.

### `useMemo` - Value Ko "Yaad" Rakhna
```jsx
import { useMemo } from 'react';

const expensiveValue = useMemo(() => {
  return heavyCalculation(number);   // sirf tab dobara chalega jab 'number' change ho
}, [number]);
```
🔥 **Real Example:** Jaise ek bar tumne **calculation ka result kaagaz pe likh liya** - agli baar wahi sawal poochne pe dobara calculate nahi karoge, seedha kaagaz dekh loge. Jab tak input (`number`) same hai, purana result hi use hoga.

### `useCallback` - Function Ko "Yaad" Rakhna
```jsx
import { useCallback } from 'react';

const handleClick = useCallback(() => {
  console.log("Clicked!");
}, []);   // ye function dobara nahi banega har render pe
```
Normally, har re-render pe functions **naye sire se ban** jate hain (memory me naya reference). `useCallback` usi purane function reference ko **reuse** karta hai jab tak dependency change na ho - especially useful jab wo function kisi **child component ko prop ke roop me** pass ho raha ho, taaki child bina wajah re-render na ho.

---

## Rules of Hooks (Important!) ⚠️

1. Hooks sirf **component ke top level** pe call karo - kisi `if`, loop, ya nested function ke andar nahi
2. Hooks sirf **React function components** ya **custom hooks** ke andar use karo, normal JS function me nahi

---

## `useRef` - Detail Me

```jsx
import { useRef } from 'react';

function InputFocus() {
  const inputRef = useRef(null);

  const focusInput = () => {
    inputRef.current.focus();   // directly DOM element ko access kiya
  };

  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
}
```
- `useRef` bhi value store karta hai, **par usme change hone par UI re-render nahi hota**
- Zyada tar use hota hai **DOM element ko directly touch karne ke liye** (jaise input pe focus karna)

🔥 **Real Example:** `useState` = wo cheez jo **screen pe dikhti hai** aur change hote hi turant update hoti hai (jaise digital clock). `useRef` = wo cheez jo tum **yaad rakhte ho apne dimaag me** bina screen pe display kiye - jaise tumhe pata hai tumne chaabi kaha rakhi hai, par ye info kahi display nahi ho rahi.

---

## Quick Summary Table

| Hook | Kaam | Re-render trigger karta hai? |
|---|---|---|
| `useState` | Value store aur update karna, UI ko re-render trigger karna | ✅ Haan |
| `useEffect` | Component load hone par ya value change hone par koi action lena (API call, logging, etc.) | ❌ (khud nahi, andar setState ho to indirectly) |
| `useContext` | Global state ko consume karna without prop drilling | ✅ (jab context value change ho) |
| `useReducer` | Complex state management (Redux jaisa) | ✅ Haan |
| `useRef` | Mutable value store karna ya DOM access karna | ❌ Nahi |
| `useMemo` | Value ko memoize karna (unnecessary calculation avoid) | - (optimization hook) |
| `useCallback` | Function ko memoize karna (unnecessary re-render avoid) | - (optimization hook) |

---

### 💡 One-Line Yaad Rakhne Wali Baat
> Hooks ka matlab hai - function component ko **"yaad rakhne"** aur **"react karne"** ki power dena, jo pehle sirf class components ke paas hoti thi.