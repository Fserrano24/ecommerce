import { useState } from "react";
import { Button, Container, Form, Table } from "react-bootstrap";
import { Navigate } from "react-router-dom";
import Navb from "../navBar/navbar";
import { isAdmin } from "../../auth/auth";
import productCargados from "../../components/productosCargados/prodCargados";
import categorias from "../../components/productosCargados/categorias";

function Admin() {
    const admin = isAdmin();
    const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
        setFormData({
            ...formData,
            img: reader.result,
            imgType: "file",
        });
    };

    reader.readAsDataURL(file);
};

    const [products, setProducts] = useState(() => {
        const stored = localStorage.getItem("products");

        if (stored) {
            return JSON.parse(stored);
        }

        localStorage.setItem(
            "products",
            JSON.stringify(productCargados)
        );

        return productCargados;
    });

    const [formData, setFormData] = useState({
        id: null,
        nombre: "",
        precio: "",
        categoria: "",
        stock: "",
        img: "",
        imgType: "",
    });


    if (!admin) {
        return <Navigate to="/login" />;
    }

    const saveProducts = (newProducts) => {
        setProducts(newProducts);
        localStorage.setItem("products", JSON.stringify(newProducts));
    };


    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };


    const handleSubmit = (e) => {
        e.preventDefault();

        if (formData.id === null) {
            const newProduct = {
                ...formData,
                 id: crypto.randomUUID(),
            };
            saveProducts([...products, newProduct]);
        } else {
            const updated = products.map((p) =>
                p.id === formData.id ? formData : p
            );
            saveProducts(updated);
        }

        setFormData({
            id: null,
            nombre: "",
            precio: "",
            categoria: "",
            stock: "",
            img: "",
            imgType: "",
        });
    };
    const handleEdit = (product) => {
        setFormData(product);
    };
    const handleDelete = (id) => {
        const filtered = products.filter((p) => p.id !== id);
        saveProducts(filtered);
    };

    return (
        <>
            <Navb />

            <Container className="mt-5 pt-5">
                <h2 className="mb-4">Administración de Productos</h2>
                <Form onSubmit={handleSubmit} className="mb-4">
                    <Form.Control
                        className="mb-2"
                        name="nombre"
                        placeholder="Nombre"
                        value={formData.nombre}
                        onChange={handleChange}
                        required
                    />

                    <Form.Control
                        className="mb-2"
                        type="number"
                        name="precio"
                        placeholder="Precio"
                        value={formData.precio}
                        onChange={handleChange}
                        required
                    />

                    <Form.Select
                        name="categoria"
                        value={formData.categoria}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Seleccioná una categoría</option>
                        {categorias.map((cat) => (
                            <option key={cat} value={cat}>
                                {cat}
                            </option>
                        ))}
                    </Form.Select>

                    <Form.Control
                        className="mb-3"
                        type="number"
                        name="stock"
                        placeholder="Stock"
                        value={formData.stock}
                        onChange={handleChange}
                        required
                    />
                    <Form.Group className="mb-3">
  <Form.Label>Imagen (URL)</Form.Label>
  <Form.Control
    type="url"
    placeholder="https://ejemplo.com/imagen.jpg"
    name="img"
    value={formData.imgType === "url" ? formData.img : ""}
    disabled={formData.imgType === "file"}
    onChange={(e) =>
      setFormData({
        ...formData,
        img: e.target.value,
        imgType: "url",
      })
    }
  />
</Form.Group>

<Form.Group className="mb-3">
  <Form.Label>O subir imagen (PNG / JPG)</Form.Label>
  <Form.Control
    type="file"
    accept="image/png, image/jpeg"
    disabled={formData.imgType === "url"}
    onChange={handleImageUpload}
  />
  
</Form.Group>


                    <Button type="submit" variant="danger">
                        {formData.id ? "Editar producto" : "Agregar producto"}
                    </Button>
                </Form>

                <Table striped bordered hover responsive>
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Precio</th>
                            <th>Categoría</th>
                            <th>Stock</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.length === 0 ? (
                            <tr>
                                <td colSpan="5" className="text-center">
                                    No hay productos cargados
                                </td>
                            </tr>
                        ) : (
                            products.map((product) => (
                                <tr key={product.id}>
                                    <td>{product.nombre}</td>
                                    <td>${product.precio}</td>
                                    <td>{product.categoria}</td>
                                    <td>{product.stock}</td>
                                    <td>
                                        <Button
                                            size="sm"
                                            variant="warning"
                                            className="me-2"
                                            onClick={() => handleEdit(product)}
                                        >
                                            Editar
                                        </Button>

                                        <Button
                                            size="sm"
                                            variant="danger"
                                            onClick={() => handleDelete(product.id)}
                                        >
                                            Borrar
                                        </Button>
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </Table>
            </Container>
        </>
    );
}

export default Admin;
