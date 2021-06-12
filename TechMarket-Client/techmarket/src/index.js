import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from 'react-router-dom';
import App from "./App";
import ProductsPage from "./pages/ProductsPage"
require('dotenv').config();

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
