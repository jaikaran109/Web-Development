# Props in React

## Props kya hote hain?

**Props = Properties**

Props wo tarika hai jisse hum **ek component se doosre component me data bhejte hain** - matlab **parent component** se **child component** ko data pass karna.

- Props **read-only** hote hain, matlab child component unko **change nahi kar sakta**, sirf use kar sakta hai
- Isse component **reusable** ban jata hai - same component ko alag-alag data ke saath baar-baar use kar sakte ho

---

## 🔥 Real World Example

Socho tumne ek **Card component** banaya hai (jaisa tumne pehle Jaikaran, age 21 wala banaya tha). Ab agar tumhe 5 alag logo ke liye card dikhana ho, to tum **5 baar naya component nahi banaoge** - tum **wahi ek Card component** use karoge, bas har baar **alag data (props)** de doge.

> Jaise ek **printing machine** hoti hai jo ID card print karti hai - machine (component) same rehti hai, bas har baar **naam, photo, age** (props) badal jaate hain input me.

---

## Syntax - Props Kaise Use Karte Hain

### Step 1: Parent (App.jsx) se data bhejna

```jsx
// App.jsx
import Card from './component/Card';

function App() {
  return (
    <>
      <Card name="Jaikaran" age={21} />
      <Card name="Rahul" age={25} />
      <Card name="Simran" age={22} />
    </>
  );
}

export default App;
```

👉 Yaha `name` aur `age` **props** hain jo har Card ko alag-alag values ke saath bheji ja rahi hain.

### Step 2: Child (Card.jsx) me props receive karna

```jsx
// Card.jsx
function Card(props) {
  return (
    <div className="card">
      <h2>Name: {props.name}</h2>
      <p>Age: {props.age}</p>
    </div>
  );
}

export default Card;
```

👉 `props` ek **object** ki tarah aata hai: `{ name: "Jaikaran", age: 21 }`
Isliye `props.name` aur `props.age` se values nikaal sakte ho.

---

## Destructuring Wala Tarika (Zyada Common/Clean)

Directly `{ name, age }` nikaal sakte ho props se, bina baar-baar `props.` likhe:

```jsx
// Card.jsx
function Card({ name, age }) {
  return (
    <div className="card">
      <h2>Name: {name}</h2>
      <p>Age: {age}</p>
    </div>
  );
}

export default Card;
```

Output (3 alag cards, ek hi component se):
```
Name: Jaikaran   Age: 21
Name: Rahul      Age: 25
Name: Simran     Age: 22
```

---

## Props ke Important Points

| Point | Detail |
|---|---|
| Data flow direction | Sirf **Parent → Child** (upar se neeche), child wapas parent ko directly nahi bhej sakta |
| Change kar sakte hain? | ❌ Nahi - props **read-only** hote hain (child unhe modify nahi kar sakta) |
| Kya-kya bhej sakte ho | String, Number, Array, Object, Function, ya poora component bhi |
| Kaam | Component ko **dynamic aur reusable** banana |

---

## Ye Project Me Kaise Kaam Aata Hai?

Socho Instagram jaisi app bana rahe ho:
- Ek **Post component** banaoge (jisme photo, likes, caption dikhta hai)
- Wahi **ek Post component**, hazaro alag posts ke liye use hoga
- Har post ka data (photo, likes count, caption) **props ke through** alag-alag pass hoga

Agar props na hote, to har post ke liye **alag component banana padta** - jo bilkul impractical hai.

---

### 💡 One-Line Yaad Rakhne Wali Baat
> Props = **"Ek component, kayi roop"** - same component ko alag-alag data ke saath baar-baar use karne ka tarika (Parent se Child ko data dena)