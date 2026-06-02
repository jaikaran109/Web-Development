// js object methods..
const person = {
    firstName: 'jai karan',
    age:21,
    lastName:'gupta',
    fullName: function(){
        return this.firstName + " " + this.lastName; // this refers to the person object
    }
}

console.log(typeof person.fullName); // function
console.log(typeof person.fullName()); // type will be string because the return type is string.
console.log(person.fullName());// it will call the function and return the value of the function
console.log(person.fullName);// If you access the fullName property without (), it will return the function definition

// adding function to the object

person.name = function (){
    return (this.firstName +" " + this.lastName).toUpperCase();
}
console.log(person); // {firstName: 'jai karan', age: 21, lastName: 'gupta', fullName: ƒ, name: ƒ}
console.log(person.name()); // JAI KARAN GUPTA

document.querySelector('.box').innerText = person.name();


// we can also display properties all using loops;
const animal = {
    name: 'lion',
    age:10,
    color:'yellow',
    weight:200
};
let text = "";
for(let x in animal){
    text = text + x + " : " + animal[x] +"\n";  // person.x will not work (Because x is the loop variable).   
}
// document.querySelector('.box').innerText = text;


// in the forms of array
const array =  Object.values(animal);
document.querySelector('.box').innerText = array; // ["lion", 10, "yellow", 200]


// Using Object.entries()
text = "";
for ([key,value] of Object.entries(animal)){
    text += key +":" + value+'\n';
}
document.querySelector('.box').innerText = text; // name:lion\nage:10\ncolor:yellow\nweight:200

// Using JSON.stringify()
let myString = JSON.stringify(animal);
document.querySelector('.box').innerText = myString; // {"name":"lion","age":10,"color":"yellow","weight":200}
