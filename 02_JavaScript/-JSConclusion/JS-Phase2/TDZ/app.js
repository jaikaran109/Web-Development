// Temporal Dead Zone -- Variable memory me reserved hota hai, lekin jab tak declaration line execute nahi hoti, tab tak usko access nahi kar sakte

// console.log(a);  // -- undefine
// var a = 10 ;   // general 

// var
// ↓
// Memory
// ↓
// undefined




console.log(a);  // -- uninitialize
let a = 10 ;  // TDZ

// let
// ↓
// Memory
// ↓
// No value
// (Uninitialized)