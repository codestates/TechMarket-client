import React from "react";

const Nav = () => {
  return (
    <>
      <div id="nav">
        <span className="title">TechMarket</span>
      </div>
      <span>
        <button className="btn-nav">로그인</button>
        <button className="btn-nav">회원가입</button>
      </span>
    </>
  );
};

export default Nav;
