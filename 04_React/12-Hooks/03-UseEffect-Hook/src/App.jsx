// import React from 'react'

// export const App = () => {

//   function random(){
//     const a = Math.random();
//     console.log(a);
//   }

//   random()

//   return (
//     <div>
//       <h1>
//         gtrftmmg
//         </h1>
//     </div>
//   )
// }
//      // iss code me jb jb tm div ka content change kroge tb tb tmhara web render hoga and console pe call hoga jo shi nhi h kyuki vo main web ke saath hi chl rha h side stack me nhi , isi ko fix krne ke liye useEffect kaam aata h 
// jb jb state change hoga tb tb chlega
// export default App



// -----------------------------------------------------------------------------------------------------------------------------------------------------



// import React, { useEffect, useState } from 'react'

// const App = () => {

//   const [num,setNum] = useState(0);

//   useEffect(function() {
//     console.log("useEffect is running......");
//   },[]) // isme ek array bna dete h jo blank h mtlb koi dependency nhi h ab tm num change kroge to ye nhi chlegi

//   return (
//     <div>
//       <h1>{num}</h1>
//       <button onClick={() => {setNum(num+1)}}>Click</button>
//     </div>
//   )
// }

// export default App




// -----------------------------------------------------------------------------------------------------------------------------------------------------



import React, { useEffect, useState } from 'react'

const App = () => {

  const [num1,setNum1] = useState(0);
  const [num2, setNum2] = useState(100)

  useEffect(function() {
    console.log("useEffect is running......");
  },[num1])  // isme hmne dependency pass kr di ki jb num1 change hoga tbhi useState function run hota

  return (
    <div>
      <h1>num1 is {num1}</h1>
      <h1>num2 is {num2}</h1>
      <button onClick={() => {setNum1(num1+1)}} >Click num1</button>
      <button onClick={() => {setNum2(num2+100)}}>Click num2</button>
    </div>
  )
}

export default App