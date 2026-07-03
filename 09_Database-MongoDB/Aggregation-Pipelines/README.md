# Aggregation Pipeline — Data Ka Assembly Line 🏭

## Ye hai kya?

`aggregate()` MongoDB ka wo function hai jisse tum apne data ko **multiple stages** se guzaar kar **process, group, filter aur transform** kar sakte ho — sirf dhoondhne (`find()`) ke bajaye, usme se **useful insights nikaalne** ke liye.

`find()` sirf data **dikhata** hai jaisa hai, waisa ka waisa.

`aggregate()` data ko **stages** se guzaarta hai — har stage me data thoda transform hota hai, jaise ek **factory ki assembly line**.

## Real Life Example 🏭

Socho tumhare paas ek dukaan hai aur tumhe jaanna hai:

> "Har category ke products ka total sales kitna hua?"

`find()` se tum sirf saare orders dekh sakte ho, lekin **group karke total nikalna** khud karna padega (manually calculate).

`aggregate()` se ye ek hi query me ho jata hai — jaise ek **accountant** ko bol dena:

> "Saare bills lo, category ke hisaab se alag-alag dher (piles) bana do, fir har dher ka total nikaal do"

## Kaise likhte hai?

```js
db.orders.aggregate([
  { $match: { status: "completed" } },        // sirf completed orders lo
  { $group: { _id: "$category", total: { $sum: "$amount" } } },  // category ke hisaab se total jodo
  { $sort: { total: -1 } }                     // sabse zyada sales upar
])
```

### Isko step by step samjho (Assembly Line style)

Socho ek factory hai jisme raw material ek end se ghusta hai aur har machine (stage) usme kuch na kuch badlaav karti hai, jab tak final product bahar nahi aa jaata.

```
Orders (raw data)
   ↓
$match  →  sirf completed orders chuno
   ↓
$group  →  category ke hisaab se dher banao, total jodo
   ↓
$sort   →  sabse zyada sales waala upar rakho
   ↓
Final Result
```

| Stage | Kaam | Real Life |
|---|---|---|
| `$match` | Filter karo | "Sirf completed orders chahiye, cancelled nahi" |
| `$group` | Group banao | "Category ke hisaab se dher banao" |
| `$sum` | Total nikaalo | "Har dher ka total amount jodo" |
| `$sort` | Order lagao | "Sabse jyada sales waala upar rakho" |
| `$project` | Fields chuno | "Sirf naam aur price dikhao, baaki hata do" |
| `$limit` | Sankhya seemit karo | "Sirf top 5 dikhao" |

## Kuch aur real life examples

### 1. Har student ka average marks nikalna

> "Teacher poori class ki copies leke, har student ke naam se alag rakh de, aur har ek ka average nikaale"

```js
db.students.aggregate([
  { $group: { _id: "$studentName", avgMarks: { $avg: "$marks" } } }
])
```

### 2. Har city me kitne customers hai, ye ginna

> "Delivery boy saare address leke, city ke hisaab se sort kare aur ginti kare"

```js
db.customers.aggregate([
  { $group: { _id: "$city", totalCustomers: { $sum: 1 } } }
])
```

### 3. Sirf top 3 best-selling products dikhana

> "Dukaandaar apne saare items ka sale record nikaal ke, sabse zyada bikne waale top 3 dikhaye"

```js
db.orders.aggregate([
  { $group: { _id: "$productName", totalSold: { $sum: "$quantity" } } },
  { $sort: { totalSold: -1 } },
  { $limit: 3 }
])
```

## `find()` vs `aggregate()` — Farak Kya Hai?

| | `find()` | `aggregate()` |
|---|---|---|
| Kaam | Data dhoondhna/dikhana | Data process/transform karna |
| Grouping | Nahi kar sakta | Kar sakta hai (`$group`) |
| Calculation (sum, avg) | Nahi kar sakta | Kar sakta hai |
| Multiple steps | Nahi | Haan (pipeline stages) |
| Real Life | Register khol ke dekhna | Accountant se poora hisaab nikalwana |

## Ek line me yaad rakho

> **aggregate = data ko multiple stages (filter → group → calculate → sort) se guzaar ke usse meaningful result me badalna, jo `find()` akele nahi kar sakta.**
