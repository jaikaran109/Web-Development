// Stored in key - value pair

var person = {
    firstName : "Jai karan",
    secondName : "Gupta",
    age : 21 ,
    isStudent : true
}

console.log("Type is : "+typeof person);   // print type
console.log(person);  // print the object


console.log(person.age);


console.log(person['firstName']);
for(var i in person){
    console.log(i);
    console.log(person.i);  // undefine
}


for(var i in person){
    console.log(i + " : " + person[i]); // return key and value
}


// prefer Syntax file for more details about objects
