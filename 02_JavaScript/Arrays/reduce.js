// reduce() array ke saare elements ko process karke ek single value me convert karta hai.

let arr = [1,2,3,4,5];
console.log(arr);

let sum = arr.reduce(function(acc,ele){
    return acc * ele;
});
console.log(sum);
