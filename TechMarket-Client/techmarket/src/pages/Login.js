import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import axios from "axios"
import '../styles/LoginModal.css'

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
    
  const handleInputValue = (key) => (e) => {
    setEmail({ [key]: e.target.value });
    setPassword({ [key]: e.target.value });
  };

  const handleLogin = async () => {
    if (email !== "" && password !== "") {
      console.log("a");
      await axios.post(
        "http://localhost:8080/user/login",
        {
          email: email,
          password: password,
        },
        {
          withCredentials: true,
        }
      )
      .then(res => {
        if(res.status === 201) {
          console.log("성공")
        }
      });
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
                      <input type='email' onChange={handleInputValue("email")} placeholder="이메일"></input>
                  </div>
                  <div className="modal-group">
                      <input type='password' onChange={handleInputValue("password")} placeholder="비밀번호"></input>                  
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
  