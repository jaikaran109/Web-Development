// Function -> 2 numbers , sum 
function sum(x,y){
    let s = x + y;
    return s;
}

let val = sum(123,244);
console.log(val)



// Arrow function 
// -- Multiplication
const mul = (a,b) => {
    return a*b;
};
let multi = mul(3,4);
console.log(multi);


// write a function to count vowels 
let count = 0;
function countVowels(str){
    for(const char of str){
        if(char === "a" || char === "o" ||char === "u" ||char === "i" ||char === "e"){
            count++;
        }
    }
    console.log(count);
}

countVowels("hellllllooooooooo");


// same with array function -
const countVow = (str) => {
    let c = 0;
    for(const char of str){
        if(
            char === "a" || 
            char === "e" ||
            char === "i" ||
            char === "o" ||
            char === "u"
        ){
            c++;
        }
    }
    return c;
};

console.log(countVow("hellllllooooooooo"));



// forEach Loop in Arrays  -- ye HIGHER ORDER FUNCTION / METHOD h -- means vo functions jo dusre functions ko as a parameter le ya koi function return  kra de 
// arr.forEach(callBackFunction)
// CallBackFunction : Here , it is a function to execute for each element in the array
// * A callback is a functioon passed as an argument to another function 

let arr = [1,2,3,4,5,6];

// arr.forEach(function printVal(val){
//     console.log(val);
// });

// By Arrow function 
arr.forEach((val) => {
    console.log(val);
});


let city = ["pune","gkp","agra"];
city.forEach((val) => {
    console.log(val.toUpperCase());
});




// Q - print Square using forEachLoop
let num = [2, 3, 4, 5, 6, 7];
num.forEach((num) => {
    console.log(num * num);
});






// Map
// create a new array with the results of some operation.
// the value its callback returns are used to form new array

// arr.map(callback(value,index,array))



/* 
map() tab use karte hain jab aapko array ke har ek element ko kisi na kisi tarah badalna (transform) ho.

Output: Nayi array ki length hamesha purani array ke barabar hogi.

Simple logic: "Har item ke saath kuch karo."

Example: Saare prices par 10% discount lagana.
*/
let nums = [1,2,3,4,5,6,7];

let newArr = nums.map((val) => {
    return val * val;
});

console.log(newArr);  // new Array
console.log(nums); // original Array



// filter
// Creates a new Array of elements that give true for a condition/filter.
// eg : all even elements



/*
filter() tab use karte hain jab aapko array mein se sirf kuch khaas elements chahiye honge jo kisi condition ko poora karte honge.

Output: Nayi array ki length purani se kam ya barabar ho sakti hai.

Simple logic: "Sirf wahi lo jo criteria match kare."

Example: Sirf wo products dikhao jo 500 se saste hain.
*/

let arr2 = [12,13,14,15,16,17,18,19];
let evenArr = arr2.filter((val) => {
    return val % 2 === 0;
});
console.log(evenArr);  // new even Array
console.log(arr2);    // original Array







// Reduce  
// performs some operations & reduces the array to a single value.it returns 
// that single value.

/*
Ye ek poori array ko "nichod" kar sirf ek single value bana deta hai. 
Wo value ek number ho sakti hai, ek string, ya phir ek object bhi.
*/



let output = arr2.reduce((res , curr) => {   // starting res = first element & curr = sec element 
    return res + curr;   // res = res + curr & curr = next val
});

console.log(output);


// calc largest
const largest = arr2.reduce((prev,curr) =>{
    return prev > curr ? prev : curr ;
});
console.log(largest);




// Q - filter marks more than 90
let marks = [97,64,32,49,99,96,86];
let toppers = marks.filter((val) =>{
    return val > 90;
});
console.log(toppers);



// Q - take n inputs and perform totalSum and product using reduce function
// let n = prompt("Enter a number : ");
// let array = [];
// for(let i = 1 ; i <= n ; i++){
//     array[i - 1] = i;
// }
// console.log(array);


// let finalSum = array.reduce((res,curr) => {
//     return res + curr;
// });
// console.log("sum ", finalSum);

// let factorial = array.reduce((res,curr) => {
//     return res * curr;
// });
// console.log(factorial);
