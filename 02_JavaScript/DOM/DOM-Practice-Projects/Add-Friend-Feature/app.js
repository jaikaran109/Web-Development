let changeText = document.querySelector('h5');
let frnd = false;


let add = document.querySelector('#friend');

let remove = document.querySelector('#remove');

add.addEventListener("click",function(){
    if(!frnd){
        changeText.innerHTML = "New Friend";
        changeText.style.color = "lightseagreen";
        frnd = true;
    }
})

remove.addEventListener("click",function(){
    if(frnd){
        changeText.innerHTML = "Removed Successfully"
        changeText.style.color = "red";
        frnd = false;
    }
})

