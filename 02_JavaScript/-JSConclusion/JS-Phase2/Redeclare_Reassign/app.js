// var - both redeclare and reassign
// let - reassign , not redeclare
// const - Nothing



// Redeclare
var a = 10 
console.log(a);
var a = true
console.log(a);


// let a = 10 
// let a = true  -- error

// Reassign
var x = 10 
console.log(x);
x = true
console.log(x);

let l = 10 
l = true
console.log(l);


const c = 76;
// c = 54554;  error
console.log(c);