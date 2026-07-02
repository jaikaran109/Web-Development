// a is HOF of b and b is callback func
function a()  // func declare
{
    console.log("hi i am a");
}

function b()    // func declare
{
    console.log("hi i am b ") ;
}

a(b);  // reference of b pass as a parameter for a but a does not have any parameter thats why b is unused  -- if you pass a(b()) then both will print



console.log("--------------------------------------------------------------------------------");


// outer is HOF 
function outer() {
    console.log("hey i am outer ") ;
    function inner()
    {
        console.log("i am inner");
    }
}

console.log(outer());

