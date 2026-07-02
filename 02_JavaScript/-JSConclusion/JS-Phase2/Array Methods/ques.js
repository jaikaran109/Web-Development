// double the array then return the values greater than 30

let arr = [10,20,30,40,50];

let doubleArr = arr.map((value) => {
    return value * 2;
});

let gt30 = doubleArr.filter((value) =>{
    if(value > 30){
        return true;
    }
}) ;

console.log(gt30);
