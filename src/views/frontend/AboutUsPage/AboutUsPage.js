/*eslint-disable*/
import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
// @material-ui/icons
import Favorite from "@material-ui/icons/Favorite";
// core components
import Header from "components/frontend/Header/Header.js";
import GridContainer from "components/frontend/Grid/GridContainer.js";
import GridItem from "components/frontend/Grid/GridItem.js";
import Parallax from "components/frontend/Parallax/Parallax.js";
import Footer from "components/frontend/Footer/Footer.js";
// sections for this page
import HeaderLinks from "components/frontend/Header/HeaderLinks.js";
import SectionDescription from "./Sections/SectionDescription.js";
import SectionTeam from "./Sections/SectionTeam.js";
import SectionServices from "./Sections/SectionServices.js";
import SectionOffice from "./Sections/SectionOffice.js";
import SectionContact from "./Sections/SectionContact.js";

import FooterBar from "views/frontend/_partials/FooterBar.js";
import NavBar from "views/frontend/_partials/NavBar";

import aboutUsStyle from "assets/jss/frontend/views/aboutUsStyle.js";

const useStyles = makeStyles(aboutUsStyle);

export default function AboutUsPage() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  });
  const classes = useStyles();
  return (
    <div>
      <NavBar></NavBar>
      <Parallax image={require("assets/img/bg9.jpg")} filter="dark" small>
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem
              md={8}
              sm={8}
              className={classNames(
                classes.mlAuto,
                classes.mrAuto,
                classes.textCenter
              )}
            >
              <h1 className={classes.title}>About Us</h1>
              <h4>
                Meet the amazing team behind this project and find out more
                about how we work.
              </h4>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <SectionDescription />
          <SectionTeam />
          <SectionServices />
          <SectionOffice />
          <SectionContact />
        </div>
      </div>
      <FooterBar></FooterBar>
    </div>
  );
}
