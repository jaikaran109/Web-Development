# Context API - Notes 📘

## Problem - Prop Drilling

Normal flow me data **Parent → Child** jata hai, aur phir usi Child ke **Child (grandchild)** me bhi jata hai.

Matlab agar sabse **inner child** ko data chahiye, to wo **direct Parent se nahi le sakta** - use har beech wale component se **hoke guzarna** padta hai, chahe beech wale components ko us data ki koi zarurat na ho.

```
Parent (data hai yaha)
   ↓ props
Child 1 (data bas aage bhejne ke liye le raha hai)
   ↓ props
Child 2 (data bas aage bhejne ke liye le raha hai)
   ↓ props
Child 3 (asal me yahi data chahiye tha)
```

Isko **Prop Drilling** kehte hain - jaha data ko **kayi layers se manually thele-thele ke le jana** padta hai, sirf ek jagah use karne ke liye.

### 🔥 Real World Example
Jaise ek **message ek building me deliver** karwana ho - top floor (Parent) se ground floor (deepest Child) tak. Agar tum message har floor ke insaan ke haath me deke bologe **"isko neeche wale ko de dena"**, to beech ke sabhi logo ko bewajah is process me involve hona padega, sirf message pass karne ke liye - unko us message se koi matlab bhi nahi hai.

---

## Solution - Context API

Iska solution hai **Data Centralization** - matlab data ko **ek hi central jagah** rakh do, aur jisko bhi chahiye, wo **seedha wahi se utha le**, beech ke components ko touch kiye bina.

- Agar aage kabhi data me **koi change** karna ho, to sirf **ek hi jagah (Context)** me karna padega
- Baaki sab jagah **automatically update** ho jayega jaha bhi wo data use ho raha hai

### 🔥 Real World Example
Jaise ek **WiFi Router** ghar me laga hai. Har room me alag-alag cable dalne (prop drilling) ki jagah, jo bhi device WiFi range me hai, wo **directly router se connect** ho jata hai - beech ke rooms ko involve kiye bina. Agar WiFi password (data) change karna ho, to sirf **router me ek jagah** change karo, sab devices ko automatically naya access mil jayega.

---

## Context API Banane Ke Liye 3 Cheezein Chahiye

### 1️⃣ Context Banao

Sabse pehle ek **Context object** banate hain - `createContext()` se.

```jsx
import { createContext } from 'react';

const UserContext = createContext();

export default UserContext;
```

👉 Ye `UserContext` ek **container/box** hai jisme hum data rakhenge, jisse koi bhi component seedha access kar sakta hai.
