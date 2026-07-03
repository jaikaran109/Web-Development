// ek stage ka Output dusre stage ka Input hota h 


// use DataBaseName_
db.sales.insertMany([
{ _id: 1, item: "Apple", price: 10, quantity: 5, category: "Fruit" },
{ _id: 2, item: "Banana", price: 5, quantity: 10, category: "Fruit" },
{ _id: 3, item: "Carrot", price: 8, quantity: 6, category: "Vegetable" },
{ _id: 4, item: "Tomato", price: 6, quantity: 8, category: "Vegetable" },
  { _id: 5, item: "Mango", price: 15, quantity: 3, category: "Fruit" }
]);



// Match - if Match found
db.sales.aggregate([
  {$match : {category : "Fruit"}}
]);



// Filtered Projection - isme phle match found kr rha h uske baad jo matches h uska vo jo fields chahiye ($project) wala operation perform kr rha h
db.sales.aggregate([
  {$match : {category : "Fruit"}},
  {$project : {_id : 0 , item : 1 , quatity : 1}}
]);



// Group - ye group form krta h
db.sales.aggregate([
  {
    $group : {
      _id : "$cateory",
      totalSales : {$sum : {$multiply : ["$price" , "$quantity"]}}
    }
  }
])

