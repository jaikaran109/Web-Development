const express = require('express'); // express package ko import kiya
const app = express();   // pura express ab ek variable app name me hn
const port = 3000;


app.get('/', (req, res) => {      // http://localhost:3000
  res.send('Hello World !!!!')
})



app.use(function(req , res , next){
  console.log("Im the middle ware");      // to see this refresh the profile web page and look at terminal
  next();  // to pass next one
})



app.get('/profiles', (req, res) => {      // http://localhost:3000/profiles
  res.send('arre bhai ye to mera yani jaikaran ka profile h')
})


app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})
