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
