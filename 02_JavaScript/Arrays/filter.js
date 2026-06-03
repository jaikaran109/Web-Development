// filter() creates a new array containing only those elements that satisfy a given condition.

let arr = [1,2,3,4,5,6,7];
console.log(arr);

arr = arr.filter(function(ele){
    if(ele % 2 == 0) return true;
    else false;
});
console.log(arr);


let arr1 = [10,21,33,42,55,68,70];
console.log(arr1);
arr1 = arr1.filter((ele) => {  // with arrow function
    if(ele % 2 == 0) return true;  // if even then return true
    else return false; // if odd then return false
});
console.log(arr1);

