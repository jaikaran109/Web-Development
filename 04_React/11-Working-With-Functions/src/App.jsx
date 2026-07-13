import React from 'react'

const App = () => {

  function showAlert(){
    alert("Button clicked");
  }

  function mouseEnter(){
    console.log("Mouse Entered");
  }


  function inputChanging(){
    console.log("User is Typing");
    
  }


  return (
    <div>

      <h1>React Events</h1>

        {/* agr tm btnClicked() ye likhte to vo khudse call ho jata */}
        <button type='button' onMouseEnter={mouseEnter} onClick={showAlert} style={{ backgroundColor: "black", color: "white" }} >Click here</button>  {/* output console pe dekh lo */}

        <button type='button'
        style={{ marginLeft: "20px", padding: "10px 20px" }} onClick={function(){
          console.log("btn is clicked");
        }}>Click This</button>

        <input onChange={inputChanging} type="text" placeholder='Enter your name' />


    </div>
  )
}

export default App