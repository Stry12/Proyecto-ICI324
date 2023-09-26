import {Routes, Route} from 'react-router-dom';
import Home  from '../pages/Home/Home.jsx';
import Error from '../pages/Error/404.jsx';

export const AppRouter = () => {
  return (
    <Routes>
        <Route path="/" element={ <Home></Home> } />
        <Route path="/about" element={<h1>About</h1>} />
        <Route path="/*" element={<Error></Error>} />
    </Routes>
  );
}