// import React, {useState} from 'react'

// const App = () => {

//   const [num, setNum] = useState(10)

//   const btnClicked = () => {
//     // console.log(num);  -- agr isko tm console pe dekhoge to tmko 10 show hoga jisme koi problem nhi h
    
//     setNum(20);

//     // console.log(num); -- if tm turant click kro to => agr tm isko console pe dekhoge to 20 aana chahiye kyuki uper value update ho gyi h  --->  but aisa nhi h abhi bhi 10 hi show hoga kyuki jo setNum wala function h vo asynchronous h 




//     // setNum(num) --- if tm ye krte ho to js re-render nhi krega vo changes compare krta h tmne koi changes kiye hi nhi same value daal rhe ho 
//   }

//   return (
//     <div>
//       <h1>{num}</h1>
//       <button onClick={btnClicked}> Click Me </button>
//     </div>
//   )
// }

// export default App








// -------------------------------------------------------------------------------
// objects useState

import React, {useState} from 'react'

const App = () => {

  const [num, setNum] = useState({user:'Jaikaran' , age :21});

  const btnClicked = () => {
    const newNum = {...num};
    newNum.user = 'Anshika'
    newNum.age = 18
    setNum(newNum)
  }

  return (
    <div>
      <h1>{num.user} , {num.age}</h1>
      <button onClick={btnClicked}> Click Me </button>
    </div>
  )
}

export default App



// ---------------------------------------
// ye same kaam array pe bhi ho skta h..... usko phle destructure kro then update