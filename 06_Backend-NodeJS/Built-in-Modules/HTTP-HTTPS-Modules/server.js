const http = require('http');

const server = http.createServer(function(req, res) {
    res.end("Hello World");
});

server.listen(3000, function() {
    console.log("Server is running on port 3000");
});

// in terminal -> node server.js
// tmhare laptop pe ek server chl rha h ab -> to check -> localhost:3000 type this in browser







// if u wanna use https
// const https = require('https');   // http ki jagah https
// const fs = require('fs');

// // SSL certificate aur key chahiye honge
// const options = {
//     key: fs.readFileSync('key.pem'),
//     cert: fs.readFileSync('cert.pem')
// };

// const server = https.createServer(options, function(req, res) {
//     res.end("Hello World securely!");
// });

// server.listen(3000, function() {
//     console.log("Secure server running on port 3000");
// });