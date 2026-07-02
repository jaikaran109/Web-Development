// document.body.innerHTML = "mai hu body";  // isko comment rahne do kyuki ye puri body replace kr de rha h to baki ke codes me error aayega(line 9) 

document.title.innerHTML = "DOM Padh rha hu"; 

console.log(document.title);
console.log(document.body);
console.log(typeof document.body);
console.log(document.body.innerHTML);
console.log(document.querySelector('button').innerHTML);


document.querySelector('button').innerHTML = 'Change';

document.querySelector('.js-button').innerHTML = 'Second Button';

let btn = document.querySelector('.js-button').innerHTML ;
console.log(btn);





