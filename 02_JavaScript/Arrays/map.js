// map() executes a callback function on each element of an array and returns a new array containing the transformed elements.

let arr = [1,-3,43,-656];
let brr = arr.map(function(ele){
    return ele * ele;  // square
})
console.log(arr);
console.log(brr);


let arr1 = [2,-5,9,-56];
let brr1 = arr1.map((ele) => {   // with arrow function
    return ele * 10;  // multiply by 10 
})
console.log(arr1);
console.log(brr1);



let arr3 = [1,2,3,4,5];
arr3 = arr3.map((ele) => {   // modify the existing array 
    if(ele % 2 === 0) return ele * 10;  // if even then multiply by 10
    else ele * 5 // if odd then multiply by 5
})
