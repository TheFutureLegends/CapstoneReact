import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Header from "components/Header/Header.js";
import Button from "components/CustomButtons/Button.js";
import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";

import headersStyle from "assets/jss/material-kit-pro-react/views/sectionsSections/headersStyle.js";
import navbarsStyle from "assets/jss/material-kit-pro-react/views/componentsSections/navbarsStyle.js";

import profileImage from "assets/img/faces/avatar.jpg";

import AuthService from "services/auth.service";

const useStyles = makeStyles(headersStyle);
const navbarStyles = makeStyles(navbarsStyle);

const NavBar = () => {
  const classes = useStyles();

  const navbarClasses = navbarStyles();

  let history = useHistory();

  function handleClick() {
    AuthService.logout();
    history.push("/");
    window.location.reload();
  }

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function checkLoggedIn(isLoggedIn) {
    if (AuthService.checkLoggedIn()) {
      return (
        <ListItem className={classes.listItem}>
          <CustomDropdown
            left
            caret={true}
            hoverColor="dark"
            buttonText={
              <img
                src={profileImage}
                className={navbarClasses.img}
                alt="profile"
              />
            }
            onClick={handleClick}
            buttonProps={{
              className:
                navbarClasses.navLink + " " + navbarClasses.imageDropdownButton,
              color: "transparent",
            }}
            dropdownList={[
              "Me",
              "Settings and other stuff",
              { divider: true },
              // <Button href="/study-guides">Showcase</Button>,
              "Sign out",
            ]}
          />
        </ListItem>
      );
    }

    return (
      <ListItem className={classes.listItem}>
        <Button href="/login" className={classes.navLink} color="transparent">
          Login
        </Button>
      </ListItem>
    );
  }

  useEffect(() => {}, []);

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
            <Button href="/" className={classes.navLink} color="transparent">
              Home
            </Button>
          </ListItem>
          <ListItem className={classes.listItem}>
            <Button
              href="/study-guides"
              className={classes.navLink}
              color="transparent"
            >
              Study Guide
            </Button>
          </ListItem>
          <ListItem className={classes.listItem}>
            <Button
              href="/study-guides"
              className={classes.navLink}
              color="transparent"
            >
              Showcase
            </Button>
          </ListItem>
          <ListItem className={classes.listItem}>
            <Button
              href="/about-us"
              className={classes.navLink}
              color="transparent"
            >
              About us
            </Button>
          </ListItem>
          <ListItem className={classes.listItem}>
            <Button
              href="/contact-us"
              className={classes.navLink}
              color="transparent"
            >
              Contact us
            </Button>
          </ListItem>
          {checkLoggedIn(isLoggedIn)}
        </List>
      }
    />
  );
};

export default NavBar;
