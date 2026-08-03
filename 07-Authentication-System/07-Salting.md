# Salting (Password Hashing Ke Saath)

## Problem: Same Password = Same Hash

Bina salt ke, agar 3 users ka password same ho (jaise "password123"), unka hash bhi **same** hoga — hacker isse pattern samajh sakta hai.

## Rainbow Table Attack

Hackers ke paas pehle se common passwords aur unke hashes ki ek ready-made dictionary hoti hai. Agar hash chura liya jaaye, seedha table mein match karke original password pata chal jaata hai — bina kuch calculate kiye.

## Salt Kya Hai

Har password ke saath ek **unique random string** (salt) mix karke hash banaya jaata hai:

```
User A: "password123" + "x7Rk9"  → Hash: $2b$abc111...
User B: "password123" + "pQ2mZ"  → Hash: $2b$xyz222...   ← ALAG!
User C: "password123" + "L8vN3"  → Hash: $2b$def333...   ← ALAG!
```

Same password hone ke bawajood, ab teeno ka hash **completely alag** hai.

## Salt Store Kaise Hota Hai

Salt secret nahi hota — hash ke saath hi embed karke store kiya jaata hai:
```
$2b$10$x7Rk9N9qo8uLOickgx2ZMRZoMye...
        ↑ ye starting part salt hai
```

## Login Time Pe Kya Hota Hai

1. Server stored hash se salt nikaalta hai
2. Diye gaye password + wahi salt mix karke dobara hash banata hai
3. Naya hash stored hash se compare karta hai

## bcrypt Ye Sab Khud Handle Karta Hai

```javascript
const hash = await bcrypt.hash("password123", 10);
// bcrypt khud random salt generate + mix + hash bana deta hai
```

## Fayda

| Bina Salt | Salt Ke Saath |
|---|---|
| Same password → Same hash | Same password → Alag hash |
| Rainbow table attack aasaan | Rainbow table attack fail |

---

