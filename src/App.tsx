import { useState } from 'react'
import './App.css'
import Home from './paginas/home/Home'
import Navbar from './components/navBar/NavBar'
import Footer from './components/footer/Footer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './paginas/login/Login'
import axios from 'axios';
import Cadastro from './paginas/cadastro/Cadastro'


axios.get('/user?ID=12345')
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });


function App() {
  const [] = useState(0)

  return (
    <>
    <BrowserRouter>
      <Navbar/>
      <div className="min-h-[80vh]">
      <Routes>
          <Route path="/" element={<Cadastro/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/cadastro" element={<Cadastro/>} />
          <Route path="/home" element={<Home/>} />
      </Routes> 
      </div>
      <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App
