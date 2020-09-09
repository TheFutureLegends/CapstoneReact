import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
// For TinyMCE Rich Text Editor
import { Editor } from "@tinymce/tinymce-react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import FormLabel from "@material-ui/core/FormLabel";

// core components
import GridContainer from "components/backend/Grid/GridContainer.js";
import GridItem from "components/backend/Grid/GridItem.js";
import CustomInput from "components/backend/CustomInput/CustomInput.js";
import Button from "components/frontend/CustomButtons/Button.js";
import Card from "components/backend/Card/Card.js";
import CardHeader from "components/backend/Card/CardHeader.js";
import CardText from "components/backend/Card/CardText.js";
import CardBody from "components/backend/Card/CardBody.js";

// Utilities
import AuthHeader from "services/auth.header";
import Context from "utils/context";
import { baseApiUrl } from "services/api";
import { tinymce } from "key.js";

import regularFormStyles from "assets/jss/backend/views/regularFormsStyle";

const regularFormStyle = makeStyles(regularFormStyles);

const CreateForm = () => {
  const authUser = useContext(Context);

  const [title, setTitle] = useState("");

  const [description, setDescription] = useState("");

  const [urlToImage, setUrlToImage] = useState("");

  const [content, setContent] = useState("");

  const regularFormClasses = regularFormStyle();

  function handleTitleChange(e) {
    setTitle(e.target.value);
  }

  function handleDescriptionChange(e) {
    setDescription(e.target.value);
  }

  function handleUrlChange(e) {
    setUrlToImage(e.target.value);
  }

  function handleEditorChange(content, editor) {
    setContent(content);
  }

  function handleSubmit(e) {
    e.preventDefault();

    console.log("Title: " + title);

    console.log("URL To Image: " + urlToImage);

    console.log("Description: " + description);

    console.log("Content: " + content);

    console.log("Users: ");

    console.log(authUser);

    axios
      .post(
        baseApiUrl + "/post/store",
        {
          title: title,
          description: description,
          content: content,
          urlToImage: urlToImage,
          author_id: authUser.id,
        },
        {
          headers: AuthHeader.authHeader(),
        }
      )
      .then((response) => {
        window.location.reload();
      })
      .catch((error) => {
        console.log(error.response.status);
      });
  }

  useEffect(() => {
    // console.log("Content: " + content);
  }, [content]);

  return (
    <GridItem xs={12} sm={12} md={12}>
      <Card>
        <CardHeader color="rose" text>
          <CardText color="rose">
            <h4 className={regularFormClasses.cardTitle}>Form Elements</h4>
          </CardText>
        </CardHeader>
        <CardBody>
          <form>
            <GridContainer>
              <GridItem xs={12} sm={2}>
                <FormLabel className={regularFormClasses.labelHorizontal}>
                  Title
                </FormLabel>
              </GridItem>
              <GridItem xs={12} sm={10}>
                <CustomInput
                  id="help-text"
                  formControlProps={{
                    fullWidth: true,
                  }}
                  inputProps={{
                    type: "text",
                    placeholder: "Please enter title for your post",
                    onChange: handleTitleChange,
                  }}
                  helpText="A block of help text that breaks onto a new line."
                />
              </GridItem>
            </GridContainer>
            <GridContainer>
              <GridItem xs={12} sm={2}>
                <FormLabel className={regularFormClasses.labelHorizontal}>
                  Image URL
                </FormLabel>
              </GridItem>
              <GridItem xs={12} sm={10}>
                <CustomInput
                  id="pass"
                  formControlProps={{
                    fullWidth: true,
                  }}
                  inputProps={{
                    type: "text",
                    autoComplete: "off",
                    onChange: handleUrlChange,
                  }}
                />
              </GridItem>
            </GridContainer>
            <GridContainer>
              <GridItem xs={12} sm={2}>
                <FormLabel className={regularFormClasses.labelHorizontal}>
                  Description
                </FormLabel>
              </GridItem>
              <GridItem xs={12} sm={10}>
                <CustomInput
                  id="placeholder"
                  formControlProps={{
                    fullWidth: true,
                  }}
                  inputProps={{
                    placeholder: "Please describe your post",
                    onChange: handleDescriptionChange,
                  }}
                />
              </GridItem>
            </GridContainer>
            <br />
            <GridContainer>
              <GridItem xs={12} sm={2}>
                <FormLabel className={regularFormClasses.labelHorizontal}>
                  Content
                </FormLabel>
              </GridItem>
              <GridItem xs={12} sm={10}>
                {/* <CustomInput
                  id="placeholder"
                  formControlProps={{
                    fullWidth: true,
                  }}
                  inputProps={{
                    placeholder: "Please describe your post",
                  }}
                /> */}
                <Editor
                  apiKey={tinymce}
                  init={{
                    height: 500,
                    placeholder: "Fill in the content for your post",
                    menubar: false,
                    plugins: [
                      "advlist autolink lists link image charmap print preview anchor searchreplace visualblocks code fullscreen insertdatetime media table paste code help wordcount",
                    ],
                    toolbar:
                      "undo redo | formatselect | bold italic backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat",
                  }}
                  onEditorChange={handleEditorChange}
                />
              </GridItem>
            </GridContainer>
          </form>
        </CardBody>
      </Card>
      <GridContainer>
        <GridItem xs={12} sm={12}>
          <Button
            type="button"
            color="success"
            onClick={(e) => handleSubmit(e)}
          >
            Create new post
          </Button>
        </GridItem>
      </GridContainer>
    </GridItem>
  );
};

export default CreateForm;
