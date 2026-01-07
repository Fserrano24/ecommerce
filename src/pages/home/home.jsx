import React from "react";
import Navb from "../navBar/navbar";   
import { useState } from 'react';
import Carousel from "react-bootstrap/Carousel";
import imgCarrusel1 from "../../img/imgCarrusel1.jpg";
import imgCarrusel2 from "../../img/imgCarrusel2.png";
import imgCarrusel3 from "../../img/imgCarrusel3.png";
import imgCarrusel4 from "../../img/imgCarrusel4.jpg";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import CardGroup from 'react-bootstrap/CardGroup';
import monitor from "../../img/monitor.jpg";
import anuncio from "../../img/anuncioNetBuy.png";


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

function GroupProducts() {
  return (
    <CardGroup>
      <Card>
        <Card.Img variant="top" src={monitor} />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
       <Card>
        <Card.Img variant="top" src={monitor} />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
       <Card>
        <Card.Img variant="top" src={monitor} />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src={monitor} />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This card has supporting text below as a natural lead-in to
            additional content.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src={monitor} />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This card has even longer content than the
            first to show that equal height action.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
    </CardGroup>
  );
}

function GridProducts() {
  return (
    <Row xs={1} md={3} >
      {Array.from({ length: 6 }).map((_, idx) => (
        <Col key={idx}>
          <Card>
            <Card.Img variant="top" src={monitor} />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

function Anuncio() {
  return (
    <>
      <Card>
        <Card.Img variant="top" src={anuncio} />
      </Card>
    </>
  );
}


const Home = () => {
    return (
        <>
            <Navb />
            <ControlledCarousel />
            <GroupProducts />
            <GridProducts />
            <GroupProducts />
            <Anuncio />


        </>
    )
}

export default Home;
