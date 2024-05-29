import 'react-toastify/dist/ReactToastify.css';
import ListaPostagens from './components/postagens/listapostagens/ListaPostagens'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Footer from './components/footer/Footer';
import DeletarPostagem from './components/postagens/deletarpostagem/DeletarPostagem';
import FormularioPostagem from './components/postagens/formulariopostagem/FormularioPostagem';
import DeletarTema from './components/temas/deletartema/DeletarTema';
import FormularioTema from './components/temas/formulariotema/FormularioTema';
import ListaTemas from './components/temas/listatemas/ListaTemas';
import { AuthProvider } from './contexts/AuthContext';
import Cadastro from './paginas/cadastro/Cadastro';
import Home from './paginas/home/Home';
import Login from './paginas/login/Login';
import Perfil from './paginas/perfil/Perfil';
import Navbar from './components/navbar/Navbar';


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
