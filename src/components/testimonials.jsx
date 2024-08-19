import React, { useState, useEffect } from "react";
import "animate.css";

export const Testimonials = (props) => {
  const [isVisible, setIsVisible] = useState(false);
  const [rowOneVisible, setRowOneVisible] = useState(false);
  const [rowTwoVisible, setRowTwoVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(entry.isIntersecting);
          if (entry.target.classList.contains("row-one")) {
            setRowOneVisible(entry.isIntersecting);
          }
          if (entry.target.classList.contains("row-two")) {
            setRowTwoVisible(entry.isIntersecting);
          }
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

  return (
    <div id="testimonials">
      <div className="container">
        <div
          className={`section-title text-center ${
            isVisible ? "animate__animated animate__zoomIn" : ""
          }`}
        >
          <h2>What our clients say</h2>
        </div>
        <div
          className={`section-content ${
            isVisible ? "animate__animated animate__slideInUp" : ""
          }`}
        >
          <div className="row row-one">
            {props.data
              ? props.data.slice(0, 2).map((d, i) => (
                  <div
                    key={`${d.name}-${i}`}
                    className={`col-md-6 ${
                      rowOneVisible
                        ? "animate__animated animate__slideInLeft"
                        : "testimonial-hidden"
                    }`}
                  >
                    <div className="testimonial">
                      <div
                        className={`testimonial-image ${
                          rowOneVisible
                            ? "animate__animated animate__zoomIn"
                            : ""
                        }`}
                      >
                        {" "}
                        <img src={d.img} alt="" />{" "}
                      </div>
                      <div
                        className={`testimonial-content ${
                          rowOneVisible
                            ? "animate__animated animate__slideInLeft"
                            : ""
                        }`}
                      >
                        <p>"{d.text}"</p>
                        <div
                          className={`testimonial-meta ${
                            rowOneVisible
                              ? "animate__animated animate__slideInLeft"
                              : ""
                          }`}
                        >
                          {" "}
                          - {d.name}{" "}
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              : "loading"}
          </div>
          <div className="row row-two">
            {props.data
              ? props.data.slice(2).map((d, i) => (
                  <div
                    key={`${d.name}-${i}`}
                    className={`col-md-6 ${
                      rowTwoVisible
                        ? "animate__animated animate__slideInRight"
                        : "testimonial-hidden"
                    }`}
                  >
                    <div className="testimonial">
                      <div
                        className={`testimonial-image ${
                          rowTwoVisible
                            ? "animate__animated animate__zoomIn"
                            : ""
                        }`}
                      >
                        {" "}
                        <img src={d.img} alt="" />{" "}
                      </div>
                      <div
                        className={`testimonial-content ${
                          rowTwoVisible
                            ? "animate__animated animate__slideInRight"
                            : ""
                        }`}
                      >
                        <p>"{d.text}"</p>
                        <div
                          className={`testimonial-meta ${
                            rowTwoVisible
                              ? "animate__animated animate__slideInRight"
                              : ""
                          }`}
                        >
                          {" "}
                          - {d.name}{" "}
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              : "loading"}
          </div>
        </div>
      </div>
    </div>
  );
};