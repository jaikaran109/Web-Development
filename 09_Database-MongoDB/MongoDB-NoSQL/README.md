# MongoDB Notes 📘

Ye folder MongoDB ke 4 important tools/concepts ko cover karta hai — jo practically har MongoDB developer use karta hai.

| File | Kya hai |
|---|---|
| [`01-mongod.md`](./01-mongod.md) | MongoDB ka actual database server (engine) |
| [`02-mongosh.md`](./02-mongosh.md) | Command line se database ke saath baat karne ka tareeka |
| [`03-compass.md`](./03-compass.md) | GUI tool — bina command likhe database dekhna |
| [`04-atlas.md`](./04-atlas.md) | Cloud pe MongoDB host karna (bina apne laptop pe install kiye) |
| [`05-aggregation.md`](./05-aggregation.md) | Aggregation pipeline — data ko group/filter/calculate karna |

**Simple analogy pehle samajh lo:**

Socho tumhare paas ek **dukaan (shop)** hai.

- **mongod** = dukaan ka building/godown, jaha saara samaan (data) actually rakha hai
- **mongosh** = dukaan ka counter jaha tum seedha malik se baat karke order dete ho (command likhke)
- **Compass** = ek app jisme tumhe dukaan ka pura stock visually dikh jata hai, bina counter pe jaake bolne ke
- **Atlas** = ye dukaan tumne khud nahi banayi, balki kisi aur (cloud provider) se rent pe li hai jo maintenance bhi khud sambhalta hai

Chalo ab ek-ek karke detail me samajhte hai.
