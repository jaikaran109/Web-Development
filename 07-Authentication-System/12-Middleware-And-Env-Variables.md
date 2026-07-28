# Middleware & Environment Variables (.env)

## Middleware

Ek function jo request aur final response ke beech mein baithta hai — jaise ek checkpoint/security guard.

### Bina Middleware Ke Problem
Har route mein manually auth-check likhna padta hai — repetitive aur error-prone.

### Middleware Se Solution

```javascript
function checkAuth(req, res, next) {
  const token = req.headers.authorization;
  if (!token) return res.status(401).send("Please login first");

  jwt.verify(token, SECRET_KEY, (err, decoded) => {
    if (err) return res.status(401).send("Invalid token");
    req.user = decoded;
    next(); // aage jaane do
  });
}

app.get('/profile', checkAuth, (req, res) => {
  res.send(`Welcome ${req.user.email}`);
});
```

`next()` bolta hai "check pass ho gaya, aage badho." Agar call nahi hota, request wahi atki reh jaati hai.

### Middleware Ke Types

| Type | Kaam |
|---|---|
| Auth Middleware | Login check karta hai |
| Logging Middleware | Requests console mein print karta hai |
| Error Handling Middleware | Errors gracefully handle karta hai |
| Rate Limiting Middleware | Spam/excess requests rokta hai |

---

## Environment Variables (.env File)

### Problem
Agar `SECRET_KEY` seedha code mein likhi jaaye aur code GitHub pe upload ho jaaye, key publicly visible ho jaati hai — koi bhi fake token bana sakta hai.

### Solution: `.env` File

```
# .env (GitHub pe kabhi upload nahi hoti)
SECRET_KEY=mySuperSecretKey123
DATABASE_PASSWORD=myDbPass456
```

```javascript
// server.js (Ye GitHub pe jaata hai — safe hai)
require('dotenv').config();
const SECRET_KEY = process.env.SECRET_KEY;
```

`.gitignore` file mein `.env` likh diya jaata hai, taaki `git push` karte waqt ye file skip ho jaaye:

```
# .gitignore
.env
node_modules/
```

### General Rule
Koi bhi secret/sensitive value (SECRET_KEY, DB password, API keys) `.env` mein rakho, code mein hardcode mat karo.

---

