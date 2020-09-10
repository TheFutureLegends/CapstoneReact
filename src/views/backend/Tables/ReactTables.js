import React, { useContext, useState, useEffect, createRef } from "react";

import axios from "axios";
import { baseApiUrl } from "services/api";
import { substring_text } from "utils/functions";
import AuthHeader from "services/auth.header";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
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

const styles = {
  cardIconTitle: {
    ...cardTitle,
    marginTop: "15px",
    marginBottom: "0px",
  },
};

const useStyles = makeStyles(styles);

const ReactTables = () => {
  const reactTable = createRef();

  const value = useContext(Context);

  const [isFetching, setIsFetching] = useState(true);

  const [isMapping, setIsMapping] = useState(false);

  const [dataTable, setDataTable] = useState({
    headerRow: ["Title", "Description", "Visit", "Created At", "Actions"],
    footerRow: ["Title", "Description", "Visit", "Created At", "Actions"],
    dataRows: [],
  });

  const [data, setData] = React.useState([]);

  function setDataRows() {
    setDataTable({ ...dataTable, dataRows: value.data });
  }

  function setReactTable() {
    if (data.length < dataTable.dataRows.length) {
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
                onClick={() => {
                  let obj = data.find((o) => o.id === key);

                  console.log(obj);

                  console.log(key);
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
              >
                <Favorite />
              </Button>{" "}
              {/* use this button to add a edit kind of action */}
              <Button
                justIcon
                round
                simple
                onClick={() => {
                  // let obj = data.find((o) => o.id === key);
                  // alert(
                  //   "You've clicked EDIT button on \n{ \nName: " +
                  //     obj.name +
                  //     ", \nposition: " +
                  //     obj.position +
                  //     ", \noffice: " +
                  //     obj.office +
                  //     ", \nage: " +
                  //     obj.age +
                  //     "\n}."
                  // );
                }}
                color="warning"
                className="edit"
              >
                <Dvr />
              </Button>{" "}
              {/* use this button to remove the data row */}
              <Button
                justIcon
                round
                simple
                onClick={() => {
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
                }}
                color="danger"
                className="remove"
              >
                <Close />
              </Button>{" "}
            </div>
          ),
        });

        // setData([
        //   ...data,
        //   {
        //     id: key,
        //     title: prop[0],
        //     description: prop[1],
        //     visit: prop[2],
        //     actions: (
        //       // we've added some custom button actions
        //       <div className="actions-right">
        //         {/* use this button to add a like kind of action */}
        //         <Button
        //           justIcon
        //           round
        //           simple
        //           onClick={() => {
        //             let obj = data.find((o) => o.id === key);

        //             console.log(obj);

        //             console.log(key);
        //             // alert(
        //             //   "You've clicked LIKE button on \n{ \nName: " +
        //             //     obj.name +
        //             //     ", \nposition: " +
        //             //     obj.position +
        //             //     ", \noffice: " +
        //             //     obj.office +
        //             //     ", \nage: " +
        //             //     obj.age +
        //             //     "\n}."
        //             // );
        //             // console.log("Clicked: " + obj.title);
        //           }}
        //           color="info"
        //           className="like"
        //         >
        //           <Favorite />
        //         </Button>{" "}
        //         {/* use this button to add a edit kind of action */}
        //         <Button
        //           justIcon
        //           round
        //           simple
        //           onClick={() => {
        //             // let obj = data.find((o) => o.id === key);
        //             // alert(
        //             //   "You've clicked EDIT button on \n{ \nName: " +
        //             //     obj.name +
        //             //     ", \nposition: " +
        //             //     obj.position +
        //             //     ", \noffice: " +
        //             //     obj.office +
        //             //     ", \nage: " +
        //             //     obj.age +
        //             //     "\n}."
        //             // );
        //           }}
        //           color="warning"
        //           className="edit"
        //         >
        //           <Dvr />
        //         </Button>{" "}
        //         {/* use this button to remove the data row */}
        //         <Button
        //           justIcon
        //           round
        //           simple
        //           onClick={() => {
        //             var newData = data;
        //             newData.find((o, i) => {
        //               if (o.id === key) {
        //                 // here you should add some custom code so you can delete the data
        //                 // from this component and from your server as well
        //                 newData.splice(i, 1);
        //                 return true;
        //               }
        //               return false;
        //             });
        //             setData([...newData]);
        //           }}
        //           color="danger"
        //           className="remove"
        //         >
        //           <Close />
        //         </Button>{" "}
        //       </div>
        //     ),
        //   },
        // ]);
      });
    }
  }

  const classes = useStyles();

  useEffect(() => {
    setDataRows(dataTable.dataRows);
    setReactTable();
    return () => {
      setReactTable();
    };
  }, [data, dataTable.dataRows, isFetching, value.data]);

  return (
    <GridContainer>
      <GridItem xs={12}>
        <Card>
          <CardHeader color="primary" icon>
            <CardIcon color="primary">
              <Assignment />
            </CardIcon>
            <h4 className={classes.cardIconTitle}>React Table</h4>
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
    </GridContainer>
  );
};

export default ReactTables;
