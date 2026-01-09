import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";

function VerDetalles({ slug }) {
  return (
    <Link to={`/detalle/${slug}`}>
      <Button variant="secondary" className='m-2 d-flex align-items-center sm md lg xl'>
        Ver detalles
      </Button>
    </Link>
  );
}

function AgregarAlCarrito() {
  return (
    <Button href='/error' variant="outline-success" className='m-2 d-flex align-items-center sm md lg xl'>
      Agregar al carrito
    </Button>
  );
}

export { AgregarAlCarrito, VerDetalles };
