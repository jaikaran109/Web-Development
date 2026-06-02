console.log("Manual");
console.log("Manual");
console.log("Manual");
console.log("Manual");
console.log("Manual");



console.log("Using Loop");
// print i
for(let i = 0 ; i < 5 ; i++){
    console.log("i -> ",i);
}



// calculate sum of 1 to 5
let sum = 0 ;
for(let i = 0 ; i <= 5 ; i++){
    sum += i;
}
console.log("sum is :- " , sum);



// print i using While loop
let j = 1;
while(j <= 5){
    console.log("j -> ",j);
    j++;
}


// for-of Loop
let str = "jai karan";
for(let val of str){
    console.log("val -> " , val);
}

console.log(str.length);



// for-in loop -- returns key in object
let student = {
    name : "jai karan",
    age : 21 ,
    year : 2,
    isPass : false
}

for(let key in student){
    console.log("key -> " , key , "value of that key is -> ",student[key]);  // ye shi tarika h lekin hm prefer nhi krte , more optimal way next line me h 
    console.log(`key is ${key} value of that key is ${student[key]}`);
}








// Q1 - Print all even numbers from 0 to 100.


// Soln -->

// for(let i = 0 ; i <= 100 ; i++){
//     if(i % 2 == 0){
//         console.log(i);
//     }
// }
    




// Q2 - Create a game where you start with any random game number. Ask
// the user to keep guessing the game number until the user enters correct value.

// Soln -->

// let gameNum = 25;
// let userNum = prompt("Guess the game number : ");

// while(gameNum != userNum){   // !== nhi hoga kyuki prompt string value input leta h 
//     userNum = prompt("You entered wrong number,Guess agin : ");
// }
// console.log("Congratulations , you entered the right number ");





// Escape characters
// \n - change line 
// \t - for tab      -- isme /t ek single element count hote h , eg : let x =  jai\tkaran; --> t.length - 9 

// in Built functions / methods
// str = str.length
// str = str.toUpperCase()
// str = str.toLowerCase()
// str = str.trim() -- remove spaces from starting and ending
// str.slice(start,end?)
// str1.concat(str2)
// str.replace(searchVal , newVal) or replaceAll
// str.charAt(idx)



// Q3 - Prompt the user to enter their full name. Generate a username for them based on the input.
// start username with @ , followed by their full name and ending with the fullName.length
// eg :- jaikaran -- @jaikaran8

// soln -->

// let fullName = prompt("Enter your Full Name ");
// let userName = "@" + fullName + fullName.length;
// console.log(userName);
