// function hello(){
//     console.log("Hello");
// }

// function mello(){
//     console.log("Mello");
// }

// // set time out (function , time * 1000 (sec) )
// setTimeout(hello,2*1000);
// setTimeout(mello,1*1000);



// ORR
// if function is small then we can write it in this way also
// setTimeout(function (){
//     console.log("Hello");
// }, 2*1000);

// setTimeout(function (){
//     console.log("Mello");
// }, 1*1000);


// print 1 to 10 but delay of 1 sec after each number get printed

for(let i = 1 ; i <= 12 ; i++){
    setTimeout(function(){
        console.log(i);
    },i*1000);        // here i increases then the number of seconds for that particular number also increases
}


for(let i = 10 ; i > 0 ; i--){   // here expected is -- 10 9 8 7 6 5 4 3 2 1 but ans is -- 1 2 3 4 5 6 7 8 9 10  bcz look at the time at 10 time of console is 5 sec for 9 4.5 sec ......... for 1 its 0.5 sec
    setTimeout(function(){
        console.log(i);
    },i*500); // .5 sec
}



// Soluiton 
for(let i = 1 ; i <= 10 ; i++){
    setTimeout(function(){
        console.log(11 - i);  // for opposite 10 9 8 7 6 5 4 3 2 1
    },i*300);  // when i = 1 console(10) at 0.3 sec .... same for rest of the values
}
