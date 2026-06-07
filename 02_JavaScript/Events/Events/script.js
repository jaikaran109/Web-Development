// Event Handling..
// 1. inline handling(int HTML Page...)
// 2. in js file via, writing event function on node..
// 3. using eventListner method..


let div = document.querySelector('div');
let val = 0;
div.onmousemove = () => {
    console.log('Mouse is moving' + ' '+val++);
}



// Event Object
let btn = document.querySelector("#btn");

// e is the Event Object automatically passed by the browser
// when the click event occurs.
// btn.onclick = (e) => {
//     console.log(e);
// }

btn.onclick = (e) => {          // e contains information about the event such as
                                // event type, target element, mouse position, etc.
    console.log(e);
    console.log(e.type);
    console.log(e.target);
    console.log(e.clientX,e.clientY);   
}



let btn1 = document.querySelector(".btn1");
btn1.addEventListener('click',() => {
    console.log('Button Clicked');
});

btn1.addEventListener('click',(evt)=>{
    console.log(evt.target);
    console.log('Button is clicked-2');
});


const handler3 = () => {
    console.log("button is clicked - 3");   
}
btn1.addEventListener('click',handler3);


btn1.addEventListener('click',handler4 = () => {
    console.log("button is clicked - 4");
});



// Remove EventListner
btn1.removeEventListener('click',handler3);       // callback function should be same as the
//  function which is added to the eventListner to remove it..






// uper wala me problem aa rhi h ki maine ek saath bahut sare event listeners laga diye h -- usko comment kro aur isko execute kro
 
// let count = 0;

// btn1.addEventListener("click", () => {
//     count++;

//     if(count === 1){
//         console.log("First Click");
//     }
//     else if(count === 2){
//         console.log("Second Click");
//     }
//     else if(count === 3){
//         console.log("Third Click");
//     }
// });
