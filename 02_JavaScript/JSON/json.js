const user = {
    name : "Jai Karan",
    age : 21,
    hobbies : ["coding" , "gaming"],
    isPlaced : false
};

// JSON -- JavaScript Object Notation
const string = JSON.stringify(user);
console.log(string);
// console.log(string['name']);  -- undefined --- bcz its an string not object


const object = JSON.parse(string);
console.log(object);
console.log(object['name']);
