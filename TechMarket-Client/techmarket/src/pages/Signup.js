import React, { useState } from "react";
// import { withRouter, Link } from "react-router-dom";
import axios from "axios";
import "../styles/SignupModal.css";

axios.defaults.withCredentials = true;

const Signup = props => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const handleIdInputValue = key => e => {
    setUsername({ [key]: e.target.value });
  };
  const handleEmailInputValue = key => e => {
    setEmail({ [key]: e.target.value });
  };
  const handlePasswordInputValue = key => e => {
    setPassword({ [key]: e.target.value });
  };

  const handleSignup = async () => {
    try {
      if (email !== "" && password !== "" && username !== "") {
        await axios
          .post(
            `http://localhost:8080/user/signup`,
            {
              email: email.email,
              username: username.username,
              password: password.password
            },
            {
              headers: { "Content-Type": "application/json" }
            }
          )
          .then(res => {
            if (res.status === 201) {
              alert("회원가입에 성공했습니다.");
              handleClickClose();
            }
          });
      } else {
        alert("모든 항목은 필수입니다.");
      }
    } catch {
      alert(
        "이미 존재하는 계정입니다. \n 다른 계정으로 회원가입을 시도해주세요.!"
      );
    }
  };

  const handleClickClose = () => {
    props.onClickSignup(false);
  };
  return (
    <>
      <center>
        <form onSubmit={e => e.preventDefault()}>
          <div id="modal-background">
            <div id="modal-container">
              <div id="moal-header">
                <span>TechMarket</span>
                <button
                  className="modal-btn"
                  onClick={() => handleClickClose()}
                >
                  X
                </button>
              </div>
              <div id="modal-section">
                <div id="modal-title">
                  <div>회원가입</div>
                  <div className="modal-group">
                    <input
                      type="email"
                      onChange={handleEmailInputValue("email")}
                      placeholder="이메일"
                    ></input>
                  </div>
                  <div className="modal-group">
                    <input
                      type="text"
                      onChange={handleIdInputValue("username")}
                      placeholder="닉네임"
                    ></input>
                  </div>
                  <div className="modal-group">
                    <input
                      type="password"
                      onChange={handlePasswordInputValue("password")}
                      placeholder="비밀번호"
                    ></input>
                  </div>

                  <button
                    className="btn-signup"
                    type="submit"
                    onClick={handleSignup}
                  >
                    회원가입
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </center>
    </>
  );
};

export default Signup;
