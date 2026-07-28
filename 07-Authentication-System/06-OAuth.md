# OAuth — "Login with Google/Facebook"

## Problem Jo Ye Solve Karta Hai

Chhoti websites khud ka login system banane ke bajaye Google/Facebook se pucchti hain "ye insaan genuine hai kya?" — isse unhe user ka password kabhi handle nahi karna padta.

## 3 Parties Involved

| Party | Kaam | Example |
|---|---|---|
| User | Login karna chahta hai | Tum |
| Client App | Login karwana chahti hai | MyBlogSite.com |
| Authorization Server | Verify karta hai | Google |

## Step-by-Step Flow

1. Tum "Login with Google" click karte ho
2. MyBlogSite tumhe Google ke login page pe redirect karta hai
3. Tum Google pe login karte ho (seedha Google ko, MyBlogSite ko nahi dikhta)
4. Google permission maangta hai ("MyBlogSite ko naam-email dena theek hai?")
5. Tum "Allow" dabate ho
6. Google MyBlogSite ko ek **Authorization Code** bhejta hai
7. MyBlogSite ye code Google ko wapas bhej ke **Access Token** maangta hai
8. Google Access Token deta hai
9. MyBlogSite Access Token se user ki info (naam, email) mangta hai
10. MyBlogSite apna account bana deta hai / login kar deta hai

## Kyun Safe Hai

- MyBlogSite ko Google password **kabhi nahi pata chalta**
- Permission revoke ki ja sakti hai Google settings se
- Sirf utni hi info milti hai jitni allow ki gayi
- MyBlogSite hack ho bhi jaaye, Google password safe rehta hai

## OAuth 2.0 vs OpenID Connect

- **OAuth 2.0** — Permission dena (authorization) ke liye
- **OpenID Connect (OIDC)** — Login/Identity (authentication) ke liye, OAuth ke upar bana layer

"Login with Google" actually **OAuth 2.0 + OpenID Connect** dono use karta hai.

---
