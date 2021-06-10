import React, {useState} from "react";
import { withRouter, Link } from "react-router-dom";
import axios from "axios";
import '../styles/SignupModal.css'


axios.defaults.withCredentials = true;

const Signup = (props) =>{

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputValue = (key) => (e) => {
    setEmail({ [key]: e.target.value });
    setPassword({ [key]: e.target.value });
    setUsername({ [key]: e.target.value });
  };

  const handleSignup = async () => {
    if(email.length !== 0 && password.length !== 0 && username.length !== 0) {
      console.log("a");

      await axios.post(`${process.env.REACT_APP_API_URL}/user/signup`,
      {
        email: email,
        password: password,
        username: username,
      },
      {
        headers: { "Content-Type": "application/json" }
      })
      .then(res => {
        if(res.status === 200) {
          console.log("성공")
        }
      });
    } else {
      setErrorMessage("모든 항목은 필수입니다.");
    }
  }

  const handleClickClose = () => {
    props.onClickSignup(false);
  }
    return (
      <>
        <center>
          <form onSubmit={(e) => e.preventDefault()}>
            <div id="modal-background">
              <div id="modal-container">
                <div id="moal-header">
                  <span>TechMarket</span>
                  <button className="modal-btn" onClick={() => handleClickClose()}>X</button>
                </div>
                <div id="modal-section">
                  <div id="modal-title">
                    <div>회원가입</div>
                    <div className="modal-group">
                      <input type='text' onChange={handleInputValue("username")} placeholder="아이디"></input>
                    </div>
                    <div className="modal-group">
                      <input type='email' onChange={handleInputValue("email")} placeholder="이메일"></input>
                    </div>
                    <div className="modal-group">
                      <input type='password' onChange={handleInputValue("password")} placeholder="비밀번호"></input>
                    </div>
                    
                    <button className='btn-signup' type="submit" onClick={handleSignup}>회원가입</button>
                    {errorMessage ? <div className="alert-box">{errorMessage}</div> : null}
                  </div>
                </div>
              </div>
            </div>
          </form>
        </center>
      </>
    );
}

export default Signup;
