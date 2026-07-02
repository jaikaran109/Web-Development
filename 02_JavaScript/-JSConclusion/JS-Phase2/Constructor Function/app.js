// function sam()
// {
    
// }
// let a = sam();
// console.log(a);      // undefined


console.log("------------------------------------------------------------------");


function intro(a,b,c,d){
    this.name = a;
    this.age = b;
    this.color = c;
    this.isSingle = d;
}

let a = new intro("jai",20,"skyBlue",true);
let b = new intro("kanak",19,"Red",false);
let c = new intro("aman",27,"Black",false);


console.log(a);
console.log(b);
console.log(c);


console.log("------------------------------------------------------------------");


// CLASS SYNTAX
class Person{
    constructor(a , b  , c){
        this.name = a;
        this.mail = b;
        this.phoneNo = c;
    }

    printNumber(){
        console.log(`Name is ${this.name} and Phone Number is ${this.phoneNo}`);
    }
}

let p1 = new Person("jaikaran","jaikaran109@gmail.com",73550);
let p2 = new Person("Kakul","kakal9999@gmail.com",9999999990);


console.log(p1);
console.log(p1.printNumber());  // ye output de rha h but last me undefine bhi de rha h kyuki tm function ko console kra rhe ho

console.log(p2);



console.log("------------------------------------------------------------------");


class student extends Person{
    constructor(a , b , c , sec , roll){
        super(a,b,c);
        this.section = sec;
        this.rollNo = roll;
    }
}

let x1 = new student("Yuvika","yuvi11111@gmail.com", 1234567890 , "AAA" ,8989889) ;
console.log(x1);
