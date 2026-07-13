import React from 'react'

const App = () => {

  const submitHandler = (elem) =>{
    elem.preventDefault();
    console.log("Form Submitted");
    
  }

  return (
    <div>
      <form onSubmit={(elem) =>{
        submitHandler(elem)
      }}>
        <input type="text" placeholder='Enter Your Name ' />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App


// More clear working of Form handling with react it in next topic - Two Way Binding