let cartQuantity = 0;

// Global Scope

{
    var val = 8; // global scope
}
console.log(val); 



// block scope
{
    let x = 2;
    const y = 3;
}
// console.log(x); // ReferenceError: x is not defined
// console.log(y); // ReferenceError: y is not defined 
