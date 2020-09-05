import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Favorite from "@material-ui/icons/Favorite";

import Footer from "components/frontend/Footer/Footer.js";

import blogPostsPageStyle from "assets/jss/frontend/views/blogPostsPageStyle.js";

const useStyles = makeStyles(blogPostsPageStyle);

const FooterBar = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  });
  const classes = useStyles();

  return (
    <Footer
      content={
        <div>
          <div className={classes.left}>
            <List className={classes.list}>
              <ListItem className={classes.inlineBlock}>
                <a href="/" target="_blank" className={classes.block}>
                  Home
                </a>
              </ListItem>
              <ListItem className={classes.inlineBlock}>
                <a
                  href="/study-guides"
                  target="_blank"
                  className={classes.block}
                >
                  Study Guide
                </a>
              </ListItem>
              <ListItem className={classes.inlineBlock}>
                <a
                  href="/study-guides"
                  target="_blank"
                  className={classes.block}
                >
                  Showcase
                </a>
              </ListItem>
              <ListItem className={classes.inlineBlock}>
                <a href="/about-us" target="_blank" className={classes.block}>
                  About us
                </a>
              </ListItem>
            </List>
          </div>

          <div className={classes.right}>
            &copy; {1900 + new Date().getYear()} , made with{" "}
            <Favorite className={classes.icon} /> by{" "}
            <a
              href="https://www.facebook.com/RMITDeveloperClub"
              target="_blank"
              rel="noopener noreferrer"
            >
              Developer Student Club
            </a>{" "}
            for a better web.
          </div>
        </div>
      }
    />
  );
};

export default FooterBar;
