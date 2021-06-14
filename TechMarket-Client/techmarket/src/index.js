import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import MainPage from "./pages/MainPage";
import Post from "./pages/Post";
require("dotenv").config();

ReactDOM.render(
  <BrowserRouter>
    <MainPage />
  </BrowserRouter>,
  document.getElementById("root")
);
