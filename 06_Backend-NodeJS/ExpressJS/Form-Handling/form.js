import express from "express"
const app = express();
app.use(express.json()); 
app.use(express.urlencoded({extended:true}));


// GET kyunki tum sirf form dikha rahe ho (data fetch/display), koi naya data nahi bana rahe.
app.get("/",(req,res) => {
    res.sendFile(process.cwd()+"/form.html");
})

// process.cwd() -- current working directory
// Ye function batata hai — "Abhi tum terminal me kis folder ke andar khade ho, jab tumne node command chalayi."
// Ye ek string return karta hai jisme us folder ka poora path hota hai.
// Ye ek string return karta hai jisme us folder ka poora path hota hai.
// cd C:/Users/jaikaran/Web-Dev/Form-Handling
// node form.js
// console.log(process.cwd());
// C:/Users/jaikaran/Web-Dev/Form-Handling




// res.sendFile(process.cwd() + "/form.html");
// process.cwd()   →  "C:/Users/jaikaran/Web-Dev/Form-Handling"
//        +
// "/form.html"    →  file ka naam

// = "C:/Users/jaikaran/Web-Dev/Form-Handling/form.html"




// POST kyunki user naya data submit/create kar raha hai (form fill karke register karna).
app.post("/register",(req,res) => {
    console.log(req.body);  // jo data submit hua h vo console pe print hoga 
    res.send("Data received!");
})


app.listen(3000,() => {
    console.log("Server running on http://localhost:3000");
    
})