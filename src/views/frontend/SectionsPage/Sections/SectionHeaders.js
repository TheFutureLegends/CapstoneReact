import React, { useState, useEffect } from "react";
import axios from "axios";
// nodejs library that concatenates classes
// import classNames from "classnames";
// react component for creating beautiful carousel
import Carousel from "react-slick";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Button from "components/frontend/CustomButtons/Button.js";
import GridContainer from "components/frontend/Grid/GridContainer.js";
import GridItem from "components/frontend/Grid/GridItem.js";

import headersStyle from "assets/jss/frontend/views/sectionsSections/headersStyle.js";

import { strip_tags, substring_text } from "utils/functions";

import { BACKEND_URL } from "services/api";

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

  useEffect(() => {
    axios.get(BACKEND_URL + "/api/posts/slider/").then((res) => {
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
        {/* <NavBar></NavBar> */}
        <Carousel {...settings}>
          {/* Carousel 1 START */}
          {sliderPosts.map((response, i) => (
            <div key={i}>
              <div
                className={classes.pageHeader}
                style={{
                  backgroundImage: `url("${response.urlToImage}")`,
                }}
              >
                <div className={classes.container}>
                  <GridContainer>
                    <GridItem xs={12} sm={8} md={8}>
                      <h1 className={classes.title}>
                        {substring_text(response.title, 10)}
                      </h1>
                      <h4
                        dangerouslySetInnerHTML={{
                          __html: substring_text(
                            strip_tags(response.description)
                          ),
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
