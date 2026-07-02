# mongosh — MongoDB Shell 

## Ye hai kya?

`mongosh` (Mongo Shell) ek **command-line tool** hai jisse tum seedha `mongod` (server) se baat karte ho — commands likh ke.

Isse tum:
- Database create/select kar sakte ho
- Data insert, update, delete kar sakte ho
- Queries chala sakte ho
- Aggregation pipelines likh sakte ho

Bas, sab kuch **typing** se — koi button, koi click nahi.

## Real Life Example 📞

Socho tumhe restaurant me khana order karna hai, lekin waiter nahi hai — tumhe **direct kitchen me call** karke bolna padta hai:

> "Bhaiya, 2 plate paneer bhej do, table number 5 pe"

Ye call = ek **command** hai. Kitchen (mongod) sunta hai aur kaam karta hai.

`mongosh` bhi waisa hi hai — tum type karte ho, aur `mongod` us command ko turant execute karta hai.

## Kaise use karte hai?

Pehle `mongod` chalu hona chahiye, fir doosri terminal window me likho:

```bash
mongosh
```

Ab tum MongoDB shell ke andar ho. Kuch basic commands try karo:

```js
show dbs                  // saare databases dikhao
use myShop                 // "myShop" naam ka database use karo (ya bana do agar exist nahi karta)
db.products.insertOne({ name: "Laptop", price: 55000 })
db.products.find()         // saare products dikhao
db.products.find({ price: { $gt: 20000 } })   // 20000 se zyada price waale products
```

## Real Life Se Jode Toh...

Maan lo tumhari ek **kirane ki dukaan** hai aur tum register me likhte ho:

| Command | Real Life Equivalent |
|---|---|
| `use myShop` | "Aaj ka register kholna" |
| `insertOne({...})` | "Naya item register me likhna" |
| `find({...})` | "Register me se koi cheez dhoondhna" |
| `updateOne({...})` | "Kisi item ka price change karna" |
| `deleteOne({...})` | "Koi item register se kaat dena" |

## Ek line me yaad rakho

> **mongosh = wo jagah jaha tum apni ungliyo se seedha database ko instructions dete ho.**
