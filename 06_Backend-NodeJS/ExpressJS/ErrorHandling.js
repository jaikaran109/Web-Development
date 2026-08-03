import express from 'express' // express package ko import kiya
const app = express();   // pura express ab ek variable app name me hn
const port = 3000;



app.use(function(req , res , next){
//   console.log("Im the middle ware");      // to see this refresh the profile web page and look at terminal
  console.log("Im the middle ware");  // error
  next();  // to pass next one
})


app.get('/', (req, res) => {      // http://localhost:3000
  res.send('Hello World !!!!')
})

app.get("/error", (req, res, next) => {
  next(new Error("Test error"));
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});


app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})