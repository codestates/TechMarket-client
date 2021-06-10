import React from "react";
import { withRouter } from "react-router-dom";
import axios from "axios"
import '../LoginModal.css'


class Login extends React.Component {
    constructor(props) {
      super(props); 
      this.state = {
        email: "",
        password: "",
        errorMessage: "",
      };
      this.handleInputValue = this.handleInputValue.bind(this);
      this.handleLogin = this.handleLogin.bind(this);
    }
    handleInputValue = (key) => (e) => {
      this.setState({ [key]: e.target.value });
    };
    handleLogin = async () => {
      if (this.state.email !== "" && this.state.password !== "") {
        console.log("a");
        const userInfo = await axios.post(
          "http://localhost:8080/user/login",
          {
            email: this.state.email,
            password: this.state.password,
          },
          {
            withCredentials: true,
          }
        )
        .then(res => {
          if(res.status === 200) {
            console.log("성공")
          }
        });
      }
    };
    render() {
      return (
        <>
          <center>
            <form onSubmit={(e) => e.preventDefault()}>
              <div id="modal-container">
                <div id="modal-header">
                  <span>TechMarket</span>
                  <button className="modal-btn">{/* X 버튼 이미지 */}</button>
                </div>
                <div id="modal-section">
                  <div className="modal-title">
                    <div>로그인</div>
                    <div className="modal-group">
                        <span>이메일</span>
                        <input type='email' onChange={this.handleInputValue("email")}></input>
                    </div>
                    <div className="modal-group">
                        <span>비밀번호</span>
                        <input type='password' onChange={this.handleInputValue("password")}></input>                  
                    </div>
                  </div>
                  <button className='btn-login' type='submit' onClick={this.handleLogin}>로그인</button>
                </div>
              </div>
            </form>
          </center>
        </>
      );
    }
  }
  
  export default Login;
  