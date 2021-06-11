import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import MyPage from "./pages/MyPage";
class App extends Component {
  state = {
    isLogin: false,
  }

  handleLoginSuccess = () => {
    this.setState({
      isLogin: true,
    })
  }
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" render={()=> <MainPage isLogin={this.state.isLogin} handleLoginSuccess={this.handleLoginSuccess}/>} />
          <Switch>
            <Route path="/mypage" render={() => <MyPage isLogin={this.state.isLogin}/>}></Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;