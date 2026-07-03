# mongod 

## Ye hai kya?

`mongod` MongoDB ka **actual server/engine** hai. Jab tum `mongod` run karte ho, tab hi tumhare system pe MongoDB "zinda" hota hai — matlab wahi process hai jo data ko disk pe save karta hai, requests handle karta hai, aur database ko chalu rakhta hai.

Agar `mongod` band hai, to samjho database hi band hai. Koi bhi connection — chahe shell ho, Compass ho, ya tumhara Node.js app — sabko is `mongod` process se hi connect hona padta hai.

## Real Life Example 🏪

Socho ek **restaurant** hai.

- `mongod` = **kitchen** — jaha khana actually banta hai aur store hota hai (fridge, stock, sab kuch)
- Waiter (mongosh/Compass/App) sirf order leke kitchen tak pohchata hai
- Agar kitchen band hai, waiter kitna bhi acha ho, khana nahi milega

Isi tarah agar `mongod` chal hi nahi raha, to Compass ya shell chahe kitne bhi acche ho, connect nahi ho payenge.

## Kaise chalate hai?

Terminal me simply likho:

```bash
mongod
```

Ye default port **27017** pe start ho jayega (jaise ek dukaan ka fixed address ho).

Agar apna custom data folder use karna ho:

```bash
mongod --dbpath "C:\data\db"
```

`--dbpath` batata hai ki data kaha store hoga — jaise batana ki kitchen ka stock kaunse godown me rakhna hai.

## Common cheezein jo yaad rakhni hai

- Default port: `27017`
- Log file dekh sakte ho ki server sahi se chal raha hai ya nahi
- Agar "port already in use" error aaye, to matlab ek `mongod` pehle se chal raha hai kahi

## Ek line me yaad rakho

> **mongod = server jo actually database ko zinda rakhta hai. Isko band karo to sab kuch band.**
