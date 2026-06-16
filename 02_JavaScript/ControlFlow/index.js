// if statement
if(2==2){ // true
    console.log("2 is equal to 2");
}

if(2 == "2"){ // true
    console.log("2 is equal to '2'")
}


if(2 === "2"){ // false              // strictly checking
    console.log("2 is equal to 2");
}

console.log("---------------------------------------------------");

const str = "Hello world";
if(str){
    console.log(`string is printing value of str is  :  ${str}`);
}

let val = 0;
if(val){ // false
    console.log(`value is printing value of val is  :  ${val}`);
}

val = 1;
if(val){ // true
    console.log(`value is printing value of val is  :  ${val}`);
}

console.log("---------------------------------------------------");
if(false == 0){ // true
    console.log("false is equal to 0");
}
if(true == 1){ // true
    console.log("true is equal to 1");
}
if(false == false){ // true
    console.log("false is equal to false");
}
if(false == "false"){ // false
    console.log("false is equal to 'false'");
}
if(false === "false"){ // false
    console.log("strictly false is equal to 'false'");
}

if(false == ''){ // true
    console.log("false is equal to ''");
}
if(false == null){ // false
    console.log("false is equal to null");
}
if(false == undefined){ //false
    console.log("false is equal to undefined");
}
if(false == NaN){ // false
    console.log("false is equal to NaN");
}




// NaN kisi bhi value ke equal nahi hota, khud ke bhi nahi.
// console.log(NaN == NaN);   -> false
// console.log(NaN === NaN);  -> false
// console.log(0 == NaN);     -> false
// console.log("false" == NaN);     -> false





// false values : false, 0, "", null, undefined, NaN, -0, 0n, BigInt



// true values : true, 1, "hello", {}, [], function(){}


// 1. Checking that object is empty or not
const obj = {}; // Object.keys(obj) it returns an  array
if(Object.keys(obj).length === 0){
    console.log("Object is empty")
}


console.log("---------------------------------------------------");
// Nullish coalescing operator : use to assign a value to a variable if it is null or undefined



// Nullish Coalescing Operator (??)
// a ?? b

// Meaning:

// Agar a null ya undefined nahi hai, to a return karo.

// Warna b return karo.



let val1;
val1 = 5 ?? 10; // 5
console.log(val1);
val1 = null ?? 11; // 11
console.log(val1);
val1 = 12 ?? null; // 12
console.log(val1); 
val1 = undefined ?? 13; // 13
console.log(val1);
val1 = 14 ?? undefined; // 14
console.log(val1);
val1 = null ?? null;  // null
console.log(val1);
val1 = undefined ?? undefined; // undefined
console.log(val1);
val1 = null ?? undefined; // undefined
console.log(val1);
val1 = undefined ?? null; // soch raha tha ki undefined pahle mila toh age dekhta hu kya pata koi value mil jaye par mila bhi toh null.
console.log(val1);
val1 = null ?? undefined; // undefine
console.log(val1);


val1 = null ?? 5 ?? 10;
console.log(val1); // 5
val1 = null ?? undefined ?? 10; // 10
console.log(val1);


let BigInt = 10n;
