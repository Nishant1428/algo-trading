import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from '../pages/home'
import HomePage2 from '../pages/HomePage2'
import HomePage3 from '../pages/HomePage3'
import HomePage4 from '../pages/HomePage4'
import Footer from '../pages/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Home/>
      <HomePage2/>
      <HomePage3/>
      <HomePage4/>
      <Footer/>
    </>
  )
}

export default App
