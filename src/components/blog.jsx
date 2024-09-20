import React, { useState, useRef } from 'react';
import { AnimationOnScroll } from 'react-animation-on-scroll';

export const Blog = (props) => {
  const [expandedIndex, setExpandedIndex] = useState(-1);
  const blogSectionRef = useRef(null);

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
    blogSectionRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const handleCloseModal = () => {
    setExpandedIndex(-1);
  };

  return (
    <div id="blog" className="text-center" ref={blogSectionRef}>
      <div className="container">
        <div className="col-md-8 col-md-offset-2 section-title">
          <AnimationOnScroll animateIn="animate__rotateInDownLeft" duration={1}>
            <h2>Blog</h2>
          </AnimationOnScroll>
          <AnimationOnScroll animateIn="animate__rotateInDownRight" duration={1} delay={0.3}>
            <p>Stay updated with our latest news</p>
          </AnimationOnScroll>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((post, i) => (
                <div
                  key={`${post.title}-${i}`}
                  className="col-md-4 col-sm-6 col-xs-12 blog-post"
                >
                  <AnimationOnScroll
                    animateIn={i % 2 === 0 ? 'animate__fadeInLeft' : 'animate__fadeInRight'}
                    duration={1}
                  >
                    <div className="thumbnail">
                      <div className="blog-card">
                        <img src={post.img} alt={post.title} className="blog-img" />
                        <div className="caption">
                          <h4 style={{ fontSize: getFontSize(post.title) }}>{post.title}</h4>
                          <p style={{ fontSize: getFontSize(post.summary) }}>
                            {getPreviewText(post.summary)}
                          </p>
                          <button className="read-more-btn" onClick={() => handleReadMore(i)}>
                            Read More
                          </button>
                        </div>
                      </div>
                    </div>
                  </AnimationOnScroll>
                </div>
              ))
            : 'Loading...'}
        </div>
        {expandedIndex !== -1 && (
          <div className="blog-modal">
            <div className="blog-modal-content animate__animated animate__flipInX">
              <span className="close-btn" onClick={handleCloseModal}>
                &times;
              </span>
              <div className="blog-modal-body">
                <h4>{props.data[expandedIndex].title}</h4>
                <img src={props.data[expandedIndex].img} alt={props.data[expandedIndex].title} />
                <p>{props.data[expandedIndex].content}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};