import React from "react";
import { withRouter, Link } from "react-router-dom";
import Nav from "../components/Nav"
import '../styles/MyPage.css'

const MyPage = () => {
    return (
        <>
            <Nav/>
            <aside class ="profile-aside">
                <div></div>
            </aside>
        </>
    )
}

export default MyPage;