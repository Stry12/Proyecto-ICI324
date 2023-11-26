import { useState } from 'react'
import './App.css'
import {AppRouter} from './router/AppRouter.jsx';
import NavBar from './Componentes/Navbar.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar></NavBar>
      <AppRouter>
      </AppRouter>
    </>
  )
}

export default App
