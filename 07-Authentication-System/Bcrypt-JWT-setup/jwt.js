const cookieParser = require('cookie-parser');
const express = require('express')
const app = express();
const jwt = require('jsonwebtoken')

app.use(cookieParser())

app.get('/',function(req,res){
    let token = jwt.sign({email:"jai@gmail.com"},"secretKey")
    console.log(token);
    res.cookie("token",token)
    res.send("Cookie me Data aa gya h")
})

app.get('/read',function(req,res){
    let data = jwt.verify(req.cookies.token,"secretKey")
    console.log(data);
    res.send(data)
})
app.listen(3000)