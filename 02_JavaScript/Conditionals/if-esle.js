// prompt-sync library ko import kar rhe h, ye Node.js me terminal se synchronous user input lene ke kaam aati h.
const prompt = require("prompt-sync")();

let rating = Number(prompt("Give Rating"));

if(rating === 1) console.log("Poor");
else if(rating === 2) console.log("Below Average");
else if(rating === 3) console.log("Average");
else if(rating === 4) console.log("Good");
else if(rating === 5) console.log("Excellent");
else console.log("Invalid Rating");

