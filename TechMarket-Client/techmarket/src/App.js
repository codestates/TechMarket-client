import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import MyPage from "./pages/MyPage";
import ProductsPage from "./pages/ProductsPage";
import ProductsPage from "./pages/ProductsPage";
import Post from "../pages/Post";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={MainPage} />
          <Switch>
            <Route path="/mypage" component={MyPage}></Route>
            <Route path="/product" component={ProductPage} />
            <Route path="/products" component={ProductsPage} />
            <Route path="/post" component={Post} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
