import React from "react";
import Carousel from "react-bootstrap/Carousel";

function CarouselComp() {
  return (
    <div style={{ maxWidth: "500px", margin: "auto" }}>
      <Carousel indicators={true} controls={false} fade={true}>
        <Carousel.Item interval={1500}>
          <img
            className="d-block w-100"
            src="/images/searches/book7.jpg"
            alt="one slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={1500}>
          <img
            className="d-block w-100"
            src="/images/searches/book4.jpg"
            alt="Two slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={1500}>
          <img
            className="d-block w-100"
            src="/images/searches/book.jpg"
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={1500}>
          <img
            className="d-block w-100"
            src="/images/searches/book7.jpg"
            alt="four slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={1500}>
          <img
            className="d-block w-100"
            src="/images/searches/book4.jpg"
            alt="five slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={1500}>
          <img
            className="d-block w-100"
            src="/images/searches/book.jpg"
            alt="six slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={1500}>
          <img
            className="d-block w-100"
            src="/images/searches/book4.jpg"
            alt="seven slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={1500}>
          <img
            className="d-block w-100"
            src="/images/searches/book4.jpg"
            alt="eight slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={1500}>
          <img
            className="d-block w-100"
            src="/images/searches/book4.jpg"
            alt="nine slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={1500}>
          <img
            className="d-block w-100"
            src="/images/searches/book7.jpg"
            alt="ten slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default CarouselComp;
