import React from "react";
import
export const Blog = (props) => {
    const { data = [] } = props;

    const handleCardClick = (title) => {
        // Open a new tab with the desired URL
        window.open(`/blog/${title}`, "_blank", "noopener,noreferrer");
    };

    if (!data.length) {
        return <p>No blog entries available.</p>; 
    }

    return (
        <div>
            <div id="cards" className="container text-center">
                <div className="section-title">
                    <h2>Card Display</h2>
                    <p>Learn More About Our Services.</p>
                </div>
                <div className="row">
                    {data.map((card, index) => (
                        <div key={index} className="col-md-3" onClick={() => handleCardClick(card.title)}>
                            <div className="card" style={{ cursor: 'pointer' }}>
                                <img src={card.image} alt={card.title} className="card-image" />
                                <h2 className="card-title">{card.title}</h2>
                                <p className="card-text">{card.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};