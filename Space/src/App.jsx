
import Destination from './Components/Destination.jsx'
import Home from './Components/Home.jsx'
import NavBar from './Components/NavBar.jsx'
import { Routes, Route, useLocation } from "react-router-dom";

import homeBg from "/assets/background-home-desktop.jpg";
import destinationBg from "/assets/background-destination-desktop.jpg";
import crewBg from "/assets/background-crew-desktop.jpg";
import technologyBg from "/assets/background-technology-desktop.jpg";


export default function App() {
const location = useLocation();

 let background = homeBg;

  switch (location.pathname) {
    case "/destination":
      background = destinationBg;
      break;
    case "/crew":
      background = crewBg;
      break;
    case "/technology":
      background = technologyBg;
      break;
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
        {/* <Route path="/crew" element={<Crew />} />
        <Route path="/technology" element={<Technology />} /> */}
      </Routes>
    </div>
  );
}
