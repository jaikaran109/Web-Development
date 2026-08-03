// 4 pillars of DOM

// 1.  Selection of an Element
// 2.   Changing HTML
// 3.   Changing CSS
// 4.   Event Listener


const h1 = document.querySelector('h1');  //HTML select 
const body = document.querySelector('body');


h1.innerHTML = "Nhi Sikh paya abhi bhi Confusion h ";  // HTML text changed
console.log(h1);


h1.style.backgroundColor = 'red'; // CSS property in JS 
h1.style.padding = "10px";
h1.style.color = "white"

body.style.backgroundColor = "black"




// Event Listener
const event = document.querySelector(".eventListener");
const click = document.querySelector(".click");
let count = 0;
click.addEventListener("click",function(){
    count = count + 1;
    event.innerHTML = count;
})
