import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import style from "../styles/CarouselComp.module.css"; // Adjust the import according to your file structure

function CarouselComp() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    appendDots: (dots) => (
      <div>
        <ul className={style.customDots}> {dots} </ul>
      </div>
    ),
    customPaging: (i) => <div className={style.customDot}></div>,
  };

  return (
    <div className={style.carouselContainer}>
      <Slider {...settings}>
        <div className={`${style.outerDiv} ml-12`}>
          <div className={`${style.childOne}`}>
            <h1 className={`${style.heading}`}>
              Lorem Ipsum{" "}
              <span className={`${style.spanDolor}`}>Dolor Sit</span>
            </h1>
            <p className={`${style.para}`}>
              Lorem Ipsum Dolor Sit Amet Lorem Ipsum Dolor Sit Amet Lorem Ipsum
              Dolor Sit Amet Lorem Ipsum....
            </p>
            <button className={`${style.btn}`}>Subscribe Now</button>
          </div>
          <div
            className={`${style.childTwo}`}
            style={{ background: "url(/images/services/abc.svg)" }}
          ></div>
        </div>
        <div className={`${style.outerDiv} ml-12`}>
          <div className={`${style.childOne}`}>
            <h1 className={`${style.heading}`}>
              Lorem Ipsum{" "}
              <span className={`${style.spanDolor}`}>Dolor Sit</span>
            </h1>
            <p className={`${style.para}`}>
              Lorem Ipsum Dolor Sit Amet Lorem Ipsum Dolor Sit Amet Lorem Ipsum
              Dolor Sit Amet Lorem Ipsum....
            </p>
            <button className={`${style.btn}`}>Subscribe Now</button>
          </div>
          <div
            className={`${style.childTwo}`}
            style={{ background: "url(/images/services/abc.svg)" }}
          ></div>
        </div>
      </Slider>
    </div>
  );
}

export default CarouselComp;
