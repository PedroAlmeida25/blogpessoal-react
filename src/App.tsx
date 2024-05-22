import { useState } from 'react'
import './App.css'
import Home from './paginas/home/Home'
import Navbar from './components/navbar/NavBar'
import Footer from './components/footer/Footer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './paginas/login/Login'
import axios from 'axios';
import Cadastro from './paginas/cadastro/Cadastro'
import { AuthProvider } from './contexts/AuthContext'
import ListaTemas from './components/temas/listatemas/ListaTemas'
import FormularioTema from './components/temas/formulariotema/FormularioTema'
import DeletarTema from './components/temas/deletartema/DeletarTema'


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
    <AuthProvider>
      <BrowserRouter>
        <Navbar/>
        <div className="min-h-[80vh]">
        <Routes>
            <Route path="/" element={<Login/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/cadastro" element={<Cadastro/>} />
            <Route path="/home" element={<Home/>} />
            <Route path="/temas" element={<ListaTemas />} />
            <Route path="/cadastrartemas" element={<FormularioTema />} />
            <Route path="/editarTema/:id" element={<FormularioTema />} />
            <Route path="/deletarTema/:id" element={<DeletarTema />} />
        </Routes> 
        </div>
        <Footer/>
      </BrowserRouter>
    </AuthProvider>
    </>
  )
}

export default App
