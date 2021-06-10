import React, {useState} from "react";
import Login from "../pages/Login"
import Signup from "../pages/Signup"
import "../styles/Nav.css";

const Nav = () => {
  const [clickLogin, setClickLogin] = useState(false);
  const [clickSignup, setClickSignup] = useState(false);

  const onClickLogin = () => {
    setClickSignup(false);
    setClickLogin(true);
  }
  const onClickSignup = () => {
    setClickSignup(true);
    setClickLogin(false);
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
          <button className="btn-nav" onClick={onClickLogin}>로그인</button>
          <button className="btn-nav" onClick={onClickSignup}>회원가입</button>
          {clickLogin ? <Login/> : <></>}
          {clickSignup ? <Signup/> : <></>}
        </span>
        
      </div>
    </>
  );
};

export default Nav;
