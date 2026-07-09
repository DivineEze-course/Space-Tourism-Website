
import Destination from './Components/Destination.jsx'
import Home from './Components/Home.jsx'
import NavBar from './Components/NavBar.jsx'
import Crew from './Components/Crew.jsx'
import Technology from './Components/Technology.jsx'
import { Routes, Route, useLocation } from "react-router-dom";

import homeDesktop from "/assets/background-home-desktop.jpg";
import homeTablet from "/assets/background-home-tablet.jpg";
import homeMobile from "/assets/background-home-mobile.jpg";

import destinationDesktop from "/assets/background-destination-desktop.jpg";
import destinationTablet from "/assets/background-destination-tablet.jpg";
import destinationMobile from "/assets/background-destination-mobile.jpg";

import crewDesktop from "/assets/background-crew-desktop.jpg";
import crewTablet from "/assets/background-crew-tablet.jpg";
import crewMobile from "/assets/background-crew-mobile.jpg";

import technologyDesktop from "/assets/background-technology-desktop.jpg";
import technologyTablet from "/assets/background-technology-tablet.jpg";
import technologyMobile from "/assets/background-technology-mobile.jpg";

export default function App() {
  const location = useLocation();

  let background;

  if (window.innerWidth < 768) {
    
    switch (location.pathname) {
      case "/destination":
        background = destinationMobile;
        break;
      case "/crew":
        background = crewMobile;
        break;
      case "/technology":
        background = technologyMobile;
        break;
      default:
        background = homeMobile;
    }
  } else if (window.innerWidth < 1024) {
    
    switch (location.pathname) {
      case "/destination":
        background = destinationTablet;
        break;
      case "/crew":
        background = crewTablet;
        break;
      case "/technology":
        background = technologyTablet;
        break;
      default:
        background = homeTablet;
    }
  } else {
    
    switch (location.pathname) {
      case "/destination":
        background = destinationDesktop;
        break;
      case "/crew":
        background = crewDesktop;
        break;
      case "/technology":
        background = technologyDesktop;
        break;
      default:
        background = homeDesktop;
    }
  }

 return (
    <div
      className="min-h-screen bg-cover bg-center text-white"
      style={{ backgroundImage: `url(${background})` }}
    >
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destination" element={<Destination />} />
        <Route path="/crew" element={<Crew />} />
        <Route path="/technology" element={<Technology />} />
      </Routes>
    </div>
  );
}
