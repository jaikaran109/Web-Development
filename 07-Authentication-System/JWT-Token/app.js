const express = require('express');
const app = express();
const userModel = require('./models/user')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const cookieParser = require('cookie-parser');
const path = require('path');


app.set("view engine","ejs");
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,'public')));
app.use(cookieParser());

app.get("/",function(req,res) {
    res.render("index");
})


app.post('/create', (req,res) => {
    const {name,email,password,age} = req.body;
    
    bcrypt.genSalt(10, (err,salt) => {

        bcrypt.hash(password , salt , async (err,hash) => {

            // iss time password bhi dikh ja rha h to ab hm salting krenge aur uska code uper likha h
            let createdUser = await userModel.create({
                name,
                email,
                password : hash,
                age
            })

            let token = jwt.sign({email},"shhhhhhhhhhh");
            res.cookie("token",token); // ye cookie save ho jayegi browser me taki jb bhi user login kre tb usko access mil jaye aur usko baar baar login na krna pde vo iss token ke help se hi kr skta h

            res.send(createdUser);
        })
    })
})


// GET — Server se data MANGNE ke liye (kuch fetch karna, koi change nahi)
// POST — Server ko data BHEJNE / STATE CHANGE karne ke liye
//         (login, register, logout — sab POST hote hain kyunki
//         ye server-side state change karte hain: session/token
//         create ya destroy karte hain)


app.get('/logout', (req, res) => {   // POST use hota hai kyunki logout server ki state change karta hai (token/session hataana)
    res.clearCookie("token");          // cookie ko properly delete karta hai (empty value set karne se alag hai)
    res.status(200).send("Logout successfully");
});


app.get('/login', (req, res) => {
    res.render('login');   // views/login.ejs ko render karega
});


app.post("/login", async (req,res) => {
    let user = await userModel.findOne({email: req.body.email}); // jo email daal rha h usko check kro phle se database me h ki nhi
    if(!user) return res.send("Something went wrong")  // agr na ho to error 

    bcrypt.compare(req.body.password, user.password , function (err,result) { // yha req.body.pass jo user iss time password enter kr rha h vo , aur user.pass jo store h vo -- aur bcrypt hash form ko compare krne ke liye 
        if(result){ 
            let token = jwt.sign({email: user.email},"shhhhhhhhhhh");
            res.cookie("token",token); // ye cookie save ho jayegi browser me taki jb bhi user login kre tb usko access mil jaye aur usko baar baar login na krna pde vo iss token ke help se hi kr skta h
            res.send("Login Successfully")
        }
        else res.send("Error")
    })
})


app.listen(3000)