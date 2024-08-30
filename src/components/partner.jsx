import React, { useEffect, useRef } from 'react';

const CompanyLogos = () => {
  const logoData = [
    {
      image: 'img/partner/inova.png',
      link: '#partner',
    },
  
    {
      image: 'img/partner/Gebeya.jpeg',
      link: '#partner',
    },
    {
      image: 'img/partner/shega_magazin.png',
      link: 'https://shega.co/post/ethiopian-startup-lifeline-addis-integrates-home-health-care-services-into-the-gig-economy/',
      text: 'Read article',
      heartbeat: true,
    },
    {
      image: 'img/partner/yeneHealth.jpg',
      link: '#partner',
    },
    {
      image: 'img/partner/mastercardfoundation .jpg',
      link: '#partner',
    },
    {
      image: 'img/partner/Radison_blu.jpeg',
      link: '#partner',
    },
    {
      image: 'img/partner/donkytube.jpeg',
      link: 'https://www.youtube.com/watch?v=WfY1AJFYdXs&si=MLmeGbC1utt_wy48',
      text: 'Watch video',
      heartbeat: true,
    },
  ];

  const sectionRef = useRef(null);
  const headingRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
          } else {
            entry.target.classList.remove('animate');
          }
        });
      },
      {
        rootMargin: '0px',
        threshold: 0.5,
      }
    );

    const gridItems = sectionRef.current.querySelectorAll('.grid-item');
    gridItems.forEach((item) => {
      observer.observe(item);
    });

    observer.observe(headingRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section id="partners" className="company-logos" ref={sectionRef}>
      <div className="grid-container">
        {logoData.map((logo, index) => (
          <div
          key={index}
          className={`grid-item ${logo.heartbeat ? 'heartbeat' : ''}`}
          >
            <a
              href={logo.link}
              className={`logo-container ${logo.text ? 'with-text' : ''}`}
            >
              <img src={logo.image} alt={`Logo ${index + 1}`} />
              {logo.text && (
                <div className="logo-overlay">
                  <button className="logo-text">{logo.text}</button>
                </div>
              )}
            </a>
          </div>
        ))}
        <h2 class="section-heading" ref={headingRef} >Our Partners</h2>
      </div>
    </section>
  );
};

export default CompanyLogos;