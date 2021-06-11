import React from "react";
import SigninModal from '../components/SigninModal'
import Login from "./Login"
import Signup from "./Signup"
import Nav from "../components/Nav";
import "../styles/MainPage.css";

const MainPage = (props) => {
  console.log(props);
  return (
    <>
      <div id="container-mainpage">
        <Nav isLogin= {props.isLogin} handleLoginSuccess={props.handleLoginSuccess}/>
        <div id="section1">
          <div className="container1">
            <span className="company-title">전자기기 중고 거래 TechMarket</span>
            <span className="company-intro">TechMarket 소개 영상</span>
          </div>
          <div className="container2"></div>
        </div>
        <div id="section2">
          <div className="container1"></div>
          <div className="container2">
            <span className="product-intro-title">상품 소개란</span>
            <span className="product-intro-paragraph"></span>
          </div>
        </div>
        <div id="section3">
          <div className="container1">
            <span className="product-brand-title">브랜드 소개란</span>
            <span className="product-brand-pargraph"></span>
          </div>
          <div className="container2"></div>
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
    </>
  );
};

export default MainPage;