/*eslint-disable*/
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
// import List from "@material-ui/core/List";
// import ListItem from "@material-ui/core/ListItem";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Face from "@material-ui/icons/Face";
import Email from "@material-ui/icons/Email";
import GridContainer from "components/frontend/Grid/GridContainer.js";
import GridItem from "components/frontend/Grid/GridItem.js";
import Button from "components/frontend/CustomButtons/Button.js";
import Card from "components/frontend/Card/Card.js";
import CardBody from "components/frontend/Card/CardBody.js";
import CardHeader from "components/frontend/Card/CardHeader.js";
import CustomInput from "components/frontend/CustomInput/CustomInput.js";

import loginPageStyle from "assets/jss/frontend/views/loginPageStyle.js";
import NavBar from "views/frontend/_partials/NavBar";

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

  const submitForm = (e) => {
    e.preventDefault();

    AuthService.login(username, password).then(() => {
      history.push("/");
      window.location.reload();
    });
  };

  useEffect(() => {
    window.scrollTo(0, 0);

    document.body.scrollTop = 0;

    return () => {};
  }, []);

  const classes = useStyles();

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
            {/**
             * Login page
             */}
            <GridItem xs={12} sm={12} md={4}>
              <Card>
                <form className={classes.form}>
                  <CardHeader
                    color="primary"
                    signup
                    className={classes.cardHeader}
                  >
                    <h4 className={classes.cardTitle}>Login</h4>
                    {/* <div className={classes.socialLine}>
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
                    </div> */}
                  </CardHeader>
                  {/* <p className={classes.description + " " + classes.textCenter}>
                    Or Be Classical
                  </p> */}
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
                            <Face className={classes.inputAdornmentIcon} />
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
