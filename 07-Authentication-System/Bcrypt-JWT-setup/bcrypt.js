const express = require('express')
const app = express()
const bcrypt = require('bcrypt')

app.get('/',function(req,res) {  // simple password me salting add kr ke usko hash ke form me store krta h 
        bcrypt.genSalt(10, function(err, salt) {
        bcrypt.hash("PassWord", salt, function(err, hash) {
            console.log(hash);
        });
    });
})

app.get('/read',function(req,res) {  // salting ke baad password encrypt nhi ho skta h , to ye bss generates hash se compare krta h aur result return krta h 
    bcrypt.compare("PassWord", "$2b$10$.skZq.SEj2ih6WPyqUcrLuHC0x0uN9X0HnK4.AkP2y0J8mldWr0gO", function(err, result) {
    console.log(result); 
    result ? res.send("Yes Matched") : res.send("Naaah")
});
})

app.listen(3000)