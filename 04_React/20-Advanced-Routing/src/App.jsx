import React from 'react'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import { Routes, Route } from 'react-router-dom'
import NotFound from './Pages/NotFound'
import Product from './Pages/Product'
import Men from './Pages/Men'
import Women from './Pages/Women'
import Courses from './Pages/Courses'
import CoursesDetail from './Pages/CoursesDetail'
import About from './Pages/About'
import Nav2 from './components/Nav2'

const App = () => {
  return (
    <div className='h-screen w-screen bg-black text-white'>
      <Navbar />
      <Nav2 />
      <Routes>
        <Route path='/' element={<h1>Home Page</h1>} />
        <Route path='/about' element={<About/>} />
        <Route path='/product' element={<Product />} >
          <Route path='men' element={<Men />} />
          <Route path='women' element={<Women />} />
        </Route>
        <Route path='/courses' element={<Courses />} />
        <Route path='/courses/:id' element={<CoursesDetail />} /> {/* ye dynamic page ka example h , tm courses ke aage / kr ke kuch bhi likhoge CoursesDetail wali page khul jayegi */}

        <Route path='*' element={<NotFound/>} />  {/* jb / me koi unknown address hoga to error page khul jayega , ye course detail wale se alg h vo bss courses wale page pe / ke baad kuch lgega to khulega course detail page lekin ye general h */}
      </Routes>

      <Footer />
    </div>
  )
}

export default App