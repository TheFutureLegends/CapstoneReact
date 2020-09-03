import React, { useState, useEffect } from "react";
import axios from "axios";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import TrendingUp from "@material-ui/icons/TrendingUp";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import Danger from "components/Typography/Danger.js";
// import Success from "components/Typography/Success.js";
// import Info from "components/Typography/Info.js";

import blogsStyle from "assets/jss/material-kit-pro-react/views/sectionsSections/blogsStyle.js";

import cardBlog3 from "assets/img/examples/card-blog3.jpg";
import cardBlog4 from "assets/img/examples/card-blog4.jpg";
import cardBlog5 from "assets/img/examples/card-blog5.jpg";
import cardBlog6 from "assets/img/examples/card-blog6.jpg";
import blog5 from "assets/img/examples/blog5.jpg";
import blog6 from "assets/img/examples/blog6.jpg";
import blog7 from "assets/img/examples/blog7.jpg";
import blog8 from "assets/img/examples/blog8.jpg";

import {
  strip_tags,
  substring_description,
} from "views/_partials/Miscellaneous.js";
// import Button from "components/CustomButtons/Button.js";
// import cardBlog4 from "assets/img/examples/card-blog4.jpg";
// import office2 from "assets/img/office2.jpg";
// import bg5 from "assets/img/bg5.jpg";

const useStyles = makeStyles(blogsStyle);

const SectionBlogs = ({ ...rest }) => {
  const [popularPost, setPopularPost] = useState([]);

  const postBgArray = [
    cardBlog3,
    cardBlog4,
    cardBlog5,
    cardBlog6,
    blog5,
    blog6,
    blog7,
    blog8,
  ];

  useEffect(() => {
    axios.get("http://localhost:8000/api/posts/popular/").then((res) => {
      setPopularPost(res.data);
    });

    return () => {
      setPopularPost(false);
    };
  }, []);

  const classes = useStyles();
  return (
    <div className="cd-section" {...rest}>
      <div className={classes.blog + " " + classes.textCenter}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem
              xs={12}
              sm={12}
              md={10}
              className={classes.mlAuto + " " + classes.mrAuto}
            >
              <h2 className={classes.title}>Most popular study guide</h2>
              <br />
              <GridContainer>
                {popularPost.map((response, i) => (
                  <GridItem key={i} xs={12} sm={4} md={4}>
                    <Card plain blog>
                      <CardHeader plain image>
                        <a href={"/study-guide/" + response.slug}>
                          <img
                            src={
                              postBgArray[
                                Math.floor(Math.random() * postBgArray.length)
                              ]
                            }
                            alt="images"
                          />
                        </a>
                        <div
                          className={classes.coloredShadow}
                          style={{
                            backgroundImage: `url(${
                              postBgArray[
                                Math.floor(Math.random() * postBgArray.length)
                              ]
                            })`,
                            opacity: "1",
                          }}
                        />
                      </CardHeader>
                      <CardBody plain>
                        <Danger>
                          <h6 className={classes.cardCategory}>
                            <TrendingUp /> ENTERPRISE
                          </h6>
                        </Danger>
                        <h4 className={classes.cardTitle}>
                          <a href={"/study-guide/" + response.slug}>
                            {substring_description(response.title ,4)}
                          </a>
                        </h4>
                        <p
                          className={classes.description}
                          dangerouslySetInnerHTML={{
                            __html: substring_description(
                              strip_tags(response.description),
                              response.slug
                            ),
                          }}
                        ></p>
                      </CardBody>
                    </Card>
                  </GridItem>
                ))}
              </GridContainer>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    </div>
  );
};
export default SectionBlogs;
