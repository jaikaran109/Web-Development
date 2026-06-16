// this() function : is used to refer the current context. 
const user = {
    username : "jai karan",
    price : 999,

    welcomeMassage: function(){
        console.log(`${this.username}, Welcome to my website`);
        console.log(this); // this will refer to the current context which is user object.
    }
}
// user.welcomeMassage; // it will give function definition. 
// user.welcomeMassage(); // it will call the function and print the output.
// user.username = "shiva"; // assigning value to the property of user which is username.
// user.welcomeMassage(); // now again calling to the function and it will print the updated value of username.





// console.log(this); // now here this will refer to the global context(empty).
// if you write in browser then it will refer to the window object.(because this refere to global context in browser).


// Function Expression :
function one(){
    const userName  = "jai karan";
    console.log(this.UserName); // undefine..
}
one();

// Anonymous Function :
const newFun = function (){
    const userName  = "jai karan";
    console.log(this.UserName); // undefine..
}
newFun();


// Arrow Function :
const arrowFun = ()=>{
    const userName  = "jai karan";
    console.log(this.UserName); // undefine..
    return 1;
}
arrowFun();
console.log(arrowFun); // it will have function definition.
console.log(arrowFun()); // 1







// Core Discussion ------ ----  Arrow Function : 

// 1.Basic (explicit return )
const sumTwoNum = (num1,num2)=>{
    return num1+num2;
}
console.log(sumTwoNum(1,2)); // 3








// 2. Implicit Return :
const sumTwoNum2 = (num1,num2) => (num1+num2); // by default it will return the value.
console.log(sumTwoNum2(1,2)); // 3







// Note : When you use single line statement : then you can use implicit return.
//        if you write multiple line statement : then you have to use return keyword.
// remember if you write {} then you have to use return keyword.
//          if you write () then you need not to use return keyword.






// is you have to return object then you have to use () to make it object.

const obj = () =>  {name : "jai karan"; age : 21};   
console.log(obj['name']); // undefine..

// const obj2 = () => ({name : "jai karan", age : 21});
// console.log(obj2()); // {name : "jai karan", age : 21}






// // now iterating over array using arrow function:
// let arr = [1,2,34.5, 89,2];
// arr.forEach(function (){
//     console.log("hello");
// });
// console.log('----------------------------------------')
// arr.forEach(()=>{
//     console.log("hello");
// });
// console.log('----------------------------------------')
// arr.forEach(  ()  =>  (console.log("hello"))  );
