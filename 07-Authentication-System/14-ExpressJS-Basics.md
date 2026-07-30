# Express.js Basics 

## Express.js Hai Kya

Node.js akela low-level hai — server banane ke liye manual kaam zyada karna padta hai. **Express.js** ek framework hai jo Node.js ke upar bana hai aur server banana bahut aasan bana deta hai.

### Bina Express Ke (Raw Node.js) — Complex
```javascript
const http = require('http');
const server = http.createServer((req, res) => {
  if (req.url === '/profile') {
    res.end('Profile Page');
  }
  // ... har route ke liye manually if-else likhna padta hai
});
```

### Express Ke Saath — Simple
```javascript
const express = require('express');
const app = express();

app.get('/profile', (req, res) => {
  res.send('Profile Page');
});
```

---

## Basic Setup

```javascript
const express = require('express');
const app = express();
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server chal raha hai port ${PORT} pe`);
});
```

---

## Routes — `app.get()`, `app.post()`

Route matlab — kaunsa URL aane par kya karna hai.

```javascript
app.get('/login', (req, res) => {
  res.send('Login Page');
});

app.post('/login', (req, res) => {
  // Login ka logic yaha likhenge (email-password check karna)
});
```

- **GET** — usually data mangne ke liye (jaise page dikhana)
- **POST** — usually data bhejne ke liye (jaise login form submit karna, register karna)

---

## `req` aur `res` — Jo Concept Mein Discuss Kiya, Ab Code Mein

```javascript
app.post('/login', (req, res) => {
  const email = req.body.email;       // User ne jo data bheja (Request)
  const password = req.body.password;

  // ... check karo database mein

  res.status(200).send('Login Successful');   // Server ka jawab (Response)
});
```

- **`req`** = Request — user ne kya bheja (body, headers, cookies, params)
- **`res`** = Response — server user ko kya wapas bhej raha hai

---

## `req.body` Use Karne Ke Liye Ek Middleware Chahiye

```javascript
app.use(express.json());   // Ye middleware JSON data ko parse karta hai
```

Bina isके, `req.body` **undefined** rahega. Ye bhi ek middleware hi hai (jo humne pehle discuss kiya tha) jo har request ke data ko samajhne layak banata hai.

---

## Poora Chhota Example

```javascript
const express = require('express');
const app = express();

app.use(express.json());   // JSON body parse karne ke liye

app.post('/register', (req, res) => {
  const { username, email, password } = req.body;
  console.log(username, email, password);
  res.send('User Registered');
});

app.listen(3000, () => console.log('Server started'));
```

---

## Quick Summary

| Concept | Kaam |
|---|---|
| Express.js | Node.js ke upar framework, server banana aasan banata hai |
| Route (app.get/app.post) | Kaunsa URL aane par kya karna hai, decide karta hai |
| req | Request — user ne kya bheja (body, headers, cookies) |
| res | Response — server user ko kya wapas bhej raha hai |
| express.json() middleware | req.body ko usable banata hai |

---

## Agla Step

Isके baad practical roadmap mein ye aata hai:
- Middleware ko practically code mein likhna (auth-check wala, jo `12-middleware-and-env-variables.md` mein concept se cover ho chuka hai)
- MongoDB/Mongoose se connect karke database mein data save karna

---

## Questions Asked (Isi Topic Par)

**ques1:** ab express ka bhi bna do

**answer1:**
Express.js Node.js ke upar bana ek framework hai jo server banana aasan bana deta hai — bina Express ke har route ke liye manually if-else likhna padta hai (raw `http` module se), Express ke saath `app.get()`/`app.post()` se seedha route define ho jaate hain. Basic setup mein `express()` se app banta hai aur `app.listen(PORT)` se server start hota hai. Routes GET (data mangna) aur POST (data bhejna, jaise login/register) ke liye use hote hain. `req` (Request) mein user ka bheja data hota hai (`req.body`, headers, cookies), aur `res` (Response) se server jawab bhejta hai (`res.send()`, `res.status()`). `req.body` tabhi use ho pata hai jab `app.use(express.json())` middleware laga ho, jo JSON data ko parse karke usable banata hai.
