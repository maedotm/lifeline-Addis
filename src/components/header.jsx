import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export const Header = (props) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  const slides = [
    {
      heading: props.data ? props.data.title : "First Heading",
      content: props.data ? props.data.paragraph : "Loading",
      image: "./img/Lslide_1.jpg",
      position: { top: "70%", left: "50%" },
    },
    {
      heading: "Your Home Healthcare Partner",
      content: "Your health, our priority. Expert care, home comfort.",
      image: "./img/Lslide_2.jpg",
      position: { top: "60%", left: "50%" },
    },
    {
      heading: "Bringing Healthcare Home",
      content: "Bridging the healthcare gap. Healing begins at home.",
      image: "./img/Lslide_3.jpg",
      position: { top: "50%", left: "35%" },
    },
  ];

  useEffect(() => {
    // Preload the images
    const preloadImages = async () => {
      await Promise.all(slides.map(async (slide) => {
        const img = new Image();
        img.src = slide.image;
        await img.decode();
      }));
      setIsImageLoaded(true);
    };
    preloadImages();

    const timer = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
        setIsAnimating(false);
      }, 1000); // Delay for fading effect
    }, 3000);

    return () => {
      clearInterval(timer);
    };
  }, [slides.length]);

  const handlePrevClick = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
      setIsAnimating(false);
    }, 1000);
  };

  const handleNextClick = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
      setIsAnimating(false);
    }, 1000);
  };

  return (
    <header id="header" className="header-container">
      <div className="header-bg" style={{ backgroundImage: `url(${slides[currentSlide].image})` }} />
      {isImageLoaded && slides.map((slide, index) => (
        <div
          key={index}
          className={`slide ${currentSlide === index ? "active" : ""}`}
          style={{ display: currentSlide === index ? "block" : "none" }}
        >
          <div
            className={`slide-content ${isAnimating ? "fade" : ""}`}
            style={{ top: slide.position.top, left: slide.position.left }}
          >
            <h2>{slide.heading}</h2>
            <p>{slide.content}</p>
          </div>
        </div>
      ))}
      <button className="prev" onClick={handlePrevClick}>
        <FaChevronLeft />
      </button>
      <button className="next" onClick={handleNextClick}>
        <FaChevronRight />
      </button>
      <a href="#about" className="btn btn-custom">
        Learn More
      </a>
    </header>
  );
};