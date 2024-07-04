// AppendDots.js
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; // Import Slick Carousel CSS
import "slick-carousel/slick/slick-theme.css"; // Import Slick Carousel Theme CSS
import style from "../styles/CarouselComp.module.css";

function AppendDots() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendDots: (dots) => (
      <div
        style={{
          borderRadius: "10px",
          padding: "10px",
        }}
      >
        <ul className={style.customDots}> {dots} </ul>
      </div>
    ),
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div>
          <h3>1</h3>
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div>
      </Slider>
    </div>
  );
}

export default AppendDots;
