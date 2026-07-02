// Collection: orders

// 1️. Insert one new order
db.orders.insertOne({
  order_id: "ORD999",
  customer_name: "Arjun Malhotra",
  email: "arjun999@example.com",
  city: "Delhi",
  product_name: "Laptop",
  category: "Electronics",
  price_per_unit: 65000,
  quantity: 2,
  total_amount: 130000,
  order_date: "2025-02-01",
  payment_status: "Paid"
})



// 2️. Insert three new orders
db.orders.insertMany([
  {
    order_id: "ORD1000",
    customer_name: "Ritika Sharma",
    email: "ritika1000@example.com",
    city: "Mumbai",
    product_name: "Tablet",
    category: "Electronics",
    price_per_unit: 30000,
    quantity: 1,
    total_amount: 30000,
    order_date: "2025-02-02",
    payment_status: "Pending"
  },
  {
    order_id: "ORD1001",
    customer_name: "Manish Verma",
    email: "manish1001@example.com",
    city: "Mumbai",
    product_name: "Monitor",
    category: "Electronics",
    price_per_unit: 15000,
    quantity: 2,
    total_amount: 30000,
    order_date: "2025-02-02",
    payment_status: "Paid"
  },
  {
    order_id: "ORD1002",
    customer_name: "Sonia Patel",
    email: "sonia1002@example.com",
    city: "Mumbai",
    product_name: "Headphones",
    category: "Accessories",
    price_per_unit: 2000,
    quantity: 3,
    total_amount: 6000,
    order_date: "2025-02-03",
    payment_status: "Cancelled"
  }
])


// 3. Find orders from Mumbai
db.orders.find({ city: "Mumbai" })


// 4️. Find Pending payments
db.orders.find({ payment_status: "Pending" })


// 5️. Find orders with total_amount > 50000
db.orders.find({ total_amount: { $gt: 50000 } })


// 6️. Show selected fields only
db.orders.find({}, { customer_name: 1, product_name: 1, total_amount: 1, _id: 0 })


// 7️. Update payment_status to Paid for a specific order
db.orders.updateOne(
  { order_id: "ORD1000" },
  { $set: { payment_status: "Paid" } }
)


// 8️. Increase quantity to 3 and update total_amount
db.orders.updateOne(
  { order_id: "ORD1001" },
  { 
    $set: { quantity: 3, total_amount: 15000 * 3 }
  }
)


// 9️. Delete one Cancelled order
db.orders.deleteOne({ payment_status: "Cancelled" })


// 10. Delete all orders from Kolkata
db.orders.deleteMany({ city: "Kolkata" })

])
