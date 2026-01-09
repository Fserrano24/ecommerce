
import { Modal, Button } from "react-bootstrap";

function ModalDetalle({ show, handleClose, producto }) {
  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Detalle del producto</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        {producto ? (
          <>
            <p><strong>ID:</strong> {producto.id}</p>
            <p><strong>Nombre:</strong> {producto.nombre || producto.name}</p>
            <p>
              <strong>Stock:</strong>{" "}
              {producto.stock > 0 ? (
                producto.stock
              ) : (
                <span className="text-danger fw-bold">Sin stock</span>
              )}
            </p>
          </>
        ) : (
          <p>No hay producto seleccionado</p>
        )}
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cerrar
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalDetalle;
