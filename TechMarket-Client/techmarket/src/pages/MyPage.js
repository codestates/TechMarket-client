import React from "react";
import { withRouter, Link } from "react-router-dom";
import Nav from "../components/Nav"
import '../styles/MyPage.css'

const MyPage = ({ isLogin }) => {
    const handleClickProfileButton = () => {
        // 사용자 정보 가져와서 출력하기
    }

    const handleClickModifyButton = () => {
        // 사용자 정보 가져와서 출력하고
        // 새로 입력된 사용자 정보 데이터베이스에 저장하기 위해 서버에 요청하기
    }

    return (
        <>
            <Nav isLogin={isLogin}/>
                <aside class ="profile-aside">
                    <button id="profile-aside-myprofile" onClick={handleClickProfileButton}>내 프로필</button>
                    <button id="profile-aside-myprofile" onClick={handleClickModifyButton}>내 정보 수정</button>
                </aside>
                <section className="profile-section">
                    <div className="profile-title">개인정보</div>
                    <div className="profile-info">
                        <span>기본정보</span>
                    <div className="profile-group">
                        <span>아이디 </span>
                        <span>kim123</span>
                    </div>
                    <div className="profile-group">
                        <span>이메일 </span>
                        <span>abc@naver.com</span>
                    </div>
                    <div className="profile-group">
                        <span>비밀번호 </span>
                        <span>1234</span>
                    </div>
                    </div>
                </section>
        </>
    )
}

export default MyPage;