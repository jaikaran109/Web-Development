let obj = {
    name: "jai karan",
    age: 20,
    address: {
        city: "delhi",
        state: "delhi",
    },
    isSingle : true,
    total : function(){
        console.log("total one");
    },

    sum : function(){
        console.log("mai Sum hu");
    }
}

for(let i in obj){
    console.log(i);
    console.log(obj[i]);
}


console.log(obj['age']);
console.log(obj['isSingle']);
console.log(obj.sum());


