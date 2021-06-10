import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import MyPage from "./pages/MyPage";
class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={MainPage} />
          <Switch>
            <Route path="/mypage" component={MyPage}></Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;