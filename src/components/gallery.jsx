import { Image } from "./image";
import React, { useState, useEffect } from "react";
import 'animate.css';

export const Gallery = (props) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(entry.isIntersecting);
        });
      },
      {
        rootMargin: "-50px 0px",
      }
    );

    const gallerySection = document.getElementById("portfolio");
    observer.observe(gallerySection);

    return () => {
      observer.unobserve(gallerySection);
    };
  }, []);

  return (
    <div id="portfolio" className="text-center">
      <div
        className={`container ${isVisible ? 'animate__animated animate__zoomIn animate__delay-0.5s' : ''}`}
        style={{
          transform: isVisible ? 'scale(1.1)' : 'scale(1)',
          transformOrigin: 'center',
          transition: 'transform 0.3s ease-in-out',
        }}
      >
        <div className={`section-title ${isVisible ? 'animate__animated animate__slideInLeft animate__delay-0.5s' : ''}`}>
          <h2>Gallery</h2>
          <p className={`${isVisible ? 'animate__animated animate__slideInRight animate__delay-0.5s' : ''}`}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed
            dapibus leonec.
          </p>
        </div>
        <div className="row">
          <div className="portfolio-items">
            {props.data
              ? props.data.map((d, i) => (
                  <div
                    key={`${d.title}-${i}`}
                    className={`col-sm-6 col-md-4 col-lg-4 ${isVisible ? `animate__animated animate__slideIn${i % 2 === 0 ? 'Left' : 'Right'} animate__delay-${i + 1}s` : ''}`}
                    style={{ position: 'relative' }}
                  >
                    <div className="portfolio-item">
                      <Image
                        title={d.title}
                        smallImage={d.smallImage}
                      />
                    </div>
                  </div>
                ))
              : "Loading..."}
          </div>
        </div>
      </div>
    </div>
  );
};