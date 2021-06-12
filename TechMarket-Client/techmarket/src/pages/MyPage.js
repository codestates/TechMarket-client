import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import Nav from "../components/Nav";
import "../styles/MyPage.css";
import MyPageInfo from "./MyPageInfo";
import MyPageModify from "./MyPageModify";

const MyPage = ({ accessToken, onClickLogout }) => {
  const [isProfile, setIsProfile] = useState(true); // 내 프로필 버튼을 눌렀는지, 내 정보 수정 버튼을 눌렀는지 확인하기 위해

  const handleClickProfileButton = () => {
    // 사용자 정보 가져와서 출력하기 위해 서버에 요청하기
    setIsProfile(true);
  };

  const handleClickModifyButton = () => {
    // 사용자 정보 가져와서 출력하기 위해 서버에 요청하기
    // 새로 입력된 사용자 정보 데이터베이스에 저장하기 위해 서버에 요청하기
    setIsProfile(false);
  };

  return (
    <>
      <Nav accessToken={accessToken} />
      <aside class="profile-aside">
        <button id="profile-aside-myprofile" onClick={handleClickProfileButton}>
          내 프로필
        </button>
        <button id="profile-aside-myprofile" onClick={handleClickModifyButton}>
          내 정보 수정
        </button>
      </aside>
      {isProfile ? (
        <MyPageInfo onClickLogout={onClickLogout} />
      ) : (
        <MyPageModify />
      )}
    </>
  );
};
export default withRouter(MyPage);
