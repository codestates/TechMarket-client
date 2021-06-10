import React from "react";
import { withRouter, Link } from "react-router-dom";
import Nav from "../components/Nav"
import '../styles/MyPage.css'

const MyPage = () => {
    const handleClickButton = () => {
        console.log("click")
    }
    return (
        <>
            <Nav/>
            <aside class ="profile-aside">
                <button id="profile-aside-myprofile" onClick={handleClickButton}>내 프로필</button>
                <button id="profile-aside-myprofile" onClick={handleClickButton}>내 정보 수정</button>
            </aside>
        </>
    )
}

export default MyPage;