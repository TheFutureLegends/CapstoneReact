import React, { useState, useEffect } from "react";

const BlogCard = (res) => {
  const [url, setUrl] = useState();

  const [state, setState] = useState({
    title: "",
    description: "",
  });

  useEffect(() => {
    setUrl("/study-guides/" + res.res.slug);
    return () => {
      setState(false);
      setUrl(false);
    };
  }, []);

  return (
    <div className="single-posts col-lg-4 col-sm-4">
      <img className="img-fluid" src="img/asset/p1.jpg" alt="" />
      <div className="date mt-20 mb-20">10 Jan 2018</div>
      <div className="detail">
        <a href={url}>
          <h4 className="pb-20">{res.res.title}</h4>
        </a>
        <p>{res.res.description}</p>
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
