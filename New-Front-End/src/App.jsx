import { useState } from 'react'
import './App.css'
import {AppRouter} from './router/AppRouter.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <AppRouter>

      </AppRouter>
    </>
  )
}

export default App
