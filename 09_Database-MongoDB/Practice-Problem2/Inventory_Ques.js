// Collection: inventory

// 1️. Insert new inventory product
db.inventory.insertOne({
  inventory_id: "INV999",
  product_name: "Noise Cancelling Headphones",
  category: "Audio",
  stock_quantity: 100,
  reorder_level: 20,
  warehouse_location: "Warehouse-2",
  supplier: {
    supplier_id: "SUP010",
    name: "AudioTech Pvt Ltd",
    country: "India"
  },
  last_restock_date: "2025-02-01",
  cost_price: 8000,
  is_active: true
})


// 2️. Insert multiple Electronics products
db.inventory.insertMany([
  {
    inventory_id: "INV1000",
    product_name: "Gaming Mouse",
    category: "Electronics",
    stock_quantity: 80,
    reorder_level: 15,
    warehouse_location: "Warehouse-1",
    supplier: {
      supplier_id: "SUP011",
      name: "TechWorld",
      country: "Singapore"
    },
    last_restock_date: "2025-02-02",
    cost_price: 2500,
    is_active: true
  },
  {
    inventory_id: "INV1001",
    product_name: "External Hard Drive",
    category: "Electronics",
    stock_quantity: 60,
    reorder_level: 10,
    warehouse_location: "Warehouse-3",
    supplier: {
      supplier_id: "SUP012",
      name: "StorageHub",
      country: "Germany"
    },
    last_restock_date: "2025-02-03",
    cost_price: 4500,
    is_active: true
  }
  ])


// 3️. Find products where stock < reorder_level
db.inventory.find({ $expr: { $lt: ["$stock_quantity", "$reorder_level"] } })


// 4️. Find products in Warehouse-3
db.inventory.find({ warehouse_location: "Warehouse-3" })


// 5️. Show selected fields
db.inventory.find({}, { product_name: 1, stock_quantity: 1, warehouse_location: 1, _id: 0 })


// 6️. Find inactive products
db.inventory.find({ is_active: false })


// 7️. Increase stock_quantity by 20
db.inventory.updateOne(
  { inventory_id: "INV1000" },
  { $inc: { stock_quantity: 20 } }
)


// 8️. Change warehouse location
db.inventory.updateOne(
  { warehouse_location: "Warehouse-1" },
  { $set: { warehouse_location: "Warehouse-5" } }
)


// 9️. Delete one product where stock < 15
db.inventory.deleteOne({ stock_quantity: { $lt: 15 } })


// 10. Delete all Furniture products
db.inventory.deleteMany({ category: "Furniture" })

