import React from 'react';
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="row">
        <div className="col-md-5">
          <div className="left-container text-start">
            <h1>Arcane CodeHub</h1>
            <div className="icons-container d-flex text-center ">

              <div className="icon">
                <i class="fab fa-facebook-square fa-2x"></i>
              </div>
              <div className="icon">
                <i class="fab fa-instagram-square fa-2x"></i>
              </div>
              <div className="icon">
                <i class="fab fa-twitter-square fa-2x"></i>
              </div>
              <div className="icon">
                <i class="fab fa-youtube-square fa-2x"></i>
              </div>
            </div>
            <p className="mt-5">
                  <small>Arcane 2021 ©  All rights reserved.</small>
                </p>
          </div>

        </div>


        <div className="col-md-2">
          <div className="footer-menu-container">
            <ul>
              <li className="footer-menu">Home</li>
              <li className="footer-menu">All Courses</li>
              <li className="footer-menu">Instructor</li>
              <li className="footer-menu">Contact us</li>
              <li className="footer-menu"> About us</li>
            </ul>
          </div>
        </div>


        <div className="col-md-5">
          <div className="right-footer-container">
            <h3>Sign up for the newsletter</h3>
            <input
              className="footer-input"
              type="text"
              placeholder="Enter Email"
            />
            <div className="phone d-flex align-items-center justify-content-center mt-4">
              <div className="foter-phone-icon">

              </div>
              <div>
                <h5>+1 8 800 555 35 35</h5>
              </div>
            </div>
            <div className="map d-flex align-items-center justify-content-center">
              <div className="foter-phone-icon">

              </div>
              <div>
                <p>
                  160 Broadway, New York, NY 10038,
                  <br /> 102 1st Avenue, New York, NY 100
                </p>
              </div>
            </div>
          </div>
        </div>


        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Footer;