import React, { useState } from "react";
import Navb from "../navBar/navbar";
import Carousel from "react-bootstrap/Carousel";
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import anuncio from "../../img/anuncio.png";
import './home.css';
import imgCarrusel1 from "../../img/imgCarrusel1.jpg";
import imgCarrusel2 from "../../img/imgCarrusel2.png";
import imgCarrusel3 from "../../img/imgCarrusel3.png";
import imgCarrusel4 from "../../img/imgCarrusel4.jpg";
import productCargados from "../../components/productosCargados/prodCargados";
import { AgregarAlCarrito, VerDetalles } from "../../components/buttons/buttonDetalle";
import { useSearchParams } from "react-router";
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
        <Card className="cardPagPrincipal anuncioNetbuy my-5 mx-auto">
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

function GridProducts() {
  const [searchParams] = useSearchParams();
  const search = searchParams.get("search") || "";

  // 🧾 productos creados desde admin
  const adminProducts =
    JSON.parse(localStorage.getItem("adminProducts")) || [];

  // 🧮 unión de productos
  const allProducts = [...productCargados, ...adminProducts];

  // 🔍 filtro por nombre
  const productosFiltrados = allProducts.filter((p) =>
    p.nombre.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Row xs={2} md={4} className="g-3">
      {productosFiltrados.map((product) => (
        <Col key={product.slug ?? product.id}>
          <Card className="w-100 h-100 p-3 shadow-lg bg-body rounded">
            <Card.Img
              src={product.img}
              className="card d-flex align-items-center h-100"
              variant="top"
            />
            <Card.Body>
              <Card.Title>{product.nombre}</Card.Title>
              <Card.Text>${product.precio}</Card.Text>
            </Card.Body>
            <Card.Footer>
              <VerDetalles slug={product.slug ?? product.id} />
              <AgregarAlCarrito />
            </Card.Footer>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

const Home = () => {
  return (
    <>
      <Navb />
     <div>
      <ControlledCarousel />
      <LandingCategorias />
      <Container>
        <h2 className="my-4">Nuestros Productos</h2>
      </Container>
      <GridProducts />
      <ImgOverlay />
      </div>
    </>
  );
};

export default Home;
