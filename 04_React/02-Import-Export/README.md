# Import / Export in JavaScript

## Import Export kyu use karte hain?

Jab hum kisi project me **multiple files** pe kaam karte hain - jaise `app.js`, `script.js`, `user.js` etc, aur hume ek file ka content **doosri file me use** karna hota hai, tab **import/export** ka use hota hai.

### 🔥 Real World Example
Socho ek company hai:
- `HR department` (ek file) kuch data taiyar karta hai
- `Accounts department` (doosri file) ko wo data chahiye

To HR wala data **"export"** karega (bahar bhejega), aur Accounts wala usse **"import"** karega (andar mangwayega).

Isi tarah files ek doosre ka code share karti hain.

---

## Import/Export ke 2 Types 🔀

### 1️⃣ Default Export

- Har file me **sirf ek** default export ho sakta hai
- Ye file ka **"main cheez"** hoti hai jo wo bhejti hai
- Import karte waqt **koi bhi naam** de sakte ho (fix nahi hai)

**Real World Example:**
> Jaise ek courier company ek hi **main parcel** bhejti hai per delivery. Us parcel ka naam receiver apni marzi se rakh sakta hai jab receive kare.

**Syntax:**

```js
// app.js file
const user = "Jaikaran";
export default user;
```

```js
// script.js file - kisi bhi naam se import kar sakte ho
import myUser from './app.js';
console.log(myUser); // Jaikaran
```

👉 Yaha `myUser` naam bhi chalega, `anything` naam bhi chalega - kyunki default export me **name fix nahi hota**.

---

### 2️⃣ Named Export

- Isme hum variable/function ko **ek specific naam** de kar export karte hain
- Ek file me **multiple named exports** ho sakte hain
- Import karte waqt **same naam** use karna padta hai (curly braces `{}` ke saath)

**Real World Example:**
> Jaise ek dabba (tiffin) hai jisme alag-alag **labelled compartments** hain - "Sabzi", "Roti", "Rice". Jab kisi ko "Sabzi" chahiye, usse exactly **"Sabzi"** bol kar hi mangana padega, kuch aur naam se nahi milegi.

**Syntax:**

```js
// app.js file
export const user = "Jaikaran";
export const age = 21;
```

```js
// script.js file - same name use karna zaruri hai (curly braces ke sath)
import { user, age } from './app.js';
console.log(user); // Jaikaran
console.log(age);  // 21
```

👉 Yaha agar tum `{ user }` ki jagah `{ myUser }` likhoge to **error** aayega, kyunki named export me naam **match** hona chahiye.
(Agar naam change karna hi ho to `as` use karte hain: `import { user as myUser } from './app.js'`)

---

## Quick Comparison Table

| Point | Default Export | Named Export |
|---|---|---|
| Kitne per file | Sirf 1 | Multiple ho sakte hain |
| Import karte waqt naam | Koi bhi naam de sakte ho | Same naam dena zaruri hai |
| Curly braces `{}` | Nahi lagti | Lagti hai |
| Real Example | Ek main parcel (naam receiver decide kare) | Labelled tiffin compartments (exact naam se hi milega) |

---

### 💡 One-Line Yaad Rakhne Wali Baat
> **Default export** = "Jo bhi naam do, chalega" (ek hi cheez per file)
> **Named export** = "Jo naam diya hai, wahi bolna padega" (multiple cheezein ek file se)