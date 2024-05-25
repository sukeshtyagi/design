import React from "react";
import Carousel from "react-bootstrap/Carousel";

function CarouselComp() {
  return (
    <Carousel indicators={true} controls={false}>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          src="/images/searches/book.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Books are Greatest Friends</h3>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          src="/images/searches/book.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Books indeed are life changers.</h3>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          src="/images/searches/book.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Reading is more important than Food.</h3>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          src="/images/searches/book.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Books, Books and Books is all must to have.</h3>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          src="/images/searches/book.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>A divine is book which followed rigorously.</h3>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          src="/images/searches/book.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>God is in Books.</h3>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          src="/images/searches/book.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Books are door to prosperity.</h3>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          src="/images/searches/book.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Books are the ultimate power.</h3>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          src="/images/searches/book.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Acess to Library is a blessing.</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselComp;
