/* eslint-disable */
import React, { useState, useEffect } from "react";
import axios from "axios";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
// import Build from "@material-ui/icons/Build";
// import Subject from "@material-ui/icons/Subject";
// import FormatPaint from "@material-ui/icons/FormatPaint";
// import Code from "@material-ui/icons/Code";
// import Dashboard from "@material-ui/icons/Dashboard";
// import Timeline from "@material-ui/icons/Timeline";
// import Group from "@material-ui/icons/Group";
// core components
import GridContainer from "components/frontend/Grid/GridContainer.js";
import GridItem from "components/frontend/Grid/GridItem.js";
import Card from "components/frontend/Card/Card.js";
import CardBody from "components/frontend/Card/CardBody.js";
// import CardHeader from "components/frontend/Card/CardHeader.js";
import Button from "components/frontend/CustomButtons/Button.js";
// import Muted from "components/frontend/Typography/Muted.js";
// import InfoArea from "components/frontend/InfoArea/InfoArea.js";
// import Badge from "components/frontend/Badge/Badge.js";
// import NavPills from "components/frontend/NavPills/NavPills.js";

import projectsStyle from "assets/jss/frontend/views/sectionsSections/projectsStyle.js";

import { strip_tags, substring_text } from "utils/functions";

import { BACKEND_URL } from "services/api";

const useStyles = makeStyles(projectsStyle);

