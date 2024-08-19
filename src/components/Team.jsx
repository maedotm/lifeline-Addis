import React, { useState, useRef } from 'react';
import { AnimationOnScroll } from 'react-animation-on-scroll';

export const Team = (props) => {
  const [expandedIndex, setExpandedIndex] = useState(-1);
  const teamSectionRef = useRef(null);

  const getFontSize = (text) => {
    const maxLength = 20;
    const fontSize = Math.max(12, 16 - Math.floor(text.length / maxLength * 4));
    return `${fontSize}px`;
  };

  const getPreviewText = (text) => {
    const maxWords = 29;
    const words = text.split(' ');
    if (words.length <= maxWords) {
      return text;
    } else {
      return words.slice(0, maxWords).join(' ') + '...';
    }
  };

  const handleReadMore = (index) => {
    setExpandedIndex(index === expandedIndex ? -1 : index);
    teamSectionRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const handleCloseModal = () => {
    setExpandedIndex(-1);
  };

  return (
    <div id="team" className="text-center" ref={teamSectionRef}>
      <div className="container">
        <div className="col-md-8 col-md-offset-2 section-title">
          <AnimationOnScroll animateIn="animate__rotateInDownLeft" duration={1}>
            <h2>Meet the Team</h2>
          </AnimationOnScroll>
          <AnimationOnScroll animateIn="animate__rotateInDownRight" duration={1} delay={0.3}>
            <p>
            The Expert care right at home
            </p>
          </AnimationOnScroll>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div
                  key={`${d.name}-${i}`}
                  className="col-md-4 col-sm-6 col-xs-12 team"
                >
                  <AnimationOnScroll
                    animateIn={i % 2 === 0 ? 'animate__fadeInLeft' : 'animate__fadeInRight'}
                    duration={1}
                  >
                    <div className="thumbnail">
                      <div className="team-card">
                        <img src={d.img} alt="..." className="team-img" />
                        <div className="team-card-overlay">
                          <div className="team-hover-info">
                            <p>{getPreviewText(d.hoverText)}</p>
                            <button className="read-more-btn" onClick={() => handleReadMore(i)}>
                              Read More
                            </button>
                          </div>
                        </div>
                        <div className="caption">
                          <h4 style={{ fontSize: getFontSize(d.name) }}>{d.name}</h4>
                          <p style={{ fontSize: getFontSize(d.job) }}>{d.job}</p>
                        </div>
                      </div>
                    </div>
                  </AnimationOnScroll>
                </div>
              ))
            : 'loading'}
        </div>
        {expandedIndex !== -1 && (
          <div className="team-modal">
            <div className="team-modal-content animate__animated animate__flipInX">
              <span className="close-btn" onClick={handleCloseModal}>
                &times;
              </span>
              <div className="team-modal-body">
                <p>{props.data[expandedIndex].hoverText}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};