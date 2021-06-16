import React, { useState } from "react";

import axios from "axios";

import "../styles/MyPageShow.css";

const MyPageShow = ({ userInfo }) => {
  const [posts, setPosts] = useState([]);
  console.log(userInfo);

  axios
    .get(`http:localhost:8080/email`)
    .then(res => {
      console.log(res.data.data.result.title);
      setPosts(res.data.data.result);
    })
    .catch(err => {
      alert("예상치 못한 에러가 발생했습니다");
    });

  const handleDelete = data => {
    axios
      .post("http:localhost:8080/mypage/deletecontent", {
        writerid: userInfo.username,
        title: data
      })
      .then(res => {
        if (res.status === 200) {
          console.log(res.data);
        }
      })
      .catch(err => {
        alert("예상치 못한 에러가 발생했습니다.");
      });
  };

  const onRemove = data => {
    let newPosts = posts.title.filter(ele => data !== ele);
    setPosts(newPosts);
  };

  return (
    <>
      <section className="page-show-section">
        <div className="page-show-section-title">게시물 조회</div>
        <div className="page-show-container">
          <div className="page-show-header">
            <span>제목</span>
          </div>
          {/* <div className="page-show-group">
            <div className="page-show-box">
              <span className="page-show-title">제목</span>
              <span className="pade-show-delete-box">
                <button className="page-show-delete-btn">삭제</button>
              </span>
            </div> */}
          {posts.title.map(function(post) {
            return (
              <>
                <div className="page-show-box">
                  <span className="page-show-title">{post.title}</span>
                  <span className="pade-show-delete-box">
                    <button
                      className="page-show-delete-btn"
                      onClick={() => handleDelete(post.title)}
                      onRemove={onRemove(post.title)}
                    >
                      삭제
                    </button>
                  </span>
                </div>
              </>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default MyPageShow;
