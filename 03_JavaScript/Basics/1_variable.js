// use prefere not to use var: because it has global scope and functional scope
// do not use var date type
// recomend to use only const and let


// 1. const : used for constant value and it has block scope.
const userId = 2215001565; 
console.log(typeof userId); // it will give number
const c = 'a';
console.log(typeof c); // it will give string

// changing value;
// const val = 9;
// val = 8  // if we do, get compile time error.
// console.log(val);            



// console.log(Temp); // ReferenceError: x is not defined  -- isme variable exist hi nhi krta h isiliye not define aa rha 


// console.log(x);    //  ReferenceError: Cannot access 'a' before initialization -- JS ne variable a memory me dekh liya h mtlb a exist but a initialize nhi hua TDZ me h
let x = 34;

x = 6783;
console.log(x); 




// 2.let : used for variable and it has block scope.
let data;
console.log(data);  // it will give undefined.
//  console.log(email);   it will give error because it is not defined
let email = "jaik04227@gmail.com"
console.log(email); 



// 3. var : used for variable and it has functional scope.
console.log(userPassword);  // it will give undefined because it is not defined
var userPassword = "949434"
userPassword = "89839"
console.log(userPassword);



//4. self defined variable: global variable(scope)
userName = "Jai Karan Gupta";
email = "jaikaran.gupta_cs24@gla.ac.in";
userName  = "Jai";
console.log(userName);
console.log(email);



// table
console.table([userId,email,userPassword,userName]);



// spliting text into array
str = "hey duffer I'm jai karan";
var a = str.split("I'm");
console.log(a);


console.log(eval('2+6')); // it will give 8
console.log(eval('2+6+8')); // it will give 16
console.log(eval('2'+6)); // 26
console.log(eval('2'+'2')); // 22
console.log(eval('2+6'+'8'+3)); // 685
