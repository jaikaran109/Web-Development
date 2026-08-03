# 🎨 EJS & Dynamic Routing 

---

## 1. EJS (Embedded JavaScript)

### Simple Definition

**EJS** = **E**mbedded **J**ava**S**cript

Ye ek **templating engine** hai jo HTML ke andar JavaScript variables/logic **embed** karne deta hai — taaki page ka content **backend se aaye data ke hisab se dynamic** ho sake.

> **Real-life example:**
> Socho ek **birthday card printing machine** hai. Card ka design (template) same rehta hai — border, decoration sab fix hai. Lekin **naam wali jagah blank** rakhi jati hai, aur har bacche ke liye machine wahi blank fill kar deti hai.
> EJS bhi wahi karta hai — HTML ka **structure fix** rehta hai, sirf **data wali jagah** (variables) har request pe change hoti hai.

---

### Problem Jo EJS Solve Karta Hai

**Normal HTML (Static) — Fix rehta hai:**
```html
<h1>Welcome, Raj!</h1>
```
Chahe koi bhi login kare, hamesha "Raj" hi dikhega. ❌ Galat.

**EJS (Dynamic) — Badalta rehta hai:**
```html
<h1>Welcome, <%= username %>!</h1>
```
Backend se jo bhi naam aaye, wahi dikhega. ✅ Sahi.

---

### EJS Syntax — Tags

| Syntax | Kaam |
|---|---|
| `<%= variable %>` | Value ko HTML me **print** karta hai |
| `<% code %>` | Sirf **logic/calculation** ke liye (if/else, loops) — kuch print nahi hota |
| `<%- html %>` | Raw HTML print karta hai (escape nahi karta) |

---

### Setup — Step by Step

#### Step 1: Install Karo

```bash
npm install ejs
```

#### Step 2: Server Me View Engine Set Karo

```javascript
app.set('view engine', 'ejs');
```

> ⚠️ **Common Mistake:** `app.use('view engine', 'ejs')` **galat** hai. Ye **`app.set()`** hona chahiye, `app.use()` nahi.

| Method | Kaam |
|---|---|
| `app.use()` | Middleware register karne ke liye (jaise `express.json()`) |
| `app.set()` | App-level settings/config set karne ke liye (jaise view engine) |

#### Step 3: `views` Folder Banao

Express by default `views` naam ke folder me `.ejs` files dhoondhta hai:

```
project/
├── views/
│   └── index.ejs
├── server.js
```

#### Step 4: Route Me `res.render()` Use Karo

```javascript
app.get("/", function(req, res) {
    res.render("index");   // .ejs extension likhna optional hai
});
```

| Method | Kab Use Karte Hain |
|---|---|
| `res.sendFile()` | **Static** HTML file bhejni ho (bina change ke) |
| `res.render()` | **Dynamic** page banani ho (EJS template + data combine karke) |

---

### Backend Se Data Pass Karna

```javascript
app.get("/", (req, res) => {
    res.render("index", {
        username: "Raj",
        isLoggedIn: true
    });
});
```

```html
<h1>Welcome, <%= username %>!</h1>

<% if (isLoggedIn) { %>
    <p>You are logged in.</p>
<% } else { %>
    <p>Please log in.</p>
<% } %>
```

---

### EJS Me Calculations

Kyunki EJS ke andar **actual JavaScript** chalti hai, tum math, conditions, loops — sab kar sakte ho.

**Simple Calculation:**
```html
<h1>hey, we are adding in html <%= 2+2 %></h1>
<!-- Output: hey, we are adding in html 4 -->
```

**Real Example — Cart Total:**
```javascript
app.get("/cart", (req, res) => {
    res.render("cart", { price: 500, quantity: 3 });
});
```

```html
<h2>Total: ₹<%= price * quantity %></h2>
<!-- Output: Total: ₹1500 -->
```

**Loop Ke Saath Calculation:**
```javascript
app.get("/cart", (req, res) => {
    res.render("cart", {
        items: [
            { name: "Shirt", price: 500, qty: 2 },
            { name: "Shoes", price: 1200, qty: 1 }
        ]
    });
});
```

```html
<ul>
    <% let grandTotal = 0; %>
    <% items.forEach(function(item) { %>
        <% let itemTotal = item.price * item.qty; %>
        <% grandTotal += itemTotal; %>
        <li><%= item.name %> — ₹<%= itemTotal %></li>
    <% }); %>
</ul>
<h2>Grand Total: ₹<%= grandTotal %></h2>
```

---

## 2. Static Files (CSS, JS, Images) EJS Ke Saath

Jab tum EJS use karte ho, tumhe CSS/JS/images ke liye ek `public` folder aur `express.static` middleware chahiye hota hai.

### Setup

```javascript
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));
```

