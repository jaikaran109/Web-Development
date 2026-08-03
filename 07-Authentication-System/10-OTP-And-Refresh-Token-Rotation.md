# OTP & Refresh Token Rotation / Logout All Devices

## OTP (One-Time Password)

Temporary, short-lived code (4-6 digits), ek baar hi use hota hai aur jaldi expire ho jaata hai. Login verification, signup, payment confirm karne mein use hota hai.

### Flow
1. "Send OTP" request
2. Server random code generate karta hai (jaise `482913`)
3. DB mein temporarily store hota hai (expiry ke saath)
4. SMS/Email se bheja jaata hai
5. User enter karta hai
6. Server verify karta hai: match + expiry + already-used-nahi

### Security Points

| Point | Kyun Zaroori |
|---|---|
| Expiry (~5 min) | Purana OTP useless ho jaaye |
| One-Time Use | Dobara use na ho sake |
| Rate Limiting | Spam/brute-force na ho |
| Random Generation | Predictable na ho |

---

## Refresh Token Rotation & Logout All Devices

### Multiple Devices Tracking

Server database mein har device ka refresh token track karta hai:

```
user_123 | R1_hash | Phone
user_123 | R2_hash | Laptop
user_123 | R3_hash | Tablet
```

### Logout All Devices

"Logout All Devices" click karne par server database se **saare** refresh tokens delete kar deta hai — jab bhi koi device naya Access Token maangega, uska Refresh Token invalid mil jaayega aur wo automatically logged-out ho jaayega.

### Refresh Token Rotation (Extra Security)

Har baar Refresh Token use hone par, **purana invalid** ho jaata hai aur **naya** diya jaata hai. Agar hacker ne purana token chura ke use kar liya, aur baad mein asli user usi purane token se try kare — server ye "reuse" detect karke **turant saare tokens invalidate** kar deta hai (theft detection).

---

## Refresh Token Ki Expiry — Instagram Jaisi Apps Mein Weekly Login Kyun Nahi Karna Padta

"7 din" ek generic example tha — real mein har app apni policy decide karti hai. Instagram jaisi apps **Sliding Expiration** use karti hain:

```
Login Day 0 → Expiry initially Day 7
Day 3 ko app khola → Expiry badh ke Day 10 ho gayi
Day 8 ko app khola → Expiry badh ke Day 15 ho gayi
```

**Jab tak app regularly use karte raho, Refresh Token khud renew hota rehta hai (background mein).**

| Scenario | Login Chahiye? |
|---|---|
| Regularly use | Nahi |
| Bahut lambe time tak app na khola (2-3 mahine) | Haan |
| Manual logout | Haan |
| Password change | Haan |
| Naya device/reinstall | Haan |

---

## Questions Asked (Isi Topic Par)

**ques1:** accha tmne bola refresh token 7 8 din ka hota h but insta acc to login nhi krna pdta hrr week

**answer1:**
"7 din" ek generic example tha samjhane ke liye — har app/website apni khud ki policy decide karti hai ki Refresh Token kitne din ka rakhna hai, ye koi fixed universal rule nahi hai. Instagram jaisi apps weeks ya months tak ka Refresh Token rakhti hain, aur bahut saari badi apps ek smart trick use karti hain jise "Sliding Expiration" kehte hain — Refresh Token ki expiry fixed date nahi hoti, balki "last activity + kuch din" hoti hai. Matlab jab tak tum regularly app use karte raho, expiry aage badhti rehti hai (Login Day 0 → expiry Day 7; Day 3 ko app khola → expiry badh ke Day 10; Day 8 ko khola → expiry badh ke Day 15, aur isi tarah chalta rehta hai). Login sirf tab chahiye hoga jab: bahut lambe time tak (2-3 mahine) app hi na kholo, khud manually logout karo, password change karo, ya naya device/reinstall ho. Isi wajah se Instagram jaisi app mein mahino tak login nahi karna padta jab tak khud logout na karo ya bahut lambe time tak app hi na kholo.