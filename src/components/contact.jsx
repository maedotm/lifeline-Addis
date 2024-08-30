import React from "react";

export const Contact = (props) => {
  const handlePhoneClick = () => {
    window.location.href = `tel:${props.data.phone}`;
  };

  return (
    <div>
      <div id="contact" className="text-center">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-title">
                <h2>Contact Info</h2>
                <p>Learn More About Our Services.</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 contact-info">
              {/* Address Information Column */}
              <div className="text-center">
                <h4>Address Information</h4>
                <p>
                  <span><i className="fa fa-map-marker"></i> Address: </span>
                  {props.data ? props.data.address : "loading"}
                </p>
                <p>
                  <span><i className="fa fa-phone"></i> Phone: </span>
                  {props.data ? props.data.phone : "loading"}
                </p>
                <p>
                  <span><i className="fa fa-envelope-o"></i> Email: </span>
                  {props.data ? props.data.email : "loading"}
                </p>
              </div>
            </div>
          </div>
          {/* Social Links Column at the bottom */}
          <div className="row">
  <div className="col-md-12">
    <h4>Social Links</h4>
    <div className="social">
      <a href={props.data ? props.data.facebook : "/"} target="_blank" rel="noopener noreferrer">
        <i className="fab fa-facebook"></i>
      </a>
      <a href={props.data ? props.data.telegram : "/"} target="_blank" rel="noopener noreferrer">
        <i className="fab fa-telegram"></i>
      </a>
      <a href={props.data ? props.data.youtube : "/"} target="_blank" rel="noopener noreferrer">
        <i className="fab fa-youtube"></i>
      </a>
      <a href={props.data ? props.data.instagram : "/"} target="_blank" rel="noopener noreferrer">
        <i className="fab fa-instagram"></i>
      </a>
      <a href={props.data ? props.data.tiktok : "/"} target="_blank" rel="noopener noreferrer">
        <i className="fab fa-tiktok"></i>
      </a>
      <a href={`tel:${props.data ? props.data.phone : ""}`}>
  <i className="fa fa-phone"></i>
</a>
    </div>
            </div>
          </div>
        </div>
      </div>
      <div id="footer">
        <div className="container text-center">
          <p>
            &copy; 2024 Lifeline addis. Design by{" "}
            <a href="https://github.com/maedotm" rel="">
              Maedot
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};