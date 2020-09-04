/*eslint-disable*/
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
// import List from "@material-ui/core/List";
// import ListItem from "@material-ui/core/ListItem";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Email from "@material-ui/icons/Email";
// import Favorite from "@material-ui/icons/Favorite";
// import Face from "@material-ui/icons/Face";
// core components
// import Header from "components/Header/Header.js";
// import HeaderLinks from "components/Header/HeaderLinks.js";
// import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import CustomInput from "components/CustomInput/CustomInput.js";

import loginPageStyle from "assets/jss/material-kit-pro-react/views/loginPageStyle.js";
import NavBar from "views/_partials/NavBar";

import image from "assets/img/bg7.jpg";
import AuthService from "services/auth.service";

const useStyles = makeStyles(loginPageStyle);

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const onChangeUsername = (e) => {
    const username_value = e.target.value;

    setUsername(username_value);
  };

  const onChangePassword = (e) => {
    const password_value = e.target.value;

    setPassword(password_value);
  };

  let history = useHistory();

  function submitForm(e) {
    e.preventDefault();

    // HandleLogin(username, password);

    AuthService.login(username, password).then(() => {
      history.push("/");
      window.location.reload();
    });
  }

  // let history = useHistory();

  // function handleRedirect() {
  //   console.log(redirect);

  //   if (redirect) {
  //     history.push("/");
  //   }
  // }

  useEffect(() => {
    window.scrollTo(0, 0);

    document.body.scrollTop = 0;

    return () => {};
  }, []);

  const classes = useStyles();

  console.log(isLoggedIn);

  return (
    <div>
      <NavBar></NavBar>
      <div
        className={classes.pageHeader}
        style={{
          backgroundImage: "url(" + image + ")",
          backgroundSize: "cover",
          backgroundPosition: "top center",
        }}
      >
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={4}>
              <Card>
                <form className={classes.form}>
                  <CardHeader
                    color="primary"
                    signup
                    className={classes.cardHeader}
                  >
                    <h4 className={classes.cardTitle}>Login</h4>
                    <div className={classes.socialLine}>
                      <Button
                        justIcon
                        color="transparent"
                        className={classes.iconButtons}
                        onClick={(e) => e.preventDefault()}
                      >
                        <i className="fab fa-twitter" />
                      </Button>
                      <Button
                        justIcon
                        color="transparent"
                        className={classes.iconButtons}
                        onClick={(e) => e.preventDefault()}
                      >
                        <i className="fab fa-facebook" />
                      </Button>
                      <Button
                        justIcon
                        color="transparent"
                        className={classes.iconButtons}
                        onClick={(e) => e.preventDefault()}
                      >
                        <i className="fab fa-google-plus-g" />
                      </Button>
                    </div>
                  </CardHeader>
                  <p className={classes.description + " " + classes.textCenter}>
                    Or Be Classical
                  </p>
                  <CardBody signup>
                    <CustomInput
                      id="email"
                      formControlProps={{
                        fullWidth: true,
                      }}
                      value={username}
                      inputProps={{
                        placeholder: "Username...",
                        type: "email",
                        onChange: onChangeUsername,
                        startAdornment: (
                          <InputAdornment position="start">
                            <Email className={classes.inputIconsColor} />
                          </InputAdornment>
                        ),
                      }}
                    />
                    <CustomInput
                      id="pass"
                      formControlProps={{
                        fullWidth: true,
                      }}
                      inputProps={{
                        placeholder: "Password",
                        type: "password",
                        onChange: onChangePassword,
                        startAdornment: (
                          <InputAdornment position="start">
                            <Icon className={classes.inputIconsColor}>
                              lock_utline
                            </Icon>
                          </InputAdornment>
                        ),
                        autoComplete: "off",
                      }}
                    />
                  </CardBody>
                  <div className={classes.textCenter}>
                    <Button
                      simple
                      color="primary"
                      size="lg"
                      onClick={(e) => submitForm(e)}
                    >
                      Login
                    </Button>
                  </div>
                </form>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
        {/* <FooterBar></FooterBar> */}
      </div>
    </div>
  );
};

export default LoginPage;
