import React, { useEffect, useRef, useState } from "react";

export const About = (props) => {
  const aboutTextRef = useRef(null);
  const missionItemRef = useRef(null);
  const valueItemRef = useRef(null);
  const imageRef = useRef(null);
  const [animateParagraph, setAnimateParagraph] = useState(false);

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
      valueItemRef,
      imageRef,
    ];

    elementsToObserve.forEach(ref => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    // Check if the screen width is less than or equal to 768px (mobile view)
    if (window.innerWidth <= 768) {
      setAnimateParagraph(true);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div id="about" style={{ backgroundColor: 'white', padding: '20px' }}>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6">
            <div 
              className={`about-text ${animateParagraph ? 'animate' : ''} animate-from-bottom`} 
              ref={aboutTextRef}
            >
              <h2>About Us</h2>
              <p>{props.data ? props.data.paragraph : "loading..."}</p>
              <div className="row">
                <div className="col-12 col-sm-6">
                  <div className="about-item animate-from-right animate-delay-1" ref={missionItemRef}>
                    <h3>Mission</h3>
                    <p>{props.data ? props.data.mission : "loading..."}</p>
                  </div>
                </div>
                <div className="col-12 col-sm-6">
                  <div className="about-item animate-from-right animate-delay-3" ref={valueItemRef}>
                    <h3>Values</h3>
                    <p>{props.data ? props.data.values : "loading..."}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <img src="img/08-smalld.jpg" className="card-img-top" alt="" style={{ width: '100%', height: 'auto' }} />
            <div className="card-body">
              {/* Optional content can go here */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};