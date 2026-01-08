import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom' 
import Home from './pages/home/home';
import Aboutus from './pages/aboutus/aboutus';
import Navb from './pages/navBar/navbar';
import ProductForm from './components/formProducts/formProducts';
import { useState } from 'react';
import productCargados from "./components/productosCargados/prodCargados";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  
  // 1. Creamos una lista dinámica que inicia con tus productos cargados
  const [listaActualizada, setListaActualizada] = useState(productCargados);

  // Función para que el admin agregue productos
  const agregarProductoAdmin = (nuevoProducto) => {
    setListaActualizada([...listaActualizada, nuevoProducto]);
  };
      return (
        <>
    <BrowserRouter>
      <Navb setSearchTerm={setSearchTerm} />
      <Routes>
        <Route path="/" element={
           <Home searchTerm={searchTerm} productosAMostrar={listaActualizada} />
        } />
        <Route path='/form' element={
           <ProductForm agregarProductoAdmin={agregarProductoAdmin} />
        } />
        <Route path='/' element={<Home searchTerm={searchTerm} />} />
        <Route path='/home' element={<Home searchTerm={searchTerm} />} />
        <Route path='/aboutus' element={<Aboutus />} />

      </Routes>

    </BrowserRouter>
    </>
  );
}

export default App;