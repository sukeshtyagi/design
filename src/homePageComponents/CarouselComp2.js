import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import style from "../styles/CarouselComp.module.css";

function CarouselComp2() {
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
      <div
        style={{
          borderRadius: "10px",
          padding: "10px",
          position: "relative",
          bottom: "70px",
        }}
      >
        <ul className={style.customDots}> {dots} </ul>
      </div>
    ),
  };

  return (
    <Slider {...settings}>
      <div className={`${style.outerDiv}`}>
        <div className={`${style.childOne}`}>
          <h1 className={`${style.heading}`}>
            Expert Doctors at
            <span className={`${style.spanDolor}`}> Your Fingertips</span>
          </h1>
          <p className={`${style.para}`}>
            Find trusted and experienced doctors near you for all your
            healthcare needs. Your health is our priority.
          </p>
          <button className={`${style.btn}`}>Subscribe Now</button>
        </div>
        <div
          className={`${style.childTwo}`}
          style={{ background: "url(/images/services/carouselImage.png)" }}
        ></div>
      </div>

      <div className={`${style.outerDiv} `}>
        <div className={`${style.childOne}`}>
          <h1 className={`${style.heading}`}>
            Top Engineers for{" "}
            <span className={`${style.spanDolor}`}>Your Projects</span>
          </h1>
          <p className={`${style.para}`}>
            Connect with skilled engineers to bring your projects to life. From
            civil to software engineering, we have you covered.
          </p>
          <button className={`${style.btn}`}>Subscribe Now</button>
        </div>
        <div
          className={`${style.childTwo}`}
          style={{ background: "url(/images/services/carouselImage.png)" }}
        ></div>
      </div>

      <div className={`${style.outerDiv}`}>
        <div className={`${style.childOne}`}>
          <h1 className={`${style.heading}`}>
            Reliable{" "}
            <span className={`${style.spanDolor}`}>Chartered Accountants</span>
          </h1>
          <p className={`${style.para}`}>
            Discover certified CAs to handle your financial planning and
            auditing needs. Ensure your finances are in good hands.
          </p>
          <button className={`${style.btn}`}>Subscribe Now</button>
        </div>
        <div
          className={`${style.childTwo}`}
          style={{ background: "url(/images/services/carouselImage.png)" }}
        ></div>
      </div>

      <div className={`${style.outerDiv}`}>
        <div className={`${style.childOne}`}>
          <h1 className={`${style.heading}`}>
            Dedicated Teachers for{" "}
            <span className={`${style.spanDolor}`}>Every Subject</span>
          </h1>
          <p className={`${style.para}`}>
            Find passionate and knowledgeable teachers to help you or your child
            excel academically. Quality education is just a click away.
          </p>
          <button className={`${style.btn}`}>Subscribe Now</button>
        </div>
        <div
          className={`${style.childTwo}`}
          style={{ background: "url(/images/services/carouselImage.png)" }}
        ></div>
      </div>
    </Slider>
  );
}

export default CarouselComp2;
