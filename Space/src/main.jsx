import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import Home from './Components/Home.jsx'
import NavBar from './Components/NavBar.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className="bg-[url('background-home-desktop.jpg')] bg-cover bg-center flex flex-col text-white">
    <NavBar />
    <Home />
    </div>
  </StrictMode>
)
