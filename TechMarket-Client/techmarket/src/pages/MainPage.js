import React from "react";
import Nav from "../components/Nav";
import "../styles/MainPage.css";
import img from "../images/Earl of Lemongrab.jpeg"
import icon from "../images/mainpage_container1_icon.png"
import { Link} from "react-router-dom";

const MainPage = () => {
  return (
    <>
      <div id="container-mainpage">
        <Nav/>
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
            <img alt="" src={icon}></img>
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
              <button>
                <Link to ="/products">전체 상품 보러가기</Link>
              </button>
            </span>
          </div>
        </div>
        <div id="section3">
          <div className="container1">
            <span className="product-brand-title">안전한 거래</span>
            <span className="product-brand-pargraph">
              신용도에 따른 뱃지 부여 기능으로 보다 믿을 수 있는 거래를 할 수
              있습니다.
            </span>
          </div>
          <div className="container2">
            <img alt="" src={img}></img>
          </div>
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
