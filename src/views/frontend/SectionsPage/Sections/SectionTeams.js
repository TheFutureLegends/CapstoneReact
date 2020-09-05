import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// import  from "@material-ui/icons/";
// core components
import GridContainer from "components/frontend/Grid/GridContainer.js";
import GridItem from "components/frontend/Grid/GridItem.js";
import Card from "components/frontend/Card/Card.js";

import CardHeader from "components/frontend/Card/CardHeader.js";
import CardBody from "components/frontend/Card/CardBody.js";
import CardFooter from "components/frontend/Card/CardFooter.js";
import Button from "components/frontend/CustomButtons/Button.js";
import Muted from "components/frontend/Typography/Muted.js";

import teamsStyle from "assets/jss/frontend/views/sectionsSections/teamsStyle.js";

import cardProfile1Square from "assets/img/faces/card-profile1-square.jpg";
import cardProfile2Square from "assets/img/faces/card-profile2-square.jpg";
import cardProfile4Square from "assets/img/faces/card-profile4-square.jpg";
import cardProfile6Square from "assets/img/faces/card-profile6-square.jpg";

// import CardAvatar from "components/frontend/Card/CardAvatar.js";
// import bg7 from "assets/img/bg7.jpg";
// import city from "assets/img/examples/city.jpg";
// import marc from "assets/img/faces/marc.jpg";
// import christian from "assets/img/faces/christian.jpg";
// import kendall from "assets/img/faces/kendall.jpg";
// import avatar from "assets/img/faces/avatar.jpg";
// import cardProfile1 from "assets/img/examples/card-profile1.jpg";
// import cardProfile2 from "assets/img/examples/card-profile2.jpg";
// import cardProfile4 from "assets/img/examples/card-profile4.jpg";

const useStyles = makeStyles(teamsStyle);

