import React, { useState, useEffect } from "react";
import "animate.css";

export const Testimonials = (props) => {
  const [isVisible, setIsVisible] = useState(false);
  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(entry.isIntersecting);
        });
      },
      {
        rootMargin: "0px 0px 50px 0px",
      }
    );

    const testimonialsSection = document.getElementById("testimonials");
    observer.observe(testimonialsSection);

    return () => {
      observer.unobserve(testimonialsSection);
    };
  }, []);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div id="testimonials">
      <div className="container">
        <div className={`section-title text-center ${isVisible ? "animate__animated animate__zoomIn" : ""}`}>
          <h2>What our clients say</h2>
        </div>
        <div className={`section-content ${isVisible ? "animate__animated animate__slideInUp" : ""}`}>
          <div className="row">
            {props.data && props.data.length > 0 ? (
              props.data.slice(0, showMore ? props.data.length : 2).map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-md-6">
                  <div className="testimonial">
                    <div className="testimonial-image">
                      <img src={d.img} alt={d.name} />
                    </div>
                    <div className="testimonial-content">
                      <p>"{d.text}"</p>
                      <div className="testimonial-meta">- {d.name}</div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p>Loading...</p>
            )}
          </div>
          {props.data && props.data.length > 2 && (
            <button onClick={toggleShowMore} className="see-more-btn">
              {showMore ? "See Less" : "See More"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};