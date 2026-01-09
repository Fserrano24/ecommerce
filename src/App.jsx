import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/home';
import Aboutus from './pages/aboutus/aboutus';
import Navb from './pages/navBar/navbar';
import Login from './pages/login/login';
import Admin from './pages/admin/admin';
import Detalle from './pages/detalle/detalle';
import QuienesSomos from './pages/aboutus/aboutus';

function App() {
  return (
   <BrowserRouter>
   <Routes>
      <Route path='/aboutus' element={<QuienesSomos />} />
      <Route path='/home' element={<Home />} />
      <Route path='/' element={<Navb />} />
       <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/detalle/:id" element={<Detalle />} />
        <Route path="*" element={<h1 className="text-center mt-5">404</h1>} />
   </Routes>
   </BrowserRouter>
  )
}

export default App;

