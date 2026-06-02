// javascript object constructor function
// Sometimes we need to create many objects of the same type.
// To create an object type we use an object constructor function.
// It is considered good practice to name constructor functions with an upper-case first letter.

function Person(first,last,age,eye){
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
}
// In the constructor function, this has no value.
// The value of this will become the new object when a new object is created.

const myFather = new Person('John', 'Doe', 50, 'blue');
const myMother = new Person('Sally', 'Rally', 48, 'green');

const mySelf = new Person("Johnny", "Rally", 22, "green");

myFather.nationality = 'India';
console.log(myFather);//{ firstName: 'John', lastName: 'Doe', age: 50, eyeColor: 'blue', nationality: 'India' }
console.log(myMother);//{ firstName: 'Sally', lastName: 'Rally', age: 48, eyeColor: 'green' }
// see nationality property is present in myFather object



// Adding a Property to a Constructor
// You can NOT add a new property to an object constructor directly:
Person.language = 'English';
console.log(myFather.language);//undefined

console.log(Person.language); // English

console.log(Person); // it is a function constructor object not an object keep in your mind.
Person.prototype.language = 'english'; // adding a property to constructor function
//  as well as to all objects created from constructor function.
console.log(Person); // it is a function constructor object not an object keep in your mind.

console.log(myFather.language);//english
console.log(myMother.language);//english



// A constructor function can also have methods:
function Animal(name,type,age,color){
    this.name = name;
    this.type = type;
    this.age = age;
    this.color = color;
    this.info = function(){
        return `${this.name} is a ${this.type} of age ${this.age} of color ${color}`;
    };
}

// you can add method to particular objects.
const cat = new Animal("Tom","Cat",2,'Black');
console.log(cat.info());

cat.changeName = function(newName){
    this.name = newName;
}; // adding a method to particular object.
console.log(cat.name); // Tom
cat.changeName("mew"); // change name of cat
console.log(cat.info()); // mew is a Cat of age 2 of color Black
console.log(cat.name); // mew

// You cannot add a new method to an object constructor function directly.
console.log(Animal);
Animal.changeName = function(newName){
    this.name = newName;
} // 

const dog = new Animal('Tommy', 'Dog', 3,'Brown');
console.log(dog.info());
console.log(dog.name);
// dog.changeName('sera');it will cause error:TypeError: myMother.changeName is not a function.
// to add into constructor function : 
Animal.prototype.changeName = function (newName) {
    this.name = newName;
};
dog.changeName('sera');
console.log(dog.name);


// Built-in JavaScript Constructors
// new Object()   // A new Object object
// new Array()    // A new Array object
// new Map()      // A new Map object
// new Set()      // A new Set object
// new Date()     // A new Date object
// new RegExp()   // A new RegExp object
// new Function() // A new Function object


//Note :: The Math() object is not in the list. Math is a global object. 
// The new keyword cannot be used on Math.

// Do You Know :::::
// Use object literals {} instead of new Object().
// Use array literals [] instead of new Array().
// Use pattern literals /()/ instead of new RegExp().
// Use function expressions () {} instead of new Function().
