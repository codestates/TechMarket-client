import React from "react";
import Nav from "../components/Nav";
import "../styles/MainPage.css";
import img from "../images/section2_img.png";
import img2 from "../images/section3_img.png";
import icon from "../images/mainpage_container1_icon.png";
import { withRouter } from "react-router-dom";
import { Link, BrowserRouter as Router, Route, Switch } from "react-router-dom";
import badge1 from "../images/1st_badge.png";
import badge2 from "../images/2nd_badge.png";
import badge3 from "../images/3rd_badge.png";

const MainPage = () => {
  return (
    <>
      <div id="container-mainpage">
        <Nav />
        <div id="section1">
          <div className="container1">
            <span className="company-title">TechMarket</span>
            <span className="company-intro">
              지금 당장 예산에 딱 맞는 전자기기를 거래하고 싶으신가요? 검색창에
              원하는 물건을 검색해보세요!
            </span>
            <button>소개영상보러가기</button>
          </div>
          <div className="container2">
            <img alt="이미지" src={icon}></img>
          </div>
        </div>
        <div id="section2">
          <div className="container1">
            <img alt="" src={img}></img>
          </div>
          <div className="container2">
            <span className="product-intro-title">
              전자기기 중고거래, 지금 당장 시작해보세요
            </span>
            <span className="product-intro-paragraph">
              <Link to="/products">
                <button>전체 상품 보러가기</button>
              </Link>
            </span>
          </div>
        </div>
        <div id="section3">
          <div className="container1">
            <span className="product-brand-title">안전한 거래</span>
            <div className="badge-box">
              <img alt="badge" src={badge1}></img>
              <img alt="badge" src={badge2}></img>
              <img alt="badge" src={badge3}></img>
            </div>
            <div className="product-brand-pargraph">
              신용도에 따른 뱃지 부여 기능으로 보다 믿을 수 있는 거래를 할 수
              있습니다.
            </div>
          </div>
          <div className="container3">
            <img alt="" src={img2}></img>
          </div>
        </div>
      </div>
      <div id="footer">
        <div className="company-title">
          <span className="logo">TechMarket</span>
          <span className="content">Copyright © by 2021 TechMarket</span>
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
