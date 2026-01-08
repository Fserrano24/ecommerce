import Button from 'react-bootstrap/Button';
function VerDetalles() {
  return (
    <>
        <Button variant="secondary" className='m-2'>Ver detalles</Button>
    </>
  );
}

function AgregarAlCarrito() {
  return (
    <>
        <Button variant="outline-success" className='m-2'>Agregar al carrito</Button>
    </>
  );
}


export { AgregarAlCarrito, VerDetalles };