const mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/DataAssociations')

const express = require('express');
const app = express();

const postModel = require('./models/post')
const userModel = require('./models/user')

app.get('/',function(req,res) {
    res.send("dcffvgbh")
})

app.get('/create',async function(req,res) {
    let user = await userModel.create({
        name : "jai",
        email : "jai@gmail.com",
        age : 22,
    })

    res.send(user);

})

app.get('/post/create',async function(req,res) {
    let post = await postModel.create({
        postdata : "helloooooooooooooooooooo",
        user : "6a772e7a63005c5857609b16" // ye user ki id h - manully paste kr do abhi
    })

    let user = await userModel.findOne({_id:"6a772e7a63005c5857609b16"});
    user.posts.push(post._id); // dekho post ke ander to user ki id aa gyi thi lekin user ke ander bhi to post id bhejna hoga taki pta chle ki post create ho gya h uss user ke through
    await user.save();
    res.send({post,user});
})

app.listen(3000);