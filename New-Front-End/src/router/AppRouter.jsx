import {Routes, Route} from 'react-router-dom';
import NavBar from '../Componentes/Navbar.jsx'
import Libros from '../Paginas/Libros/Libros.jsx'
import InformacionLibros from '../Paginas/Libros/SubPaginas/InformacionLibros/InformacionLibros.jsx';
import AgregarLibro from '../Paginas/Libros/SubPaginas/AgregarLibro/AgregarLibros.jsx';
import Tradeos from '../Paginas/Tradeos/Tradeos.jsx'
import AgregarPublicacion from '../Paginas/Publicaciones/SubPaginas/AgregarPublicacion/AgregarPublicacion.jsx';
import UserProfileViewer from '../Paginas/Perfil/UserProfileViewer.jsx';
import ProfilePage from '../Paginas/Publicaciones/ProfilePags.jsx';
import Inicio from '../Paginas/Inicio/Inicio.jsx';
import Logearse from '../Paginas/Sesion/Logearse.jsx';
import Registrarse from '../Paginas/Sesion/Registrarse.jsx';


export const AppRouter = () => {
  return (
    <Routes>
        <Route path="/*" element={ <Inicio></Inicio> } />
        <Route path="/Home" element={ <Inicio></Inicio> } />
        <Route path="/Inicio" element={ <Logearse></Logearse> } />
        <Route path="/Registrarse" element={ <Registrarse></Registrarse> } />
        <Route path="/Libros" element={ <Libros></Libros> } />
        <Route path="/Libros/informacion/:id" element={ <InformacionLibros></InformacionLibros> } />
        <Route path="/Libros/agregar" element={ <AgregarLibro></AgregarLibro> } />
        <Route path="/Tradeos" element={ <Tradeos></Tradeos> } />
        <Route path='/publicaciones/agregar' element={ <AgregarPublicacion></AgregarPublicacion> } />
        <Route path="/publicaciones" element={ <ProfilePage/> } />
        <Route path="/perfil" element={ <UserProfileViewer/> } />
    </Routes>
  );
}