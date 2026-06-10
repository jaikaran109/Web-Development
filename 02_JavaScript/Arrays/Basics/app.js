const cars = ['BMW', 'Volvo', 'Saab', 'Ford'];

// you can also create an array, and then provide the elements:

const bikes = [];
bikes[0] = "Honda";
bikes[1] = "Yamaha";
bikes[2] = "Suzuki";

// Using the JavaScript Keyword new
const array = new Array('a','b','c','d');
console.log(array); // it will print [ 'a', 'b', 'c', 'd' ]
console.log(array[0]); // a
console.log(array[9]); // undefined (not an error)



/*
    INTERVIEW QUES 

    What is diff bw Array Literals and Array Constructor

        Ans :- Both create arrays. Array literals ([]) are preferred because they are simpler, more readable, and avoid the ambiguity of new Array(n), where a single numeric argument creates an empty array with length n instead of an array containing that number.

        Example :- 
            let arr1 = [5];        // Array containing 5
            let arr2 = new Array(5); // Empty array of length 5

            console.log(arr1); // [5]
            console.log(arr2); // [ <5 empty items> ]
 */


        
fruits = ["Banana", "Orange", "Apple", "Mango"];
// document.getElementById("demo").innerHTML = fruits.toString();
// document.getElementById("demo").innerHTML = fruits;
// document.getElementById("demo").innerHTML = "jaikaran";
// --  if you uncomment these three statements together then in the final output you get jaikaran because js execute code top to bottom




// array are special type of objects in js. But, JavaScript arrays are best described as arrays.
// JavaScript does not have built-in support for Arrays with named indexes.
// Objects use names to access its "members".
console.log(fruits); // ["Banana", "Orange", "Apple", "Mango"]
console.log(fruits[0]); // Banana
console.log(fruits.length); // 4
fruits.sort(); // sorts the array and return the array
console.log(fruits.sort()); // ["Apple", "Banana", "Mango", "Orange"]
console.log(fruits); // ["Apple", "Banana", "Mango", "Orange"]
console.log(fruits.reverse()); // ["Orange", "Mango", "Banana", "Apple"] reverse the array and return the array





// adding element to the array..
console.log(fruits); // ["Apple", "Banana", "Mango", "Orange"]
fruits.push("KIWI"); // adding element to the end of the array
// another way..
fruits[fruits.length] = 'Pineapple'; // adding element to the end of the array
console.log(fruits); // ["Apple", "Banana", "Mango", "Orange", "KIWI", "Pineapple"]
fruits[9] = 'Pineapple'; // adding element to the 9th index of the array
console.log(fruits); // ["Apple", "Banana", "Mango", "Orange", "KIWI", "Pineapple", empty × 4, "Pineapple"]






// You can have objects in an Array. 'You can have functions in an Array'. You can have arrays in an Array
// myArray[0] = Date.now;
// myArray[1] = myFunction;
// myArray[2] = myCars;


const points = new Array(6); // creates an array with 6 empty slots [empty × 6]
console.log(points); // [empty × 6]

const p = [6]; // creates an array with 1 element, 6
console.log(p); // [6]





// Nested Arrays and Objects
// Values in objects can be arrays, and values in arrays can be objects:
const myObj = {
    name: "John",
    age: 30,
    cars: [
        {name :"Ford", models:["Fiesta", "Focus", "Mustang"]},
        {name:"BMW", models:["320", "X3", "X5"]},
        {namnamee:"Fiat", models:["500", "Panda"]}
        ]
};
for(let i in myObj.cars){
    for(let j in myObj.cars[i].models){
        console.log(myObj.cars[i].models[j]);
    }
}
