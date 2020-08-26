import React, { Component } from "react";
import { Card, CardDeck } from "react-bootstrap";

const Project = () => {
  return (
    <div>
      {/* Start top-section Area */}
      <section className="top-section-area section-gap">
        <div className="container">
          <div className="row justify-content-between align-items-center d-flex">
            <div className="col-lg-8 top-left">
              <h1 className="text-black mb-20">Most popular study guides</h1>
            </div>
          </div>
        </div>
      </section>

      {/* End top-section Area */}
      {/* Start post Area */}
      <section className="post-area">
        <div className="container">
          <div className="row justify-content-center d-flex">
            <div className="top-posts pt-50">
              <div className="container">
                <div className="row justify-content-center">
                  <div className="single-posts col-lg-4 col-sm-4">
                    <img className="img-fluid" src="img/asset/p1.jpg" alt="" />
                    <div className="date mt-20 mb-20">10 Jan 2018</div>
                    <div className="detail">
                      <a href="#">
                        <h4 className="pb-20">
                          Addiction When Gambling <br />
                          Becomes A Problem
                        </h4>
                      </a>
                      <p>
                        inappropriate behavior Lorem ipsum dolor sit amet,
                        consecteturinapprop riate behavior Lorem ipsum dolor sit
                        amet, consectetur.
                      </p>
                      <p className="footer pt-20">
                        <i className="fa fa-heart-o" aria-hidden="true"></i>
                        <a href="#">06 Likes</a>{" "}
                        <i
                          className="ml-20 fa fa-comment-o"
                          aria-hidden="true"
                        ></i>{" "}
                        <a href="#">02 Comments</a>
                      </p>
                    </div>
                  </div>
                  <div className="single-posts col-lg-4 col-sm-4">
                    <img className="img-fluid" src="img/asset/p1.jpg" alt="" />
                    <div className="date mt-20 mb-20">10 Jan 2018</div>
                    <div className="detail">
                      <a href="#">
                        <h4 className="pb-20">
                          Addiction When Gambling <br />
                          Becomes A Problem
                        </h4>
                      </a>
                      <p>
                        inappropriate behavior Lorem ipsum dolor sit amet,
                        consecteturinapprop riate behavior Lorem ipsum dolor sit
                        amet, consectetur.
                      </p>
                      <p className="footer pt-20">
                        <i className="fa fa-heart-o" aria-hidden="true"></i>
                        <a href="#">06 Likes</a>{" "}
                        <i
                          className="ml-20 fa fa-comment-o"
                          aria-hidden="true"
                        ></i>{" "}
                        <a href="#">02 Comments</a>
                      </p>
                    </div>
                  </div>
                  <div className="single-posts col-lg-4 col-sm-4">
                    <img className="img-fluid" src="img/asset/p2.jpg" alt="" />
                    <div className="date mt-20 mb-20">10 Jan 2018</div>
                    <div className="detail">
                      <a href="#">
                        <h4 className="pb-20">
                          Addiction When Gambling <br />
                          Becomes A Problem
                        </h4>
                      </a>
                      <p>
                        inappropriate behavior Lorem ipsum dolor sit amet,
                        consecteturinapprop riate behavior Lorem ipsum dolor sit
                        amet, consectetur.
                      </p>
                      <p className="footer pt-20">
                        <i className="fa fa-heart-o" aria-hidden="true"></i>
                        <a href="#">06 Likes</a>{" "}
                        <i
                          className="ml-20 fa fa-comment-o"
                          aria-hidden="true"
                        ></i>{" "}
                        <a href="#">02 Comments</a>
                      </p>
                    </div>
                  </div>
                  <div className="justify-content-center d-flex">
                    <a
                      className="text-uppercase primary-btn loadmore-btn mt-70 mb-60"
                      href="#"
                    >
                      {" "}
                      Load More Post
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End post Area */}
    </div>
  );
};

export default Project;
