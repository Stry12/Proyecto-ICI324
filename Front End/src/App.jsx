import React, { useState } from 'react'
import './App.css'
import { AppRouter } from './router/Approuter'
import LoginR from './components/LoginR'
import SimpleBottomNavigation from './components/SimpleBottomNavigation'

function App() {

  return (
     
    <React.Fragment>
      <LoginR></LoginR>
      <SimpleBottomNavigation></SimpleBottomNavigation>
      <AppRouter></AppRouter>
    </React.Fragment>
  )
}

export default App
