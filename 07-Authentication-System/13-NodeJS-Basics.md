# Node.js Basics 

## Node.js Hai Kya

JavaScript pehle sirf **browser** ke andar chalti thi. **Node.js ek engine hai jo JavaScript ko browser ke bahar bhi chalne deta hai** — isi se server bhi bana sakte ho.

```
Pehle: Browser mein JS, Server pe Python/PHP/Java
Node.js Ke Baad: Browser mein bhi JS, Server pe bhi JS
```

**Fayda:** Ek hi language (JavaScript) se frontend + backend dono.

---

## npm (Node Package Manager)

Password hashing (`bcrypt`), JWT (`jsonwebtoken`) jaisi cheezein khud se banani nahi padti — pehle se bani hui hoti hain. **npm** ek store hai jaha se ye ready-made packages download karte hain.

```bash
npm install express
npm install bcrypt
npm install jsonwebtoken
npm install mongoose
```

Ye sab `node_modules` folder mein download hote hain — isi wajah se `node_modules` ko `.gitignore` mein daala jaata hai (bahut bada folder hota hai, GitHub pe upload karne ki zaroorat nahi).

## `package.json` Kya Hai

Project ki "identity card" — project ka naam, use ho rahe packages, aur project kaise start hota hai, sab yahan likha hota hai:

```json
{
  "name": "my-auth-app",
  "version": "1.0.0",
  "dependencies": {
    "express": "^4.18.2",
    "bcrypt": "^5.1.0",
    "jsonwebtoken": "^9.0.0"
  },
  "scripts": {
    "start": "node server.js"
  }
}
```

Banane ke liye: `npm init -y`

**Fayda:** Project share karte waqt sirf `package.json` chahiye — koi bhi `npm install` chalake saare packages wapas download kar sakta hai.

---

## `require()` / `import` — Modules Import Karna

### Purana Tareeka
```javascript
const express = require('express');
const bcrypt = require('bcrypt');
```

### Naya Tareeka (ES Modules)
```javascript
import express from 'express';
import bcrypt from 'bcrypt';
```

Dono ka kaam same hai, syntax alag hai.

### Apni Khud Ki File Import Karna
```javascript
// utils.js
function checkAuth() { ... }
module.exports = checkAuth;

// server.js
const checkAuth = require('./utils.js');
```

Ye pattern video mein bahut dikhega — jaise `middleware.js` alag file mein, `server.js` mein import.

---

## Quick Summary

| Concept | Kaam |
|---|---|
| Node.js | JS ko server pe chalne deta hai |
| npm | Ready-made packages download karne ka store |
| package.json | Project ki details + dependencies list |
| require()/import | Package ya file ko code mein use karne ke liye laana |

---

## Questions Asked (Isi Topic Par)

**ques1:** ab node js kra do to shi rhega , ithink ki video me express js and node js se kraya h to vo bhi cover ho jata

**answer1:**
Chunki video Node.js + Express.js mein implement hoga, thoda inka practical/coding-level basics cover karna sahi rahega — concept se alag, ab syntax aur code-flow samajhna hoga. Cover karne layak cheezein: Node.js basics (npm, package.json, require/import), Express.js basics (routes, req/res, middleware attach karna jo humne concept mein discuss kiya), MongoDB/Mongoose basics (schema, CRUD), Async/Await (kyunki DB calls, hashing, JWT sab asynchronous hote hain), aur packages jo video mein use honge (bcrypt, jsonwebtoken, dotenv, cookie-parser).

**ques2:** start

**answer2:**
Node.js basics se shuru kiya gaya — Node.js JavaScript ko server-side chalne deta hai; npm ready-made packages (bcrypt, jsonwebtoken, mongoose, express) install karne ka tool hai; package.json project ki dependencies aur config track karta hai; aur require()/import se packages ya apni khud ki files ko code mein use karte hain (jaise middleware.js ko server.js mein import karna).
