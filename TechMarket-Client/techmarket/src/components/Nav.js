import React, { useState } from "react";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import MyPage from "../pages/MyPage";
import "../styles/Nav.css";
import { Link, BrowserRouter as Router, Route, Switch } from "react-router-dom";


const Nav = ({ accessToken, issueAccessToken}) => {
  const [clickLogin, setClickLogin] = useState(false);
  const [clickSignup, setClickSignup] = useState(false);

  const [search, setSearch] = useState("");

  const inputHandler = e => {
    setSearch(e.target.value);
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

  //     setClickSignup(false);
  //     setClickLogin(true);
  //   };
  //   const onClickSignup = () => {
  //     setClickSignup(true);
  //     setClickLogin(false);
  //   };

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
          <button className="product-search-btn">
            <Link to="/products">검색</Link>
          </button>
        </div>
        <span>
// <<<<<<< productpage/up
//           {isLogin ? (
//             <>
//               <button className="btn-nav">
//                 {" "}
//                 <Link to="/mypage" setislogin={setislogin}>
//                   마이페이지
//                 </Link>{" "}
//               </button>
//               <button className="btn-nav">로그아웃</button>
//             </>
//           ) : (
//             <>
//               {" "}
//               <button className="btn-nav" onClick={onClickLogin}>
//                 로그인
//               </button>
//               <button className="btn-nav" onClick={onClickSignup}>
//                 회원가입
//               </button>
//             </>
//           )}
// =======
          {
            accessToken ? // accessToken을 발급받았으면 ( 로그인을 했으면)
            <>
              <Link to="/mypage" > <button className="btn-nav"> 마이페이지</button> </Link>
              <button className="btn-nav" >게시물 작성</button>
              {/*    */}
            </> :
            <>
              <button className="btn-nav" onClick={onClickLogin}>로그인</button>
              <button className="btn-nav" onClick={onClickSignup}>회원가입</button>
            </>
          }
          {clickLogin ? <Login onClickLogin={onClickLogin} issueAccessToken={issueAccessToken}/> : <></>}
          {clickSignup ? <Signup onClickSignup={onClickSignup}/> : <></>}

          {clickLogin ? (
            <Login onClickLogin={onClickLogin} setislogin={setislogin} />
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
