import React from "react";
import Navb from "../navBar/navbar";
import { useState } from 'react';
import Carousel from "react-bootstrap/Carousel";
import imgCarrusel1 from "../../img/imgCarrusel1.jpg";
import imgCarrusel2 from "../../img/imgCarrusel2.png";
import imgCarrusel3 from "../../img/imgCarrusel3.png";
import imgCarrusel4 from "../../img/imgCarrusel4.jpg";
import anuncio from "../../img/anuncio.png";
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import './home.css';
import productCargados from "../../components/productosCargados/prodCargados";
import { AgregarAlCarrito, VerDetalles } from "../../components/buttons/buttonDetalle";
import categorias from "../../components/productosCargados/prodLanding";


function ControlledCarousel() {
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    return (
        <Carousel activeIndex={index} onSelect={handleSelect} className="carouselstyle">
            <Carousel.Item>
                <img className="d-block w-100 img-fluid" src={imgCarrusel1} alt="img1" />
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100 img-fluid" src={imgCarrusel2} alt="img2" />
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100 img-fluid" src={imgCarrusel3} alt="img3" />
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100 img-fluid" src={imgCarrusel4} alt="img4" />
            </Carousel.Item>
        </Carousel>
    );
}

function ImgOverlay() {
    return (
        <Card className="cardPagPrincipal anuncioNetbuy">
            <Card.Img src={anuncio} alt="Card image" />
        </Card>
    );
}

const LandingCategorias = () => {
    return (
        <section className="landing-categorias py-5">
            <div className="container">
                <div className="row p-3 bg-body rounded">
                    {categorias.map((cat, idx) => (
                        <div key={idx} className="col-lg-2 col-md-4 col-6 mb-3">
                            <div className="landing-categoria-card">
                                <a href={cat.link || "#"}>
                                    <img src={cat.img} alt={cat.alt} className="landing-categoria-imagen" />
                                </a>
                                <div className="landing-categoria-overlay">
                                    <span className="landing-categoria-texto">{cat.nombre}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

function GridProducts({ searchTerm }) {
    const productosFiltrados = productCargados.filter((product) => {
        const busqueda = (searchTerm || "").toLowerCase();
        const coincideNombre = product.name?.toLowerCase().includes(busqueda);
        const coincideCategoria = product.categoria?.toLowerCase().includes(busqueda);

        return coincideNombre || coincideCategoria;
    });

    return (
        <CardGroup className="m-4">
            <Row xs={1} md={4} className="g-4 w-100">
                {productosFiltrados.length > 0 ? (
                    productosFiltrados.map((product) => (
                        <Col key={product.id}>
                            <Card className="w-100 h-100 shadow-lg bg-body rounded cardPagPrincipal">
                                <Card.Img 
                                    variant="top" 
                                    className="h-100 d-flex justify-content-center align-items-center" 
                                    src={product.img} 
                                />
                                <Card.Body>
                                    <Card.Title>{product.name}</Card.Title>
                                    <Card.Text className="fs-3">
                                        Precio: ${product.precio}
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                    <VerDetalles />
                                    <AgregarAlCarrito />
                                </Card.Footer>
                            </Card>
                        </Col>
                    ))
                ) : (
                    <Col className="text-center w-100 py-5">
                        <h3>No se encontraron productos para "{searchTerm}"</h3>
                    </Col>
                )}
            </Row>
        </CardGroup>
    );
}


const Home = ({ searchTerm }) => {
    return (
        <>
            <Navb /> 
            <ControlledCarousel />
            <LandingCategorias />   
            <Container>
                <h2 className="my-4">Nuestros Productos</h2>
            </Container>
            <GridProducts searchTerm={searchTerm} />
            <ImgOverlay />
        </>
    );
};

export default Home;