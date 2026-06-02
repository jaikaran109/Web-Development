const arr = [1,2,3,4,5];
console.log(arr); // print the Array
console.log(typeof arr); // object

let n = arr.length;
console.log(" length is " , n); // print  the length of Array

console.log("Print Array By loop");
for(let i = 0 ; i < n ; i++){
    console.log(arr[i]);
}

console.log("Access Element by index" , arr[3]);

arr.push(9);   // add at last
console.log(arr); 

arr.push(0);   
console.log(arr);

arr.pop();     // removes last elements
console.log(arr);

arr.unshift(7); // add at first
console.log(arr);

arr.shift();   // removes first element
console.log(arr);


console.log("_________________________________")



let twoDimensionArray = [[101,102,103,104,105],[106,107,108,109,110,111,112,113,114,115,116,117]];
console.log("2D Arrays :- ")
console.log(twoDimensionArray);


console.log("_________________________________")


// for - of Loop
nums = [3,5,7,9,11,13,15];
for (const element of nums) {
    console.log(element);
}


console.log("_________________________________")


//for-each Loop
nums1 = [2,4,6,8,10];
nums1.forEach((element) => {
    console.log(element);  // print only values
});

console.log("_________________________________")

nums1.forEach((element , i) => {
    console.log(element,i);  // print value and index both
});


console.log("_________________________________")


nums1.forEach((element,i,nums1) => {
    console.log(element,i,nums1);  // prints value , index and array
});
