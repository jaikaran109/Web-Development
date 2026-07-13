import React, {useState} from 'react'

const App = () => {
  const [title, setTitle] = useState('')
  
  const submitHandler = (elem) =>{
    elem.preventDefault();

    console.log("Form Submitted by " , title);

    setTitle('') // jb name write kr ke form submit kr diya h to phirse input blank ho jayega dubara input receive krne ke liye
    
  }

  return (
    <div>
      <form onSubmit={(elem) =>{
        submitHandler(elem)
      }}>
        <input 
        type="text" 
        placeholder='Enter Your Name' 
        value={title} // yha value -> title receive kr rha h 
        //and value show ho rha screen pe
        onChange={(e) => {
          setTitle(e.target.value) // yha jo input aa rha h vo setTitle me update ho rha aur phir title me 
          // yha jb tm screen pe j then a then i ye enter kr rhe ho to vo setTitle me ja rha h phir title phir value  -- dekhne se to lg rha h ki normal h but internally pura react use ho rha h
        }}
        />

        {/* samjho ye two way ho gya h main cheej h title jo value receive kr rha h aur show ho rha h output me aur setTitle h vo update ho rha h aur vo at last title update kr rha h then phir value update ho rhi h */}


        <button>Submit</button>
      </form>
    </div>
  )
}

export default App