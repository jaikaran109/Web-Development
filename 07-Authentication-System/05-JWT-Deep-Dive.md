# JWT (JSON Web Token) — Deep Dive

## Structure — 3 Parts (Dot Se Separated)

```
Header . Payload . Signature
```

### 1. Header
Batata hai kaunsa algorithm use hua:
```json
{ "alg": "HS256", "typ": "JWT" }
```

### 2. Payload
Actual data yahan hota hai:
```json
{ "user": "xyz@gmail.com", "role": "user", "exp": 1735689600 }
```

⚠️ **Payload sirf Base64 encoded hota hai, encrypted nahi** — koi bhi ise decode karke padh sakta hai. Isliye password/sensitive data kabhi payload mein mat daalo.

### 3. Signature
```
Signature = HMACSHA256(base64(Header) + "." + base64(Payload), SECRET_KEY)
```
Ye batata hai token genuine hai ya kisi ne chhed-chhad ki hai. Agar hacker payload change kare (jaise role: user → role: admin), naya signature calculate karne ke liye uske paas SECRET_KEY nahi hoti — isliye signature match nahi karega aur token reject ho jaayega.

## Payload Mein Kya Jaayega — Ye Kaun Decide Karta Hai

JWT khud "automatically" nahi generate hota — **developer khud code likhta hai** ki payload mein kya daalna hai:

```javascript
const payload = {
  userId: user.id,
  email: user.email,
  role: user.role
  // password jaan-bujh kar NAHI daala
};
const token = jwt.sign(payload, SECRET_KEY, { expiresIn: '15m' });
```

- **Signature** automatically formula se calculate hoti hai
- **Payload ka content** developer manually decide karta hai — isliye sensitive data na daalna ek best practice hai, koi automatic rule nahi

## Expiry aur Refresh Token

| Token | Kaam | Expiry |
|---|---|---|
| Access Token | Actual requests ke liye | Short (jaise 15 min) |
| Refresh Token | Naya Access Token maangne ke liye | Lamba (jaise 7 din, ya sliding) |

---

## Questions Asked (Isi Topic Par)

**ques1:** ye to khud generate hota h na to hm kaise kuch daal skte h
*(JWT payload developer khud kaise control karta hai, iske baare mein)*

**answer1:**
"JWT generate hota hai" ka matlab ye nahi ki ye khud-ba-khud, bina kisi instruction ke ban jaata hai — Server (yaani developer ka likha hua code) hi JWT ko generate karta hai, aur wahi decide karta hai payload mein kya daalna hai. Jaise Node.js mein developer khud likhta hai: `const payload = { userId: user.id, email: user.email, role: user.role }` — aur ye developer ki choice hai ki password jaisi sensitive cheez isme na daale. Sirf **Signature** part automatically ek formula (HMACSHA256 jaisa) se calculate hoti hai — payload ka content manual hota hai, developer decide karta hai. Analogy: Payload ek form ke fields jaisa hai (tum khud decide karte ho kya honge), Signature ek official stamp jaisa hai jo machine automatically laga deti hai. JWT khud kuch "samajhta" nahi ki sensitive kya hai — ye sirf ek container hai, isliye password na daalna ek security best practice hai jo developer ko follow karni padti hai.