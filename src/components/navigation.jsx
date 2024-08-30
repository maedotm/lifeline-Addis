import React, { useEffect, useState } from "react";

export const Navigation = (props) => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    if (typeof window !== "undefined") {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY) {
        // Scrolling down
        setIsVisible(false);
      } else {
        // Scrolling up
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <nav
      id="menu"
      className={`navbar navbar-default navbar-fixed-top ${isVisible ? 'visible' : 'hidden'}`}
      style={{ transition: 'top 0.3s' }}
    >
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <a className="navbar-brand page-scroll" href="#page-top">
            <img
              src="img/Lifeline_Addis_Logo_English.png"
              style={{ maxHeight: '95px', marginTop: '-35px' }}
              alt=""
            />
          </a>
        </div>

        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul className="nav navbar-nav navbar-right">
            <li><a href="#about" className="page-scroll">About</a></li>
            <li><a href="#services" className="page-scroll">Services</a></li>
            <li><a href="#partners" className="page-scroll">Partners</a></li>
            <li><a href="#testimonials" className="page-scroll">Testimonials</a></li>
            <li><a href="#team" className="page-scroll">Team</a></li>
            <li><a href="#contact" className="page-scroll">Contact</a></li>
            <li><a href="blog.jsx" target="_blank" rel="noopener noreferrer">Blog</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};