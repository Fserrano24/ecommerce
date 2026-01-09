import "./AboutUs.css";
import devCore from "../../img/devCore.png";
import fotoGaston from "../../img/foto.jpeg";
import fotoFabrizio from "../../img/fabrizio.jpg";
import fotoivan from "../../img/ivan.jpeg";
import fotoagus from "../../img/agus.jpeg";

const team = [
  {
    name: "Agus Valverdi",
    img: fotoagus,
  },
  {
    name: "Gaston Suarez",
    img: fotoGaston,
  },
  {
    name: "Serrano Fabrizio",
    img: fotoFabrizio,
  },
  {
    name: "Ivan Robles",
    img: fotoivan,
  },
];

const AboutUs = () => {
  return (
    <section className="about">
      <div className="about-hero">
      <img src={devCore} alt="Dev Core" />

        <p>
          Somos un equipo apasionado por el desarrollo web, el diseño y la
          creación de experiencias digitales modernas y funcionales.
        </p>
      </div>

      <div className="about-mission">
        <h2>Nuestra misión</h2>
        <p>
          Crear soluciones digitales eficientes, visualmente atractivas y
          centradas en el usuario, combinando tecnología, creatividad y trabajo
          en equipo.
        </p>
      </div>

      <div className="about-team">
        <h2>Nuestro equipo</h2>

        <div className="team-grid">
          {team.map((member, index) => (
            <div className="team-card" key={index}>
              <img src={member.img} alt={member.name} />
              <h3>{member.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
