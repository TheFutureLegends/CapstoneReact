import React, { useEffect, useState } from "react";
import axios from "axios";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import TrendingUp from "@material-ui/icons/TrendingUp";

// core components
import GridContainer from "components/frontend/Grid/GridContainer.js";
import GridItem from "components/frontend/Grid/GridItem.js";
import Card from "components/frontend/Card/Card.js";
import CardHeader from "components/frontend/Card/CardHeader.js";
import CardBody from "components/frontend/Card/CardBody.js";
import CardFooter from "components/frontend/Card/CardFooter.js";
import CustomInput from "components/frontend/CustomInput/CustomInput.js";
import Danger from "components/frontend/Typography/Danger.js";
import Success from "components/frontend/Typography/Success.js";
import Button from "components/frontend/CustomButtons/Button.js";

import styles from "assets/jss/frontend/views/componentsSections/sectionCards.js";

import {
  string_to_slug,
  getRandomInt,
} from "views/frontend/_partials/Miscellaneous.js";

import { baseApiUrl, news_api } from "services/Api.js";

import { useInfiniteScroll } from "views/frontend/_partials/useInfiniteScroll.js";

import authHeader from "services/auth-header.js";

// import CardAvatar from "components/frontend/Card/CardAvatar.js";
// import Info from "components/frontend/Typography/Info.js";
// import Warning from "components/frontend/Typography/Warning.js";
// import Rose from "components/frontend/Typography/Rose.js";

// import Icon from "@material-ui/core/Icon";
// // @material-ui/icons
// import Favorite from "@material-ui/icons/Favorite";
// import Share from "@material-ui/icons/Share";
// import ChatBubble from "@material-ui/icons/ChatBubble";
// import Schedule from "@material-ui/icons/Schedule";

// // For filter
// // @material-ui/core components
// import InputAdornment from "@material-ui/core/InputAdornment";
// // @material-ui icons
// import People from "@material-ui/icons/People";
// // core components

// import Subject from "@material-ui/icons/Subject";
// import WatchLater from "@material-ui/icons/WatchLater";
// import People from "@material-ui/icons/People";
// import Business from "@material-ui/icons/Business";
// import Check from "@material-ui/icons/Check";
// import Close from "@material-ui/icons/Close";
// import Delete from "@material-ui/icons/Delete";
// import Bookmark from "@material-ui/icons/Bookmark";
// import Refresh from "@material-ui/icons/Refresh";
// import Receipt from "@material-ui/icons/Receipt";

const useStyles = makeStyles(styles);

