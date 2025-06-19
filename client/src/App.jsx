import { useState } from 'react'
import {Button} from'./components/ui/button.jsx'
import Login from './pages/Login'
import './App.css'
import Navbar from './components/Navbar'
import HeroSection from './pages/student/HeroSection.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import MainLayout from './layout/MainLayout.jsx'

const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<MainLayout/>,
    children:[
      {
        path:"/",
        element:(
        <>
        <HeroSection/>
        {/* {Courses} */}
        </>
        ),
      },
      {
        path:"login",
        element:<Login/>
      }
    ],
  },
]);
function App() {

  return (
    <main>
      <RouterProvider router={appRouter}/>
    </main>
  )
}

export default App
