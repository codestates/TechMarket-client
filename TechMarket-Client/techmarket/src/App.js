import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import MyPage from "./pages/MyPage";
import ProductsPage from "./pages/ProductsPage";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={MainPage} />
          <Switch>
            <Route path="/mypage" component={MyPage}></Route>
            <Route path="/products" component={ProductsPage} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
