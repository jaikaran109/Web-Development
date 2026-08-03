const mongoose = require('mongoose');

mongoose.connect(`mongodb://127.0.0.1:27017/MongoPractice`);    // Ye line Mongoose (Node.js ka MongoDB library) ko bolti hai ki apne local MongoDB server se connect ho jaa.
// 127.0.0.1	Tumhara apna computer (localhost) — matlab local machine pe chal raha mongod
// 27017	MongoDB ka default port
// MongoPractice	Database ka naam

const userSchema = mongoose.Schema({    // define schema , kya kya rhega 
    name : String,
    username : String,
    email : String
})

module.exports = mongoose.model("user",userSchema) // bina model ke update , create , dlt or read operation nhi perform kr skte -- ye model name khud plural ho jayega - users

// yha se model export kr de rhe h phir app.js me alg alg route bna kr operations perform krenge

