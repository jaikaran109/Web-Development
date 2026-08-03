# Session-Based vs Token-Based Authentication

## Problem: HTTP Stateless Hota Hai

Har request server ke liye ek "naya insaan" hoti hai — server ko yaad nahi rehta ki tumne login kiya tha. Isliye Session ya Token ka use hota hai "yaad rakhne" ke liye.

## Session-Based Authentication

1. Login hone par server ek unique **Session ID** generate karta hai
2. Server ise apni memory/DB mein store karta hai (session ID → user mapping)
3. Session ID browser ko **cookie** mein bhej di jaati hai
4. Har agli request mein cookie automatically attach hoti hai, server usse verify karta hai

**Session = Stateful** — server ko sab kuch yaad rakhna padta hai.

## Token-Based Authentication (JWT)

1. Login hone par server ek **Token** banata hai jisme khud info (user, role, expiry) likhi hoti hai
2. Token ko server apni secret key se **sign** karta hai
3. Server ko kuch yaad nahi rakhna padta — sirf token ki signature verify karta hai

**Token = Stateless** — server memory mein kuch store nahi karta.

## Comparison Table

| | Session | Token |
|---|---|---|
| Server yaad rakhta hai? | Haan | Nahi |
| Scalability | Mushkil (multi-server case mein) | Aasan |
| Data kaha hai | Server ke paas | Token ke andar hi |
| Multi-server issue | Haan (Server 1 pe login, Server 2 ko pata nahi) | Nahi (koi bhi server verify kar sakta hai) |

---

## Tabs & Browser Switch Karne Ka Scenario (Instagram Example)

**Dono (Session aur Token) same tarah behave karte hain jab tabs/browser switch hote hain:**

### Same Browser, Multiple Tabs
Cookie (Session ID) ya Token (localStorage/cookie) **poore browser mein** store hota hai, sirf ek tab mein nahi. Isliye:
- Tab 1 mein login kiya, Tab 2/3 mein Instagram kholne par bhi **dobara login nahi karna padta**

### Alag Browser (Chrome → Firefox)
Har browser apni **alag, isolated storage** rakhta hai (cookie ho ya localStorage). Isliye:
- Firefox ke paas Chrome ki cookie/token nahi hoti → **dobara login mangega**

```
Chrome Browser                    Firefox Browser
Cookie/Token: sess_a8f3k29d       Cookie/Token: (khaali)
Tab1,2,3 — login dikhega ✅        Login mangega ❌
```

**Asli farak Session aur Token ka tabs/browser switching mein nahi hai — wo backend mein hai (server yaad rakhta hai ya nahi).**

| Scenario | Dobara Login? |
|---|---|
| Naya tab (same browser) | Nahi |
| Alag browser | Haan |
| Incognito mode | Haan |
| Session/Token expire | Haan |
| Logout | Haan |

---

## Questions Asked (Isi Topic Par)

**ques1:** mtlb ye h ki session me 1 tab me login kiya aur ab agr dusre tab me insta khole to dubara login krna pdega ?

**answer1:**
Nahi, dobara login nahi karna padega. Session ID cookie tumhare poore browser mein store hoti hai, sirf ek tab mein nahi. Sab tabs same browser ki cookie storage ko access karte hain, isliye jab bhi koi bhi tab Instagram ko request bhejega, wahi cookie automatically attach ho jaayegi — chahe wo koi bhi tab ho. Analogy: browser = wallet, cookie = wallet ke andar ka ID card — alag-alag kamron (tabs) mein jaate waqt tumhe har kamre mein alag ID card nahi rakhna padta.

---

**ques2:** aur same scenario taken ke saath btao , yhi example lena insta wala ki aur ye bhi btana ki sesssion me jaise jaise browser shift kiye to dubara login krna pdega same token me bhi to hota h

**answer2:**
Haan, tabs aur browser switch karne ka behavior Session aur Token dono ke liye SAME hai. Same browser mein multiple tabs — dono cases mein cookie/token poore browser mein share hota hai, dobara login nahi karna padta. Alag browser (Chrome → Firefox) mein — dono cases mein har browser apni alag, isolated storage rakhta hai, isliye Firefox ko Chrome ka cookie/token nahi milta aur dobara login mangega. Asli farak Session aur Token ka tabs/browser switching mein nahi hai — wo backend mein hai: Session mein server ko khud yaad rakhna padta hai (memory/DB mein), Token mein server ko kuch yaad nahi rakhna padta (sirf signature verify karta hai). Ye farak browser mein nahi dikhta, backend ke andar hota hai — jaise multiple-server scenario mein, jaha Session problem create karti hai (Server 2 ko session ka pata nahi hota) lekin Token koi problem nahi karta (koi bhi server verify kar leta hai).