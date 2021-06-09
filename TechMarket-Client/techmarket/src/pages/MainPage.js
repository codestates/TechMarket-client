import React from "react";
import Nav from "./components/Nav";

const MainPage = () => {
  return (
    <>
      <div id="container-mainpage">
        <Nav></Nav>
        <div className="section1">
          <div className="container1">
            <span className="company-title"></span>
            <span className="company-intro"></span>
            <a href="/*youtube링크*/"></a>
          </div>
          <div className="container2">
            <img src="./images/computer-2563737_1920.jpg"></img>
          </div>
        </div>
        <div className="section2">
          <Nav></Nav>
          <div className="container1">
            <img src="/* 애플 사진 */"></img>
          </div>
          <div className="container2">
            <span className="product-intro-title"></span>
            <span className="product-intro-paragraph"></span>
          </div>
        </div>
        <div className="section3">
          <Nav></Nav>
          <div className="container1">
            <span className="product-brand-title"></span>
            <span className="product-brand-pargraph"></span>
          </div>
          <div className="container2">
            <img src="/* 삼성 사진 */"></img>
          </div>
        </div>
        <div id="footer">
          <div className="company-title">
            <span className="logo"></span>
            <span className="content"></span>
          </div>
          <div className="crews">
            <span>유지원</span>
            <span>안아림</span>
            <span>임현택</span>
            <span>이승현</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainPage;
