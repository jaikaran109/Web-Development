// array in js is dynamic.
const fruits = ["Banana", "Orange", "Apple", "Mango"];
const a = [1,2,3.0,4];
let fruit = fruits.at(-1); // return last indexed element
console.log(typeof fruit); // string because it is a string
console.log(typeof a); // object
console.log(Array.isArray(a)); // true becaue it is an array 
console.log(Array.isArray(fruit)); // false because it is a string
console.log(fruit); // Mango


// arr.push() && arr.pop() : add/remove element from the end of the array.
console.log("----------------------------------------");
console.log(fruits); // ["Banana", "Orange", "Apple", "Mango"]
console.log("adding kiwi");
let len = fruits.push("Kiwi"); // it will return the length of the array after adding the element.(5)
console.log(fruits); // ["Banana", "Orange", "Apple", "Mango", "Kiwi"]
console.log("-------------------------------------------");
console.log("removing last indexed value");
const deletedValueLast = fruits.pop(); // remove the last indexed value and return last indexed element.(Kiwi)
console.log(fruits); // ["Banana", "Orange", "Apple", "Mango"]


// arr.shift(): remove the first indexed value and return removed element.
console.log("----------------------------------------")
console.log(fruits); // ["Banana", "Orange", "Apple", "Mango"]
console.log('removing element from front');
const deletedValueFront = fruits.shift(); // remove the first indexed value and return removed element.
console.log(fruits); // ["Orange", "Apple", "Mango"]
console.log("front deleted value is : "+ deletedValueFront); //front deleted value is : Banana



// arr.unshift() : add element at the front and return the length of the array.
console.log("----------------------------------------");
console.log(fruits); // ["Orange", "Apple", "Mango"]
console.log("adding element at front"); 
len = fruits.unshift("Lemon"); // add element at the front and return the length of the array.
console.log(fruits); // ["Lemon", "Orange", "Apple", "Mango"]


// arr.length
console.log("----------------------------------------")
console.log(fruits); // ["Lemon", "Orange", "Apple", "Mango"]
console.log("array length : " + fruits.length);
console.log("adding element at  index using length property");
fruits[fruits.length] = "PineApple";
console.log(fruits); // ["Lemon", "Orange", "Apple", "Mango", "PineApple"]
 



// arr.concat()
console.log("----------------------------------------")
console.log(fruits);
console.log("adding array using concat method");
const arr1 = ["a", "b", "c"];
const arr2 = ["d", "e", "f"];
const arr3 = ["g", "h", "i"];
const arr4 = ['j','k'];
const arr5 = arr1.concat(arr2, arr3, arr4);
console.log(arr5); // ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k"]
console.log(arr1); // ["a", "b", "c"]
const str = 'Hello';
const arr = arr1.concat(str); // concat method can also concat string to an array.
console.log(arr); // ["a", "b", "c", "Hello"]



// arr.copyWithin() : copy elements from one index to another index.
console.log("----------------------------------------")
console.log(fruits); // ["Lemon", "Orange", "Apple", "Mango", "PineApple"]
console.log("copying array using copyWithin method");
fruits.copyWithin(2,0,7); // copyWithin(startIndex, startIndexToCopy, endIndexToCopy)
console.log(fruits); // ["Lemon", "Orange", "Lemon", "Orange", "Apple", "Mango", "PineApple", "PineApple"]

