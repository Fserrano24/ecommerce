import { useParams, Link } from "react-router-dom";
import { Container, Row, Col, Card, Button, Badge } from "react-bootstrap";
import productCargados from "../../components/productosCargados/prodCargados";
import Navb from "../navBar/navbar";
import "./detalle.css";

const Detalle = () => {
  const { id } = useParams();

  const productosStorage =
    JSON.parse(localStorage.getItem("products")) || [];

  const todosLosProductos = [
    ...productCargados,
    ...productosStorage,
  ];

  const producto = todosLosProductos.find(
    (p) => String(p.id) === id || String(p.slug) === id
  );

  if (!producto) {
    return (
      <>
        <Navb />
        <Container className="mt-5 text-center">
          <h4>Producto no encontrado</h4>
          <Link to="/home" className="btn btn-outline-secondary mt-3">
            Volver al inicio
          </Link>
        </Container>
      </>
    );
  }

  return (
    <>
      <Navb />

      <Container className="my-5">
        <Card className="shadow-lg p-4">
          <Row className="align-items-center">
            {/* IMAGEN */}
            <Col md={6} className="text-center mb-4">
              <img
                src={
                  producto.img ||
                  producto.imagen ||
                  producto.image ||
                  "https://via.placeholder.com/400"
                }
                alt={producto.nombre}
                className="img-fluid rounded"
                style={{ maxHeight: "500px", objectFit: "contain" }}
              />
            </Col>
            <Col
              md={6}
              className="d-flex flex-column align-items-center text-center"
            >
              <h2 className="mb-3">{producto.nombre}</h2>

              <h4 className="text-success mb-3">
                ${producto.precio}
              </h4>

              <p className="mb-2">
                <strong>Stock:</strong>{" "}
                {producto.stock > 0 ? (
                  <Badge bg="success">
                    {producto.stock} disponibles
                  </Badge>
                ) : (
                  <Badge bg="danger">Sin stock</Badge>
                )}
              </p>

              <p className="text-muted mt-2" style={{ maxWidth: "400px" }}>
                {producto.descripcion ||
                  "Este producto no tiene descripción."}
              </p>
              <div className="d-flex justify-content-center gap-3 mt-4">
                <Button variant="primary" disabled={producto.stock === 0} href="/error">
                  Agregar al carrito
                </Button>

                <Link to="/home">
                  <Button variant="outline-secondary">
                    Volver
                  </Button>
                </Link>
              </div>
            </Col>
          </Row>
        </Card>
      </Container>
    </>
  );
};

export default Detalle;
