import React from "react";
// react plugin for creating charts
import ChartistGraph from "react-chartist";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Tooltip from "@material-ui/core/Tooltip";

// @material-ui/icons
// import ContentCopy from "@material-ui/icons/ContentCopy";

// import InfoOutline from "@material-ui/icons/InfoOutline";

import ArrowUpward from "@material-ui/icons/ArrowUpward";
import AccessTime from "@material-ui/icons/AccessTime";
import Refresh from "@material-ui/icons/Refresh";
import Edit from "@material-ui/icons/Edit";

// core components
import GridContainer from "components/frontend/Grid/GridContainer.js";
import GridItem from "components/frontend/Grid/GridItem.js";
import Button from "components/frontend/CustomButtons/Button.js";
import Card from "components/frontend/Card/Card.js";
import CardHeader from "components/frontend/Card/CardHeader.js";
import CardBody from "components/frontend/Card/CardBody.js";
import CardFooter from "components/frontend/Card/CardFooter.js";

import {
  dailySalesChart,
  emailsSubscriptionChart,
  completedTasksChart,
} from "variables/charts";

import styles from "assets/jss/material-dashboard-pro-react/views/dashboardStyle.js";

const useStyles = makeStyles(styles);

const SectionCardCharts = () => {
  const classes = useStyles();

  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={4}>
        <Card chart className={classes.cardHover}>
          <CardHeader color="info" className={classes.cardHeaderHover}>
            <ChartistGraph
              className="ct-chart-white-colors"
              data={dailySalesChart.data}
              type="Line"
              options={dailySalesChart.options}
              listener={dailySalesChart.animation}
            />
          </CardHeader>
          <CardBody>
            <div className={classes.cardHoverUnder}>
              <Tooltip
                id="tooltip-top"
                title="Refresh"
                placement="bottom"
                classes={{ tooltip: classes.tooltip }}
              >
                <Button simple color="info" justIcon>
                  <Refresh className={classes.underChartIcons} />
                </Button>
              </Tooltip>
              <Tooltip
                id="tooltip-top"
                title="Change Date"
                placement="bottom"
                classes={{ tooltip: classes.tooltip }}
              >
                <Button color="transparent" simple justIcon>
                  <Edit className={classes.underChartIcons} />
                </Button>
              </Tooltip>
            </div>
            <h4 className={classes.cardTitle}>Daily Sales</h4>
            <p className={classes.cardCategory}>
              <span className={classes.successText}>
                <ArrowUpward className={classes.upArrowCardCategory} /> 55%
              </span>{" "}
              increase in today sales.
            </p>
          </CardBody>
          <CardFooter chart>
            <div className={classes.stats}>
              <AccessTime /> updated 4 minutes ago
            </div>
          </CardFooter>
        </Card>
      </GridItem>
      <GridItem xs={12} sm={12} md={4}>
        <Card chart className={classes.cardHover}>
          <CardHeader color="warning" className={classes.cardHeaderHover}>
            <ChartistGraph
              className="ct-chart-white-colors"
              data={emailsSubscriptionChart.data}
              type="Bar"
              options={emailsSubscriptionChart.options}
              responsiveOptions={emailsSubscriptionChart.responsiveOptions}
              listener={emailsSubscriptionChart.animation}
            />
          </CardHeader>
          <CardBody>
            <div className={classes.cardHoverUnder}>
              <Tooltip
                id="tooltip-top"
                title="Refresh"
                placement="bottom"
                classes={{ tooltip: classes.tooltip }}
              >
                <Button simple color="info" justIcon>
                  <Refresh className={classes.underChartIcons} />
                </Button>
              </Tooltip>
              <Tooltip
                id="tooltip-top"
                title="Change Date"
                placement="bottom"
                classes={{ tooltip: classes.tooltip }}
              >
                <Button color="transparent" simple justIcon>
                  <Edit className={classes.underChartIcons} />
                </Button>
              </Tooltip>
            </div>
            <h4 className={classes.cardTitle}>Email Subscriptions</h4>
            <p className={classes.cardCategory}>Last Campaign Performance</p>
          </CardBody>
          <CardFooter chart>
            <div className={classes.stats}>
              <AccessTime /> campaign sent 2 days ago
            </div>
          </CardFooter>
        </Card>
      </GridItem>
      <GridItem xs={12} sm={12} md={4}>
        <Card chart className={classes.cardHover}>
          <CardHeader color="danger" className={classes.cardHeaderHover}>
            <ChartistGraph
              className="ct-chart-white-colors"
              data={completedTasksChart.data}
              type="Line"
              options={completedTasksChart.options}
              listener={completedTasksChart.animation}
            />
          </CardHeader>
          <CardBody>
            <div className={classes.cardHoverUnder}>
              <Tooltip
                id="tooltip-top"
                title="Refresh"
                placement="bottom"
                classes={{ tooltip: classes.tooltip }}
              >
                <Button simple color="info" justIcon>
                  <Refresh className={classes.underChartIcons} />
                </Button>
              </Tooltip>
              <Tooltip
                id="tooltip-top"
                title="Change Date"
                placement="bottom"
                classes={{ tooltip: classes.tooltip }}
              >
                <Button color="transparent" simple justIcon>
                  <Edit className={classes.underChartIcons} />
                </Button>
              </Tooltip>
            </div>
            <h4 className={classes.cardTitle}>Completed Tasks</h4>
            <p className={classes.cardCategory}>Last Campaign Performance</p>
          </CardBody>
          <CardFooter chart>
            <div className={classes.stats}>
              <AccessTime /> campaign sent 2 days ago
            </div>
          </CardFooter>
        </Card>
      </GridItem>
    </GridContainer>
  );
};

export default SectionCardCharts;
