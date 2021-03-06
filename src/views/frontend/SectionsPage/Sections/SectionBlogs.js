import React, { useState, useEffect } from "react";
import axios from "axios";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import TrendingUp from "@material-ui/icons/TrendingUp";
// core components
import GridContainer from "components/frontend/Grid/GridContainer.js";
import GridItem from "components/frontend/Grid/GridItem.js";
import Card from "components/frontend/Card/Card.js";
import CardBody from "components/frontend/Card/CardBody.js";
import CardHeader from "components/frontend/Card/CardHeader.js";
import Danger from "components/frontend/Typography/Danger.js";
// import Success from "components/frontend/Typography/Success.js";
// import Info from "components/frontend/Typography/Info.js";

import blogsStyle from "assets/jss/frontend/views/sectionsSections/blogsStyle.js";

import { strip_tags, substring_text } from "utils/functions";

import { BACKEND_URL } from "services/api";
// import Button from "components/frontend/CustomButtons/Button.js";
// import cardBlog4 from "assets/img/examples/card-blog4.jpg";
// import office2 from "assets/img/office2.jpg";
// import bg5 from "assets/img/bg5.jpg";

const useStyles = makeStyles(blogsStyle);

const SectionBlogs = ({ ...rest }) => {
  const [popularPost, setPopularPost] = useState([]);

  useEffect(() => {
    axios.get(BACKEND_URL + "/api/posts/popular/").then((res) => {
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
                          <img src={response.urlToImage} alt="images" />
                        </a>
                        <div
                          className={classes.coloredShadow}
                          style={{
                            backgroundImage: `url(${response.urlToImage})`,
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
                            {substring_text(response.title, 4)}
                          </a>
                        </h4>
                        <p
                          className={classes.description}
                          dangerouslySetInnerHTML={{
                            __html: substring_text(
                              strip_tags(response.description),
                              8,
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
