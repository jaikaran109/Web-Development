// For Selection Practice

// // console.log("Hello babes") // this is visible on Browser-- right click - inspect - console


// // selection of an Element
// let h1 = document.querySelector("h1"); // it selects first h1 element and ignore other elements of h1 tag to solve this we use .All
// console.log(h1);

// let h1All = document.querySelectorAll("h1");
// console.log(h1All);  // it give in form of Array

// let selectByClass = document.querySelectorAll(".yes");
// console.log(selectByClass);





// Operations
// let h2 = document.querySelector("h2");  // we can do CSS via JS
// setTimeout(function(){
//     h2.style.backgroundColor = "aqua";
//     h2.style.fontFamily = "Arial";
//     h2.style.color = "red";
// },1*1000);


// let h1 = document.querySelector("h1");  // JS can  Change ur html also
// setInterval(function(){
//     h1.innerText = "Hello Git Fam ! (modified) ";  // it change the text of h1 tag
// },2*1000) // callback property also work 







//Event Listeners
let pika = document.getElementById("pika");
pika.addEventListener("click", function(){   // click is event and function is callback function
    pika.style.color = "yellow";
    pika.style.backgroundColor = "red";
});
pika.addEventListener("mouseleave", function(){    // to Undo the last effect
    pika.style.color = "black";
    pika.style.backgroundColor = "white";
});




let char = document.getElementById("char");
char.addEventListener("mousemove", function(){  
    char.style.color = "white";
    char.style.backgroundColor = "orange";
});
char.addEventListener("mouseleave", function(){    // to Undo the last effect
    char.style.color = "black";
    char.style.backgroundColor = "white";
});


let mew = document.getElementById("mew");
char.addEventListener("click", function(){   
    mew.style.color = "white";
    mew.style.backgroundColor = "purple";
});

mew.addEventListener("click", function(){   
    pika.innerHTML = "Bulbasaur";
    pika.style.color = "white";
    pika.style.backgroundColor = "green";
});
