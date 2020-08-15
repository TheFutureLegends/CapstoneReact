import React from "react";
import ReactDOM from "react-dom";
import "./css/index.css";
import App from "./App";
// import * as serviceWorker from "./serviceWorker";

// const gameList = [
//   { id: "1", name: "Devil May Cry 4" },
//   { id: "2", name: "Just Cause 3" },
//   { id: "3", name: "Warhammer 40K" },
// ];

// function App({ games }) {
//   return (
//     <div>
//       {games.map((game) => (
//         <div key={game.id}>
//           <h2>{game.name}</h2>
//           <p>game ID: {game.id}</p>
//         </div>
//       ))}
//     </div>
//   );
// }

ReactDOM.render(<App />, document.getElementById("root"));

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
