import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import axios from "axios"
import '../styles/LoginModal.css'

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
    
  const handleEmailInputValue = (key) => (e) => {
    setEmail({ [key]: e.target.value });
  };

  const handlePasswordInputValue = (key) => (e) => {
    setPassword({ [key]: e.target.value });
  };

  const handleLogin = async () => {
    try {
      if (email !== "" && password !== "") {
        await axios.post(
          "http://localhost:8080/user/login",
          {
            email: email.email,
            password: password.password,
          },
          {
            withCredentials: true,
          }
        )
        .then(res => {
          if(res.status === 200) {
            alert("로그인에 성공했습니다.");
            handleClickClose(); // 모달창 끄고
            props.setislogin(true); // 로그인/회원가입이 쓰여있던 Nav 창이 마이페이지/로그아웃으로 바뀐다.
          }
        })
      } else {
        alert("모든 항목은 필수입니다.");
      }
    } catch {
      alert("이메일 또는 비밀번호를 잘못 입력하셨습니다.\n 다시 시도해주세요");
    }
  };
  const handleClickClose = () => {
    props.onClickLogin(false);
  }
  return (
    <>
      <center>
        <form onSubmit={(e) => e.preventDefault()}>
          <div id="modal-background">
            <div id="modal-container">
              <div id="modal-header">
                <div>TechMarket</div>
                <button className="modal-btn" onClick={() => handleClickClose()}></button>
              </div>
              <div id="modal-section">
                <div className="modal-title">
                  <div>로그인</div>
                  <div className="modal-group">
                      <input type='email' onChange={handleEmailInputValue("email")} placeholder="이메일"></input>
                  </div>
                  <div className="modal-group">
                      <input type='password' onChange={handlePasswordInputValue("password")} placeholder="비밀번호"></input>                  
                  </div>
                </div>
                <button className='btn-login' type='submit' onClick={handleLogin}>로그인</button>
              </div>
            </div>
          </div>
        </form>
      </center>
    </>
  );
  }
  
  export default Login;
  