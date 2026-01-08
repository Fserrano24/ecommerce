import { useState } from 'react'; // Importante: no olvides esta línea
import { Navbar as BootstrapNavbar, Container, Form, Button, Nav, Offcanvas } from 'react-bootstrap'; 
import logo from "../../img/logoNetBuy.png";

const CustomNavbar = ({ setSearchTerm }) => { // Le cambié el nombre para evitar conflictos
  const [valorLocal, setValorLocal] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); // Evita que la página se refresque
    setSearchTerm(valorLocal); // Manda el texto al estado de App.jsx
  };

  return (
    <BootstrapNavbar expand="xxl" fixed="top" className="bg-body-tertiary">
      <Container fluid className="px-0">
        <BootstrapNavbar.Brand href="home">
          <img className="logo" src={logo} alt="NetBuy" />
        </BootstrapNavbar.Brand>

        {/* Agregamos el onSubmit al formulario */}
        <Form className="d-none d-lg-flex mx-5 w-50 p-2 align-items-center" onSubmit={handleSubmit}>
          <Form.Control
            type="search"
            placeholder="¿Qué estás buscando?"
            className="me-2 d-lg-flex"
            value={valorLocal}
            onChange={(e) => setValorLocal(e.target.value)} // Actualiza el estado local
          />
          <Button variant="outline-danger" type="submit"> {/* Quitamos 'disabled' */}
            Buscar
          </Button>
        </Form>

        <BootstrapNavbar.Toggle aria-controls="offcanvasNavbar" />

        <BootstrapNavbar.Offcanvas id="offcanvasNavbar" placement="end">
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <input 
                type="search" 
                className="d-lg-none" 
                placeholder='Buscar productos...'
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Nav.Link href="home">Inicio</Nav.Link>
              <Nav.Link href="aboutus">Acerca de Nosotros</Nav.Link>
               <Nav.Link href="aboutus"><i className="bi bi-person"></i> Iniciar Sesión</Nav.Link>
                <Nav.Link href="products"><i className="bi bi-cart3"></i> Mi carrito</Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </BootstrapNavbar.Offcanvas>
      </Container>
    </BootstrapNavbar>
  );
}

export default CustomNavbar;