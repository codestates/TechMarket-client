import React from "react";
import profile from "../images/profileImg.png";
import badge1 from "../images/1st_badge.png";
import badge2 from "../images/2nd_badge.png";
import badge3 from "../images/3rd_badge.png";

const MyPageInfo = ({ userInfo, onClickLogout }) => {
  const deal_count = userInfo.deal_count;
  return (
    <>
      <section className="profile-section">
        <div className="profile-title">
          <div>개인정보</div>
          <span>이름, 프로필 등 TechMarket에서 사용하는 기본 정보</span>
        </div>
        <div className="profile-info">
          <span>기본정보</span>
          <div className="profile-group">
            {
              deal_count < 10? <img src={badge3} alt=""/> : (deal_count < 20 ? <img src={badge2} alt=""/> : <img src={badge1} alt=""/>)
            }
          </div>
          <div className="profile-group">
            <span>이메일 </span>
            <span>{userInfo.email}</span>
          </div>
          <div className="profile-group">
            <span>닉네임 </span>
            <span>{userInfo.username}</span>
          </div>
          <div className="profile-group">
            <span>비밀번호 </span>
            <span>{userInfo.password}</span>
          </div>
          <button className="btn-modify" type="submit" onClick={onClickLogout}>
            로그아웃
          </button>
        </div>
      </section>
    </>
  );
};

export default MyPageInfo;
