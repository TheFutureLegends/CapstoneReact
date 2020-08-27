import React, { useState, useEffect } from "react";
import axios from "axios";
import BlogCard from "./BlogCard";

const BlogPage = () => {
  const [posts, setPost] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8000/api/blogs/").then((res) => {
      setPost(res.data);
    });
    return () => setPost(false);
  }, []);
  return (
    <div>
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
                  {posts.map((response, i) => (
                    <BlogCard key={i} res={response} />
                  ))}
                  <div className="justify-content-center d-flex">
                    <a
                      className="text-uppercase primary-btn loadmore-btn mt-70 mb-60"
                      href="https://www.google.com"
                    >
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

export default BlogPage;
