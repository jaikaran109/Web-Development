// agar samjh na aaye to sari cheeje comment kro aur ek ek kr ke starting se comment htao aur changes dekho


// let firstEL = document.querySelector(".myClass"); 
// console.log(firstEL);

// let allEl = document.querySelectorAll(".myClass");
// console.log(allEl);

// // class ko access . lga kr krte h 
// // id ko access # lga ke krte h 



// // DOM Manipulation
// // Properties
// // . tagName : returns tag for element nodes
// // . innerText : returns the text content of the element and all its children
// // . innerHTML : returns the plain text or HTML contents in the element
// // . textContent : returns textual content even for hidden elements


// // let div = document.querySelector("div");
// // console.dir(div);

// // console.log(div.innerText);
// // console.log(div.innerHTML);


// // Q1 - 
// // let h2 = document.querySelector("h2");
// // console.dir(h2.innerText);

// // h2.innerText = h2.innerText + " from MDN Documentation";
// // console.dir(h2.innerText);



// // Q2 -
// // let divs = document.querySelectorAll(".box");
// // console.log(divs);
// // console.log(divs[0]);

// // divs[0].innerText = "new unique value 1";
// // divs[1].innerText = "new unique value 2";
// // divs[2].innerText = "new unique value 3";


// // -- via loop 
// // let idx = 1;
// // for(x of divs){
// //     x.innerText = `new unique value is ${idx}`;
// //     idx++;
// // }




// // get and set Attribute

// let accessDiv = document.querySelector("div");
// console.log(accessDiv);

// let id = accessDiv.getAttribute("id");
// console.log(id);


// let para = document.querySelector("p");
// console.log(para.getAttribute("class"));


// // set Attribute
// // para.setAttribute("class","123"); // ye console me nhi dikhega tmko elements me dikhega 



// // node style
// let div = document.querySelector("div");

// div.style.backgroundColor = "green";  // js se color change ho gya
// div.style.fontSize = "20px";
// // div.innerText = "Hello";



// // Insert Elements
// // . node.append( el ) // adds at the end of node (inside)
// // . node.prepend( el ) // adds at the start of node (inside)
// // . node.before( el ) // adds before the node (outside)
// // . node.after( el ) // adds after the node (outside)


// // Syntax ->
// // let el = document.createElement("div")

// let newBtn = document.createElement("button");
// newBtn.innerText = "click me";
// console.log(newBtn);
// console.log(newBtn.innerText);


// // insert this button to the main screen 
// div.append(newBtn); // --  ye last me add krega

// // div.prepend(newBtn); // -- ye starting me add krega

// // div.before(newBtn);  // -- ye div ke phle add krega

// // div.after(newBtn);   // -- ye div ke baad add krega 


// // let p = document.querySelector("p");
// // p.after(newBtn);   // -- ye paragraph ke baad add krega 




// // js se heading add - 
// let newHeading = document.createElement("h1");
// newHeading.innerHTML = "<i>Hi, I am new ! </i>";

// document.querySelector("body").prepend(newHeading);

// let parag = document.querySelector("p");
// parag.remove();


// newHeading.remove();




// For Ques
// Q1 - Create a new button element. Give it a text "click me", background color of red & text color
// of white.Insert the button as the first element inside the body tag.

let newBtn = document.createElement("Button");
newBtn.innerHTML = "click me ";

newBtn.style.color = "white";''
newBtn.style.backgroundColor = "red";

document.querySelector("body").prepend(newBtn);




// Q2 - Create a <p> tag in html, give it a class & some styling.
// Now create a new class in CSS and try to append this class to the <p> element.
// Did you notice, how you overwrite the class name when you add a new one?
// Solve this problem using classList.
let para = document.querySelector("p");
para.classList.add("newClass");
