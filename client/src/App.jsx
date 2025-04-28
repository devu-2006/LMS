import { useState } from 'react'
import {Button} from'./components/ui/button.jsx'
import Login from './pages/Login'
import './App.css'
import Navbar from './components/Navbar'

function App() {

  return (
    <main>
      <Navbar/>
      <Login/>
    </main>
  )
}

export default App
