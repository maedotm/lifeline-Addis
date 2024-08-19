import React from "react";

export const Contact = (props) => {
  const handlePhoneClick = () => {
    window.location.href = `tel:${props.data.phone}`;
  };

  return (
    <div>
      <div id="contact">
        <div className="container">
          <div className="row">
            <div className="col-md-3 col-md-offset-5 text-c" >
              <div className="section-title text-center">
                <h2>Contact Info</h2>
                <p>Learn More About Our Services.</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 contact-info text-center">
              <div className="row">
                <div className="col-md-4 social">
                  <div className="row">
                    <div className="col-md-4">
                      <a href={props.data ? props.data.facebook : "/"}>
                        <i className="fa fa-facebook"></i>
                      </a>
                    </div>
                    <div className="col-md-4">
                      <a href={props.data ? props.data.twitter : "/"}>
                        <i className="fa fa-twitter"></i>
                      </a>
                    </div>
                    <div className="col-md-4">
                      <a href={props.data ? props.data.youtube : "/"}>
                        <i className="fa fa-youtube"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <p>
                    <span>
                      <i className="fa fa-map-marker"></i> Address
                    </span>
                    {props.data ? props.data.address : "loading"}
                  </p>
                </div>
                <div className="col-md-4 social">
                  <div className="row">
                    <div className="col-md-4">
                      <a href={props.data ? props.data.instagram : "/"}>
                        <i className="fa fa-instagram"></i>
                      </a>
                    </div>
                    <div className="col-md-4">
                      <a href={props.data ? props.data.linkedin : "/"}>
                        <i className="fa fa-linkedinz"></i>
                      </a>
                    </div>
                    <div className="col-md-4">
                      <a href={`tel:${props.data ? props.data.phone : ""}`} onClick={handlePhoneClick}>
                        <i className="fa fa-phone"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12 contact-item">
                  <p>
                    <span>
                      <i className="fa fa-phone"></i> Phone
                    </span>{" "}
                    {props.data ? props.data.phone : "loading"}
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12 contact-item">
                  <p>
                    <span>
                      <i className="fa fa-envelope-o"></i> Email
                    </span>{" "}
                    {props.data ? props.data.email : "loading"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="footer">
        <div className="container text-center">
          <p>
            &copy; 2024 Life line addis. Design by{" "}
            <a href="ww" rel="">
              Maedot
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};