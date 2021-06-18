import React, { useState, useEffect } from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";
import Nav from "../components/Nav";
import MyPageInfo from "./MyPageInfo";
import MyPageModify from "./MyPageModify";
import MyPageShow from "./MyPageShow";
import "../styles/MyPage.css";

const MyPage = ({ onClickLogout }) => {
  const [isProfile, setIsProfile] = useState(true); //어떤 버튼을 눌렀는지 확인하기 위해
  const [showPage, setShowPage] = useState(false);
  const [userInfo, setUserInfo] = useState({});

  useEffect(() => {
    axios
    .get(
      `${process.env.REACT_APP_API_URL}/user/info`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("tech_auth")}`,
          "Content-Type": "application/json"
        }
      }
    )
    .then(res => {
      if(res.data.result) {// 토큰이 만료되었다면
        localStorage.setItem("tech_auth", res.data.result.access_token); 
        setUserInfo(res.data);
      } else { // 만료되지 않았다면
        setUserInfo(res.data);
      }
    })
    .catch(err => {
      console.log(err);
    });
  },[isProfile])

  const handleClickProfileButton = () => {
    setIsProfile(true);
    setShowPage(true);
  };

  const handleClickModifyButton = () => {
    setIsProfile(false);
    setShowPage(true);
  };

  const handleClickShowButton = () => {
    setIsProfile(false);
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
