function fun(){
    console.log("my name is jai karan");
}

var a = fun;           // ye (a) me  reference store kr rha h 
console.log(a);        // output -- [ Function : fun ]
console.log(fun);      // output -- [ Function : fun ]
console.log(fun());    // output -- [ Function : fun ] , my name is jai karan and undefine(kyuki functioon kuch return nhi kr rha h to by default "return undefined;"")




var y = function outer(){
    console.log("inside outer function")
}
console.log(y);         // [Function: outer]
console.log(y());       // it will print the function definition and undefine kyuki outer() function kuch return nhi kr rha
// console.log(outer);  // it will give error because outer is not defined in the global scope.




// Key Concept:
// This is called a named function expression (NFE) because:
// It is a function expression (assigned to a variable).
// It has an internal name (outer), which is only available inside the function body.
// If you want outer to be accessible globally, you should use a function declaration instead:

// NFE : Named Function Expression



var prime = ()=>{
    console.log("funtion..");
}

console.log(prime);   // [Function: prime]
console.log(prime()); // function . .  and undefine kyuki outer() function kuch return nhi kr rha
