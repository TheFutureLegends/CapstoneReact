import React, { useState } from "react";
import "../css/Home.css";

const Home = () => {
  return (
    <div>
      {/* start banner Area */}
      <section
        className="banner-area relative"
        id="home"
        data-parallax="scroll"
        data-image-src="https://i.imgur.com/7KUGKka.jpg"
      >
        <div className="overlay-bg overlay" />
        <div className="container">
          <div className="row fullscreen">
            <div className="banner-content d-flex align-items-center col-lg-12 col-md-12">
              <h1>
                A Discount Toner Cartridge <br />
                Is Better Than Ever.
              </h1>
            </div>
            <div className="head-bottom-meta d-flex justify-content-between align-items-end col-lg-12">
              <div className="col-lg-6 flex-row d-flex meta-left no-padding">
                <p>
                  <span className="lnr lnr-heart" /> 15 Likes
                </p>
                <p>
                  <span className="lnr lnr-bubble" /> 02 Comments
                </p>
              </div>
              <div className="col-lg-6 flex-row d-flex meta-right no-padding justify-content-end">
                <div className="user-meta">
                  <h4 className="text-black">Mark wiens</h4>
                  <p>12 Dec, 2017 11:21 am</p>
                </div>
                <img className="img-fluid user-img" src="img/user.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End banner Area */}

      {/* Start category Area */}
      <section className="category-area section-gap" id="news">
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="menu-content pb-70 col-lg-8">
              <div className="title text-center">
                <h1 className="mb-10">Most innovative project</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
          </div>
          <div className="top-posts">
            <div className="container">
              <div className="row justify-content-center">
                <div className="single-posts col-lg-4 col-sm-4">
                  <img className="img-fluid" src="img/asset/p1.jpg" alt="" />
                  <div className="date mt-20 mb-20">10 Jan 2018</div>
                  <a href="#">
                    <h4 className="text-uppercase">
                      It S Hurricane Season Visiting{" "}
                    </h4>
                  </a>
                </div>
                <div className="single-posts col-lg-4 col-sm-4">
                  <img className="img-fluid" src="img/asset/p2.jpg" alt="" />
                  <div className="date mt-20 mb-20">10 Jan 2018</div>
                  <a href="#">
                    <h4 className="text-uppercase">
                      What Makes A Hotel Boutique
                    </h4>
                  </a>
                </div>
                <div className="single-posts col-lg-4 col-sm-4">
                  <img className="img-fluid" src="img/asset/p2.jpg" alt="" />
                  <div className="date mt-20 mb-20">10 Jan 2018</div>
                  <a href="#">
                    <h4 className="text-uppercase">
                      What Makes A Hotel Boutique
                    </h4>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End category Area */}

      {/* Start travel Area */}
      <section className="travel-area section-gap" id="travel">
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="menu-content pb-70 col-lg-8">
              <div className="title text-center">
                <h1 className="mb-10">Most popular study guides</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 travel-left">
              <div className="single-travel media pb-70">
                <img
                  className="img-fluid d-flex  mr-3"
                  src="img/t1.jpg"
                  alt=""
                />
                <div className="dates">
                  <span>20</span>
                  <p>Dec</p>
                </div>
                <div className="media-body align-self-center">
                  <h4 className="mt-0">
                    <a href="#">Addiction When Gambling Becomes A Problem</a>
                  </h4>
                  <p>
                    inappropriate behavior Lorem ipsum dolor sit amet,
                    consectetur.
                  </p>
                  <div className="meta-bottom d-flex justify-content-between">
                    <p>
                      <span className="lnr lnr-heart" /> 15 Likes
                    </p>
                    <p>
                      <span className="lnr lnr-bubble" /> 02 Comments
                    </p>
                  </div>
                </div>
              </div>
              <div className="single-travel media">
                <img
                  className="img-fluid d-flex  mr-3"
                  src="img/t3.jpg"
                  alt=""
                />
                <div className="dates">
                  <span>20</span>
                  <p>Dec</p>
                </div>
                <div className="media-body align-self-center">
                  <h4 className="mt-0">
                    <a href="#">Addiction When Gambling Becomes A Problem</a>
                  </h4>
                  <p>
                    inappropriate behavior Lorem ipsum dolor sit amet,
                    consectetur.
                  </p>
                  <div className="meta-bottom d-flex justify-content-between">
                    <p>
                      <span className="lnr lnr-heart" /> 15 Likes
                    </p>
                    <p>
                      <span className="lnr lnr-bubble" /> 02 Comments
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 travel-right">
              <div className="single-travel media pb-70">
                <img
                  className="img-fluid d-flex  mr-3"
                  src="img/t2.jpg"
                  alt=""
                />
                <div className="dates">
                  <span>20</span>
                  <p>Dec</p>
                </div>
                <div className="media-body align-self-center">
                  <h4 className="mt-0">
                    <a href="#">Addiction When Gambling Becomes A Problem</a>
                  </h4>
                  <p>
                    inappropriate behavior Lorem ipsum dolor sit amet,
                    consectetur.
                  </p>
                  <div className="meta-bottom d-flex justify-content-between">
                    <p>
                      <span className="lnr lnr-heart" /> 15 Likes
                    </p>
                    <p>
                      <span className="lnr lnr-bubble" /> 02 Comments
                    </p>
                  </div>
                </div>
              </div>
              <div className="single-travel media">
                <img className="img-fluid d-flex  mr-3" src="img/t4.jpg" alt />
                <div className="dates">
                  <span>20</span>
                  <p>Dec</p>
                </div>
                <div className="media-body align-self-center">
                  <h4 className="mt-0">
                    <a href="#">Addiction When Gambling Becomes A Problem</a>
                  </h4>
                  <p>
                    inappropriate behavior Lorem ipsum dolor sit amet,
                    consectetur.
                  </p>
                  <div className="meta-bottom d-flex justify-content-between">
                    <p>
                      <span className="lnr lnr-heart" /> 15 Likes
                    </p>
                    <p>
                      <span className="lnr lnr-bubble" /> 02 Comments
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <a
              href="#"
              className="primary-btn load-more pbtn-2 text-uppercase mx-auto mt-60"
            >
              Load More{" "}
            </a>
          </div>
        </div>
      </section>
      {/* End travel Area */}
    </div>
  );
};

export default Home;
