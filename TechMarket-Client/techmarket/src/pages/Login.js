import React, { useState } from "react";
import axios from "axios";
import "../styles/LoginModal.css";
import GoogleButton from "../components/GoogleButton";

require("dotenv").config({ path: __dirname + "/.env" });
const Login = props => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailInputValue = key => e => {
    setEmail({ [key]: e.target.value });
  };

  const handlePasswordInputValue = key => e => {
    setPassword({ [key]: e.target.value });
  };

  const handleLogin = async () => {
    try {
      if (email !== "" && password !== "") {
        await axios
          .post(
            `http://localhost:8080/user/login`,
            {
              email: email.email,
              password: password.password
            },
            {
              withCredentials: true
            }
          )
          .then(res => {
            if (res.status === 200) {
              alert("로그인에 성공했습니다.");
              handleClickClose();
              localStorage.setItem("tech_auth", res.data.result.access_token); //받은 토큰 localStorage에 저장
              //localStorage.setItem("tech_auth2", res.data.result.refresh_token);
              localStorage.setItem("username", res.data.response.username); // 로그인한 유저 localStorage에 저장
              window.location.reload(); //화면 재렌더링
            }
          });
      } else {
        alert("모든 항목은 필수입니다.");
      }
    } catch {
      alert("이메일 또는 비밀번호를 잘못 입력하셨습니다.\n 다시 시도해주세요");
    }
  };
  const handleClickClose = () => {
    props.onClickLogin(false);
  };

  return (
    <>
      <center>
        <form onSubmit={e => e.preventDefault()}>
          <div id="modal-background">
            <div id="modal-container">
              <div id="modal-header">
                <div>TechMarket</div>
                <button
                  className="modal-btn"
                  onClick={() => handleClickClose()}
                >
                  X
                </button>
              </div>
              <div id="modal-section">
                <div className="modal-title">
                  <div>로그인</div>
                  <div className="modal-group">
                    <input
                      type="email"
                      onChange={handleEmailInputValue("email")}
                      placeholder="이메일"
                    ></input>
                  </div>
                  <div className="modal-group">
                    <input
                      type="password"
                      onChange={handlePasswordInputValue("password")}
                      placeholder="비밀번호"
                    ></input>
                  </div>
                </div>
                <button
                  className="btn-login"
                  type="submit"
                  onClick={handleLogin}
                >
                  로그인
                </button>
              </div>
            </div>
          </div>
        </form>
      </center>
    </>
  );
};

export default Login;
