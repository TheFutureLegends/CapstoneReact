import React, { useContext, useState, useEffect, forwardRef } from "react";
import axios from "axios";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// import SweetAlert from "react-bootstrap-sweetalert";

// For modal
import Slide from "@material-ui/core/Slide";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import CustomInput from "components/backend/CustomInput/CustomInput.js";
import FormLabel from "@material-ui/core/FormLabel";
import { Editor } from "@tinymce/tinymce-react";
// import tinymce from "tinymce";
// @material-ui/icons
import Assignment from "@material-ui/icons/Assignment";
import Dvr from "@material-ui/icons/Dvr";
import Favorite from "@material-ui/icons/Favorite";
import Close from "@material-ui/icons/Close";
// core components
import GridContainer from "components/backend/Grid/GridContainer.js";
import GridItem from "components/backend/Grid/GridItem.js";
import Button from "components/backend/CustomButtons/Button.js";
import Card from "components/backend/Card/Card.js";
import CardBody from "components/backend/Card/CardBody.js";
import CardIcon from "components/backend/Card/CardIcon.js";
import CardHeader from "components/backend/Card/CardHeader.js";
import ReactTable from "components/backend/ReactTable/ReactTable.js";

import { cardTitle } from "assets/jss/backend.js";

import Context from "utils/context";
import { BACKEND_URL } from "services/api";
import AuthHeader from "services/auth.header";
import AuthService from "services/auth.service";
import { tinymce } from "key.js";

import modalStyle from "assets/jss/backend/views/notificationsStyle.js";
import regularFormStyles from "assets/jss/backend/views/regularFormsStyle";
// import sweetAlertStyles from "assets/jss/backend/views/sweetAlertStyle.js";

const styles = {
  cardIconTitle: {
    ...cardTitle,
    marginTop: "15px",
    marginBottom: "0px",
  },
};

const useStyles = makeStyles(styles);

const modalStyles = makeStyles(modalStyle);

const regularFormStyle = makeStyles(regularFormStyles);

// const sweetAlertStyle = makeStyles(sweetAlertStyles);

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

