// import React, { useState, useEffect } from "react";

// import { Route, Link, Switch, Redirect, useHistory } from "react-router-dom";

export const baseApiUrl = "http://localhost:8000/api";

export const imgur_client_id = "3572fd91cd88d06";

export const imgur_client_secret = "3a25fbb849f3424bf5fb232e67e56ffa89e92881";

export const nytime_api = "LmU2DPz9GMyXA9ipxKkvnBuZu17swC3Z";

export const news_api = "e9d9b57095a94eeb8d6287c3f271bc42";

// export const CheckLoggedIn = () => {
//   function redirectTo() {
//     return <Redirect to="/" />;
//   }

//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   const [redirect, setRedirect] = useState(true);

//   if (redirect) return redirectTo();
// };

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
