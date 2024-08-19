import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export const Header = (props) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      heading: props.data ? props.data.title : "First Heading",
      content: props.data ? props.data.paragraph : "Loading",
      image: "./img/slide_1.jpg",
    },
    {
      heading: "Your Home Healthcare Partner",
      content: "Your health, our priority. Expert care, home comfort.",
      image: "./img/slide_2.jpg",
    },
    {
      heading: "Bringing Healthcare Home",
      content: "Bridging the healthcare gap. Healing begins at home.",
      image: "./img/slide_3.jpg",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 3000); // Change slide every 3 seconds

    return () => {
      clearInterval(timer);
    };
  }, [slides.length]);

  const handlePrevClick = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
  };

  const handleNextClick = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  return (
    <header id="header">
      <div className="intro">
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 intro-text">
                <div className="slide-container">
                  <div
                    className={`animate__animated animate__fadeInRight first-slide ${
                      currentSlide === 0 ? "active" : "5s"
                    }`}
                    style={{
                      backgroundImage: `url(${slides[0].image})`,
                      backgroundPosition: "50% 100%",
                    }}
                  >
                    <div
                      style={{
                        color: "red",
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        width: "100%",
                        padding: "10px",
                      }}
                    >
                      <h2>{slides[0].heading}</h2>
                      <p>{slides[0].content}</p>
                    </div>
                  </div>
                  <div
                    className={`animate__animated animate__fadeInRight second-slide ${
                      currentSlide === 1 ? "active" : "7s"
                    }`}
                    style={{
                      backgroundImage: `url(${slides[1].image})`,
                      backgroundPosition: "100% 50%",
                    }}
                  >
                    <div
                      style={{
                        position: "absolute",
                        top: "50%",
                        right: "10%",
                        transform: "translateY(-50%)",
                        textAlign: "center",
                      }}
                    >
                      <h2>{slides[1].heading}</h2>
                      <p>{slides[1].content}</p>
                    </div>
                  </div>
                  <div
                    className={`animate__animated animate__fadeInRight third-slide ${
                      currentSlide === 2 ? "active" : "10s"
                    }`}
                    style={{
                      backgroundImage: `url(${slides[2].image})`,
                      // backgroundPosition: "100% 50%",
                    }}
                  >
                    <div
                      style={{
                        color: "green",
                        position: "absolute",
                        bottom:0,
                        left:0,
                        transform: "translateY(-50%)",
                        textAlign: "center",
                      }}
                    >
                      <h2>{slides[2].heading}</h2>
                      <p>{slides[2].content}</p>
                    </div>
                  </div>
                </div>
                <div className="slide-buttons">
                  <button className="prev-btn" onClick={handlePrevClick}>
                    <FaChevronLeft />
                  </button>
                  <button className="next-btn" onClick={handleNextClick}>
                    <FaChevronRight />
                  </button>
                </div>
                <a
                  href="#contact"
                  className="btn btn-custom btn-lg page-scroll animate__animated animate__fadeInUp"
                  style={{
                    animationDelay: "3s",
                  }}
                >
                  learn more
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};