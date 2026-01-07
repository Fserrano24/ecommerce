
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import Home from './pages/home/home';
import Aboutus from './pages/aboutus/aboutus';
import Navb from './pages/navBar/navbar';
import AboutUs from './pages/aboutus/aboutus';
import QuienesSomos from './pages/aboutus/aboutus';

function App() {


  return (
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

