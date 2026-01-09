import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import logo from "../../img/logoNetBuy.png";
import { Button, Container, Nav } from 'react-bootstrap';
import { Form } from "react-bootstrap";
import { useNavigate } from 'react-router';
import { useState } from 'react';
import { isAdmin, logout } from "../../auth/auth";





const Navb = () => { 
    const admin = isAdmin();
    const navigate = useNavigate();
    const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/home?search=${search}`);
  };
  return (

<Navbar expand="xxl" sticky="top" bg="light">
      <Container fluid className="px-0">
        <Navbar.Brand href="home">
          <img className="logo d-inline-block align-top m-3 p-2" src={logo} height="75" alt="NetBuy" />
        </Navbar.Brand>
        <Form className="d-none d-lg-flex mx-5 w-50 p-2 align-items-center" onSubmit={handleSearch}>
          <Form.Control
            type="search"
            placeholder="¿Qué estás buscando?"
            className="me-2 d-lg-flex"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <Button variant="outline-danger" >
            Buscar
          </Button>
        </Form>
        <Navbar.Toggle aria-controls="offcanvasNavbar" />
        <Navbar.Offcanvas
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          placement="end"
        >
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
            <input type="search" className="d-lg-none" placeholder='Buscar productos...'/>
            {admin && (
  <Nav.Link href="/admin">Admin</Nav.Link>
)}

{admin ? (
  <Nav.Link
    onClick={() => {
      logout();
      navigate("/home");
    }}
  >
    Cerrar sesión
  </Nav.Link>
) : (
  <Nav.Link href="/login"></Nav.Link>
)}
              <Nav.Link href="home">Inicio</Nav.Link>
              <Nav.Link href="aboutus">Acerca de Nosotros</Nav.Link>
              <Nav.Link href="login">
                <i className="bi bi-person-circle d-none d-lg-inline"></i>{" "}
                Iniciar sesión
              </Nav.Link>  
              <Nav.Link href="carrito">
                <i className="bi bi-cart3 d-none d-lg-inline"></i>{" "}
                Carrito
              </Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}



export default Navb;