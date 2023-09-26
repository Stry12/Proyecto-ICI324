import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import CSSbaseline from '@material-ui/core/CssBaseline'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CSSbaseline />
    <BrowserRouter>
      <App /> 
    </BrowserRouter>
  </React.StrictMode>,
)
