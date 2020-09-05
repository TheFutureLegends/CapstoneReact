import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// core components
import GridContainer from "components/frontend/Grid/GridContainer.js";
import GridItem from "components/frontend/Grid/GridItem.js";
import Card from "components/frontend/Card/Card.js";
import CardHeader from "components/frontend/Card/CardHeader.js";
import CardBody from "components/frontend/Card/CardBody.js";
import CardFooter from "components/frontend/Card/CardFooter.js";
import Muted from "components/frontend/Typography/Muted.js";
import Button from "components/frontend/CustomButtons/Button.js";

import bg10 from "assets/img/bg10.jpg";

import cardProfile1 from "assets/img/faces/card-profile1-square.jpg";
import cardProfile4 from "assets/img/faces/card-profile4-square.jpg";

import sectionImageStyle from "assets/jss/frontend/views/blogPostsSections/sectionImageStyle.js";

const useStyles = makeStyles(sectionImageStyle);

export default function SectionImage() {
  const classes = useStyles();
  return (
    <div
      className={classes.section}
      style={{ backgroundImage: "url(" + bg10 + ")" }}
    >
      <div className={classes.container}>
        <GridContainer>
          <GridItem xs={12} sm={6} md={6}>
            <Card profile plain className={classes.textLeft}>
              <GridContainer>
                <GridItem xs={12} sm={5} md={5}>
                  <CardHeader image plain>
                    <a href="#pablo">
                      <img src={cardProfile1} alt="..." />
                    </a>
                  </CardHeader>
                </GridItem>
                <GridItem xs={12} sm={7} md={7}>
                  <CardBody plain>
                    <h4 className={classes.cardTitle}>Alec Thompson</h4>
                    <Muted>
                      <h6>AUTHOR OF THE MONTH</h6>
                    </Muted>
                    <p className={classes.description}>
                      Don{"'"}t be scared of the truth because we need to
                      restart the human foundation in truth...
                    </p>
                  </CardBody>
                  <CardFooter profile plain>
                    <Button justIcon simple color="white" href="#pablo">
                      <i className="fab fa-twitter" />
                    </Button>
                    <Button justIcon simple color="white" href="#pablo">
                      <i className="fab fa-facebook-square" />
                    </Button>
                    <Button justIcon simple color="white" href="#pablo">
                      <i className="fab fa-google" />
                    </Button>
                  </CardFooter>
                </GridItem>
              </GridContainer>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={6} md={6}>
            <Card profile plain className={classes.textLeft}>
              <GridContainer>
                <GridItem xs={12} sm={5} md={5}>
                  <CardHeader image plain>
                    <a href="#pablo">
                      <img src={cardProfile4} alt="..." />
                    </a>
                  </CardHeader>
                </GridItem>
                <GridItem xs={12} sm={7} md={7}>
                  <CardBody plain>
                    <h4 className={classes.cardTitle}>Kendall Andrew</h4>
                    <Muted>
                      <h6>AUTHOR OF THE WEEK</h6>
                    </Muted>
                    <p className={classes.description}>
                      Don{"'"}t be scared of the truth because we need to
                      restart the human foundation in truth...
                    </p>
                  </CardBody>
                  <CardFooter profile plain>
                    <Button justIcon simple color="white" href="#pablo">
                      <i className="fab fa-linkedin-in" />
                    </Button>
                    <Button justIcon simple color="white" href="#pablo">
                      <i className="fab fa-facebook-square" />
                    </Button>
                    <Button justIcon simple color="white" href="#pablo">
                      <i className="fab fa-dribbble" />
                    </Button>
                    <Button justIcon simple color="white" href="#pablo">
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
  );
}