const SectionCards = () => {
  const [isFetching, setIsFetching] = useInfiniteScroll(fetchMoreItems);

  const [isFinished, setIsFinished] = useState(false);

  const [page, setPage] = useState(1);

  const [author] = useState({
    name: "",
  });

  const [state, setState] = useState({
    index: 0,
  });
  const [firstGrid] = useState({
    array: [],
  });
  const [secondGrid] = useState({
    array: [],
  });
  const [thirdGrid] = useState({
    array: [],
  });
  // const [activeRotate2, setActiveRotate2] = useState("");
  // const [activeRotate3, setActiveRotate3] = useState("");
  const classes = useStyles();

  function setGridItem(response) {
    response.map((result) => {
      if (state.index === 0) {
        firstGrid.array.push(result);
        setState({
          index: (state.index += 1),
        });
      } else if (state.index === 1) {
        secondGrid.array.push(result);

        setState({
          index: (state.index += 1),
        });
      } else {
        thirdGrid.array.push(result);
        setState({
          index: (state.index = 0),
        });
      }

      return true;
    });

    return;
  }

  const renderCard = (key, response) => {
    // axios.get(`http://localhost:8000/api/user/${response.author_id}/`).then((res) => {
    //   // console.log(res.data.name);
    //   setAuthor({
    //     name: res.data.name
    //   });
    // });

    if (response.description != null && response.urlToImage != null) {
      return (
        <Card key={key} blog>
          <CardHeader image>
            <a href={response.url}>
              <img src={response.urlToImage} alt="..." />
            </a>
            <div
              className={classes.coloredShadow}
              style={{
                backgroundImage: `url(${response.urlToImage})`,
                opacity: "1",
              }}
            />
          </CardHeader>
          <CardBody>
            <Success>
              <h6 className={classes.cardCategory}>Legal</h6>
            </Success>
            <h4 className={classes.cardTitle}>
              <a href={"/study-guide/" + response.slug}>{response.title}</a>
            </h4>
            <p className={classes.cardDescription}>{response.description}</p>
          </CardBody>
          <CardFooter>
            <div className={classes.stats + " " + classes.mlAuto}>
              Source: {author.name}
            </div>
          </CardFooter>
        </Card>
      );
    } else if (response.description == null && response.urlToImage != null) {
      return (
        <Card key={key} blog>
          <CardHeader image>
            <a href={response.url}>
              <img src={response.urlToImage} alt="..." />
            </a>
            <div
              className={classes.coloredShadow}
              style={{
                backgroundImage: `url(${response.urlToImage})`,
                opacity: "1",
              }}
            />
          </CardHeader>
          <CardBody>
            <Danger>
              <h6 className={classes.cardCategory}>
                <TrendingUp /> TRENDING
              </h6>
            </Danger>
            <h4 className={classes.cardTitle}>
              <a href={"/study-guide/" + response.slug}>{response.title}</a>
            </h4>
          </CardBody>
          <CardFooter>
            <div className={classes.stats + " " + classes.mlAuto}>
              Source: {author.name}
            </div>
          </CardFooter>
        </Card>
      );
    } else {
      return (
        <Card key={key}>
          <CardBody>
            <Danger>
              <h6 className={classes.cardCategory}>
                <TrendingUp /> TRENDING
              </h6>
            </Danger>
            <h4 className={classes.cardTitle}>
              <a href={"/study-guide/" + response.slug}>{response.title}</a>
            </h4>
            <p className={classes.cardDescription}>{response.description}</p>
          </CardBody>
          <CardFooter>
            <div className={classes.stats + " " + classes.mlAuto}>
              Source: {author.name}
            </div>
          </CardFooter>
        </Card>
      );
    }
  };

  function handleClick() {
    axios
      .get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${news_api}`)
      .then((res) => {
        seedDatabase(res.data.articles);
      });

    axios
      .get(
        `https://newsapi.org/v2/everything?q=apple&from=2020-09-01&to=2020-09-01&sortBy=popularity&apiKey=${news_api}`
      )
      .then((res) => {
        seedDatabase(res.data.articles);
      });

    window.location.reload();

    return true;
  }

  function seedDatabase(response) {
    response.map((result) => {
      var slug = string_to_slug(result.title);

      axios({
        method: "get",
        url: baseApiUrl + "/post/" + slug + "/",
      })
        .then((res) => {})
        .catch((error) => {
          if (error.response.status === 404) {
            const json = JSON.stringify({
              title: result.title,
              description: result.description,
              content: result.content,
              urlToImage: result.urlToImage,
              visit: getRandomInt(100, 10000000),
              author_id: getRandomInt(1, 100),
            });

            if (authHeader()) {
              axios
                .post(baseApiUrl + "/post/store", json, {
                  headers: authHeader(),
                })
                .then((res) => {})
                .catch((error) => {
                  console.log(error.response.data);
                });
            }
          }
        });
      return true;
    });
  }

  function fetchMoreItems() {
    if (isFetching && isFinished === false) {
      setPage(page + 1);

      axios
        .get(baseApiUrl + "/posts/paginator/?page=" + (page + 1))
        .then((res) => {
          setGridItem(res.data.results);

          setIsFinished(false);
        })
        .catch((error) => {
          if (error.response.status === 404) {
            setIsFetching(false);

            setIsFinished(true);
          }
        });
    }
    setIsFetching(false);
  }

  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    axios.get(baseApiUrl + "/posts/paginator/?page=" + page).then((res) => {
      setGridItem(res.data.results);

      setIsFinished(false);
    });

    axios
      .get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${news_api}`)
      .then((res) => {
        seedDatabase(res.data.articles);
      });

    axios
      .get(
        `https://newsapi.org/v2/everything?q=apple&from=2020-09-01&to=2020-09-01&sortBy=popularity&apiKey=${news_api}`
      )
      .then((res) => {
        seedDatabase(res.data.articles);
      });

    return () => {
      // window.removeEventListener("scroll", handleScroll);
      setGridItem();
      seedDatabase();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="cd-section" id="cards">
      <div className={classes.sectionWhite + " " + classes.cardPaddingTop}>
        <div></div>
        {/* BLOG CARDS START */}
        <div>
          <div className={classes.container}>
            {/* <div className={classes.title}>
              <h2>You clicked {offSet} times</h2>
              <h3>Blog Cards</h3>
            </div> */}
            <GridContainer>
              <GridItem xs={12} sm={12} md={8}>
                <CustomInput
                  id="regular"
                  inputProps={{
                    placeholder: "Regular",
                  }}
                  formControlProps={{
                    fullWidth: true,
                  }}
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={4}>
                <Button
                  type="button"
                  color="danger"
                  onClick={() => handleClick()}
                >
                  Seed Database
                </Button>
              </GridItem>

              <GridItem xs={12} sm={6} md={6} lg={4}>
                {firstGrid.array.map((response, i) => renderCard(i, response))}
              </GridItem>
              <GridItem xs={12} sm={6} md={6} lg={4}>
                {secondGrid.array.map((response, i) => renderCard(i, response))}
              </GridItem>
              <GridItem xs={12} sm={6} md={6} lg={4}>
                {thirdGrid.array.map((response, i) => renderCard(i, response))}
              </GridItem>
            </GridContainer>
          </div>
        </div>
        {/* BLOG CARDS END */}
      </div>
    </div>
  );
};

export default SectionCards;
