import React, { useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Header from "components/frontend/Header/Header.js";
import Button from "components/frontend/CustomButtons/Button.js";
import CustomDropdown from "components/frontend/CustomDropdown/CustomDropdown.js";

import headersStyle from "assets/jss/frontend/views/sectionsSections/headersStyle.js";
import navbarsStyle from "assets/jss/frontend/views/componentsSections/navbarsStyle.js";

import profileImage from "assets/img/faces/avatar.jpg";

import AuthService from "services/auth.service";
import Context from "utils/context";

const useStyles = makeStyles(headersStyle);
const navbarStyles = makeStyles(navbarsStyle);

const NavBar = () => {
  let history = useHistory();

  const userContext = useContext(Context);

  const classes = useStyles();

  const navbarClasses = navbarStyles();

  function handleLogout() {
    AuthService.Logout();

    history.push("/login");

    window.location.reload();
  }

  useEffect(() => {
    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userContext]);

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
              href="/about-us"
              className={classes.navLink}
              color="transparent"
            >
              About us
            </Button>
          </ListItem>
          {/* <ListItem className={classes.listItem}>
            <Button
              href="/contact-us"
              className={classes.navLink}
              color="transparent"
            >
              Contact us
            </Button>
          </ListItem> */}
          {/* {getAuthUser()} */}
          {userContext.isAuthenticated ? (
            <ListItem className={classes.listItem}>
              <CustomDropdown
                left
                caret={true}
                dropdownHeader={userContext.user.username}
                hoverColor="dark"
                buttonText={
                  <img
                    src={profileImage}
                    className={navbarClasses.img}
                    alt="profile"
                  />
                }
                buttonProps={{
                  className:
                    navbarClasses.navLink +
                    " " +
                    navbarClasses.imageDropdownButton,
                  color: "transparent",
                }}
                dropdownList={[
                  <a href="/admin/dashboard">Dashboard</a>,
                  "Settings and other stuff",
                  { divider: true },
                  // <Button href="/study-guides">Showcase</Button>,
                  // eslint-disable-next-line
                  <a href="#" onClick={() => handleLogout()}>
                    Sign out
                  </a>,
                ]}
              />
            </ListItem>
          ) : (
            <>
              <ListItem className={classes.listItem}>
                <Button
                  href="/login"
                  className={classes.navLink}
                  color="transparent"
                >
                  Login
                </Button>
              </ListItem>
              <ListItem className={classes.listItem}>
                <Button
                  href="/register"
                  className={classes.navLink}
                  color="transparent"
                >
                  Register
                </Button>
              </ListItem>
            </>
          )}
        </List>
      }
    />
  );
};

export default NavBar;
