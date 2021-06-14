
// import { StrictMode } from "react";


import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import Post from "./pages/Post";

require("dotenv").config();



ReactDOM.render(
  <BrowserRouter>
    <Post />
  </BrowserRouter>,
  document.getElementById("root")
);
