import React, { useState } from "react";

function AboutUs() {
  return (
    <div>
      <section className="team-area section-gap" id="team">
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="menu-content pb-70 col-lg-8">
              <div className="title text-center">
                <h1 className="mb-10">About Blogger Team</h1>
                <p>Who are in extremely love with eco friendly system.</p>
              </div>
            </div>
          </div>
          <div className="row justify-content-center d-flex align-items-center">
            <div className="col-lg-6 team-left">
              <p>
                inappropriate behavior is often laughed off as “boys will be
                boys,” women face higher conduct standards especially in the
                workplace. That’s why it’s crucial that, as women, our behavior
                on the job is beyond reproach. inappropriate behavior is often
                laughed off as “boys will be boys,” women face higher conduct
                standards especially in the workplace. That’s why it’s crucial
                that.
              </p>
              <p>
                inappropriate behavior is often laughed off as “boys will be
                boys,” women face higher conduct standards especially in the
                workplace. That’s why it’s crucial that, as women.
              </p>
            </div>
            <div className="col-lg-6 team-right d-flex justify-content-center">
              <div className="row active-team-carusel">
                <div className="single-team">
                  <div className="thumb">
                    <img className="img-fluid" src="img/team1.jpg" alt />
                    <div className="align-items-center justify-content-center d-flex">
                      <a href="#">
                        <i className="fa fa-facebook" />
                      </a>
                      <a href="#">
                        <i className="fa fa-twitter" />
                      </a>
                      <a href="#">
                        <i className="fa fa-linkedin" />
                      </a>
                    </div>
                  </div>
                  <div className="meta-text mt-30 text-center">
                    <h4>Dora Walker</h4>
                    <p>Senior Core Developer</p>
                  </div>
                </div>
                <div className="single-team">
                  <div className="thumb">
                    <img
                      className="img-fluid"
                      src="/hello/public/img/team2.jpg"
                      alt
                    />
                    <div className="align-items-center justify-content-center d-flex">
                      <a href="#">
                        <i className="fa fa-facebook" />
                      </a>
                      <a href="#">
                        <i className="fa fa-twitter" />
                      </a>
                      <a href="#">
                        <i className="fa fa-linkedin" />
                      </a>
                    </div>
                  </div>
                  <div className="meta-text mt-30 text-center">
                    <h4>Lena Keller</h4>
                    <p>Creative Content Developer</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutUs;
