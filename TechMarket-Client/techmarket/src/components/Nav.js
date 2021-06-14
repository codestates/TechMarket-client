import React, { useState} from "react";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import MyPage from "../pages/MyPage";
import "../styles/Nav.css";
import { Link } from "react-router-dom";

const Nav = () => {
  const [clickLogin, setClickLogin] = useState(false);
  const [clickSignup, setClickSignup] = useState(false);
  const [search, setSearch] = useState("");

  const inputHandler = e => {
    setSearch(e.target.value);
    console.log(search);
  };

  const onClickLogin = () => {
    if (clickLogin) {
      setClickLogin(false);
    } else {
      setClickLogin(true);
    }
  };

  const onClickSignup = () => {
    if (clickSignup) {
      setClickSignup(false);
    } else {
      setClickSignup(true);
    }
  };
  
  return (
    <>
      <div id="nav">
        <Link to ="/" className="title-link"> <span className="title">TechMarket</span> </Link>
        <div className="search">
          <input
            className="product-search"
            value={search}
            placeholder="찾고 싶은 상품을 입력하세요"
            onChange={e => inputHandler(e)}
          ></input>
          <Link
            to={{
              pathname: `/products`,
              state: { search: search }
            }}
          >
            <button className="product-search-btn">검색</button>
          </Link>
        </div>
        <span>
          {localStorage.getItem('tech_auth') ? ( // accessToken을 발급받았으면 ( 로그인을 했으면)
            <>
              <Link to="/user/info">
                {" "}
                <button className="btn-nav"> 마이페이지</button>{" "}
              </Link>
              <Link to="/post">
                <button className="btn-nav">게시물 작성</button>
              </Link>
            </>
          ) : (
            <>
              <button className="btn-nav" onClick={onClickLogin}>로그인</button>
              <button className="btn-nav" onClick={onClickSignup}>회원가입</button>
            </>
          )}
          {clickLogin ? (
            <Login
              onClickLogin={onClickLogin}
            />
          ) : (
            <></>
          )}
          {clickSignup ? <Signup onClickSignup={onClickSignup} /> : <></>}
        </span>
      </div>
    </>
  );
};

export default Nav;