export default function SectionTeams({ ...rest }) {
  const classes = useStyles();
  return (
    <div className="cd-section" {...rest}>
      {/* Team 3 START */}
      <div className={classes.team}>
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
              <h2 className={classes.title}>The Executive Team 3</h2>
              <h5 className={classes.description}>
                This is the paragraph where you can write more details about
                your team. Keep you user engaged by providing meaningful
                information.
              </h5>
            </GridItem>
          </GridContainer>
          <GridContainer>
            <GridItem xs={12} sm={6} md={6}>
              <Card profile plain className={classes.card3}>
                <GridContainer>
                  <GridItem xs={12} sm={5} md={5}>
                    <CardHeader image plain>
                      <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        <img src={cardProfile1Square} alt="..." />
                      </a>
                      <div
                        className={classes.coloredShadow}
                        style={{
                          backgroundImage: `url(${cardProfile1Square})`,
                          opacity: "1",
                        }}
                      />
                    </CardHeader>
                  </GridItem>
                  <GridItem xs={12} sm={7} md={7}>
                    <CardBody plain>
                      <h4 className={classes.cardTitle}>Alec Thompson</h4>
                      <Muted>
                        <h6 className={classes.cardCategory}>FOUNDER</h6>
                      </Muted>
                      <p className={classes.description}>
                        Don{"'"}t be scared of the truth because we need to
                        restart the human foundation in truth...
                      </p>
                    </CardBody>
                    <CardFooter profile plain>
                      <Button justIcon simple color="twitter">
                        <i className="fab fa-twitter" />
                      </Button>
                      <Button justIcon simple color="facebook">
                        <i className="fab fa-facebook-square" />
                      </Button>
                      <Button justIcon simple color="google">
                        <i className="fab fa-google" />
                      </Button>
                    </CardFooter>
                  </GridItem>
                </GridContainer>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={6} md={6}>
              <Card profile plain className={classes.card3}>
                <GridContainer>
                  <GridItem xs={12} sm={5} md={5}>
                    <CardHeader image plain>
                      <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        <img src={cardProfile6Square} alt="..." />
                      </a>
                      <div
                        className={classes.coloredShadow}
                        style={{
                          backgroundImage: `url(${cardProfile6Square})`,
                          opacity: "1",
                        }}
                      />
                    </CardHeader>
                  </GridItem>
                  <GridItem xs={12} sm={7} md={7}>
                    <CardBody plain>
                      <h4 className={classes.cardTitle}>Kendall Andrew</h4>
                      <Muted>
                        <h6 className={classes.cardCategory}>
                          GRAPHIC DESIGNER
                        </h6>
                      </Muted>
                      <p className={classes.description}>
                        Don{"'"}t be scared of the truth because we need to
                        restart the human foundation in truth...
                      </p>
                    </CardBody>
                    <CardFooter profile plain>
                      <Button justIcon simple color="linkedin">
                        <i className="fab fa-linkedin-in" />
                      </Button>
                      <Button justIcon simple color="facebook">
                        <i className="fab fa-facebook-square" />
                      </Button>
                      <Button justIcon simple color="dribbble">
                        <i className="fab fa-dribbble" />
                      </Button>
                      <Button justIcon simple color="google">
                        <i className="fab fa-google" />
                      </Button>
                    </CardFooter>
                  </GridItem>
                </GridContainer>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={6} md={6}>
              <Card profile plain className={classes.card3}>
                <GridContainer>
                  <GridItem xs={12} sm={5} md={5}>
                    <CardHeader image plain>
                      <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        <img src={cardProfile4Square} alt="..." />
                      </a>
                      <div
                        className={classes.coloredShadow}
                        style={{
                          backgroundImage: `url(${cardProfile4Square})`,
                          opacity: "1",
                        }}
                      />
                    </CardHeader>
                  </GridItem>
                  <GridItem xs={12} sm={7} md={7}>
                    <CardBody plain>
                      <h4 className={classes.cardTitle}>Gina Andrew</h4>
                      <Muted>
                        <h6 className={classes.cardCategory}>WEB DESIGNER</h6>
                      </Muted>
                      <p className={classes.description}>
                        I love you like Kanye loves Kanye. Don{"'"}t be scared
                        of the truth.
                      </p>
                    </CardBody>
                    <CardFooter profile plain>
                      <Button justIcon simple color="youtube">
                        <i className="fab fa-youtube" />
                      </Button>
                      <Button justIcon simple color="twitter">
                        <i className="fab fa-twitter" />
                      </Button>
                      <Button justIcon simple color="instagram">
                        <i className="fab fa-instagram" />
                      </Button>
                    </CardFooter>
                  </GridItem>
                </GridContainer>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={6} md={6}>
              <Card profile plain className={classes.card3}>
                <GridContainer>
                  <GridItem xs={12} sm={5} md={5}>
                    <CardHeader image plain>
                      <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        <img src={cardProfile2Square} alt="..." />
                      </a>
                      <div
                        className={classes.coloredShadow}
                        style={{
                          backgroundImage: `url(${cardProfile2Square})`,
                          opacity: "1",
                        }}
                      />
                    </CardHeader>
                  </GridItem>
                  <GridItem xs={12} sm={7} md={7}>
                    <CardBody plain>
                      <h4 className={classes.cardTitle}>George West</h4>
                      <Muted>
                        <h6 className={classes.cardCategory}>BACKEND HACKER</h6>
                      </Muted>
                      <p className={classes.description}>
                        I love you like Kanye loves Kanye. Don{"'"}t be scared
                        of the truth.
                      </p>
                    </CardBody>
                    <CardFooter profile plain>
                      <Button justIcon simple color="linkedin">
                        <i className="fab fa-linkedin-in" />
                      </Button>
                      <Button justIcon simple color="facebook">
                        <i className="fab fa-facebook-square" />
                      </Button>
                      <Button justIcon simple color="google">
                        <i className="fab fa-google" />
                      </Button>
                    </CardFooter>
                  </GridItem>
                </GridContainer>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
      </div>
      {/* Team 3 END */}
    </div>
  );
}
