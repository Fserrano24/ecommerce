import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";


const ProductForm = ({ saveProduct, editarProducto }) => {
  const [product, setProduct] = useState({
    id: "",
    name: "",
    precio: "",
    stock: "",
  });

  useEffect(() => {
    if (editarProducto) {
        function setProducto() {
            setProduct(editarProducto);
        } 
        setProducto();
    }
  }, [editarProducto]);

  const handleChange = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    saveProduct(product);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3">
        <Form.Label>Nombre</Form.Label>
        <Form.Control
          name="name"
          value={product.name}
          onChange={handleChange}
          required
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>ID</Form.Label>
        <Form.Control
          name="id"
          value={product.id}
          onChange={handleChange}
          required
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Precio</Form.Label>
        <Form.Control
          type="number"
          name="precio"
          value={product.precio}
          onChange={handleChange}
          required
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Stock</Form.Label>
        <Form.Control
          type="number"
          name="stock"
          value={product.stock}
          onChange={handleChange}
          required
        />
      </Form.Group>

      <Button type="submit">
        Guardar
      </Button>
    </Form>
  );
};

export default ProductForm;
