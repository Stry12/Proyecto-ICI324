import {Routes, Route} from 'react-router-dom';
import NavBar from '../Componentes/Navbar.jsx'
import Libros from '../Paginas/Libros/Libros.jsx'
import InformacionLibros from '../Paginas/Libros/SubPaginas/InformacionLibros/InformacionLibros.jsx';
import AgregarLibro from '../Paginas/Libros/SubPaginas/AgregarLibro/AgregarLibros.jsx';
import Tradeos from '../Paginas/Tradeos/Tradeos.jsx'
import AgregarPublicacion from '../Paginas/Tradeos/SubPaginas/AgregarPublicacion/AgregarPublicacion.jsx';


export const AppRouter = () => {
  return (
    <Routes>
        <Route path="/Home" element={ <NavBar></NavBar> } />
        <Route path="/Libros" element={ <Libros></Libros> } />
        <Route path="/Libros/informacion" element={ <InformacionLibros></InformacionLibros> } />
        <Route path="/Libros/agregar" element={ <AgregarLibro></AgregarLibro> } />
        <Route path="/Tradeos" element={ <Tradeos></Tradeos> } />
        <Route path='/Tradeos/agregar' element={ <AgregarPublicacion></AgregarPublicacion> } />
        <Route path="/mPublicaciones" element={ <h1>mPublicaciones</h1> } />
        <Route path="/Perfil" element={ <h1>Perfil</h1> } />
    </Routes>
  );
}