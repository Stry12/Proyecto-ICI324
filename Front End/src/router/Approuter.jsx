import {Routes, Route} from 'react-router-dom';
import Home  from '../pages/Home/Home.jsx'; 
import Error from "../pages/Error/404.jsx";
import Consulta from "../pages/Consulta/Consulta.jsx";
import IngresoLibros from "../pages/InformacionLibro/InformacionLibro.jsx";
import AgregarLibro from "../pages/AgregarLibro/AgregarLibro.jsx";
import InformacionLibro from '../pages/InformacionLibro/InformacionLibro.jsx';
import Registrarse from '../components/Registrarse.jsx';
import Logearse from '../components/Logearse.jsx'
export const AppRouter = () => {
  return (
    <Routes>
        <Route path="/Home" element={ <Home></Home> } />
        <Route path="/Consulta" element={<Consulta></Consulta>} />
        <Route path="/IngresoLibro" element={<IngresoLibros></IngresoLibros>} />
        <Route path="/AgregarLibro" element={<AgregarLibro></AgregarLibro>} />
        <Route path="/Informacion/:id" element={<InformacionLibro></InformacionLibro>} />
        <Route path="/Logearse" element={<Logearse></Logearse>} />
        <Route path='/Registrarse' element={<Registrarse></Registrarse>} />
        <Route path="/*" element={<Error></Error>} />
    </Routes>
  );
}