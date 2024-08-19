import React, { useState, useEffect, useRef } from "react";
import 'animate.css';

export const Services = (props) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [visibleIndices, setVisibleIndices] = useState([]);
  const sectionTitleRef = useRef(null);
  const paragraphRef = useRef(null);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === sectionTitleRef.current) {
              sectionTitleRef.current.classList.add('animate__animated', 'animate__slideInRight');
            } else if (entry.target === paragraphRef.current) {
              paragraphRef.current.classList.add('animate__animated', 'animate__slideInLeft');
            } else {
              const index = parseInt(entry.target.dataset.index);
              setVisibleIndices((prevIndices) => [...prevIndices, index]);
              entry.target.classList.add('animate__animated', 'animate__slideInDown');
            }
          } else {
            if (entry.target === sectionTitleRef.current) {
              sectionTitleRef.current.classList.remove('animate__animated', 'animate__slideInRight');
            } else if (entry.target === paragraphRef.current) {
              paragraphRef.current.classList.remove('animate__animated', 'animate__slideInLeft');
            } else {
              const index = parseInt(entry.target.dataset.index);
              if (visibleIndices.includes(index)) {
                entry.target.classList.remove('animate__animated', 'animate__slideInDown');
              }
            }
          }
        });
      },
      {
        rootMargin: "0px 0px -50px 0px",
      }
    );

    const serviceItems = Array.from(document.querySelectorAll(".service-item .rounded-icon"));
    serviceItems.forEach((item, index) => {
      item.dataset.index = index;
      observer.observe(item);
    });

    observer.observe(sectionTitleRef.current);
    observer.observe(paragraphRef.current);

    return () => {
      serviceItems.forEach((item) => {
        observer.unobserve(item);
      });
      observer.unobserve(sectionTitleRef.current);
      observer.unobserve(paragraphRef.current);
    };
  }, [visibleIndices]);

  return (
    <div id="services" className="text-center services-section">
      <div className="container">
        <div className="section-title" ref={sectionTitleRef}>
          <h2>Home Care Services</h2>
        </div>
        <p className="animate__delay-0.2s" ref={paragraphRef}>
          When you choose our services, you can expect the following exceptional offerings.
        </p>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div
                  key={`${d.name}-${i}`}
                  className="col-md-3 col-sm-6"
                  onMouseEnter={() => handleMouseEnter(i)}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className={`service-item ${hoveredIndex === i ? 'flipped' : ''}`}>
                    <div className="service-item-front">
                      <i
                        className={`rounded-icon ${d.icon} ${visibleIndices.includes(i) ? 'animate__animated animate__slideInDown' : ''}`}
                      ></i>
                      <p>{d.name}</p>
                    </div>
                    <div className="service-item-back">
                      <div className="service-desc">
                        <p>{d.text.split(' ').slice(0, 5).join(' ')}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            : "loading"}
        </div>
      </div>
    </div>
  );
};