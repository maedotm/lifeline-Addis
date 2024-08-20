import React, { useEffect, useRef } from "react";

export const About = (props) => {
  const aboutTextRef = useRef(null);
  const missionItemRef = useRef(null);
  const visionItemRef = useRef(null);
  const valueItemRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate");
          } else {
            entry.target.classList.remove("animate");
          }
        });
      },
      { threshold: 0.5 }
    );

    const elementsToObserve = [
      aboutTextRef,
      missionItemRef,
      visionItemRef,
      valueItemRef,
      imageRef,
    ];

    elementsToObserve.forEach(ref => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div id="about" style={{ backgroundColor: 'white', padding: '20px' }}>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6">
            <div className="about-text animate-from-bottom" ref={aboutTextRef}>
              <h2>About Us</h2>
              <p>{props.data ? props.data.paragraph : "loading..."}</p>
              <div className="row">
                <div className="col-12 col-sm-4">
                  <div className="about-item animate-from-right animate-delay-1" ref={missionItemRef}>
                    <h3>Mission</h3>
                    <p>{props.data ? props.data.mission : "loading..."}</p>
                  </div>
                </div>
                <div className="col-12 col-sm-4">
                  <div className="about-item animate-from-left animate-delay-2" ref={visionItemRef}>
                    <h3>Vision</h3>
                    <p>{props.data ? props.data.vision : "loading..."}</p>
                  </div>
                </div>
                <div className="col-12 col-sm-4">
                  <div className="about-item animate-from-right animate-delay-3" ref={valueItemRef}>
                    <h3>Values</h3>
                    <p>{props.data ? props.data.values : "loading..."}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="card animate-rotate" ref={imageRef}>
              <img src="img/landing_page.jpg" className="card-img-top" alt="" style={{ width: '100%', height: 'auto' }} />
              <div className="card-body">
                {/* Optional content can go here */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};