console.log("hey");
console.log("it's me jai");
console.log("I'm happy , you ?");


name = "jaikaran";
console.log(name);

age = 24;
console.log(age);

price = 32234.2334;
console.log(price);

x = null;
console.log(x);

y = undefined;
console.log(y);


isFollow = false;
console.log(isFollow);



console.log(typeof(name));
console.log(typeof(name1));
console.log(typeof(age));
console.log(typeof(price));
console.log(typeof(x));


const student = {
    fullName : "jai karan gupta",
    age : 21,
    city : "Gorakhpur",
    isPass : true,
};

//  direct const jb primitive me use hoga to changes nhi kr skte lekin
//  vo jb objects me use hongi to vo collection hoga tm usko change kr skte ho

console.log(student);
console.log(student["age"]);
student["age"] = student["age"] + 1;  // update
console.log(student.age);

student["name"] = "jai karan";  // update
console.log(student.name);


// Q1 -
const product = {
    name : "Parker Jotter Standard CT Ball Pen (Black)",
    rating : 4,
    price : 270,
    offer : 5,
}
console.log(product);

// Q2 -
const profile = {
    userName : "@jaikaran109",
    isFollow : true,
    followers : 700,
    following : 250,
};
console.log(profile);
console.log(typeof profile);
console.log(typeof profile["userName"]);
