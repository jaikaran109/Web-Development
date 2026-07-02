function name(){
    return 69;
}

let x = name();
console.log(x);



function sum(a , b = 100 , c = 10){
    let sum = a + b + c;
    return sum;
}


let addition = sum(1,10);
console.log(addition);




function inner(){
    return "mai inner hu";
}

function outer(a){
    console.log(inner());
    console.log(a);
}
outer(10);
