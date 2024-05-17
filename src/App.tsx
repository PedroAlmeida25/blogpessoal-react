import { useState } from 'react'
import './App.css'
import Home from './paginas/home/Home'
import Navbar from './components/navBar/NavBar'
import Footer from './components/footer/Footer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './paginas/login/Login'


function App() {
  const [] = useState(0)

  return (
    <>
    <BrowserRouter>
      <Navbar/>
      <div className="min-h-[80vh]">
      <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="/login" element={<Login/>} />
      </Routes> 
      </div>
      <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App
