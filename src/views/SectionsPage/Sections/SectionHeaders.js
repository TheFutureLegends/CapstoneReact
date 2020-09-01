import React, { useState, useEffect } from "react";
import axios from "axios";
// nodejs library that concatenates classes
// import classNames from "classnames";
// react component for creating beautiful carousel
import Carousel from "react-slick";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// import List from "@material-ui/core/List";
// import ListItem from "@material-ui/core/ListItem";
// @material-ui/icons
// import Share from "@material-ui/icons/Share";
// import ShoppingCart from "@material-ui/icons/ShoppingCart";
// core components
// import Header from "components/Header/Header.js";
import Button from "components/CustomButtons/Button.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import headersStyle from "assets/jss/material-kit-pro-react/views/sectionsSections/headersStyle.js";

import dg1 from "assets/img/dg1.jpg";
import dg2 from "assets/img/dg2.jpg";
import dg3 from "assets/img/dg3.jpg";

import NavBar from "views/_partials/NavBar";

const useStyles = makeStyles(headersStyle);

const SectionHeaders = ({ ...rest }) => {
  const [sliderPosts, setSliderPosts] = useState([]);

  const classes = useStyles();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
  };

  const bgArray = [dg1, dg2, dg3];

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
    axios.get("http://localhost:8000/api/posts/slider/").then((res) => {
      setSliderPosts(res.data);
    });

    return () => {
      setSliderPosts(false);
    };
  }, []);
  return (
    // we've set the className to cd-section so we can make smooth scroll to it
    <div className="cd-section" {...rest}>
      {/* HEADER 3 START */}
      <div>
        <NavBar></NavBar>
        <Carousel {...settings}>
          {/* Carousel 1 START */}
          {sliderPosts.map((response, i) => (
            <div key={i}>
              <div
                className={classes.pageHeader}
                style={{
                  backgroundImage: `url("${
                    bgArray[Math.floor(Math.random() * bgArray.length)]
                  }")`,
                }}
              >
                <div className={classes.container}>
                  <GridContainer>
                    <GridItem xs={12} sm={8} md={8}>
                      <h1 className={classes.title}>{response.title}</h1>
                      <h4
                        dangerouslySetInnerHTML={{
                          __html: strip_tags(response.description),
                        }}
                      ></h4>
                      <br />
                      <Button
                        href={"/study-guide/" + response.slug}
                        color="danger"
                        size="lg"
                      >
                        Read More
                      </Button>
                    </GridItem>
                  </GridContainer>
                </div>
              </div>
            </div>
          ))}
          {/* Carousel 1 END */}
        </Carousel>
      </div>
      {/* HEADER 3 END */}
    </div>
  );
};
export default SectionHeaders;
