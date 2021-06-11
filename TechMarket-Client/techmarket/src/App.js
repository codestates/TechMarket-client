import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import ProductsPage from "./pages/ProductsPage";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={MainPage} />
          <Switch>
            <Route path="/products" component={ProductsPage} />
          </Switch>
        </div>
      </Router>
    );
    // return <MainPage />;
    // return <ProductsPage />;
  }
}

export default App;
