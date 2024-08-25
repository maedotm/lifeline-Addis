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
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="red"
          className="heartbeat-icon"
        >
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
        </svg>
      </button>
    </div>
  );
};

export default SocialLinks;