import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";

function VerDetalles({ id }) {
  return (
    <Link to={`/detalle/${id}`}>
      <Button variant="secondary" className='m-2 d-flex align-items-center'>
        Ver detalles
      </Button>
    </Link>
  );
}

function AgregarAlCarrito() {
  return (
    <Button variant="outline-success" className='m-2 d-flex align-items-center'>
      Agregar al carrito
    </Button>
  );
}

export { AgregarAlCarrito, VerDetalles };
