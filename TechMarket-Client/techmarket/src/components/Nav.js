import React, {useState} from "react";
import Login from "../pages/Login"
import Signup from "../pages/Signup"
import MyPage from "../pages/MyPage";
import "../styles/Nav.css";
import { Link, BrowserRouter as Router, Route, Switch} from "react-router-dom";

const Nav = (props) => {
  const [clickLogin, setClickLogin] = useState(false);
  const [clickSignup, setClickSignup] = useState(false);
  const [isLogin, setislogin] = useState(false);

  const onClickLogin = () => {
    if(clickLogin) {
      setClickLogin(false);
    } else {
      setClickLogin(true);
    }
  }

  const onClickSignup = () => {
    if(clickSignup) {
      setClickSignup(false);
    } else {
      setClickSignup(true);
    }
  }

  return (
    <>
      <div id="nav">
        <span className="title">TechMarket</span>
        <div className="search">
          <input
            className="product-search"
            placeholder="찾고 싶은 상품을 입력하세요"
          ></input>
          <button className="product-search-btn">검색</button>
        </div>
        <span>
          {isLogin ?
          <>
            <button className="btn-nav"> <Link to="/mypage" setislogin={setislogin}>마이페이지</Link> </button> 
            <button className="btn-nav">로그아웃</button>
          </> :
          <> <button className="btn-nav" onClick={onClickLogin}>로그인</button>
            <button className="btn-nav" onClick={onClickSignup}>회원가입</button>
          </>
          }

          {clickLogin ? <Login onClickLogin={onClickLogin} setislogin={setislogin}/> : <></>}
          {clickSignup ? <Signup onClickSignup={onClickSignup}/> : <></>}
        </span>
      </div>
    </>
  );
};

export default Nav;
