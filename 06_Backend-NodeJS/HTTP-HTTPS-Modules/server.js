const http = require('http');

const server = http.createServer(function(req, res) {
    res.end("Hello World");
});

server.listen(3000, function() {
    console.log("Server is running on port 3000");
});

// in terminal -> node server.js
// tmhare laptop pe ek server chl rha h ab -> to check -> localhost:3000 type this in browser