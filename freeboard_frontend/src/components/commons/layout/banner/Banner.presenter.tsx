import { SliderItem, Wrapper } from "./Banner.styles";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function BannerUI() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Wrapper>
      <Slider {...settings}>
        <div>
          <SliderItem src="/img/banner01.png" />
        </div>
        <div>
          <SliderItem src="/img/banner02.png" />
        </div>
        <div>
          <SliderItem src="/img/banner03.png" />
        </div>
      </Slider>
    </Wrapper>
  );
}
