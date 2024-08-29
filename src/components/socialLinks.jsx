import React, { useState } from "react";

const SocialLinks = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleLinks = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="social-links">
      <div className={`links ${isOpen ? 'open' : ''}`}>
        <a href="https://www.facebook.com/lifelineaddis" target="_blank" rel="noopener noreferrer" className="link-item">
          <i className="fab fa-facebook"></i>
        </a>
        <a href="https://t.me/lifelinehomebasedhealthcare" target="_blank" rel="noopener noreferrer" className="link-item">
          <i className="fab fa-telegram"></i>
        </a>
        <a href="https://www.tiktok.com/@lifelineaddis?_t=8nqYusHlN7W&_r=1" target="_blank" rel="noopener noreferrer" className="link-item">
          <i className="fab fa-youtube"></i>
        </a>
        <a href="https://www.instagram.com/lifelineaddis_homecare/?next=%2F" target="_blank" rel="noopener noreferrer" className="link-item">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="https://youtube.com/watch?v=WfY1AJFYdXs&si=MLmeGbC1utt_wy48" target="_blank" rel="noopener noreferrer" className="link-item">
          <i className="fab fa-tiktok"></i>
        </a>
      </div>
      <button className="social-icon" onClick={toggleLinks}>
        <i className="fa fa-phone" style={{ color: 'white' }}></i>
      </button>
    </div>
  );
};

export default SocialLinks;