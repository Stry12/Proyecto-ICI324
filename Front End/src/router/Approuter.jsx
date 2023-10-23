import {Routes, Route} from 'react-router-dom';
import Home  from '../pages/Home/Home.jsx';
import Error from '../pages/Error/404.jsx';
import Consulta from '../pages/Consulta/Consulta.jsx';
import Logearse from '../components/Logearse.jsx';
import Registrarse from '../components/Registrarse.jsx';


export const AppRouter = () => {
  return (
    <Routes>
        <Route path="/Home" element={ <Home></Home> } />
        <Route path="/Consulta" element={<Consulta></Consulta>} />
        <Route path="/Error" element={<Error></Error>} />
        <Route path="/Logearse" element={<Logearse></Logearse>} />
        <Route path='/Registrarse' element={<Registrarse></Registrarse>} />
    </Routes>
  );
}