import React from "react";
// import {
//   MDBCol,
//   MDBContainer,
//   MDBRow,
//   MDBFooter,
//   MDBInputGroup,
//   MDBBtn,
// } from "mdbreact";
import "../css/Footer.css";

const Footer = () => {
  return (
    <div>
      <footer className="footer-area section-gap">
        <div className="container">
          <div className="row">
            <div className="col-lg-3  col-md-12">
              <div className="single-footer-widget">
                <h6>Top Products</h6>
                <ul className="footer-nav">
                  <li>
                    <a href="https://www.google.com">Managed Website</a>
                  </li>
                  <li>
                    <a href="https://www.google.com">Manage Reputation</a>
                  </li>
                  <li>
                    <a href="https://www.google.com">Power Tools</a>
                  </li>
                  <li>
                    <a href="https://www.google.com">Marketing Service</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6  col-md-12">
              <div className="single-footer-widget newsletter">
                <h6>Newsletter</h6>
                <p>
                  You can trust us. we only send promo offers, not a single
                  spam.
                </p>
                <div id="mc_embed_signup">
                  <form
                    target="_blank"
                    noValidate="true"
                    action="https://spondonit.us12.list-manage.com/subscribe/post?u=1462626880ade1ac87bd9c93a&id=92a4423d01"
                    method="get"
                    className="form-inline"
                  >
                    <div className="form-group row" style={{ width: "100%" }}>
                      <div className="col-lg-8 col-md-12">
                        <input
                          name="EMAIL"
                          placeholder="Enter Email"
                          onFocus="this.placeholder = ''"
                          onBlur="this.placeholder = 'Enter Email '"
                          required
                          type="email"
                        />
                        <div style={{ position: "absolute", left: "-5000px" }}>
                          <input
                            name="b_36c4fd991d266f23781ded980_aefe40901a"
                            tabIndex={-1}
                            defaultValue
                            type="text"
                          />
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-12">
                        <button className="nw-btn primary-btn">
                          Subscribe
                          <span className="lnr lnr-arrow-right" />
                        </button>
                      </div>
                    </div>
                    <div className="info" />
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="row footer-bottom d-flex justify-content-between">
            {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
            <p className="col-lg-8 col-sm-12 footer-text">
              Copyright © All rights reserved {" "}
              <i className="fa fa-heart-o" aria-hidden="true" /> by{" "}
              <a href="https://www.google.com" target="_blank">
                RMIT Developer Club
              </a>
            </p>
           
            
          </div>
        </div>
      </footer>
      ;
    </div>
  );
};

export default Footer;
