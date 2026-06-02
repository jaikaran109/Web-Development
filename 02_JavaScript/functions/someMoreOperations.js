// java script function are designed to perform a particular task.
// JavaScript function is executed when "something" invokes it (calls it).



// 1. function is defined using function keyword, followed by a name, followed by parentheses ().
function product(a,b){
    // Inside the function, the arguments (the parameters) behave as local variables.
    return a*b;
}
// 2. function is called using the name of the function, followed by parentheses ().
console.log(product(2,3));




// code here can NOT use carName
function myFunction() {
    let carName = "Volvo";
    // code here CAN use carName
};
// code here can NOT use carName




// Immediately Invoked Function Expressions (IIFE) :  
//  A JavaScript function expression can be immediately invoked, or executed, by adding parentheses () 
//  at the end of the function declaration. The function expression is created when the name is declared,
//  and the function is run as soon as it is declared. Example: ()()

function myFun (){
    console.log("Hello World");
};
myFun();


console.log("------------------------------------------------------");
// to immediate call
(function myFun1 (){ // named IIFE- > Immediately Invoked Function Expressions
    console.log("Hello World1");
})();

console.log("------------------------------------------------------");
// using arrowFun
( ()=> (console.log("Hello world from arrow function")) )();





// Imp: you will get error there if you not user semicolon at end of the first function because it
//  will consider it as a part of the second function.

( function(){ // without name IIFE
    console.log('new World');
} )() ; // semi colon is minded

( function(){
    console.log('new World');
} )();



// is you want to pass argument
(  function(name){
    console.log(`new ${name}`);
})("world");




// function expression
function name(){
    console.log("this is a name function");
};


let fun = function (){
    console.log("this is anonymus fun");
}

let v = fun;
v = null;
v();
