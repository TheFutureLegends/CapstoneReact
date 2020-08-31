import React, { useState, useEffect } from "react";
import axios from "axios";

const BlogComment = (data) => {
  const [comment, setComment] = useState({
    name: "",
    content: "",
  });

  useEffect(() => {
    setComment({
      name: data.data.name,
      content: data.data.content,
    });

    return () => setComment(false);
  }, []);
  return (
    <div className="comment-list">
      <div className="single-comment justify-content-between d-flex">
        <div className="user justify-content-between d-flex">
          <div className="thumb">
            <img src="img/asset/c1.jpg" alt="" />
          </div>
          <div className="desc">
            <h5>
              <a href="#">{comment.name}</a>
            </h5>
            <p className="date">December 4, 2017 at 3:12 pm </p>
            <p className="comment">{comment.content}</p>
          </div>
        </div>
        <div className="reply-btn">
          <a href="" className="btn-reply text-uppercase">
            reply
          </a>
        </div>
      </div>
    </div>
  );
};

export default BlogComment;
