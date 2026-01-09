

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/home";
import Admin from "./pages/admin/admin";
import Detalle from "./pages/detalle/detalle";
import AboutUs from "./pages/aboutus/aboutus";
import Login from "./pages/login/login";

function App() {
  return (
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
