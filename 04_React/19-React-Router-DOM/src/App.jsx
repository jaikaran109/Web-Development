import React from 'react'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Home from './Pages/Home'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
      </Routes>
      

    </div>
  )
}

export default App