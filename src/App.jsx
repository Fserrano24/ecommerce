import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/home';
import Aboutus from './pages/aboutus/aboutus';
import Navb from './pages/navBar/navbar';
import Login from './pages/login/login';
import Admin from './pages/admin/admin';
import Detalle from './pages/detalle/detalle';
import QuienesSomos from './pages/aboutus/aboutus';
import Error404 from './pages/404error/404';

function App() {
  return (
   <BrowserRouter>
   <Routes>
      <Route path='/aboutus' element={<QuienesSomos />} />
      <Route path='/carrito' element={<Error404 />} />
      <Route path='/home' element={<Home />} />
       <Route path="/login" element={<Login />} />
       <Route path="/error" element={<Error404/>} />
        <Route path="/admin" element={<Admin />} />
        <Route path="*" element={<Home />} />
        <Route path="/detalle/:id" element={<Detalle />} />
   </Routes>
   </BrowserRouter>
  )
}

export default App;

