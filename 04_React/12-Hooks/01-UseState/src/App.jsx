// const App = () => {

//   // let a = 20;
//                                         // -- dekho aise use kroge to vo console me changes dikhayega but tm to chahte ho ki main website me changes ho yha use state hook kaam aata h  
//   // function changeA(){
//   //   console.log(a);
//   //   a++;
//   //   console.log(a);  
//   // }


//   return (
//     <div>
//       <h1>Value of a is {a}</h1>
//       <button onClick={changeA}>click</button>
//     </div>
//   )
// }

// export default App




// Use state

import React, {useState} from 'react'
import Index from './IncreaseDecrease-MiniProject/index.jsx'

const App = () => {
      const [num, setNum] = useState(10)    // isme ek value read only hota h aur ek value write wala , isme num bss read h aur setNum se values update kr skte h aur ye changes visible bhi honge site pe
      // isme num++ error dega kyuki const use hua h  -- use let and in setNum use num++ for dynamic changes
      const [username, setUsername] = useState('jai')
      const [array, setArray] = useState([10,20,30])



      function changeNum(){
        setNum(999)
        setUsername('Karan')
        setArray([40,50,60])
      }

  
  return (
    <div>
      <h1>Value of num is {num} <br /> <br /> <br /> <br /> name is {username} <br /><br />   <br /><br /> Array is {array}</h1>
      <button onClick={changeNum}>click</button>


      <Index />
    </div>
  )
}

export default App