const Posts = () => {
  // Define class for modal
  const modalClasses = modalStyles();
  const regularFormClasses = regularFormStyle();

  // this will use isAuthenticated.data
  // inside store/UserContextProvider.js
  const value = useContext(Context);

  // this will use as first step to push new data of React Table
  const [isMapping, setIsMapping] = useState(true);

  const [dataTable, setDataTable] = useState({
    headerRow: ["Title", "Description", "Visit", "Created At", "Actions"],
    footerRow: ["Title", "Description", "Visit", "Created At", "Actions"],
    dataRows: [],
  });

  const [noticeModal, setNoticeModal] = useState(false);

  // This state will manage fetched post to edit
  // eslint-disable-next-line
  const [slug, setSlug] = useState({
    slug: "",
  });

  // eslint-disable-next-line
  const [post, setPost] = useState({
    title: "",
    description: "",
    content: "",
    urlToImage: "",
    author_id: "",
  });

  const [data, setData] = useState([]);

  function openEditModal(e) {
    axios
      .get(BACKEND_URL + `/api/post/${slug.slug}/edit`, {
        headers: {
          Authorization: AuthHeader.authBearerHeader(),
        },
      })
      .then((response) => {
        setPost({
          title: response.data.title,
          description: response.data.description,
          content: response.data.content,
          urlToImage: response.data.urlToImage,
          author_id: value.user.id,
        });

        setNoticeModal(true);
      })
      .catch((error) => {
        if (error.response.status === 401) {
          AuthService.logout();
        }
      });
  }

  function closeModal(e) {
    e.preventDefault();

    setPost({
      title: "",
      description: "",
      content: "",
      urlToImage: "",
      author_id: value.user.id,
    });

    setNoticeModal(false);
  }

  // Set data from value variables to dataRows
  function setDataRows() {
    setDataTable({
      ...dataTable,
      dataRows: value.data,
    });
  }

  // push data to React Table
  function setReactTable() {
    if (data.length < dataTable.dataRows.length && isMapping) {
      // eslint-disable-next-line
      dataTable.dataRows.map((prop, key) => {
        data.push({
          id: key,
          title: prop[0],
          description: prop[1],
          visit: prop[2],
          actions: (
            // we've added some custom button actions
            <div className="actions-right">
              {/* use this button to add a like kind of action */}
              <Button
                justIcon
                round
                simple
                onClick={(e) => {
                  e.preventDefault();
                  // eslint-disable-next-line
                  // let obj = data.find((o) => o.id === key);

                  // console.log(string_to_slug(obj.title));

                  console.log(e.currentTarget.id);
                  // alert(
                  //   "You've clicked LIKE button on \n{ \nName: " +
                  //     obj.name +
                  //     ", \nposition: " +
                  //     obj.position +
                  //     ", \noffice: " +
                  //     obj.office +
                  //     ", \nage: " +
                  //     obj.age +
                  //     "\n}."
                  // );
                  // console.log("Clicked: " + obj.title);
                }}
                color="info"
                className="like"
                id={prop[3]}
              >
                <Favorite />
              </Button>{" "}
              {/* use this button to add a edit kind of action */}
              <Button
                justIcon
                round
                simple
                onClick={(e) => {
                  slug.slug = e.currentTarget.id;

                  openEditModal(e);
                }}
                color="warning"
                className="edit"
                id={prop[3]}
              >
                <Dvr />
              </Button>{" "}
              {/* use this button to remove the data row */}
              <Button
                justIcon
                round
                simple
                onClick={(e) => {
                  var newData = data;
                  newData.find((o, i) => {
                    if (o.id === key) {
                      // here you should add some custom code so you can delete the data
                      // from this component and from your server as well
                      newData.splice(i, 1);
                      return true;
                    }
                    return false;
                  });
                  setData([...newData]);

                  var id = e.currentTarget.id;
                  axios
                    .delete(BACKEND_URL + `/api/post/${id}/delete`, {
                      headers: {
                        Authorization: AuthHeader.authBearerHeader(),
                      },
                    })
                    .then((response) => {
                      console.log(response);
                    })
                    .catch((error) => {
                      console.log(error.response);
                    });
                }}
                color="danger"
                className="remove"
                id={prop[3]}
              >
                <Close />
              </Button>{" "}
            </div>
          ),
        });
      });

      // Change it to false so that it will not loop
      setIsMapping(false);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();

    axios
      .put(BACKEND_URL + `/api/post/${slug.slug}/update`, post, {
        headers: {
          Authorization: AuthHeader.authBearerHeader(),
        },
      })
      .then((response) => {
        window.location.reload();
      });
  }

  const classes = useStyles();

  useEffect(() => {
    // ComponentDidMount
    setDataRows(dataTable.dataRows);
    setReactTable();

    return () => {
      setReactTable();
    };
    // eslint-disable-next-line
  }, [
    data,
    dataTable.dataRows,
    isMapping,
    value.data,
    value.user,
    noticeModal,
    slug,
    post,
  ]);

  return (
    <GridContainer>
      <GridItem xs={12}>
        <Card>
          <CardHeader color="primary" icon>
            <CardIcon color="primary">
              <Assignment />
            </CardIcon>
            <h4 className={classes.cardIconTitle}>Posts List</h4>
          </CardHeader>
          <CardBody>
            <ReactTable
              columns={[
                {
                  Header: "Title",
                  accessor: "title",
                },
                {
                  Header: "Description",
                  accessor: "description",
                },
                {
                  Header: "Visit",
                  accessor: "visit",
                },
                {
                  Header: "Actions",
                  accessor: "actions",
                },
              ]}
              data={data}
            />
          </CardBody>
        </Card>
      </GridItem>

      <Dialog
        classes={{
          root: modalClasses.center + " " + modalClasses.modalRoot,
          paper: modalClasses.modal,
        }}
        open={noticeModal}
        fullWidth={true}
        maxWidth="lg"
        TransitionComponent={Transition}
        keepMounted
        onClose={(e) => closeModal(e)}
        aria-labelledby="notice-modal-slide-title"
        aria-describedby="notice-modal-slide-description"
      >
        <DialogTitle
          id="notice-modal-slide-title"
          disableTypography
          className={modalClasses.modalHeader}
        >
          <Button
            justIcon
            className={modalClasses.modalCloseButton}
            key="close"
            aria-label="Close"
            color="transparent"
            onClick={(e) => closeModal(e)}
          >
            <Close className={modalClasses.modalClose} />
          </Button>
          <h4 className={modalClasses.modalTitle}>{post.title}</h4>
        </DialogTitle>
        <DialogContent
          id="notice-modal-slide-description"
          className={modalClasses.modalBody}
        >
          {/* DIALOG CONTENT START */}
          <GridContainer>
            <GridItem xs={12} sm={2}>
              <FormLabel className={regularFormClasses.labelHorizontal}>
                Title
              </FormLabel>
            </GridItem>
            <GridItem xs={12} sm={10}>
              <CustomInput
                id="title"
                formControlProps={{
                  fullWidth: true,
                }}
                inputProps={{
                  type: "text",
                  placeholder: "Please enter title for your post",
                  value: post.title,
                  onChange: (e) =>
                    setPost({
                      ...post,
                      title: e.target.value,
                    }),
                }}
                helpText="A block of help text that breaks onto a new line."
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
                id="description"
                formControlProps={{
                  fullWidth: true,
                }}
                inputProps={{
                  placeholder: "Please describe your post",
                  value: post.description,
                  onChange: (e) =>
                    setPost({
                      ...post,
                      description: e.target.value,
                    }),
                }}
              />
            </GridItem>
          </GridContainer>

          <GridContainer>
            <GridItem xs={12} sm={2}>
              <FormLabel className={regularFormClasses.labelHorizontal}>
                URL To Image
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
                  value: post.urlToImage,
                  onChange: (e) =>
                    setPost({
                      ...post,
                      urlToImage: e.target.value,
                    }),
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
              <Editor
                apiKey={tinymce}
                value={post.content}
                init={{
                  height: 500,
                  menubar: true,
                  branding: false,
                  plugins: [
                    "advlist autolink lists link image charmap print preview anchor searchreplace visualblocks code fullscreen insertdatetime media table paste code help wordcount",
                  ],
                  toolbar:
                    "undo redo | formatselect | bold italic backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat",
                }}
                onEditorChange={(content, editor) => {
                  setPost({
                    ...post,
                    content: content,
                  });
                }}
              />
            </GridItem>
          </GridContainer>
          {/* DIALOG CONTENT END */}
        </DialogContent>
        <DialogActions
          className={
            modalClasses.modalFooter + " " + modalClasses.modalFooterCenter
          }
        >
          <Button onClick={(e) => handleSubmit(e)} color="info" round>
            Sounds Good
          </Button>
        </DialogActions>
      </Dialog>
    </GridContainer>
  );
};

export default Posts;
