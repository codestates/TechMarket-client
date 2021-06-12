import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, withRouter } from "react-router-dom";
import MainPage from "./pages/MainPage";
import MyPage from "./pages/MyPage";
import ProductsPage from "./pages/ProductsPage";

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
    accessToken: "", // 로그인 완료하면 accessToken을 state에 저장한다.
  };
  this.issueAccessToken = this.issueAccessToken.bind(this);
  this.onClickLogout = this.onClickLogout.bind(this);
}

  issueAccessToken = (token) => {
    this.setState({
      accessToken: token
    })
    console.log(token);
  }

  onClickLogout = () => {
    alert("로그아웃 하시겠습니까?");
    this.setState({
      accessToken: "",
    })
    window.location = "/";
  }

  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" render={()=> <MainPage accessToken={this.state.accessToken} issueAccessToken={this.issueAccessToken}/>} />
          <Switch>
            <Route path="/mypage" render={() => <MyPage accessToken={this.state.accessToken}  onClickLogout={this.onClickLogout}/>}/>
            <Route path="/products" component={ProductsPage} />
          </Switch>
        </div>
      </Router>
    );
  }
}
export default withRouter(App);

