// Insert Products

use ecommerce
db.products.insertMany([
{
 name: "Wireless Mouse",
 price: 799,
 category: "Electronics",
 stock: 120,
 ratings: 4.5,
 tags: ["computer", "accessory", "wireless"],
 createdAt: new Date()
},
{
 name: "Mechanical Keyboard",
 price: 2499,
 category: "Electronics",
 stock: 80,
 ratings: 4.8,
 tags: ["keyboard", "mechanical"],
 createdAt: new Date()
},
{
 name: "Gaming Laptop",
 price: 85999,
 category: "Computers",
 stock: 30,
 ratings: 4.6,
 tags: ["gaming", "laptop"],
 createdAt: new Date()
}
]);







// Insert Orders
db.orders.insertMany([
{
 orderId: "ORD001",
 user: "John Doe",
 products: [
{ name: "Wireless Mouse", quantity: 1, price: 799 },
{ name: "Mechanical Keyboard", quantity: 1, price: 2499 }
],
 total: 3298,
 status: "Delivered",
 createdAt: new Date()
},
  {
 orderId: "ORD002",
 user: "Jane Smith",
 products: [
{ name: "Gaming Laptop", quantity: 1, price: 85999 }
],
 total: 85999,
 status: "Pending",
 createdAt: new Date()
}
]);




// Insert Contact Messages
db.contacts.insertMany([
{ name: "Alice", message: "Loved your website!", phone: "9876543210", createdAt:
new Date() },
{ name: "Bob", message: "Do you have discounts on laptops?", phone: "9123456789",
createdAt: new Date() },
{ name: "Carol", message: "I want to cancel my order.", phone: "9988776655",
createdAt: new Date() }
])



// 1. Read All
db.products.find()

// 2. Read using filter
db.products.find({name:"Wireless Mouse"})


// 3. filter category
db.products.find({category:"Electronics"})

// 4. Greater Than(gt) , Greater Than Equals to(gte)
db.products.find({price : {$gt : 1000} })

// 5. Products between specific range
db.products.find({ price : {$gte : 1000 , $lte : 50000}})

// 6. Logical Operators
db.products.find({
  $or : [{ category : "Electronics"} , {stock : {$lt : 50}}]
})

// 7. Show fields you want
db.products.find({},{name : 1 , price : 1 , _id : 0})

// 8. Sorting and Limiting
db.products.find().sort({price : -1}).limit(2)


// !IMPORTANT
// 9. both skip and limit use in websites when you see the page 1 in that there are 10 lists and when you click page 2 then 1st 10 will skip and next 10 will show
db.products.find().skip(5).limit(5)


// 10. Update One
db.products.updateOne(
  {name : "Wireless Mouse"},
  {$set : {price : 899}}
)


// 11. Update many 
db.products.updateMany(
  {category : "Electronics"},
  {$inc : {stock : 11}}
)


// 12. Delete One
db.contacts.deleteOne({name : "Alice"})


// 13. Delete Many
db.orders.deleteMany({status : "Delivered"})
