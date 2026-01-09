import { useParams } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import productCargados from "../../components/productosCargados/prodCargados";
import Navb from "../navBar/navbar";

function Detalle() {
  const { id } = useParams();
  const producto = productCargados.find(p => p.id === id);

  if (!producto) {
    return <h2 className="text-center mt-5">Producto no encontrado</h2>;
  }

  return (
    <>
      <Navb />
      <Container className="mt-5">
        <Card className="p-4 shadow">
          <Card.Img src={producto.img} />
          <Card.Body>
            <Card.Title>{producto.nombre}</Card.Title>
            <Card.Text>{producto.descripcion}</Card.Text>
            <p><strong>Categoría:</strong> {producto.categoria}</p>
            <p><strong>Precio:</strong> ${producto.precio}</p>
            <p><strong>Stock:</strong> {producto.stock}</p>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
}

export default Detalle;
