import React from 'react'
import Navbar from './components/Navbar'
import {useState} from 'react'

const App = () => {

  const [theme, setTheme] = useState('light')

  return (
    <div>
      <Navbar theme={theme} />
    </div>
  )
}

export default App