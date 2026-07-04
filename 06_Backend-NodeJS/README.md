# 📘 Node JS Basics

---

## 1. Client-Side vs Server-Side

### 🖥️ Client Side (Frontend)
Isme **customer/user** apni request bhejta hai server ko.

- **Technologies:** HTML, CSS, JavaScript
- **Kaam:** User interface dikhana, user se input lena

### 🗄️ Server Side (Backend)
Isme **client ki request ko fulfill** kiya jata hai.

- **Technology:** Node.js
- **Kaam:** Data process karna, database se baat karna, response bhejna

> **Real-life example:**
> Jaise tum Swiggy app khol ke pizza order karte ho (client), order restaurant ke system tak jata hai jo order confirm karta hai, payment process karta hai, delivery assign karta hai (server). Tumhe sirf "Order Confirmed ✅" dikhta hai, backend ka pura kaam hidden hota hai.

```
[Client: Swiggy App] ---request (order pizza)---> [Server: Restaurant System]
[Client: Swiggy App] <---response (order confirmed)--- [Server: Restaurant System]
```

---

## 2. npm (Node Package Manager)

**Simple Definition:**
npm ek tool hai jiski help se hum ready-made packages (code jo already kisi ne bana diya hai) install kar sakte hain — bina khud se sab kuch likhe.

> **Real-life example:**
> Jaise tumhe ghar pe khana banana hai aur tumhe masala chahiye. Tum khud masala grind nahi karte — bazar se ready-made masala pack kharid lete ho. Waise hi npm se packages "kharido" (install karo) aur use karo.

### Common Commands

```bash
npm init -y          # Naya project start karne ke liye
npm install express  # Koi package install karne ke liye
npm install          # package.json ke andar likhe sab packages install karne ke liye
```

---

## 3. package.json

**Simple Definition:**
Ye ek file hai jo project ki **poori information** rakhti hai — jaise project ka ID card.

Jab tum ye command chalate ho:

```bash
npm init -y
```

Ek `package.json` file ban jati hai.

### Example

```json
{
  "name": "my-backend",
  "version": "1.0.0",
  "main": "app.js",
  "dependencies": {
    "express": "^4.18.2"
  }
}
```

Iska matlab:

| Field | Kya Batata Hai |
|---|---|
| `name` | Project ka naam kya hai |
| `main` | Kaunsi file entry point hai |
| `dependencies` | Kaunse packages use ho rahe hain |

> **Real-life example:**
> Jaise ek recipe card jo batata hai dish ka naam kya hai, kaunse ingredients chahiye aur kitni quantity me. `package.json` project ka recipe card hai.

---

## 4. node_modules

**Simple Definition:**
Jab tum koi package install karte ho, uska **actual code** ek folder ke andar store hota hai — is folder ka naam hai `node_modules`.

```bash
npm install express
```

Isse ek folder banta hai:

```
node_modules/
```

### ⚠️ Important Rule
`node_modules` ko **GitHub pe push nahi karte** kyunki ye bahut bada hota hai (sometimes hundreds of MBs).

Instead:
1. GitHub pe sirf `package.json` push karo
2. Dusra developer project clone kare
3. Wo sirf ye command chalaye:

```bash
npm install
```

npm automatically saare required packages install kar dega.

> **Real-life example:**
> Jaise tum kisi ko recipe card (package.json) bhejte ho, poora bana hua khana (node_modules) nahi bhejte. Wo recipe card se khud khana bana lega (npm install).

---

## 5. Modules

**Simple Definition:**
Module ka matlab hai code ko **alag-alag files me divide** karna, taaki code organized aur readable rahe.

### ❌ Bad Practice (Sab kuch ek file me)

```js
// app.js
// login code
// signup code
// database code
// product code
// order code
// payment code
```

Ye messy aur confusing ho jata hai.

### ✅ Good Practice (Divided into modules)

```
app.js
user.js
product.js
order.js
payment.js
database.js
```

Har file ka apna specific kaam.

> **Real-life example:**
> Jaise ek office me alag-alag departments hote hain — HR, Finance, Sales, IT. Har department apna kaam karta hai, sab kuch ek hi room me nahi hota. Modules bhi code ke "departments" hain.

---

## 6. require

**Simple Definition:**
`require` ka use kisi bhi **module ya package ko import** karne ke liye hota hai.

```js
const fs = require("fs");
```

Iska meaning: *"Node.js ke fs module ko mere code me lao."*

### Types of require

#### 1️⃣ Built-in Module require
Node.js ke andar kuch modules already available hote hain — install karne ki zarurat nahi.

```js
const fs = require("fs");
const path = require("path");
```

#### 2️⃣ npm Package require
Jo package tum npm se install karte ho:

```bash
npm install express
```

Code me use karne ke liye:

```js
const express = require("express");
```

#### 3️⃣ Own File require
Apni khud ki file import karne ke liye:

```js
const math = require("./math");
```

> `./` ka matlab hai **current folder**.

### Quick Reference

| Code | Kya Hai |
|---|---|
| `require("fs")` | Built-in module |
| `require("express")` | npm package |
| `require("./math")` | Apni khud ki file |

> **Real-life example:**
> Jaise `require` ek "borrowing" system hai — kabhi tum library (built-in module) se book uthate ho, kabhi bazar (npm) se kharidte ho, kabhi apne ghar ki almari (own file) se nikalte ho.

---

## 7. import / export

Node.js me module system ke **2 popular styles** hain:

| Style | Syntax |
|---|---|
| CommonJS | `require` / `module.exports` |
| ES Modules | `import` / `export` |

### CommonJS Style

**math.js**
```js
function add(a, b) {
    return a + b;
}

module.exports = add;
```

**app.js**
```js
const add = require("./math");

console.log(add(2, 3)); // 5
```

### ES Module Style

**math.js**
```js
export function add(a, b) {
    return a + b;
}
```

**app.js**
```js
import { add } from "./math.js";

console.log(add(2, 3)); // 5
```

### require vs import — Difference

| require | import |
|---|---|
| Old Node.js style | Modern JS style |
| CommonJS system | ES Module system |
| Uses `module.exports` | Uses `export` |
| Older Node tutorials me common | Modern projects me common |

### ⚠️ Important Point

Default Node.js me `require` easily kaam karta hai.

Lekin `import`/`export` use karne ke liye `package.json` me ye add karna padta hai:

```json
{
  "type": "module"
}
```

Tabhi tum ye use kar paoge:

```js
import express from "express";
```

Iske bina, ye error de sakta hai.

### 🎯 Beginner ke liye kya use kare?

Starting me ye use karo:

```js
const express = require("express");
```

Matlab **CommonJS**.

> **Real-life example:**
> React me tumne dekha hoga:
> ```js
> import React from "react";
> ```
> Frontend/React me `import`/`export` common hai. Node.js backend me dono milte hain, lekin **beginners ke liye `require` easy hai.**

---

## 📌 Summary Table

| Concept | Simple Meaning |
|---|---|
| Client-Side | Request bhejne wala (Frontend) |
| Server-Side | Request fulfill karne wala (Backend) |
| npm | Ready-made packages install karne ka tool |
| package.json | Project ki info rakhne wali file |
| node_modules | Installed packages ka actual code |
| Modules | Code ko alag files me divide karna |
| require | Module/package import karne ka tarika (CommonJS) |
| import/export | Module import/export karne ka modern tarika (ES Modules) |

---

*Happy Coding! 🚀*
