// Array

let marks = [90,91,92,93,94];
console.log(marks);
console.log(marks.length);

let heroes = ["jaikaran","anshika","anamika","aman","motu","chotu"];
console.log(heroes);

console.log(typeof(marks)); 



// Array Indices
// arr[0] , arr[2] , arr[1]

for(let i = 0 ; i < marks.length ; i++){
    console.log(marks[i]);
}

marks[0] = 10;
console.log(marks);

// arrays -- mutable 
// Strings -- immutable



// Find Avg of marks 
let students = [85,97,44,37,76,60];
let sum = null;
for(let val of students){
    sum += val;
}
console.log(`avg marks of the class = ${sum/students.length}`);



// Qs. For a given array with prices of 5 items -> [250, 645,300, 900, 50]
// All items have an offer of 10% OFF on them. Change the array to store final price after
// applying offer.
let items = [250, 645,300, 900, 50];
let i = 0;
for(let val of items){
    console.log(`value at index ${i} = ${val}`);
    let offer = val / 10;
    items[i] = items[i] - offer;
    console.log(`value after offer = ${items[i]}`);
    i++;
}





// Arrays Methods

// Push() : add to end
// Pop() : delete from end & return 
// toString() : converts array to string

let list = ["potato","tomato","apple","litchi"];
list.push("chips");
console.log(list);
list.pop();
console.log(list);
console.log(list.toString());


// Concat() : joins multiple arrays & returns result
// unshift() : add to start
// shift() : delete from start& return 

let marvel = ["thor","spiderman","ironman"];
let dc = ["superman","batman"];
let hero = marvel.concat(dc);
console.log(hero);

marvel.unshift("antman");
console.log(marvel);


marvel.shift()
console.log(marvel);



// slice() : returns a piece of the array
//    -- slice(startidx,endidx)


// splice() : change original array(add,remove,replace)
//    -- splice(startIdx,delCount,newEle)


console.log(marvel.slice(1,3));


let arr = [1,2,3,4,5,6,7,8,9];
arr.splice(2,2,101,102);
console.log(arr);


// add element
arr.splice(2,0,999);
console.log(arr);


// delete element
arr.splice(3,1);
console.log(arr);



// replace element
arr.splice(3,1,201);
console.log(arr);
