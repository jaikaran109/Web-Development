// Global Scope
function a(){
    g = 109;             // -- its Global variable bcz iska type nhi define h (agr let,var,const define hota to ye block ya function scoped ho jata)
    let c = 89;
    const name = "jai karan";
    var age =  21;
}
a();
console.log(g);  // global variable ko pure code me khi bhi access kr skte h
// console.log(c); // not accessible because it has a block scope.
// console.log(d); // not accessible because it has a block scope.
// console.log(e); // not accessible because it has a functional scope.



// Function Overwriting
// When multiple functions with the same name are declared in the same scope,
// the latest function declaration overwrites the previous one.
// Therefore, when SameName() is called, the second function definition is executed.
function SameName() {
    console.log("First Function");
}

function SameName() {
    console.log("Second Function");
}

SameName();
SameName();      // Output -- Second Function
                 // Second Function




// justifying how var has function scope
function fun(){
    if(true){
    var x = 10; // not block scope but has functional scope.
    }
    console.log(x);
};
fun();



// we can create variables using let,var and const in global context as well Example:-
var a = 100;     // Global variable using `var`
let b = 200;     // Global variable using `let` (in the global context)
const c = 300;   // Global constant

console.log(a, b, c);    // Accessible: 100, 200, 300

function test() {
  console.log(a,b,c);    // Accessible: 100, 200 , 300
}
test();
