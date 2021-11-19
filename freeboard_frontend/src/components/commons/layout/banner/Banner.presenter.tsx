// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Slider from "react-slick";
import React from "react";
import { Carousel, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
export default function BannerUI() {
  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   autoplaySpeed: 2000,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  // };

  return (
    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="img/banner01.png"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="img/banner02.png"
          alt="Second slide"
        />
      </Carousel.Item>
      {/* <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=Third slide&bg=20232a"
          alt="Third slide"
        />
      </Carousel.Item> */}
    </Carousel>
    // <BannerSection>
    //   <Slider {...settings}>
    //     <Img src="img/banner01.png"></Img>
    //     <Img src="img/banner02.png"></Img>
    //     <div>
    //       <h3>3</h3>
    //     </div>
    //     <div>
    //       <h3>4</h3>
    //     </div>
    //     <div>
    //       <h3>5</h3>
    //     </div>
    //     <div>
    //       <h3>6</h3>
    //     </div>
    //   </Slider>
    // </BannerSection>
  );
}
