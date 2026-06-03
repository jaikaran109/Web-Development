let arr = [3,4,2,1,5];
console.log(arr);

arr = arr.sort();  // ascending order sorting but when negative numbers present in array then it gives wrong result
console.log(arr);

let arr1 = [ 1,-3,-9,89];
console.log(arr1);

// arr1 = arr1.sort();
// console.log(arr1);  // it gives -3 , -9 , 1 , 89 which is wrong lets fix this

arr1 = arr1.sort((a,b) => a-b);  // ascending order sorting
console.log(arr1);    // here a and b are the element of array

arr1 = arr1.sort((a,b) => b - a);
console.log(arr1);  // descending order sorting


// LOGIC
// a = 5
// b = 2

// callback -- a - b
// means 5 - 2 = 3

// a - b < 0  => a pehle aayega
// a - b > 0  => b pehle aayega
// a - b = 0  => order same rahega

// here 5 - 2 = 3
// means --  2 ko 5 se pehle rakho



let arr2 = [12,-43,54,-2];
arr2 = arr2.sort((a,b) => Math.abs(a) - Math.abs(b)); // sort by ignoring sign 
console.log(arr2);
