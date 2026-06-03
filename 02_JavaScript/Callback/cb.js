// A function that pass inside another function

function products(a,b,c){
    return a * b * c;
}

function fun(cb , x){
    let a = cb(2,5,4);
    console.log(a - x);
}

fun(products,7);
