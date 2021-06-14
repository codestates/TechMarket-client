import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  withRouter
} from "react-router-dom";
import MainPage from "./pages/MainPage";
import MyPage from "./pages/MyPage";
import ProductPage from "./pages/ProductPage";
import ProductsPage from "./pages/ProductsPage";
import Post from "./pages/Post";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {},
    };
    this.onClickLogout = this.onClickLogout.bind(this);
    this.setUserInfo = this.setUserInfo.bind(this);
  }

  setUserInfo = (info) => {
    this.setState({
      ...info
    })
  }

  onClickLogout = () => {
    alert("로그아웃 하시겠습니까?");
    localStorage.removeItem('tech_auth'); //localstorage에 저장된 토큰 삭제
    window.location = "/"; // 메인 화면으로 이동
  }

  render() {
    return (
      <Router>
        <div>
          <Route
            exact
            path="/"
            render={() => (
              <MainPage/>
            )}
          />
          <Switch>
            <Route path="/show/:id" component={ProductPage} />
            <Route
              path="/user/info"
              render={() => (
                <MyPage
                  onClickLogout={this.onClickLogout}
                />
              )}
            />
            <Route path="/products" component={ProductsPage} />
            <Route path="/post" component={Post} />
          </Switch>
        </div>
      </Router>
    );
  }
}
export default withRouter(App);
