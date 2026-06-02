let name = "jai karan";
console.log(name);

console.log(name.toUpperCase());   // it does not change the original string

console.log(name.toLowerCase());


console.log("_________________________________________");


let name2 = "      kakul             ";
console.log(name2.trim());   // it remove the spaces from starting and ending , it does not change the original string

console.log(name.indexOf('a'));   // return the first occurring index

console.log(name.lastIndexOf('a')); // return the last occurring index

console.log(name.charAt(5));    // return the character of that index

console.log(name[5]);       // return the character of that index





console.log("_________________________________________");


let str = "Anushka Nushka";
console.log(str.slice(0));  // substring from mentioned index to the length of the string

console.log(str.slice(2,11)); // substring from index 2 to 11

console.log(str.split(" "));   // it split the string into array of substrings based on the separator provided

console.log(str);         // these methods does not change the original string , soo for future uses you can keep these in diff variables
