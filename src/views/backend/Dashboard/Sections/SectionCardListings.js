import React from "react";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Tooltip from "@material-ui/core/Tooltip";

import Refresh from "@material-ui/icons/Refresh";
import Edit from "@material-ui/icons/Edit";
import Place from "@material-ui/icons/Place";
import ArtTrack from "@material-ui/icons/ArtTrack";

// core components
import GridContainer from "components/frontend/Grid/GridContainer.js";
import GridItem from "components/frontend/Grid/GridItem.js";
import Button from "components/frontend/CustomButtons/Button.js";
import Card from "components/frontend/Card/Card.js";
import CardHeader from "components/frontend/Card/CardHeader.js";
import CardBody from "components/frontend/Card/CardBody.js";
import CardFooter from "components/frontend/Card/CardFooter.js";

import styles from "assets/jss/material-dashboard-pro-react/views/dashboardStyle.js";

import priceImage1 from "assets/img/card-2.jpeg";
import priceImage2 from "assets/img/card-3.jpeg";
import priceImage3 from "assets/img/card-1.jpeg";

const useStyles = makeStyles(styles);

const SectionCardListings = () => {
  const classes = useStyles();

  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={4}>
        <Card product className={classes.cardHover}>
          <CardHeader image className={classes.cardHeaderHover}>
            <a href="#pablo" onClick={(e) => e.preventDefault()}>
              <img src={priceImage1} alt="..." />
            </a>
          </CardHeader>
          <CardBody>
            <div className={classes.cardHoverUnder}>
              <Tooltip
                id="tooltip-top"
                title="View"
                placement="bottom"
                classes={{ tooltip: classes.tooltip }}
              >
                <Button color="transparent" simple justIcon>
                  <ArtTrack className={classes.underChartIcons} />
                </Button>
              </Tooltip>
              <Tooltip
                id="tooltip-top"
                title="Edit"
                placement="bottom"
                classes={{ tooltip: classes.tooltip }}
              >
                <Button color="success" simple justIcon>
                  <Refresh className={classes.underChartIcons} />
                </Button>
              </Tooltip>
              <Tooltip
                id="tooltip-top"
                title="Remove"
                placement="bottom"
                classes={{ tooltip: classes.tooltip }}
              >
                <Button color="danger" simple justIcon>
                  <Edit className={classes.underChartIcons} />
                </Button>
              </Tooltip>
            </div>
            <h4 className={classes.cardProductTitle}>
              <a href="#pablo" onClick={(e) => e.preventDefault()}>
                Cozy 5 Stars Apartment
              </a>
            </h4>
            <p className={classes.cardProductDesciprion}>
              The place is close to Barceloneta Beach and bus stop just 2 min by
              walk and near to {'"'}Naviglio{'"'} where you can enjoy the main
              night life in Barcelona.
            </p>
          </CardBody>
          <CardFooter product>
            <div className={classes.price}>
              <h4>$899/night</h4>
            </div>
            <div className={`${classes.stats} ${classes.productStats}`}>
              <Place /> Barcelona, Spain
            </div>
          </CardFooter>
        </Card>
      </GridItem>
      <GridItem xs={12} sm={12} md={4}>
        <Card product className={classes.cardHover}>
          <CardHeader image className={classes.cardHeaderHover}>
            <a href="#pablo" onClick={(e) => e.preventDefault()}>
              <img src={priceImage2} alt="..." />
            </a>
          </CardHeader>
          <CardBody>
            <div className={classes.cardHoverUnder}>
              <Tooltip
                id="tooltip-top"
                title="View"
                placement="bottom"
                classes={{ tooltip: classes.tooltip }}
              >
                <Button color="transparent" simple justIcon>
                  <ArtTrack className={classes.underChartIcons} />
                </Button>
              </Tooltip>
              <Tooltip
                id="tooltip-top"
                title="Edit"
                placement="bottom"
                classes={{ tooltip: classes.tooltip }}
              >
                <Button color="success" simple justIcon>
                  <Refresh className={classes.underChartIcons} />
                </Button>
              </Tooltip>
              <Tooltip
                id="tooltip-top"
                title="Remove"
                placement="bottom"
                classes={{ tooltip: classes.tooltip }}
              >
                <Button color="danger" simple justIcon>
                  <Edit className={classes.underChartIcons} />
                </Button>
              </Tooltip>
            </div>
            <h4 className={classes.cardProductTitle}>
              <a href="#pablo" onClick={(e) => e.preventDefault()}>
                Office Studio
              </a>
            </h4>
            <p className={classes.cardProductDesciprion}>
              The place is close to Metro Station and bus stop just 2 min by
              walk and near to {'"'}Naviglio{'"'} where you can enjoy the night
              life in London, UK.
            </p>
          </CardBody>
          <CardFooter product>
            <div className={classes.price}>
              <h4>$1.119/night</h4>
            </div>
            <div className={`${classes.stats} ${classes.productStats}`}>
              <Place /> London, UK
            </div>
          </CardFooter>
        </Card>
      </GridItem>
      <GridItem xs={12} sm={12} md={4}>
        <Card product className={classes.cardHover}>
          <CardHeader image className={classes.cardHeaderHover}>
            <a href="#pablo" onClick={(e) => e.preventDefault()}>
              <img src={priceImage3} alt="..." />
            </a>
          </CardHeader>
          <CardBody>
            <div className={classes.cardHoverUnder}>
              <Tooltip
                id="tooltip-top"
                title="View"
                placement="bottom"
                classes={{ tooltip: classes.tooltip }}
              >
                <Button color="transparent" simple justIcon>
                  <ArtTrack className={classes.underChartIcons} />
                </Button>
              </Tooltip>
              <Tooltip
                id="tooltip-top"
                title="Edit"
                placement="bottom"
                classes={{ tooltip: classes.tooltip }}
              >
                <Button color="success" simple justIcon>
                  <Refresh className={classes.underChartIcons} />
                </Button>
              </Tooltip>
              <Tooltip
                id="tooltip-top"
                title="Remove"
                placement="bottom"
                classes={{ tooltip: classes.tooltip }}
              >
                <Button color="danger" simple justIcon>
                  <Edit className={classes.underChartIcons} />
                </Button>
              </Tooltip>
            </div>
            <h4 className={classes.cardProductTitle}>
              <a href="#pablo" onClick={(e) => e.preventDefault()}>
                Beautiful Castle
              </a>
            </h4>
            <p className={classes.cardProductDesciprion}>
              The place is close to Metro Station and bus stop just 2 min by
              walk and near to {'"'}Naviglio{'"'} where you can enjoy the main
              night life in Milan.
            </p>
          </CardBody>
          <CardFooter product>
            <div className={classes.price}>
              <h4>$459/night</h4>
            </div>
            <div className={`${classes.stats} ${classes.productStats}`}>
              <Place /> Milan, Italy
            </div>
          </CardFooter>
        </Card>
      </GridItem>
    </GridContainer>
  );
};

export default SectionCardListings;
