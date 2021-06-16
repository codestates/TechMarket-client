import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import Nav from "../components/Nav";
import "../styles/MyPage.css";
import MyPageInfo from "./MyPageInfo";
import MyPageModify from "./MyPageModify";
import axios from "axios";
import MyPageShow from "./MyPageShow";

const MyPage = ({ accessToken, onClickLogout }) => {
  const [isProfile, setIsProfile] = useState(true); // 내 프로필 버튼을 눌렀는지, 내 정보 수정 버튼을 눌렀는지 확인하기 위해
  const [userInfo, setUserInfo] = useState({});
  const [showPage, setShowPage] = useState(false);

  axios
    .get(
      //사용자 정보를 요청하기 위해 가지고 있는 토큰을 헤더에 포함해서 보낸다.
      `http://localhost:8080/user/info`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("tech_auth")}`,
          "Content-Type": "application/json"
        }
      }
    )
    .then(res => {
      setUserInfo(res.data);
      console.log(userInfo);
    });

  const handleClickProfileButton = () => {
    setIsProfile(true);
  };

  const handleClickModifyButton = () => {
    setIsProfile(false);
    setShowPage(true);
  };

  const handleClickShowButton = () => {
    setShowPage(false);
  };

  return (
    <>
      <Nav />
      <aside className="profile-aside">
        <button id="profile-aside-myprofile" onClick={handleClickProfileButton}>
          내 프로필
        </button>
        <button id="profile-aside-myprofile" onClick={handleClickModifyButton}>
          내 정보 수정
        </button>
        <button id="profile-aside-myprofile" onClick={handleClickShowButton}>
          게시물 조회
        </button>
      </aside>
      {isProfile ? (
        <MyPageInfo userInfo={userInfo} onClickLogout={onClickLogout} />
      ) : showPage ? (
        <MyPageModify userInfo={userInfo} />
      ) : (
        <MyPageShow userInfo={userInfo} />
      )}
    </>
  );
};

export default withRouter(MyPage);
