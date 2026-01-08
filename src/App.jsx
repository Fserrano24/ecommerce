import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/home';
import Aboutus from './pages/aboutus/aboutus';
import Navb from './pages/navBar/navbar';
import ProductForm from './components/formProducts/formProducts';

function App() {

  return (
    <BrowserRouter>

      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/home' element={<Home/>} />
        <Route path='/aboutus' element={<Aboutus />} />
        <Route path='/form' element={<ProductForm />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;