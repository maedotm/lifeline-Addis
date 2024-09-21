import React, { useState, useEffect } from "react";
import "animate.css";

export const Testimonials = (props) => {
  const [isVisible, setIsVisible] = useState(false);
  const [expandedIndex, setExpandedIndex] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(entry.isIntersecting);
        });
      },
      { rootMargin: "0px 0px 50px 0px" }
    );

    const testimonialsSection = document.getElementById("testimonials");
    observer.observe(testimonialsSection);

    return () => {
      observer.unobserve(testimonialsSection);
    };
  }, []);

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const renderTestimonials = () => {
    if (!props.data || props.data.length === 0) {
      return <p>Loading...</p>;
    }

    return props.data.map((d, i) => {
      const isExpanded = expandedIndex === i;
      const isLongText = d.text.length > 300;
      const displayedText = isExpanded || !isLongText ? d.text : `${d.text.slice(0, 300)}... `;
      const toggleText = isExpanded ? "See Less" : "See More";

      return (
        <div key={`${d.name}-${i}`} className="col-md-6">
          <div className="testimonial">
            <div className="testimonial-image">
              <img src={d.img} alt={d.name} />
            </div>
            <div className="testimonial-content">
              <p onClick={() => isLongText && toggleExpand(i)} style={{ cursor: isLongText ? 'pointer' : 'default' }}>
                {displayedText}
                {isLongText && <span style={{ color: '#6c1c1c', fontWeight: 'bold' }}>{toggleText}</span>}
              </p>
              <div className="testimonial-meta">- {d.name}</div>
            </div>
          </div>
        </div>
      );
    });
  };

  return (
    <div id="testimonials">
      <div className="container">
        <div className={`section-title text-center ${isVisible ? "animate__animated animate__zoomIn" : ""}`}>
          <h2>What our clients say</h2>
        </div>
        <div className={`section-content ${isVisible ? "animate__animated animate__slideInUp" : ""}`}>
          <div className="row">
            {renderTestimonials()}
          </div>
        </div>
      </div>
    </div>
  );
};