import React from "react";
import { Carousel } from "react-bootstrap";

function Carusel() {
  return (
    <div>
      <Carousel>
        <Carousel.Item interval={8000}>
          <a href="https://github.com/suryanshsoni27" className="d-block">
            <img
              href="https://github.com/suryanshsoni27"
              className="d-block m-auto w-50 h-auto"
              src="https://news.efinancialcareers.com/binaries/content/gallery/efinancial-careers/articles/2019/04/github.jpg"
              alt="First slide"
            />
          </a>
        </Carousel.Item>
        <Carousel.Item interval={8000}>
          <a
            href="https://www.linkedin.com/in/suryansh-soni?trk=profile-badge"
            className="d-block"
          >
            <img
              href="www.linkedin.com/in/suryansh-soni"
              className="d-block m-auto w-50 h-100"
              src="https://www.kinesisinc.com/wp-content/uploads/2020/04/linkedin-101-hero@2x.png"
              alt="Third slide"
            />
          </a>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Carusel;
