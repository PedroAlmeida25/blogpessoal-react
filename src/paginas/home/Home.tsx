import homeLogo from '../../assets/home.png'
import ListaPostagens from '../../components/postagens/listapostagens/ListaPostagens';
import ModalPostagem from '../../components/postagens/modalpostagem/ModalPostagem';
import './Home.css';


function Home() {
    return (
        <>
        <div className="bg-indigo-900 flex justify-center">
          <div className='container grid grid-cols-2 text-white'>
            <div className="flex flex-col gap-4 items-center justify-center py-4">
              <h2 className='text-5xl font-bold'>Seja bem vindo!</h2>
              <p className='text-xl'>Expresse aqui seus pensamentos e opiniões!</p>
  
              <div className="flex justify-around gap-4">
                <ModalPostagem />
              </div>
            </div>
  
            <div className="flex justify-center ">
              <img src='https://ik.imagekit.io/u1yytyqy3/home.png?updatedAt=1717008418954' alt="" className='w-2/3' />
      
            </div>
          </div>
        </div>
        <ListaPostagens />
      </>
    );
}

export default Home;
