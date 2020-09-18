/*eslint-disable*/
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
// import List from "@material-ui/core/List";
// import ListItem from "@material-ui/core/ListItem";
import Icon from "@material-ui/core/Icon";
import Check from "@material-ui/icons/Check";
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
import signupPageStyle from "assets/jss/frontend/views/signupPageStyle.js";
import NavBar from "views/frontend/_partials/NavBar";

import image from "assets/img/bg7.jpg";
import AuthService from "services/auth.service";

const useStyles = makeStyles(loginPageStyle);
const signupStyles = makeStyles(signupPageStyle);

const RegisterPage = () => {
  const classes = useStyles();

  const signupClasses = signupStyles();

  const [registerDetail, setRegisterDetail] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [checked, setChecked] = useState([0]);

  let history = useHistory();

  const handleToggle = (value) => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];
    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    setChecked(newChecked);
  };

  const submitForm = (e) => {
    e.preventDefault();

    AuthService.register(registerDetail).then(() => {
      history.push("/login");
      window.location.reload();
    });
  };

  useEffect(() => {
    window.scrollTo(0, 0);

    document.body.scrollTop = 0;

    return () => {};
  }, []);

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
                    <h4 className={classes.cardTitle}>Register</h4>
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
                      id="username"
                      formControlProps={{
                        fullWidth: true,
                      }}
                      value={registerDetail.username}
                      inputProps={{
                        placeholder: "Username...",
                        type: "text",
                        onChange: (e) => {
                          setRegisterDetail({
                            ...registerDetail,
                            username: e.target.value,
                          });
                        },
                        startAdornment: (
                          <InputAdornment position="start">
                            <Face className={classes.inputAdornmentIcon} />
                          </InputAdornment>
                        ),
                      }}
                    />
                    <CustomInput
                      id="email"
                      formControlProps={{
                        fullWidth: true,
                      }}
                      value={registerDetail.email}
                      inputProps={{
                        placeholder: "Email...",
                        type: "email",
                        onChange: (e) => {
                          setRegisterDetail({
                            ...registerDetail,
                            email: e.target.value,
                          });
                        },
                        startAdornment: (
                          <InputAdornment position="start">
                            <Email className={classes.inputAdornmentIcon} />
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
                        onChange: (e) => {
                          setRegisterDetail({
                            ...registerDetail,
                            password: e.target.value,
                          });
                        },
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
                    <FormControlLabel
                      classes={{
                        label: signupClasses.label,
                      }}
                      control={
                        <Checkbox
                          tabIndex={-1}
                          onClick={() => handleToggle(1)}
                          checkedIcon={
                            <Check className={signupClasses.checkedIcon} />
                          }
                          icon={
                            <Check className={signupClasses.uncheckedIcon} />
                          }
                          classes={{
                            checked: signupClasses.checked,
                            root: signupClasses.checkRoot,
                          }}
                          checked={checked.indexOf(1) !== -1 ? true : false}
                        />
                      }
                      label={
                        <span>
                          I agree to the{" "}
                          <a href="#pablo">terms and conditions</a>.
                        </span>
                      }
                    />
                  </CardBody>
                  <div className={classes.textCenter}>
                    <Button
                      simple
                      color="primary"
                      size="lg"
                      onClick={(e) => submitForm(e)}
                    >
                      Register
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

export default RegisterPage;
