import logo from "../../img/logoNetBuy.png";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="contenedor-footer">
      <div className="contenido-footer">
        <div className="seccion-footer">
          <a href="/">
            <img src={logo} alt="NetBuy" className="logo-footer" />
          </a>
        </div>

        <div className="seccion-footer">
          <h4>Contacto</h4>
          <a href="https://wa.me/123456789" target="_blank" rel="noreferrer">
            WhatsApp
          </a>
          <a href="mailto:netbuy3125@gmail.com">
            netbuy3125@gmail.com
          </a>
        </div>

        <div className="seccion-footer">
          <h4>Redes Sociales</h4>
          <a href="#" target="_blank" rel="noreferrer">Instagram</a>
          <a href="#" target="_blank" rel="noreferrer">Facebook</a>
          <a href="#" target="_blank" rel="noreferrer">Twitter</a>
        </div>

        <div className="seccion-footer">
          <a href="/login">Inicio de Sesión</a>
          <a href="/aboutus">Quiénes Somos</a>
        </div>
      </div>

      <div className="pie-footer">
        <p>
          &copy; {new Date().getFullYear()} NetBuy - Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
