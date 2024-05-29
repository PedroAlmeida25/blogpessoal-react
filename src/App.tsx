import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar'
import Home from './paginas/home/Home'
import Login from './paginas/login/Login'
import Cadastro from './paginas/cadastro/Cadastro'
import { AuthProvider } from './contexts/AuthContext'
import ListaTemas from './components/temas/listatemas/ListaTemas'
import FormularioTema from './components/temas/formulariotema/FormularioTema'
import DeletarTema from './components/temas/deletartema/DeletarTema'
import ListaPostagens from './components/postagens/listapostagens/ListaPostagens'
import FormularioPostagem from './components/postagens/formulariopostagem/FormularioPostagem'
import DeletarPostagem from './components/postagens/deletarpostagem/DeletarPostagem'
import { ToastContainer } from 'react-toastify'
import Perfil from './paginas/perfil/Perfil'

import 'react-toastify/dist/ReactToastify.css';


function App() {

  return (
    <>
    <AuthProvider>
      <ToastContainer/>
      <BrowserRouter>
        <Navbar/>
        <div className="min-h-[80vh]">
        <Routes>
            <Route path="/" element={<Login/>} />
            <Route path="/home" element={<Home/>} />
            <Route path="/cadastro" element={<Cadastro/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/temas" element={<ListaTemas />} />
            <Route path="/cadastrartema" element={<FormularioTema />} />
            <Route path="/editarTema/:id" element={<FormularioTema />} />
            <Route path="/deletarTema/:id" element={<DeletarTema />} />
            <Route path='/postagens' element={<ListaPostagens />} />
            <Route path="/cadastroPostagem" element={<FormularioPostagem />} />
            <Route path="/editarPostagem/:id" element={<FormularioPostagem />} />
            <Route path="/deletarPostagem/:id" element={<DeletarPostagem />} />
            <Route path="/perfil" element={<Perfil />} />
        </Routes> 
        </div>
        <Footer/>
      </BrowserRouter>
    </AuthProvider>
    </>
  )
}

export default App
