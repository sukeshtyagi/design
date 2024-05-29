import React from "react";
import Carousel from "react-bootstrap/Carousel";
import style from "../styles/CarouselComp.module.css";

function CarouselComp() {
  return (
    <div className={`${style.outerDiv} ml-12`}>
      <div className={`${style.childOne}`}>
        <h1 className={`${style.heading}`}>
          Lorem Ipsum <span className={`${style.spanDolor}`}>Dolor Sit</span>
        </h1>
        <p className={`${style.para}`}>
          Lorem Ipsum Dolor Sit Amet Lorem Ipsum Dolor Sit Amet Lorem Ipsum
          Dolor Sit Amet Lorem Ipsum....
        </p>
        <button className={`${style.btn}`}>Subscribe Now</button>
      </div>
      <div
        className={`${style.childTwo}`}
        style={{
          background: "url(/images/services/abc.svg)",
        }}
      ></div>
    </div>
  );
}

export default CarouselComp;
