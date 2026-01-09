import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Container, Form } from "react-bootstrap";
import { login } from "../../auth/auth";
import Navb from "../navBar/navbar";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const success = login(email, password);

    if (success) {
      navigate("/admin");
    } else {
      setError("Usuario o contraseña incorrectos");
    }
     }; 
  return (
  <>
    <Navb />

    <Container fluid className="d-flex justify-content-center align-items-center pt-5" style={{ height: "40vw", width: "99vw" }}>
      <div className="" style={{ maxWidth: "400px" }}>
        <h2 className="mb-4 text-center">Login</h2>

        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Control
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Control
              type="password"
              placeholder="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </Form.Group>

          {error && (
            <p className="text-danger text-center">{error}</p>
          )}

          <Button type="submit" className="w-100" variant="danger">
            Ingresar
          </Button>
          <Button type="submit" className="w-100 mt-2" variant="outline-danger" href="./home">
            Ingresar como invitado
          </Button>
          <span className="text-black">¿No tienes cuenta? Regístrate </span><a href="./registro">aquí</a>
        </Form>
      </div>
    </Container>
  </>
);
}
export default Login;
