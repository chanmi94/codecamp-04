import React from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
export default function BannerUI() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img
          style={{ height: "400px" }}
          className="d-block w-100"
          src="img/banner01.png"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          style={{ height: "400px" }}
          className="d-block w-100"
          src="img/banner02.png"
          alt="Second slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}
