import React from "react";
import "../styles/Nav.css";

const Nav = () => {
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
          <button className="btn-nav">로그인</button>
          <button className="btn-nav">회원가입</button>
        </span>
      </div>
    </>
  );
};

export default Nav;
