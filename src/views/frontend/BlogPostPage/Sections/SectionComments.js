import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Tooltip from "@material-ui/core/Tooltip";
// @material-ui/icons
import Reply from "@material-ui/icons/Reply";
import Favorite from "@material-ui/icons/Favorite";
// core components
import GridContainer from "components/frontend/Grid/GridContainer.js";
import GridItem from "components/frontend/Grid/GridItem.js";
import Media from "components/frontend/Media/Media.js";
import Button from "components/frontend/CustomButtons/Button.js";
import CustomInput from "components/frontend/CustomInput/CustomInput.js";

import placeholder from "assets/img/placeholder.jpg";

import sectionCommentsStyle from "assets/jss/frontend/views/blogPostSections/sectionCommentsStyle.js";
import style from "assets/jss/frontend/views/componentsSections/contentAreas.js";

import { baseApiUrl } from "services/api";
import { isEmpty, getRandomElementFromArray } from "utils/functions";
import Context from "utils/context";
import { profileArray } from "utils/images";

const useStyles = makeStyles(sectionCommentsStyle);
const commentBoxStyles = makeStyles(style);

const SectionComments = (props) => {
  const { ...rest } = props;

  const userContext = useContext(Context);

  const sectionCommentsClasses = useStyles();

  const commentBoxClasses = commentBoxStyles();

  const [isFetching, setIsFetching] = useState(true);

  const [commentDetails, setCommentDetails] = useState({
    length: 0,
    data: [],
  });

  const [storeComment, setStoreComment] = useState({
    name: "",
    email: "",
    content: "",
    post_id: 0,
  });

  const getComment = () => {
    if (isFetching) {
      axios.get(baseApiUrl + `/post/${rest.slug}/`).then((res) => {
        setStoreComment({
          ...storeComment,
          post_id: res.data.id,
        });
      });
      axios
        .get(baseApiUrl + `/post/${rest.slug}/comments/`)
        .then((res) => {
          if (res.data.length > 0) {
            setCommentDetails({
              length: res.data.length,
              data: res.data,
            });
          }
        })
        .catch((error) => {
          console.log(error.response.status);
        });
    }

    if (userContext.isAuthenticated) {
      storeComment.name = userContext.user.username;

      storeComment.email = userContext.user.email;
    }

    setIsFetching(false);
  };

  const handleComment = (e) => {
    e.preventDefault();

    axios
      .post(baseApiUrl + `/post/${rest.slug}/comments/`, storeComment)
      .then((res) => {
        setIsFetching(true);
        document.getElementById("content").value = "";
        getComment();
      })
      .catch((error) => {});
  };

  useEffect(() => {
    getComment();
    return () => {
      getComment();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userContext, storeComment, isFetching]);

  return (
    <div className={sectionCommentsClasses.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={10} md={8}>
          <div>
            <h3 className={sectionCommentsClasses.title}>
              {commentDetails.length} Comments
            </h3>
            {commentDetails.length > 0 ? (
              commentDetails.data.map((response, key) => (
                <Media
                  key={key}
                  avatar={getRandomElementFromArray(profileArray)}
                  title={
                    <span>
                      {response.name} <small>· 7 minutes ago</small>
                    </span>
                  }
                  body={
                    <p className={sectionCommentsClasses.color555}>
                      {response.content}
                    </p>
                  }
                  footer={
                    <div>
                      <Tooltip
                        id="tooltip-tina"
                        title="Reply to comment"
                        placement="top"
                        classes={{ tooltip: sectionCommentsClasses.tooltip }}
                      >
                        <Button
                          color="primary"
                          simple
                          className={sectionCommentsClasses.footerButtons}
                        >
                          <Reply
                            className={sectionCommentsClasses.footerIcons}
                          />{" "}
                          Reply
                        </Button>
                      </Tooltip>

                      <Button
                        color="danger"
                        simple
                        className={sectionCommentsClasses.footerButtons}
                      >
                        <Favorite
                          className={sectionCommentsClasses.footerIcons}
                        />{" "}
                        243
                      </Button>
                    </div>
                  }
                />
              ))
            ) : (
              <h3 className={sectionCommentsClasses.title}>
                There is no comment available at the moment. Be the first one!
              </h3>
            )}
          </div>
          <h3 className={sectionCommentsClasses.title}>Post your comment</h3>
          {isEmpty(userContext.user) ? (
            <Media
              avatar={placeholder}
              body={
                <div>
                  <GridContainer>
                    <GridItem xs={12} sm={6} md={6}>
                      <CustomInput
                        id="not-logged-name"
                        formControlProps={{
                          fullWidth: true,
                        }}
                        inputProps={{
                          placeholder: "Your Name",
                          onChange: (e) => {
                            setStoreComment({
                              ...storeComment,
                              name: e.target.value,
                            });
                          },
                        }}
                      />
                    </GridItem>
                    <GridItem xs={12} sm={6} md={6}>
                      <CustomInput
                        id="not-logged-email"
                        formControlProps={{
                          fullWidth: true,
                        }}
                        inputProps={{
                          placeholder: "Your Email",
                          onChange: (e) => {
                            setStoreComment({
                              ...storeComment,
                              email: e.target.value,
                            });
                          },
                        }}
                      />
                    </GridItem>
                  </GridContainer>
                  <CustomInput
                    id="content"
                    formControlProps={{
                      fullWidth: true,
                    }}
                    // value={storeComment.content}
                    inputProps={{
                      multiline: true,
                      rows: 6,
                      placeholder: " Write some nice stuff or nothing...",
                      onChange: (e) => {
                        setStoreComment({
                          ...storeComment,
                          content: e.target.value,
                        });
                      },
                    }}
                  />
                </div>
              }
              footer={
                <div className={commentBoxClasses.signInButton}>
                  <h6>SIGN IN WITH</h6>
                  <Button justIcon round color="twitter">
                    <i className="fab fa-twitter" />
                  </Button>
                  <Button justIcon round color="facebook">
                    <i className="fab fa-facebook-square" />
                  </Button>
                  <Button justIcon round color="google">
                    <i className="fab fa-google-plus-square" />
                  </Button>
                  <Button
                    onClick={(e) => {
                      handleComment(e);
                    }}
                    color="primary"
                    className={commentBoxClasses.floatRight}
                  >
                    Post comment
                  </Button>
                </div>
              }
            />
          ) : (
            <Media
              avatar={getRandomElementFromArray(profileArray)}
              body={
                <CustomInput
                  labelText=" Write some nice stuff or nothing..."
                  id="content"
                  value={storeComment.content}
                  formControlProps={{
                    fullWidth: true,
                  }}
                  inputProps={{
                    onChange: (e) => {
                      setStoreComment({
                        ...storeComment,
                        content: e.target.value,
                      });
                    },
                    multiline: true,
                    rows: 5,
                  }}
                />
              }
              footer={
                <Button
                  onClick={(e) => {
                    handleComment(e);
                  }}
                  color="primary"
                  round
                  className={sectionCommentsClasses.footerButtons}
                >
                  Post comment
                </Button>
              }
            />
          )}
        </GridItem>
      </GridContainer>
    </div>
  );
};

export default SectionComments;
