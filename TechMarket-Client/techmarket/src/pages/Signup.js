import React from "react";
import { withRouter, Link } from "react-router-dom";
import axios from "axios";
import '../SignupModal.css'


axios.defaults.withCredentials = true;
class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      username: "",
      errorMessage: ""
    };
    this.handleInputValue = this.handleInputValue.bind(this);
  }

  handleInputValue = (key) => (e) => {
    this.setState({ [key]: e.target.value });
  };

  handleSignup = () => {
    const {email, password, username, mobile} = this.state;

    if(email.length !== 0 && password.length !== 0 && username.length !== 0) {
      axios.post("https://localhost:8080/user/signup",
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
      this.setState({ errorMessage: '모든 항목은 필수입니다' });
    }
  }

  render() {
    return (
      <>
        <center>
          <form onSubmit={(e) => e.preventDefault()}>
            <div id="modal-container">
              <div id="moal-header">
                <span>TechMarket</span>
                <button className="modal-btn">{/* X 버튼 이미지 */}</button>
              </div>
              <div id="modal-section">
                <div id="modal-title">
                  <div>회원가입</div>
                  <div className="modal-group">
                    <span>이메일</span>
                    <input type='email' onChange={this.handleInputValue("email")}></input>
                  </div>
                  <div className="modal-group">
                    <span>비밀번호</span>
                    <input type='password' onChange={this.handleInputValue("password")}></input>
                  </div>
                  <div className="modal-group">
                    <span>이름</span>
                    <input type='text' onChange={this.handleInputValue("username")}></input>
                  </div>
                  <button className='btn-signup' type="submit" onClick={this.handleSignup}>회원가입</button>
                  {this.state.errorMessage ? <div className="alert-box">{this.state.errorMessage}</div> : null}
                </div>
              </div>
            </div>
          </form>
        </center>
      </>
    );
  }
}

export default Signup;
