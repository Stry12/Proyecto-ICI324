import React, { useState } from 'react'
import './App.css'
import { AppRouter } from './router/Approuter'
import BottonLogin from './components/BottonLogin'

import SimpleBottomNavigation from './components/SimpleBottomNavigation'
import Logearse from './components/Logearse'

function App() {

  return (
     
    <React.Fragment>
      <BottonLogin></BottonLogin>
      <SimpleBottomNavigation></SimpleBottomNavigation>
      <AppRouter></AppRouter>
    </React.Fragment>
  )
}

export default App
