import React from "react";
import Navb from "../navBar/navbar";   
import { useState } from 'react';
import Carousel from "react-bootstrap/Carousel";
import imgCarrusel1 from "../../img/imgCarrusel1.jpg";
import imgCarrusel2 from "../../img/imgCarrusel2.png";
import imgCarrusel3 from "../../img/imgCarrusel3.png";
import imgCarrusel4 from "../../img/imgCarrusel4.jpg";


function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} className="w-100 xxl">
      <Carousel.Item>
        <img
          className="d-block w-100 img-fluid"
          src={imgCarrusel1}
          alt="img1"
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100 img-fluid"
          src={imgCarrusel2}
          alt="img2"
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100 img-fluid"
          src={imgCarrusel3}
          alt="img3"
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100 img-fluid"
          src={imgCarrusel4}
          alt="img4"
        />
      </Carousel.Item>
    </Carousel>
  );
}


const Home = () => {
    return (
        <>
            <Navb />
            <div className="container-fluid p-0 m-0">
            <ControlledCarousel />
            </div>

        </>
    )
}

export default Home;
