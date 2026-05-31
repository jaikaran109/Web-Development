// Calculate the occurrence of different ages

let arr = [
    { firstName : 'Jai Karan' , lastName : 'Gupta' , age : 21 },
    { firstName : 'kakul' , lastName : 'Singh' , age : 20},
    { firstName : 'Deepika' , lastName : 'fraud' , age : 23} ,
    { firstName: 'Vimpol', lastName: 'Xyz', age: 20 }
];



let result = arr.reduce((acc,items) => {
    // acc[item.age] = (acc[item.age] || 0) + 1;
    if(acc[items.age]){
        acc[items.age]++;
    }else{
        acc[items.age] = 1;
    }
    return acc;
} , {});

console.log(result);
