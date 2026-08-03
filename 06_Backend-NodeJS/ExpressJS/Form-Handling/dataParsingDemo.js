import express from "express"

const app = express();

app.use(express.json()); // ye raw JSON.String data ko readible bnane ke liye
// raw JSON Looks like
// let rawData = "{\"name\":\"Raj\",\"age\":22,\"city\":\"Delhi\"}";
// console.log(rawData.name); // undefined ❌ (kyunki ye string hai, object nahi)



app.use(express.urlencoded({extended:true})) // ye x-www-form-urlencoded iss formate me data hoga to usko readible bnayega
// raw x-www-form-urlencoded - username=raj&password=12345&city=Delhi

