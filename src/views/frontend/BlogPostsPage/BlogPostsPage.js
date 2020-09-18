/*eslint-disable*/
import React, { useEffect } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// import List from "@material-ui/core/List";
// import ListItem from "@material-ui/core/ListItem";
// @material-ui/icons
// import Favorite from "@material-ui/icons/Favorite";
// core components
// import Header from "components/frontend/Header/Header.js";
// import Button from "components/frontend/CustomButtons/Button.js";
// import HeaderLinks from "components/frontend/Header/HeaderLinks.js";
// import Footer from "components/frontend/Footer/Footer.js";
import GridContainer from "components/frontend/Grid/GridContainer.js";
import GridItem from "components/frontend/Grid/GridItem.js";
import Parallax from "components/frontend/Parallax/Parallax.js";
// sections for this page
import SectionCards from "./Sections/SectionCards.js";
// import SectionPills from "./Sections/SectionPills.js";
// import SectionInterested from "./Sections/SectionInterested.js";
import SectionImage from "./Sections/SectionImage.js";
import SubscribeLine from "./Sections/SubscribeLine.js";

import blogPostsPageStyle from "assets/jss/frontend/views/blogPostsPageStyle.js";

import NavBar from "views/frontend/_partials/NavBar";
import FooterBar from "views/frontend/_partials/FooterBar.js";

// import { CheckLoggedIn } from "views/_partials/Api.js";

const useStyles = makeStyles(blogPostsPageStyle);

export default function BlogPostsPage() {
  useEffect(() => {
    // CheckLoggedIn();

    window.scrollTo(0, 0);

    document.body.scrollTop = 0;
  });

  const classes = useStyles();

  return (
    <div>
      <NavBar></NavBar>
      <Parallax image={require("assets/img/bg10.jpg")} filter="dark" small>
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={8} className={classes.textCenter}>
              <h2 className={classes.title}>
                A Place for you to Share and Discover New Stories
              </h2>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classes.main}>
        <div className={classes.container}>
          {/* <SectionPills />
          <SectionInterested /> */}
          <SectionCards />
        </div>
        <SectionImage />
        <SubscribeLine />
      </div>
      <FooterBar></FooterBar>
    </div>
  );
}
