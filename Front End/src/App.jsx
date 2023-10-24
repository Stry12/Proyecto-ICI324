import React, { useState } from 'react'
import './App.css'
import { AppRouter } from './router/Approuter'
import NavBar from './components/NavBar'

function App() {

  return (
     
    <React.Fragment>
      <NavBar></NavBar>
      <AppRouter></AppRouter>
    </React.Fragment>
  )
}

export default App
