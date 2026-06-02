// Arithmetic Operators
let a = 25;
let b = 10;


console.log("Arithmetic Operators --");
console.log("a -> ",a + " & b -> ",b);
console.log("a + b -> ",a + b);
console.log("a - b -> ",a - b);
console.log("a * b -> ",a * b);
console.log("a / b -> ",a / b);
console.log("a % b -> ",a % b);
console.log("a ** b -> ",a ** b);



// Unary Operators
console.log("Unary Operators --");
console.log("++a -> ",++a);
console.log("--a -> ",--a);
console.log("a++ -> ",a++);
console.log("a-- -> ",a--);


// Assignment Operators
console.log("Assignment Operators --");
console.log("a -> " , (a += 5));
console.log("a -> " , (a -= 5));
console.log("a -> " , (a *= 5));
console.log("a -> " , (a /= 5));


// Comparison Operator
let c = 100;
let d = "100";
let e = 90;

console.log("Comparison Operators --");
console.log("==" , c == d);
console.log("===" , c === d);
console.log("!=" , c != d);
console.log("!==" , c !== d);
console.log(" > " , c > d);
console.log(" < " , c < d);


// Logical Operators
console.log("Logical Operators --");
let cond1 = c == d;
let cond2 = c === d;
let cond3 = c > e;
console.log("cond1 && cond2" , cond1 && cond2);
console.log("cond1 && cond3" , cond1 && cond3);
console.log("cond1 || cond2" , cond1 || cond2);
console.log("!(cond1 != cond2)" , !(cond1 == cond2));


// Conditional Statements
console.log("Conditional Statements --");


let age = 25;
if(age > 18){
    console.log("you can vote");
}else{
    console.log("Nope");
}


let color;
let mode = "dark";
if(mode == "dark"){
    color = "black";
}
if(mode === "light"){
    color = "white";
}
console.log(color);


let num = 20;
if(num % 2 == 0){
    console.log(num,"is even");
}else{
    console.log(num,"is odd");
}



// Ternary Operators
console.log("Ternary Operators --");
console.log(age > 18 ? "Yup " : "shitt");



// Switch Statements
console.log("Switch Statements --");
const expr = "Papayas";
switch (expr) {
    case "Oranges":
        console.log("Oranges are $0.59 a pound.");
        break;
    case "Mangoes":
    case "Papayas":
        console.log("Mangoes and papayas are $2.79 a pound.");
        break;
    default:
        console.log(`Sorry, we are out of ${expr}.`);
}




// Q1 - Get user to input a number using prompt("Enter a number") . check if the number is a ,multiple of 5 or not;

// alert() -- one time popup
// prompt() -- for user input
// alert("hey")
let num1 = prompt("Enter a number");
if(num1 % 5 == 0){
    console.log("Multiple");
}else{
    console.log("Not Multiple");
}
