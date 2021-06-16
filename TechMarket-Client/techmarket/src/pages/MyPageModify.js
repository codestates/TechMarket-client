import React, { useState } from "react";
import axios from "axios";

const MyPageModify = ({ userInfo }) => {
  const [username, setUsername] = useState(userInfo.username);
  const [password, setPassword] = useState(userInfo.password);

  const handleIdInputValue = key => e => {
    setUsername({ [key]: e.target.value });
  };
  const handlePasswordInputValue = key => e => {
    setPassword({ [key]: e.target.value });
  };

  const handleModify = async () => {
    try {
      if (username !== "" && password !== "") {
        await axios
          .post(`http://localhost:8080/user/modify`, {
            email: userInfo.email,
            username: username.username,
            password: password.password
          })
          .then(res => {
            if (res.status === 200) {
              alert("회원 정보 수정이 완료되었습니다.");
            }
          });
      } else {
        alert("모든 항목은 필수입니다.");
      }
    } catch {
      alert("예상치 못한 에러가 발생했습니다.\n 잠시 후 다시 시도해주세요.");
    }
  };
  return (
    <>
      <section className="profile-section">
        <div className="profile-title">정보수정</div>
        <div className="profile-info">
          <span>기본정보</span>
          <div className="profile-group profile-group-email">
            <span>이메일 </span>
            <input type="text" value={userInfo.email} />
          </div>
          <div className="profile-group profile-group-nickname">
            <span>닉네임 </span>
            <input
              type="text"
              defaultValue={userInfo.username}
              onChange={handleIdInputValue("username")}
            />
          </div>

          <div className="profile-group profile-group-password">
            <span>비밀번호</span>
            <input
              type="text"
              defaultValue={userInfo.password}
              onChange={handlePasswordInputValue("password")}
            />
          </div>
          <button
            className="btn-modify btn-modify-profile"
            type="submit"
            onClick={handleModify}
          >
            저장
          </button>
        </div>
      </section>
    </>
  );
};
export default MyPageModify;
