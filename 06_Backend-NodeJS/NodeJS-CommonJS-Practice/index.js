const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs')

// these two lines is for parsing , isko aur acche se samjhne ke liye ExpressJS/Form-Handling/dataparse.js me dekh skte ho
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,'public'))); // iska mtlb ye h ki sari statics files js,vanilla css and images agr chahiye ho to public folder me mil jayega
// dekho yha path(__dirname) -- ye pura path address deta h -->> Like -->> Lenovo@jaikaran109-LOQ MINGW64 ~/OneDrive/Desktop/Web Dev/Web-Development/06_Backend-NodeJS/NodeJS-CommonJS-Practice  
// ab app.use(express.static(path.join(__dirname,'public'))); -->> Lenovo@jaikaran109-LOQ MINGW64 ~/OneDrive/Desktop/Web Dev/Web-Development/06_Backend-NodeJS/NodeJS-CommonJS-Practice/public

app.set('view engine', 'ejs');  // aapka jo webpage h vo ejs render(show) krega


app.get("/",function(req,res) {
    fs.readdir(`./files`,function(err,files){ // ye files folder me kitne data h vo read kregi - aur vo rerender kregi index.cjs me , ye sare file names [] array me store krti h
        res.render("index",{files:files}); // isme index.ejs likhne ki jarurat nhi h kyuki already view engine ejs h
    })                  // ab ye function use kr ke files wala array index.ejs me bhej rha h 
});

app.get("/file/:filename", function(req, res) {  // ye file data read krne ke liye h aur agr tm dhyan do to ye dynamic route h
    fs.readFile(`./files/${req.params.filename}`, 'utf-8', function(err, filedata) {
        res.render('show' , { filename:req.params.filename , filedata:filedata });
    });
});

app.post("/create",function(req,res) {
    // console.log(req.body);  // tm verify kr skte ho data yha aa rha h

    fs.writeFile(`./files/${req.body.title.split(" ").join("")}.txt`, req.body.details , function(err){  // ye files wale folder me crated task write krne ke liye h
        res.redirect("/");  // jb create ho jayega file to vo phirse redirect ho jayega Home page pe
    }) 

    // ab yha dhyan se dekhna ye files name ke folder me new file create kr rha h title name se lekin title me to space bhi hoga isiliye phle vo spaces ke basis pe split kr rha h then again join kr rha -->> example : My Fisrt Task -->> MyFirstTask
});

app.listen(3000,function(){
    console.log("Server running on http://localhost:3000");
})
