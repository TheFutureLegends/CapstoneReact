import React from "react";
import axios from "axios";
import { baseApiUrl } from "services/api";
import { substring_text } from "utils/functions";
import AuthHeader from "services/auth.header";

export const PostsDataTables = () => {
  const [isFetching, setIsFetching] = React.useState(true);

  // eslint-disable-next-line no-unused-vars
  const [dataTable, setDataTable] = React.useState({
    headerRow: ["Title", "Description", "Visit", "Actions"],
    footerRow: ["Title", "Description", "Visit", "Actions"],
    dataRows: [],
  });

  const fetchData = () => {
    if (isFetching) {
      axios
        .get(baseApiUrl + "/posts/dataTable", {
          headers: {
            Authorization: AuthHeader.authBearerHeader(),
          },
        })
        .then((response) => {
          response.data.map((result, key) => {
            dataTable.dataRows.push([
              substring_text(result.title, 5),
              substring_text(result.description, 2),
              result.visit,
            ]);
          });
          setIsFetching(false);
        });
    }
  };

  React.useEffect(() => {
    fetchData();

    return () => {
      fetchData();
    };
  }, [isFetching, dataTable]);

  return [dataTable, setDataTable];
};

export const DummyData = () => {
  const [data, setData] = React.useState({
    array: [],
  });

  function fetchData() {
    axios
      .get(baseApiUrl + "/posts/", {
        headers: {
          Authorization: AuthHeader.authBearerHeader(),
        },
      })
      .then((response) => {
        response.data.map((result, key) => {
          data.array.push([
            substring_text(result.title, 5),
            substring_text(result.description, 2),
            result.visit,
            result.created_date,
          ]);
        });
      });
  }

  React.useEffect(() => {
    fetchData();
    return () => {
      fetchData();
    };
  }, [data]);

  const initialize = [];

  const array = [
    axios
      .get(baseApiUrl + "/posts/dataTable", {
        headers: {
          Authorization: AuthHeader.authBearerHeader(),
        },
      })
      .then((response) => {
        response.data.map((result, key) => {
          return [
            substring_text(result.title, 5),
            substring_text(result.description, 5),
            result.visit,
            result.created_date,
          ];
        });
      }),
  ];

  return array;
};

// return something;