const SectionProjects = ({ ...rest }) => {
  const classes = useStyles();

  const [latestPost, setLatestPost] = useState([]);

  useEffect(() => {
    axios.get(BACKEND_URL + "/api/posts/latest/").then((res) => {
      setLatestPost(res.data);
    });

    return () => {
      setState(false);
      setLatestPost(false);
    };
  }, []);

  return (
    <div className="cd-section" {...rest}>
      {/* Latest Study Guide START */}
      <div className={classes.guide}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem
              xs={12}
              sm={8}
              md={8}
              className={
                classes.mlAuto + " " + classes.mrAuto + " " + classes.textCenter
              }
            >
              <h2 className={classes.title}>Our latest study guide</h2>
            </GridItem>
          </GridContainer>
          <GridContainer>
            {latestPost.map((response, i) =>
              i != 2 ? (
                <GridItem key={i} xs={12} sm={6} md={6}>
                  <Card
                    raised
                    background
                    style={{
                      backgroundImage: `url(${response.urlToImage})`,
                    }}
                  >
                    <CardBody background>
                      <h6 className={classes.cardCategory}>PRODUCTIVITY</h6>
                      <a href={"/study-guide/" + response.slug}>
                        <h3 className={classes.cardTitleWhite}>
                          {substring_text(response.title, 4)}
                        </h3>
                      </a>
                      <p
                        className={classes.cardDescription}
                        className={classes.cardDescription}
                        dangerouslySetInnerHTML={{
                          __html: substring_text(
                            strip_tags(response.description)
                          ),
                        }}
                      ></p>
                      <Button
                        href={"/study-guide/" + response.slug}
                        round
                        color="danger"
                      >
                        <Icon>content_copy</Icon> View Study Guide
                      </Button>
                    </CardBody>
                  </Card>
                </GridItem>
              ) : (
                <GridItem key={i} xs={12} sm={12} md={12}>
                  <Card
                    raised
                    background
                    style={{
                      backgroundImage: `url(${response.urlToImage})`,
                    }}
                  >
                    <CardBody background>
                      <h6 className={classes.cardCategory}>MARKETING</h6>
                      <a href={"/study-guide/" + response.slug}>
                        <h3 className={classes.cardTitleWhite}>
                          {substring_text(response.title, 4)}
                        </h3>
                      </a>
                      <p
                        className={classes.cardDescription}
                        dangerouslySetInnerHTML={{
                          __html: substring_text(
                            strip_tags(response.description)
                          ),
                        }}
                      ></p>
                      <Button
                        href={"/study-guide/" + response.slug}
                        round
                        color="danger"
                      >
                        <Icon>content_copy</Icon> View Study Guide
                      </Button>
                    </CardBody>
                  </Card>
                </GridItem>
              )
            )}
            <GridItem xs={12} sm={12} md={12} className={classes.textCenter}>
              <div className={classes.tabSpace} />
              <Button href="/study-guides" round color="primary">
                View More
              </Button>
              <div className={classes.tabSpace} />
            </GridItem>
          </GridContainer>
        </div>
      </div>
      {/* Latest Study Guide END */}
      {/* Showcase START */}
      {/* <div
        className={
          classes.projects + " " + classes.sectionDark + " " + classes.projects3
        }
      >
        <div className={classes.container}>
          <GridContainer>
            <GridItem
              xs={12}
              sm={8}
              md={8}
              className={
                classes.mlAuto + " " + classes.mrAuto + " " + classes.textCenter
              }
            >
              <Muted>
                <h6>OUR WORK</h6>
              </Muted>
              <h2 className={classes.title}>Some of Our Awesome Showcases</h2>
            </GridItem>
          </GridContainer>
          <GridContainer>
            <GridItem xs={12} sm={5} md={5} className={classes.mlAuto}>
              <Card plain className={classes.card2}>
                <a href="#pablo" onClick={(e) => e.preventDefault()}>
                  <CardHeader plain image>
                    <img src={cardProject1} alt="..." />
                  </CardHeader>
                </a>
                <CardBody>
                  <h6 className={classes.cardCategory}>WEB DESIGN</h6>
                  <a href="#pablo" onClick={(e) => e.preventDefault()}>
                    <h4 className={classes.cardTitle}>
                      Famous Website Redesign
                    </h4>
                  </a>
                  <p className={classes.cardDescription}>
                    Don{"'"}t be scared of the truth because we need to restart
                    the human foundation in truth.
                  </p>
                </CardBody>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={5} md={5} className={classes.mrAuto}>
              <Card plain className={classes.card2}>
                <a href="#pablo" onClick={(e) => e.preventDefault()}>
                  <CardHeader plain image>
                    <img src={cardProject2} alt="..." />
                  </CardHeader>
                </a>
                <CardBody>
                  <h6 className={classes.cardCategory}>PRODUCTIVITY TOOLS</h6>
                  <a href="#pablo" onClick={(e) => e.preventDefault()}>
                    <h4 className={classes.cardTitle}>
                      Beautiful Desktop for Designers
                    </h4>
                  </a>
                  <p className={classes.cardDescription}>
                    Don{"'"}t be scared of the truth because we need to restart
                    the human foundation in truth.
                  </p>
                </CardBody>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={5} md={5} className={classes.mlAuto}>
              <Card plain className={classes.card2}>
                <a href="#pablo" onClick={(e) => e.preventDefault()}>
                  <CardHeader plain image>
                    <img src={cardProject3} alt="..." />
                  </CardHeader>
                </a>
                <CardBody>
                  <h6 className={classes.cardCategory}>ANDROID APP</h6>
                  <a href="#pablo" onClick={(e) => e.preventDefault()}>
                    <h4 className={classes.cardTitle}>Analytics for Android</h4>
                  </a>
                  <p className={classes.cardDescription}>
                    Don{"'"}t be scared of the truth because we need to restart
                    the human foundation in truth.
                  </p>
                </CardBody>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={5} md={5} className={classes.mrAuto}>
              <Card plain className={classes.card2}>
                <a href="#pablo" onClick={(e) => e.preventDefault()}>
                  <CardHeader plain image>
                    <img src={cardProject4} alt="..." />
                  </CardHeader>
                </a>
                <CardBody>
                  <h6 className={classes.cardCategory}>WEBSITE</h6>
                  <a href="#pablo" onClick={(e) => e.preventDefault()}>
                    <h4 className={classes.cardTitle}>Behance Redesign</h4>
                  </a>
                  <p className={classes.cardDescription}>
                    Don{"'"}t be scared of the truth because we need to restart
                    the human foundation in truth.
                  </p>
                </CardBody>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={12} md={12} className={classes.textCenter}>
              <Button round color="primary">
                Read More
              </Button>
            </GridItem>
          </GridContainer>
        </div>
      </div> */}
      {/* Showcase END */}
    </div>
  );
};
export default SectionProjects;