> **Best Practice:** `"public"` string seedha dene ke bajaye `path.join(__dirname, 'public')` use karo — ye hamesha file ka **exact location** deta hai, chahe `node` command kahi se bhi chalao.

### Folder Structure

```
project/
├── public/
│   ├── stylesheets/
│   │   └── style.css
│   └── javascripts/
│       └── script.js
├── views/
│   └── index.ejs
├── server.js
```

### EJS/HTML Me Link Karna

Bina lambi/absolute path likhe, seedha `public` ke andar wale folder se URL banta hai:

```html
<link rel="stylesheet" href="/stylesheets/style.css">
<script src="/javascripts/script.js"></script>
```

> **Real-life example:**
> Jaise koi dukaan (server) apna **showroom area** (public folder) customers ke liye khula rakhti hai. Customer sirf showroom ki cheezein directly access kar sakta hai, poora address bata ke nahi — bas seedha short URL se.

---

## 3. Dynamic Routing

### Simple Definition

Dynamic Routing ka matlab hai ek **hi route** banana jo **URL ke andar aane wale variable/parameter** ke hisab se **alag-alag data** dikha sake — bina har cheez ke liye naya route likhe.

---

### Problem Jo Dynamic Routing Solve Karta Hai

**Bina Dynamic Routing (Bahut Messy):**
```javascript
app.get("/user/raj", (req, res) => { ... });
app.get("/user/sonia", (req, res) => { ... });
app.get("/user/amit", (req, res) => { ... });
// ... 100 alag routes! 😱
```

**Dynamic Routing Ke Saath (Sirf 1 Route):**
```javascript
app.get("/user/:username", (req, res) => {
    res.send(`Profile of ${req.params.username}`);
});
```

---

### Syntax

```javascript
app.get("/user/:username", (req, res) => {
    console.log(req.params.username);
});
```

| Part | Kya Hai |
|---|---|
| `:username` | **Dynamic parameter** — colon (`:`) zaruri hai, batata hai ye variable hai |
| `req.params` | Object jisme saare dynamic values store hote hain |
| `req.params.username` | `:username` wali jagah jo bhi value aayi, wo yaha milegi |

---

### Real-Life Example

> Socho **Amazon** ka product page:
> ```
> amazon.com/product/12345
> amazon.com/product/98765
> ```
> Amazon lakho products ke liye alag-alag route nahi likhta. Ek hi pattern se sab handle hota hai — jo bhi ID URL me aaye, backend usi ke hisab se database se sahi product nikaal deta hai.

---

### Practical Example

```javascript
const products = [
    { id: 1, name: "Shirt", price: 500 },
    { id: 2, name: "Shoes", price: 1200 },
    { id: 3, name: "Watch", price: 2000 }
];

app.get("/product/:id", (req, res) => {
    const productId = req.params.id;
    const product = products.find(p => p.id == productId);
    
    if (product) {
        res.send(`Product: ${product.name}, Price: ₹${product.price}`);
    } else {
        res.send("Product not found!");
    }
});
```

| URL | Output |
|---|---|
| `/product/1` | `Product: Shirt, Price: ₹500` |
| `/product/2` | `Product: Shoes, Price: ₹1200` |
| `/product/99` | `Product not found!` |

---

### Multiple Dynamic Parameters

```javascript
app.get("/user/:username/post/:postId", (req, res) => {
    console.log(req.params.username);
    console.log(req.params.postId);
});
```

URL `/user/raj/post/45` ke liye:
```javascript
req.params.username  // "raj"
req.params.postId    // "45"
```

---

### `req.params` vs `req.query` — Confuse Mat Hona

| Concept | URL Example | Kaise Access Karte Hain |
|---|---|---|
| **Dynamic Route (params)** | `/user/raj` | `req.params.username` |
| **Query String** | `/search?name=raj` | `req.query.name` |

**Difference:**
- `:username` (params) — URL ka **structural part** hai, route define karte waqt hi likha jata hai
- `?key=value` (query) — **optional filters/search** ke liye, route ke baad `?` se add hota hai

---

## 📌 Quick Summary Table

| Concept | Simple Meaning |
|---|---|
| EJS | HTML ke andar JS variables/logic embed karne ka tool (templating engine) |
| `<%= %>` | Value print karta hai |
| `<% %>` | Sirf logic/calculation, print nahi hota |
| `app.set('view engine', 'ejs')` | EJS ko view engine set karta hai |
| `res.render()` | EJS template + data combine karke dynamic page banata hai |
| `express.static()` | CSS/JS/images jaisi static files serve karta hai |
| Dynamic Routing | Ek route se URL ke variable part ke hisab se alag data dena |
| `:paramName` | Route me dynamic parameter define karne ka syntax |
| `req.params` | Dynamic route se aayi values yaha milti hain |

---

*Happy Coding! 🚀*