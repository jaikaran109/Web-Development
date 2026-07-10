# JSX 

## JSX kya hai?

**JSX = JavaScript XML**

- JSX ek aisa syntax hai jisme hum **HTML + JavaScript** ko **saath me** likh sakte hain
- Simple bhasha me: **HTML code, JavaScript ke andar likhna**
- React isi JSX ka use karke UI banata hai

Normally browser sirf JavaScript samajhta hai, HTML tags JS ke andar nahi likh sakte. Lekin JSX ke through ye possible ho jata hai, kyunki React ke andar ek tool hota hai (**Babel**) jo JSX ko normal JavaScript me convert kar deta hai.

---

## Real World Example 🔥

Socho tumhe ek **letter** likhna hai jisme:
- Kuch part **normal handwriting** (JavaScript logic) me ho
- Kuch part **printed/typed** (HTML structure) format me ho

Normally dono cheezein alag-alag likhni padti (ek file me JS, ek file me HTML). Lekin JSX se tum **dono ek hi jagah**, ek hi file me likh sakte ho - clean aur readable tarike se.

---

## Example

### Bina JSX ke (Normal JavaScript se HTML banana):
```js
const heading = React.createElement('h1', null, 'Hello, Jaikaran!');
```
👉 Ye likhna mushkil aur confusing hai jaise-jaise UI complex hoti jaati hai.

### JSX ke saath (Same cheez, easy way):
```jsx
const heading = <h1>Hello, Jaikaran!</h1>;
```
👉 Bilkul HTML jaisa lagta hai, par ye actually JavaScript hai.

---

## JSX me JavaScript Variable Use Karna

JSX ke andar JavaScript ki value use karne ke liye **curly braces `{}`** ka use karte hain.

```jsx
const name = "Jaikaran";

const element = <h1>Hello, {name}!</h1>;

// Output: Hello, Jaikaran!
```

**Real World Example:**
> Jaise ek **fill-in-the-blank form** hota hai - form ka structure fix hota hai (HTML), par blank jagah pe tum apni marzi ki value daal sakte ho (JavaScript variable) using `{}`.

---

## Ek Component Example (React + JSX)

```jsx
function Profile() {
  const user = "Jaikaran";
  const age = 21;

  return (
    <div>
      <h1>Name: {user}</h1>
      <p>Age: {age}</p>
    </div>
  );
}
```

Yaha:
- `<div>`, `<h1>`, `<p>` → HTML part
- `{user}`, `{age}` → JavaScript part

Dono ek saath, ek hi jagah - **yehi JSX ki power hai**.

---

## Quick Points to Remember

| Point | Detail |
|---|---|
| Full form | JavaScript XML |
| Kaam | HTML + JS ko saath likhne dena |
| Curly braces `{}` | JS variable/expression JSX ke andar use karne ke liye |
| Convert kaun karta hai | Babel (JSX ko normal JS me convert karta hai) |
| Kaha use hota hai | React components banane me |

---

### 💡 One-Line Yaad Rakhne Wali Baat
> JSX = **"HTML jaisa dikhta hai, par asal me JavaScript hai"**