import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Header from "components/Header/Header.js";
import Button from "components/CustomButtons/Button.js";

import headersStyle from "assets/jss/material-kit-pro-react/views/sectionsSections/headersStyle.js";

const useStyles = makeStyles(headersStyle);

const NavBar = () => {
    const classes = useStyles();

    return (
      <Header
        fixed
        color="transparent"
        changeColorOnScroll={{
          height: 300,
          color: "info",
        }}
        brand="RMIT School Of Science &amp; Technology"
        links={
          <List className={classes.list + " " + classes.mlAuto}>
            <ListItem className={classes.listItem}>
              <Button
                href="/"
                className={classes.navLink}
                color="transparent"
              >
                Home
              </Button>
            </ListItem>
            <ListItem className={classes.listItem}>
              <Button
                href="/study-guides"
                className={classes.navLink}
                // onClick={(e) => e.preventDefault()}
                color="transparent"
              >
                Study Guide
              </Button>
            </ListItem>
            <ListItem className={classes.listItem}>
              <Button
                href="/blog-post"
                className={classes.navLink}
                // onClick={(e) => e.preventDefault()}
                color="transparent"
              >
                Showcase
              </Button>
            </ListItem>
            <ListItem className={classes.listItem}>
              <Button
                href="/about-us"
                className={classes.navLink}
                onClick={(e) => e.preventDefault()}
                color="transparent"
              >
                About us
              </Button>
            </ListItem>
            <ListItem className={classes.listItem}>
              <Button
                href="#pablo"
                className={classes.navLink}
                onClick={(e) => e.preventDefault()}
                color="transparent"
              >
                Contact us
              </Button>
            </ListItem>
          </List>
        }
      />
    );
}

export default NavBar;