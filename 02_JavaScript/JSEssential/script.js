// Fundamentals of JavaScript
// arrays and objects
// function return
// async js coding
// forEach , map , filter , find , indexOf

// var arr = [1 , 2 , 3 , [] , { } , function(){} , [ [ ]]];  // we can store diff things in one array


// for each
var arr = [1,2,3,4,5];
arr.forEach(function(val){  // it takes each elements one by one
    console.log(val ** 2);
})


console.log("-------------------------------------------------------------------------------------------");



// Map
var cubicArr = arr.map(function(val){   // dekho yha map ki vjh se ek blank array create ho rha h same size ka , like cubicArr = [ , , , , ] and return ki vjh se ek ek kr ke return wale elements isme ja rhe h 
    return val ** 3;        //val - it take elements one by one and put it into a cubicArr
})
console.log(cubicArr);


console.log("-------------------------------------------------------------------------------------------");




// filter - isme condition ke according values refine ho jayengi
var arr = [1,2,3,4,5,6,7,8,9];

var ans = arr.filter(function(val) {  // filter me ek new blank array bnta h aur agr condition meet ki to .push se insert krte h usko 
    if(val > 3) return true;  // return true hoga to vo new array me place hoga nhi to nhi hoga
    else return false;
})
console.log(ans);



console.log("-------------------------------------------------------------------------------------------");


var arr = [1,2,3,4,5,6,7,8,9];

var ans = arr.find(function(val){
    if(val == 7) return val;
    // if(val == 15) return val; -- undefined
})

console.log(ans);


console.log("-------------------------------------------------------------------------------------------");



var arr = [1,2,3,4,5,6,7,8,9];

console.log(arr.indexOf(7)); 
console.log(arr.indexOf(17));  // -1



console.log("-------------------------------------------------------------------------------------------");







// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------








// object 
// {} -- blank object
// kuch bhi jo curly bracket ke ander ho and usme key and values ho vo object h

var obj = {
    name : "jai",
    age : 21
}

console.log(obj.name);  // methods to access the element
console.log(obj["age"]);

// obj.age = 11;  // here age get updated
// console.log(obj["age"]);

Object.freeze(obj);  // tm object ki values change kr skte ho usko avoid krne ke liye hm .freeze use krte h isko use krne ke baad values change nhi hoti
console.log(obj);

// obj.age = 1000;  // not changed bcz u freeze the object
// console.log(obj);






// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
console.log("-------------------------------------------------------------------------------------------");



var func = function hello(){
    return "hello bacchu";
}


console.log(func());






// -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
console.log("-------------------------------------------------------------------------------------------");



// Async in js coding

// line by line code chle to usse synchronous bolte h
// jo bhi code async nature ka ho , usse stack me bhej do and agle code ko chlao jo bhi sync nature ka h , jb sara sync code chl jaye to check kro ki async code complete hua ya nhi and agr vo complete ho to usey main stack me lao aur chlao


console.log("before");

async function abcd() {
    var blob = await fetch(`https://randomuser.me/api/`);    // side stack
    var ans = await blob.json();

    console.log(ans);
    
}
abcd();

console.log("after");
 // -- iske output me dekho before and after phle chl rhe h and async wala baad me kyuki usko load hone me time lg rha h to vo side stack me ja rha