var y = function outer(){
    console.log("inside outer function")
}
console.log(y); 
console.log(outer); 

#  Key Concept:
1. This is called a named function expression (NFE) because:
2. It is a function expression (assigned to a variable).
3. It has an internal name (outer), which is only available inside the function body.
4. If you want outer to be accessible globally, you should use a function declaration instead:
function outer(){
    console.log("inside outer function");
}
console.log(outer); // Works fine
