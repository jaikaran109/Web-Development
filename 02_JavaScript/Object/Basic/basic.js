// Objects are variables too. But objects can contain many values.
// This code assigns many values (Fiat, 500, white) to an object named car:

const car = {type:"Fiat", model:"500", color:"white"};
// It is a common practice to declare objects with the const keyword.
console.log(car);
console.log(typeof car);// object
console.log(car.type); // Fiat
console.log(car.model); // 500


// Create an Object
const person = {};
// Add Properties
person.firstName = "John"; // Add a new property to an object
person.lastName = "Doe"; // Add a new property to an object
person.age = 50; //  Add a new property to an object
person.eyeColor = "blue"; //  Add a new property to an object


// For readability, simplicity and execution speed, use the object literal method.
// The examples above do exactly the same.
// Create an Object using new keyword.
const p1 = new Object();
// object and their...
// Add Properties
p1.firstName = "John";
p1.lastName = "Doe";
p1.age = 50;
p1.eyeColor = "blue";
console.log(p1['firstName']); // John
console.log(p1.firstName); // John


// JavaScript Object Methods
// Create an Object
const person2 = {
  firstName : "John",
  lastName : "Doe",
  id       : 5566,
  fullName : function() {
    return this.firstName + " " + this.lastName;
  }

};
console.log(person2.fullName()); // John Doe


// JavaScript Object Properties
// Objects are mutable: They are addressed by reference, not by value.
const x = person;
// The object x is not a copy of person. The object x is person.
// The object x and the object 'person' share the same memory address.
// Any changes to x will also change person:
console.log(person); // {firstName: 'John', lastName: 'Doe', age: 50, eyeColor: 'blue'}
console.log(x); // {firstName: 'John', lastName: 'Doe', age: 50, eyeColor: 'blue'}
x.firstName = "Janny"; // Change the value of x
console.log(person.firstName); // Janny
console.log(x.firstName); // Janny


// JavaScript Object Properties
console.log(person); // {firstName: 'John', lastName: 'Doe', age: 50, eyeColor: 'blue'}
const d = delete person.age; // Delete the age property
console.log("----------------------------------------")
console.log(d); // true
// The delete keyword deletes both the value of the property and the property itself.
console.log(person); // {firstName: 'John', lastName: 'Doe', eyeColor: 'blue'}


// Nested Objects
const myObj = {
    name:"John",
    age:30,
    myCars: {
      car1:"Ford",
      car2:"BMW",
      car3:"Fiat"
    }
  }
console.log(myObj);
console.log(myObj.myCars); // {car1: 'Ford', car2: 'BMW', car3: 'Fiat'}
console.log(myObj.myCars.car1); // Ford

// In JavaScript, almost "everything" is an object.
// Objects are objects
// Maths are objects
// Functions are objects
// Dates are objects
// Arrays are objects
// Maps are objects
// Sets are objects


// A primitive value is a value that has no properties or methods.
// 3.14 is a primitive value
// A primitive data type is data that has a primitive value.
// JavaScript defines 7 types of primitive data types:
// string
// number
// boolean
// null
// undefined
// symbol
// bigint


// Immutable
// Primitive values are immutable (they are hardcoded and cannot be changed).
// if x = 3.14, you can change the value of x, but you cannot change the value of 3.14.

// JavaScript Objects are Mutable
// Objects are mutable: They are addressed by reference, not by value.
// If person is an object, the following statement will not create a copy of person:
const y = person;
person.age = 50;
console.log(y); // {firstName: 'John', lastName: 'Doe', age: 50, eyeColor: 'blue'}
// The object x is not a copy of person. The object x is person.
// The object x and the object person share the same memory address.
// Any changes to x will also change person:
person.age=51;
console.log(y);
