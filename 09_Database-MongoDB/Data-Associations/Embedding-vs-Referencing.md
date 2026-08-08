# MongoDB: Embedding vs Referencing

MongoDB mein related data ko store karne ke do main tarike hote hain — **Embedding** aur **Referencing**. Ye dono "Data Association" ke concept ke andar aate hain (relational databases ke relationships jaisa hi, but NoSQL style mein).

---

## 1. Embedding

### Definition
Embedding ka matlab hai related data ko ek **single document ke andar nested (sub-document/object) ke roop mein** store karna, alag collection banaye bina.

### Example

**User document jisme Address embedded hai:**

```javascript
{
  _id: "u1",
  name: "Jaikaran",
  email: "jaikaran@email.com",
  address: {
    city: "Delhi",
    pincode: "110001",
    country: "India"
  }
}
```

Yaha `address` ek separate collection nahi hai — `User` document ke andar hi object ki tarah store hai.

### Kab use karein
- Related data **chhota** ho
- Data **hamesha saath hi access** hota ho (jaise user + uska address)
- **Fast read** chahiye (ek hi query mein sab data mil jaye)
- Data rarely change hota ho

### Advantages
- Fast reads — ek hi query se pura data mil jata hai
- Simple structure, koi extra `JOIN`/`populate()` nahi chahiye

### Disadvantages
- Agar embedded data bada ho jaye to document size bahut bada ho sakta hai
- Data duplicate ho sakta hai agar wahi data multiple jagah embed karna pade

---

## 2. Referencing

### Definition
Referencing ka matlab hai related data ko **alag collection** mein store karna, aur ek document doosre document ka sirf **`_id` (reference)** store karta hai — SQL ke Foreign Key jaisa concept.

### Example

**Users collection:**
```javascript
{
  _id: "u1",
  name: "Jaikaran",
  email: "jaikaran@email.com"
}
```

**Orders collection (separate):**
```javascript
{
  _id: "o1",
  product: "Laptop",
  price: 50000,
  userId: "u1"   // reference to User's _id
}
```

Mongoose mein `populate()` method se related data ko fetch kiya ja sakta hai:

```javascript
Order.find().populate("userId");
```

### Kab use karein
- Related data **bada** ho ya **frequently change** ho
- Ek document ke **bahut saare related records** ho sakte hain (jaise ek user ke sainkdo orders)
- Data ko **independently query** karna ho (bina parent document ke)

### Advantages
- Document size chhota rehta hai
- Data duplication nahi hota
- Related data ko independently update/query kiya ja sakta hai

### Disadvantages
- Extra query/`populate()` chahiye hota hai — thoda slow ho sakta hai reads ke liye
- Multiple collections manage karni padti hain

---

## Comparison Table

| Aspect | Embedding | Referencing |
|---|---|---|
| Storage | Same document ke andar (nested) | Alag collection, `_id` se link |
| Read Speed | Fast (single query) | Comparatively slower (needs `populate()`) |
| Best For | Chhota, fixed, tightly-coupled data | Bada, growing, independently-used data |
| Example Use Case | User + Address, Blog Post + Metadata | User + Orders, Blog Post + Comments |
| Data Duplication | Possible | Avoided |

---

## Rule of Thumb

> **Data chhota hai aur hamesha saath rehta hai → Embed karo.**
> **Data bada hai, badhta rehta hai, ya alag se bhi chahiye hota hai → Reference karo.**

---

## Real-World Example: Blog Post + Comments

**Embedding approach** (agar comments kam ho aur chhote ho):
```javascript
{
  _id: "p1",
  title: "My First Blog",
  comments: [
    { user: "Amit", text: "Great post!" },
    { user: "Riya", text: "Very helpful." }
  ]
}
```

**Referencing approach** (agar comments bahut zyada ho sakte hain):
```javascript
// Posts collection
{
  _id: "p1",
  title: "My First Blog"
}

// Comments collection
{
  _id: "c1",
  postId: "p1",
  user: "Amit",
  text: "Great post!"
}
```

Blog posts mein comments **unlimited** ho sakte hain, isliye real-world apps mein aksar **Referencing** use hoti hai comments ke liye.
