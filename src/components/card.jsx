import React from 'react';


const Card = ({ imageSrc, description }) => {
  return (
    <div className="card">
      <img src={imageSrc} alt="Card" className="card-image" />
      <div className="card-description">{description}</div>
    </div>
  );
};

export default Card;