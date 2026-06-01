// A closure is a combination of a function and the lexical environment within which that function was declared. It allows the function to access variables from its outer scope even after the outer function has returned.



// function outer() {
//     let money = 50;

//     function inner() {
//         console.log(money);
//     }

//     return inner;
// }

// let x = outer();
// x();

// Step 1
// let x = outer();

// Yahan outer() call hua.

// outer() ke andar:

// let money = 50;

// function inner() {
//     console.log(money);
// }

// phir:

// return inner;

// Matlab outer() ne inner function return kar diya.

// To ab:

// x = inner

// effectively code ban gaya:

// let x = function inner() {
//     console.log(money);
// };



// Step 2

// Ab ye line:

// x();

// actually equivalent hai:

// inner();

// kyunki x ke andar inner function ka reference store hai.


function outer(){
    var money = 50;
    function inner(){
        var a = 10;
        console.log(a);
        console.log(money);
    }
    return inner;
}
var y = outer;
console.log(y);


// outer() create
//      │
//      ▼
// Global Memory

// x = outer
//      │
//      ▼
// x stores function reference

// console.log(x)
//      │
//      ▼
// [Function: outer]




function outer(){
    var money = 50;
    function inner(){
        var a = 10;
        console.log(a);
        console.log(money);
    }
    return inner();   
    // inner() is called here  and it will return undefined because inner function has no
    // return statement
}
var y = outer();
console.log(y); 


// outer()
//    │
//    ├── money = 50
//    ├── inner() create
//    └── return inner
//             │
//             ▼
//           x = inner

// x()
//  │
//  ▼
// inner()
//  │
//  ▼
// console.log(money)
//  │
//  ▼
// 50
