import express from 'express';  // express package ko import kiya
const app = express();   // pura express ab ek variable app name me hn
const port = 3000;

// app.get means tm konse page pe kya show krna chahte ho
app.get('/', (req, res) => {      // http://localhost:3000
  res.send('Hello World gfvhghvb !!!!')
})



app.use(function(req , res , next){
  console.log("Im the middle ware");      // to see this refresh the profile web page and look at terminal
  next();  // to pass next one -- next() Express ko bolta hai: “mera middleware ka kaam ho gaya, ab agla middleware ya route chalao.”
})



app.get('/profiles', (req, res) => {      // http://localhost:3000/profiles
  res.send('arre bhai ye to mera yani jaikaran ka profile h')
})


app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})


// ye by default update nhi hota h agr tm kuch changes krte ho to tmko current wala rok kr dubara npm run dev krna hoga 

// iske liye tm npm i nodemon -g - install kro yha -g ka mtlb GLobal hota h aur ab tm kuch bhi changes kroge to terminal me vo auto restart ho jayega bss refresh krne pe show ho jayega
// nodemon Express.js -- run command