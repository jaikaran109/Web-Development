// PART A - Working with MongoShell 
// Database: instituteDB (will be created by code)
// Collection: students (will be created by code)
// Each student has:
// name
// age
// course
// marks
// city
// status


// 1. Switch to the database 
use instituteDB


// 2. Insert ONE document in the students' collection
db.students.insertOne({
  name: "Rahul",
  age: 22,
  course: "Data Science",
  marks: 85,
  city: "Delhi",
  status: "active"
})


// 3. Insert MULTIPLE documents
db.students.insertMany([
  {
    name: "Amit",
    age: 23,
    course: "AI",
    marks: 78,
    city: "Mumbai",
    status: "active"
  },
  {
    name: "Neha",
    age: 21,
    course: "ML",
    marks: 92,
    city: "Pune",
    status: "inactive"
  },
  {
    name: "Priya",
    age: 24,
    course: "Data Science",
    marks: 88,
    city: "Delhi",
    status: "active"
  }
])


// 4. Read ALL documents
db.students.find()


// 5. Read with a readable format
db.students.find().pretty()


// 6. Read with condition
db.students.find({ course: "Data Science" })


// 7. Read using comparison operators
db.students.find({ marks: { $gt: 80 } })


// 8. Read using logical operators
db.students.find({
  $and: [
    { course: "Data Science" },
    { marks: { $gte: 85 } }
  ])


// 9. Sort results
db.students.find().sort({ marks: -1 })

    
// 10. Update ONE document
db.students.updateOne(
  { name: "Amit" },
  { $set: { marks: 82 } }
)

    
// 11. Update MULTIPLE documents
db.students.updateMany(
  { course: "Data Science" },
  { $set: { status: "topper" } }
)

    
// 12. Increment a value
db.students.updateOne(
  { name: "Rahul" },
  { $inc: { marks: 5 } }
)

    
// 13. Add a new field
db.students.updateMany(
  {},
  { $set: { passed: true } }
)


// 14. Remove a field
db.students.updateOne(
  { name: "Neha" },
  { $unset: { passed: "" } }
)


// 15. Delete ONE document
db.students.deleteOne({ name: "Neha" })


// 16. Delete MULTIPLE documents
db.students.deleteMany({ status: "inactive" })


// 17. Delete ALL documents
db.students.deleteMany({})


// 18. Drop collection
db.students.drop()


// 19. Drop database
db.dropDatabase()
