const cookieParser = require('cookie-parser')
const express = require('express')
const app = express()

app.use(cookieParser())  // cookie ko console krne ke liye

app.get('/',function(req,res) {

    // cookie -  server se browser pe data save kra dena

    res.cookie("name","jaikaran") // cookie setup
    // COOKIE SETUP — HOW TO VERIFY IT IN BROWSER
    //
    // Jab res.cookie() se cookie set ho jaati hai (jaise login/register
    // ke response mein), tum ise browser mein khud dekh/verify kar sakte ho:
    //
    //   1. Browser mein apni site kholo (jaise http://localhost:3000)
    //   2. Address bar ke left side wale icon pe click karo
    //      (lock icon / "i" info icon jo URL se pehle dikhta hai)
    //   3. Us panel mein "Cookies" (ya "Site settings" -> "Cookies")
    //      section kholo — yahan set ki hui cookie (naam, value, flags
    //      jaise HttpOnly/Secure/SameSite) dikh jaati hai
    //
    // Isse confirm ho jaata hai ki cookie sahi se set hui, uski expiry
    // kya hai, aur security flags (HttpOnly/Secure) apply hue ya nahi —
    // bina kisi extra tool/extension ke, sirf browser ke built-in
    // address-bar info panel se.


    res.send("cookie setup")
})


// agr tm browser pe kisi aur route pe jate ho to vo cookie bhi jati h bina cookie setup ke hi
app.get("/read",function(req,res) {
    console.log(req.cookies)  // read cookie
    res.send("Hey , I'm Read page") // ispe bhi cookie show hoga
})

app.listen(3000)