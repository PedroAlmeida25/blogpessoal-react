import { useContext } from "react"
import { Link, useNavigate} from "react-router-dom"
import { AuthContext } from "../../contexts/AuthContext"

function Navbar() { 
  let navigate = useNavigate()

  const { handleLogout } = useContext(AuthContext)

  function logout() {
      handleLogout()
      alert('Usuário deslogado com sucesso')
      navigate('/login')
  }

  return (
    <>
     <div className='w-full bg-indigo-900 text-white flex justify-center py-4'>
          <div className="container flex justify-between text-lg">
            <div className='text-2xl font-bold uppercase'>
                <Link to="/" className="text-2xl font-bold">Blog Pessoal</Link>
                </div>

            <div className='flex gap-4'>
              <div className='hover:underline'>Postagens</div>
              <Link to='/temas' className='hover:underline'>Temas</Link>
              <Link to='/cadastrartemas' className='hover:underline'>Cadastrar Temas</Link>
              <div className='hover:underline'>Perfil</div>
              <Link to='' onClick={logout} className='hover:underline'>Sair</Link>
            </div>
          </div>
        </div>
    </>
  )
}

export default Navbar