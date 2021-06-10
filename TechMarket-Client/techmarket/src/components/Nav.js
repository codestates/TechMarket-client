import React, {useState} from "react";
import Login from "../pages/Login"
import Signup from "../pages/Signup"

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
      </div>
      <span>
        <button className="btn-nav" onClick={onClickLogin}>로그인</button>
        <button className="btn-nav" onClick={onClickSignup}>회원가입</button>
        {clickLogin ? <Login/> : <></>}
        {clickSignup ? <Signup/> : <></>}
      </span>
    </>
  );
};

export default Nav;
