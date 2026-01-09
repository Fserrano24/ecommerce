<<<<<<< HEAD


import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/home";
import Admin from "./pages/admin/admin";
import Detalle from "./pages/detalle/detalle";
import AboutUs from "./pages/aboutus/aboutus";
import Login from "./pages/login/login";
=======
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/home';
import Aboutus from './pages/aboutus/aboutus';
import Navb from './pages/navBar/navbar';
import AboutUs from './pages/aboutus/aboutus';
import QuienesSomos from './pages/aboutus/aboutus';
>>>>>>> origin/aboutus

function App() {
  return (
<<<<<<< HEAD
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/detalle/:id" element={<Detalle />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="*" element={<h1 className="text-center mt-5">404</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
=======
   <BrowserRouter>
   <Routes>
      <Route path='/aboutus' element={<QuienesSomos />} />
      <Route path='/home' element={<Home />} />
      <Route path='/' element={<Navb />} />
   </Routes>
   </BrowserRouter>
  )
}

export default App;export const team = [
  {
    name: "Agus Valverdi",
    img: "/assets/team/persona1.jpg",
  },
  {
    name: "Gaston Suarez",
    img: "../../img/foto.jpeg",
  },
  {
    name: "Serrano Fabrizio",
    img: "fabrizio.jpg",
  },
  {
    name: "Ivan Robles",
    img: "/assets/team/persona4.jpg",
  },
];

>>>>>>> origin/aboutus
