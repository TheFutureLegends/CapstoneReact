/*eslint-disable*/
import React, { useEffect, useState } from "react";
import axios from "axios";
// nodejs library to set properties for components
// import PropTypes from "prop-types";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// import List from "@material-ui/core/List";
// import ListItem from "@material-ui/core/ListItem";
// @material-ui/icons
import FormatAlignLeft from "@material-ui/icons/FormatAlignLeft";
import Favorite from "@material-ui/icons/Favorite";
// core components
// import Header from "components/frontend/Header/Header.js";
// import HeaderLinks from "components/frontend/Header/HeaderLinks.js";
// import Footer from "components/frontend/Footer/Footer.js";
import Parallax from "components/frontend/Parallax/Parallax.js";

import GridContainer from "components/frontend/Grid/GridContainer.js";
import GridItem from "components/frontend/Grid/GridItem.js";
import Button from "components/frontend/CustomButtons/Button.js";
// sections for this page
import SectionText from "./Sections/SectionText.js";
import SectionBlogInfo from "./Sections/SectionBlogInfo.js";
import SectionComments from "./Sections/SectionComments.js";
import SectionSimilarStories from "./Sections/SectionSimilarStories.js";

import blogPostPageStyle from "assets/jss/frontend/views/blogPostPageStyle.js";

import NavBar from "views/frontend/_partials/NavBar";
import FooterBar from "views/frontend/_partials/FooterBar.js";

import { baseApiUrl } from "services/api.js";
import { nytime_api } from "key.js";

const useStyles = makeStyles(blogPostPageStyle);

const BlogPostPage = (props) => {
  const [blogPost, setBlogPost] = useState({
    image: "",
    title: "",
    content: "",
  });

  useEffect(() => {
    axios
      .get(
        `https://api.nytimes.com/svc/topstories/v2/world.json?api-key=${nytime_api}`
      )
      .then((res) => {
        // console.log(res);
      });
    axios.get(baseApiUrl + "/post/" + props.match.params.slug).then((res) => {
      setBlogPost({
        image: res.data.urlToImage,
        title: res.data.title,
        content: res.data.content,
      });
    });

    window.scrollTo(0, 0);

    document.body.scrollTop = 0;

    return () => {
      setBlogPost(false);
    };
  }, []);
  const classes = useStyles();
  return (
    <div>
      <NavBar></NavBar>
      <Parallax image={blogPost.image} filter="dark">
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem md={8} className={classes.textCenter}>
              <h1 className={classes.title}>{blogPost.title}</h1>
              {/* <h4 className={classes.subtitle}>
                The last 48 hours of my life were total madness. This is what I
                did.
              </h4> */}
              <br />
              <Button color="rose" size="lg" round>
                <FormatAlignLeft /> Read Article
              </Button>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classes.main}>
        <div className={classes.container}>
          <SectionText description={blogPost.content} />
          <SectionBlogInfo />
          <SectionComments />
        </div>
      </div>
      <SectionSimilarStories />
      <FooterBar></FooterBar>
    </div>
  );
};
export default BlogPostPage;
