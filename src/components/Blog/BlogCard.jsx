import React, { useState, useEffect } from "react";
import axios from "axios";

const BlogCard = (res) => {
  const [post, setPost] = useState({
    title: "",
    url: "",
    description: "",
  });

  const strip_tags = (input, allowed) => {
    allowed = (
      ((allowed || "") + "").toLowerCase().match(/<[a-z][a-z0-9]*>/g) || []
    ).join("");
    const tags = /<\/?([a-z][a-z0-9]*)\b[^>]*>/gi;
    return input.replace(tags, ($0, $1) =>
      allowed.indexOf("<" + $1.toLowerCase() + ">") > -1 ? $0 : ""
    );
  };

  useEffect(() => {
    setPost({
      title: res.res.title,
      url: "/study-guides/" + res.res.slug,
      description: res.res.description,
    });

    return () => {
      setPost(false);
    };
  }, []);
  return (
    <div className="single-posts col-lg-4 col-sm-4">
      <img className="img-fluid" src="img/asset/p1.jpg" alt="Image of post" />
      <div className="date mt-20 mb-20">10 Jan 2018</div>
      <div className="detail">
        <a href={post.url}>
          <h4 className="pb-20">{post.title}</h4>
        </a>
        <p
          dangerouslySetInnerHTML={{
            __html: strip_tags(post.description),
          }}
        ></p>
        <p className="footer pt-20">
          <i className="fa fa-heart-o" aria-hidden="true"></i>
          <a href="#">06 Likes</a>{" "}
          <i className="ml-20 fa fa-comment-o" aria-hidden="true"></i>{" "}
          <a href="#">02 Comments</a>
        </p>
      </div>
    </div>
  );
};

export default BlogCard;
