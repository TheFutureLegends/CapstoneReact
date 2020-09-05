import React from "react";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";

// @material-ui/icons
// import ContentCopy from "@material-ui/icons/ContentCopy";
import Store from "@material-ui/icons/Store";
// import InfoOutline from "@material-ui/icons/InfoOutline";
import Warning from "@material-ui/icons/Warning";
import DateRange from "@material-ui/icons/DateRange";
import LocalOffer from "@material-ui/icons/LocalOffer";
import Update from "@material-ui/icons/Update";

// core components
import GridContainer from "components/backend/Grid/GridContainer.js";
import GridItem from "components/backend/Grid/GridItem.js";
import Danger from "components/backend/Typography/Danger.js";
import Card from "components/backend/Card/Card.js";
import CardHeader from "components/backend/Card/CardHeader.js";
import CardIcon from "components/backend/Card/CardIcon.js";

import CardFooter from "components/backend/Card/CardFooter.js";

import styles from "assets/jss/backend/views/dashboardStyle.js";

const useStyles = makeStyles(styles);

const SectionCardStats = () => {
  const classes = useStyles();
  return (
    <GridContainer>
      <GridItem xs={12} sm={6} md={6} lg={3}>
        <Card>
          <CardHeader color="warning" stats icon>
            <CardIcon color="warning">
              <Icon>content_copy</Icon>
            </CardIcon>
            <p className={classes.cardCategory}>Used Space</p>
            <h3 className={classes.cardTitle}>
              49/50 <small>GB</small>
            </h3>
          </CardHeader>
          <CardFooter stats>
            <div className={classes.stats}>
              <Danger>
                <Warning />
              </Danger>
              <a href="#pablo" onClick={(e) => e.preventDefault()}>
                Get more space
              </a>
            </div>
          </CardFooter>
        </Card>
      </GridItem>
      <GridItem xs={12} sm={6} md={6} lg={3}>
        <Card>
          <CardHeader color="success" stats icon>
            <CardIcon color="success">
              <Store />
            </CardIcon>
            <p className={classes.cardCategory}>Revenue</p>
            <h3 className={classes.cardTitle}>$34,245</h3>
          </CardHeader>
          <CardFooter stats>
            <div className={classes.stats}>
              <DateRange />
              Last 24 Hours
            </div>
          </CardFooter>
        </Card>
      </GridItem>
      <GridItem xs={12} sm={6} md={6} lg={3}>
        <Card>
          <CardHeader color="danger" stats icon>
            <CardIcon color="danger">
              <Icon>info_outline</Icon>
            </CardIcon>
            <p className={classes.cardCategory}>Fixed Issues</p>
            <h3 className={classes.cardTitle}>75</h3>
          </CardHeader>
          <CardFooter stats>
            <div className={classes.stats}>
              <LocalOffer />
              Tracked from Github
            </div>
          </CardFooter>
        </Card>
      </GridItem>
      <GridItem xs={12} sm={6} md={6} lg={3}>
        <Card>
          <CardHeader color="info" stats icon>
            <CardIcon color="info">
              <i className="fab fa-twitter" />
            </CardIcon>
            <p className={classes.cardCategory}>Followers</p>
            <h3 className={classes.cardTitle}>+245</h3>
          </CardHeader>
          <CardFooter stats>
            <div className={classes.stats}>
              <Update />
              Just Updated
            </div>
          </CardFooter>
        </Card>
      </GridItem>
    </GridContainer>
  );
};

export default SectionCardStats;
