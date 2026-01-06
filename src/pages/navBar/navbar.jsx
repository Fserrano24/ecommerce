import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import logo from "../../img/logoNetBuy.png";


function Navb() {
    return (
        <>
        <Navbar expand="xxl" fixed='top' className="bg-body-tertiary mb-3">
            <Container fluid>
                <Navbar.Brand href="home"> <img className="logo" src={logo} alt="NetBuy"/></Navbar.Brand>
                <Form className="d-none d-lg-flex mx-5 w-50 p-2 align-items-center">
                            <Form.Control type="search" placeholder="Qué estás buscando?" className="me-2" />
                            <Button variant="outline-danger">Buscar</Button>
                        </Form>
                <Navbar.Toggle aria-controls="offcanvasNavbar" />
                <Navbar.Offcanvas
                    id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel" placement="end"
                >
                    <Offcanvas.Body>
                        <Nav className="justify-content-end flex-grow-1 pe-3">
                            <Nav.Link href="home" >Inicio</Nav.Link>
                            <Nav.Link href="aboutus">Acerca de Nosotros</Nav.Link>
                            <Nav.Link href="login"> <i className="bi bi-person-circle d-none d-lg-inline"></i> Iniciar sesión</Nav.Link>
                            <Nav.Link href="carrito"> <i className="bi bi-cart3 d-none d-lg-inline"></i> Carrito</Nav.Link>
                        </Nav>                        
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
        </Navbar>
        </>
    );
}

export default Navb;