import {Routes, Route} from 'react-router-dom';
import Home  from '../pages/Home/Home.jsx'; 
import Error from "../pages/Error/404.jsx";
import Consulta from "../pages/Consulta/Consulta.jsx";
import IngresoLibros from "../pages/IngresoLibro/IngresoLibros.jsx";

export const AppRouter = () => {
  return (
    <Routes>
        <Route path="/" element={ <Home></Home> } />
        <Route path="/Consulta" element={<Consulta></Consulta>} />
        <Route path="/IngresoLibro" element={<IngresoLibros></IngresoLibros>} />
        <Route path="/*" element={<Error></Error>} />
    </Routes>
  );
}