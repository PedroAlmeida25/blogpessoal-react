import { useState } from 'react'
import './App.css'
import Home from './paginas/home/Home'
import Navbar from './components/navBar/NavBar'
import Footer from './components/footer/Footer'


function App() {
  const [] = useState(0)

  return (
    <>
    <Navbar/> 
    <Home/>
    <Footer/>
    </>
  )
}

export default App
