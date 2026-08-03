const express = require('express');
const app = express();
const userModel = require('./usermodel');
const { model } = require('mongoose');

app.get("/",(req,res) => {
    res.send("yooo");
})


app.get('/create' , async (req,res) => {  // this is a Asynchronous Operation
    let createdUser = await userModel.create({
        name : "jaikaran",
        username : "jaikaran109",
        email : "jai@gmail.com"
    })

    res.send(createdUser);
})


app.get('/update' , async (req,res) => {  // this is a Asynchronous Operation
    let updatedUser = await userModel.findOneAndUpdate({username:"jaikaran109"} , {email : "jaikarannnnn@gmail.com"} , {new : true})
    res.send(updatedUser);
})

app.get('/read',async (req,res) => {
    let users = await userModel.find();  // findOne returns first users
    res.send(users);
})

app.get('/delete' , async (req,res) => { 
    let deletedUser = await userModel.findOneAndDelete({name : "jaikaran"});
    res.send(deletedUser);
})


app.listen(3000);