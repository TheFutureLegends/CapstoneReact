import React, { useEffect, useState } from "react";
import axios from "axios";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// import Icon from "@material-ui/core/Icon";
// @material-ui/icons
// import Favorite from "@material-ui/icons/Favorite";
// import Share from "@material-ui/icons/Share";
// import ChatBubble from "@material-ui/icons/ChatBubble";
// import Schedule from "@material-ui/icons/Schedule";
import TrendingUp from "@material-ui/icons/TrendingUp";
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
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
// For filter
// @material-ui/core components
import InputAdornment from "@material-ui/core/InputAdornment";
// @material-ui icons
import People from "@material-ui/icons/People";
// core components
import CustomInput from "components/CustomInput/CustomInput.js";

// import CardAvatar from "components/Card/CardAvatar.js";
// import Info from "components/Typography/Info.js";
import Danger from "components/Typography/Danger.js";
import Success from "components/Typography/Success.js";
// import Warning from "components/Typography/Warning.js";
// import Rose from "components/Typography/Rose.js";
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-pro-react/views/componentsSections/sectionCards.js";

import { string_to_slug, getRandomInt } from "views/_partials/Miscellaneous.js";

const useStyles = makeStyles(styles);

const SectionCards = () => {
  // const [token, setToken] = useState({
  //   refresh_token: "",
  //   access_token: "",
  // });
  const [author, setAuthor] = useState({
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
              <a href={response.url}>{response.title}</a>
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
              <a href={response.url}>{response.title}</a>
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
              <a href={response.url}>{response.title}</a>
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

  function handleSeedDatabase() {
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?country=us&apiKey=e9d9b57095a94eeb8d6287c3f271bc42"
      )
      .then((res) => {
        seedDatabase(res.data.articles);
      });

    axios
      .get(
        `https://newsapi.org/v2/everything?q=apple&from=2020-09-01&to=2020-09-01&sortBy=popularity&apiKey=e9d9b57095a94eeb8d6287c3f271bc42`
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
        url: "http://localhost:8000/api/post/" + slug + "/",
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
            axios
              .post("http://localhost:8000/api/posts/", json, {
                headers: {
                  "Content-Type": "application/json",
                },
              })
              .then((res) => {})
              .catch((error) => {
                console.log(error.response.data);
              });
          }
        });
      return true;
    });
  }

  useEffect(() => {
    axios.get("http://localhost:8000/api/posts/").then((res) => {
      setGridItem(res.data);
    });
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?country=us&apiKey=e9d9b57095a94eeb8d6287c3f271bc42"
      )
      .then((res) => {
        seedDatabase(res.data.articles);
      });

    axios
      .get(
        `https://newsapi.org/v2/everything?q=apple&from=2020-09-01&to=2020-09-01&sortBy=popularity&apiKey=e9d9b57095a94eeb8d6287c3f271bc42`
      )
      .then((res) => {
        seedDatabase(res.data.articles);
      });

    // Access Token dfa2ee94942f9bd75f03fe409c46896b0761a434
    // Refresh Token: 3a25fbb849f3424bf5fb232e67e56ffa89e92881

    // Client id: 3572fd91cd88d06
    // Client secret: "3a25fbb849f3424bf5fb232e67e56ffa89e92881",

    // Secret: d0da4898b887f7e32c5a00d666cd56d501735d57

    // const url = "https://api.imgur.com/3/account/me/images";

    // const authorize = "https://api.imgur.com/oauth2/authorize";

    // const token = "	https://api.imgur.com/oauth2/token";

    // let header = new Headers();

    // headers.append("Content-Type", "application/json");
    // headers.append("Accept", "application/json");

    // headers.append("Access-Control-Allow-Origin", "*");
    // headers.append("Access-Control-Allow-Headers", "accept, content-type");

    // headers.append("GET", "POST", "OPTIONS");

    // headers.append("Authorization", "Client-ID 3572fd91cd88d06");

    // header.append("response_type", "token");

    // header.append("client_id", "3572fd91cd88d06");

    // axios({
    //   method: "get",
    //   url: token,
    //   headers: {
    //     "Access-Control-Allow-Origin": "*",
    //     "Access-Control-Allow-Credentials": true,
    //     "Access-Control-Allow-Headers": "*",
    //     "Access-Control-Allow-Methods": "GET, POST, OPTIONS, PUT, DELETE",
    //     client_id: "ed8cb77a5110fac",
    //     client_secret: "d0da4898b887f7e32c5a00d666cd56d501735d57",
    //     grant_type: "authorization_code",
    //     code: "709703f9d88ae58a3c0cae7ba7ba8db0998b109c",
    //   },
    // }).then((res) => {
    //   console.log(res);
    // });
    // axios({
    //   method: "get",
    //   url: "https://api.imgur.com/oauth2/authorize",
    //   headers: {
    //     "Access-Control-Allow-Headers": "Content-Type",
    //     Authorization: "Client-ID " + "3572fd91cd88d06",
    //     response_type: "token",
    //     client_id: "3572fd91cd88d06",
    //     // "Cache-Control": null, // this is what will match the response headers
    //     // "X-Requested-With": null,
    //   },
    // })
    //   .then((response) => {
    //     console.log(response);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });

    // axios({
    //   method: "get",
    //   url: "https://api.imgur.com/3/account/me/images",
    //   headers: {
    //     Authorization: "Bearer 2edfdeab017d12db5ccfc2ccdc4ee1b6344ed9c8",
    //   },
    // })
    //   .then(function (response) {
    //     response.data.data.map((response, i) =>
    //       blogCardImage.array.push(response.link)
    //     );
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });

    return () => {
      setGridItem(false);
      seedDatabase(false);
      setAuthor(false);
    };
  }, []);

  return (
    <div className="cd-section" id="cards">
      <div className={classes.sectionWhite + " " + classes.cardPaddingTop}>
        <div></div>
        {/* BLOG CARDS START */}
        <div>
          <div className={classes.container}>
            {/* <div className={classes.title}>
                <h2>Cards</h2>
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
                  onClick={() => handleSeedDatabase()}
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
