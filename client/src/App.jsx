import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {Button} from'./components/ui/button.jsx'
import Login from './pages/Login'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Button >Click Here</Button>
      <Login/>
    </>
  )
}

export default App
