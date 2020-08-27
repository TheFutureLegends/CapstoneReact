import React, { useState, useEffect } from "react";
import axios from "axios";
import BlogComment from "./BlogComment";

const BlogDetail = (url) => {
  const slug = url.match.params.slug;

  const [post, setPost] = useState({
    title: "",
    description: "",
    author_id: "",
  });

  const [author, setAuthor] = useState({
    name: "",
  });

  const [comment, setComment] = useState([]);

  useEffect(async () => {
    const post_result = await axios(`http://localhost:8000/api/blogs/${slug}/`);

    setPost({
      title: post_result.data.title,
      description: post_result.data.description,
      author_id: post_result.data.author_id,
    });

    const author_result = await axios(
      `http://localhost:8000/api/users/${post.author_id}`
    );

    setAuthor({
      name: author_result.data[0].name,
    });

    const comment_result = await axios(
      `http://localhost:8000/api/blogs/${slug}/comments/`
    );

    setComment(comment_result.data);

    return () => {
      setPost(false);
      setAuthor(false);
      setComment(false);
    };
  }, []);
  // console.log(comment);
  return (
    <div>
      {/* <!-- Start top-section Area --> */}
      <section className="top-section-area section-gap">
        <div className="container">
          <div className="row justify-content-between align-items-center d-flex">
            <div className="col-lg-8 top-left">
              <h1 className="text-black mb-20">Post Details</h1>
              {/* <ul>
                <li>
                  <a href="index.html">Home</a>
                  <span className="lnr lnr-arrow-right"></span>
                </li>
                <li>
                  <a href="category.html">Category</a>
                  <span className="lnr lnr-arrow-right"></span>
                </li>
                <li>
                  <a href="single.html">Fashion</a>
                </li>
              </ul> */}
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End top-section Area --> */}

      <div className="post-wrapper pt-100">
        {/* <!-- Start post Area --> */}
        <section className="post-area">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div className="single-page-post">
                  <img className="img-fluid" src="img/single.jpg" alt="" />
                  <div className="top-wrapper ">
                    <div className="row d-flex justify-content-between">
                      <h2 className="col-lg-8 col-md-12 text-uppercase">
                        {post.title}
                      </h2>
                      <div className="col-lg-4 col-md-12 right-side d-flex justify-content-end">
                        <div className="desc">
                          <h2>{author.name}</h2>
                          <h3>12 Dec ,2017 11:21 am</h3>
                        </div>
                        <div className="user-img">
                          <img src="img/user.jpg" alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tags">
                    <ul>
                      <li>
                        <a href="#">lifestyle</a>
                      </li>
                      <li>
                        <a href="#">Art</a>
                      </li>
                      <li>
                        <a href="#">Technology</a>
                      </li>
                      <li>
                        <a href="#">Fashion</a>
                      </li>
                    </ul>
                  </div>
                  <div
                    className="single-post-content"
                    dangerouslySetInnerHTML={{ __html: post.description }}
                  ></div>
                  <div className="bottom-wrapper">
                    <div className="row">
                      <div className="col-lg-4 single-b-wrap col-md-12">
                        <i className="fa fa-heart-o" aria-hidden="true"></i>
                        lily and 4 people like this
                      </div>
                      <div className="col-lg-4 single-b-wrap col-md-12">
                        <i className="fa fa-comment-o" aria-hidden="true"></i>{" "}
                        06 comments
                      </div>
                      <div className="col-lg-4 single-b-wrap col-md-12">
                        <ul className="social-icons">
                          <li>
                            <a href="#">
                              <i
                                className="fa fa-facebook"
                                aria-hidden="true"
                              ></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i
                                className="fa fa-twitter"
                                aria-hidden="true"
                              ></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i
                                className="fa fa-dribbble"
                                aria-hidden="true"
                              ></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i
                                className="fa fa-behance"
                                aria-hidden="true"
                              ></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- Start comment-sec Area --> */}
        <section className="comment-sec-area pt-80 pb-80">
          <div className="container">
            <div className="row flex-column">
              <h5 className="text-uppercase pb-80">05 Comments</h5>
              <br />
              {comment.map((response, i) => (
                <BlogComment key={i} data={response} />
              ))}
            </div>
          </div>
        </section>

        {/* <!-- End comment-sec Area -->
                            
                            <!-- Start commentform Area --> */}
        <section className="commentform-area  pb-120 pt-80 mb-100">
          <div className="container">
            <h5 className="text-uppercas pb-50">Leave a Reply</h5>
            <div className="row flex-row d-flex">
              <div className="col-lg-6">
                <input
                  name="name"
                  placeholder="Enter your name"
                  onfocus="this.placeholder = ''"
                  onblur="this.placeholder = 'Enter your name'"
                  className="common-input mb-20 form-control"
                  required=""
                  type="text"
                />
                <input
                  name="email"
                  placeholder="Enter your email"
                  onfocus="this.placeholder = ''"
                  onblur="this.placeholder = 'Enter your email'"
                  className="common-input mb-20 form-control"
                  required=""
                  type="email"
                />
                <input
                  name="Subject"
                  placeholder="Subject"
                  onfocus="this.placeholder = ''"
                  onblur="this.placeholder = 'Enter your Subject'"
                  className="common-input mb-20 form-control"
                  required=""
                  type="text"
                />
              </div>
              <div className="col-lg-6">
                <textarea
                  className="form-control mb-10"
                  name="message"
                  placeholder="Messege"
                  onfocus="this.placeholder = ''"
                  onblur="this.placeholder = 'Messege'"
                  required=""
                ></textarea>
                <a className="primary-btn mt-20" href="#">
                  Comment
                </a>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- End commentform Area --> */}
      </div>
    </div>
  );
};

export default BlogDetail;
