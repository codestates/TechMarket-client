import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/MyPageShow.css";

const MyPageShow = ({ userInfo }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
    .get(`http://localhost:8080/email?email=${userInfo.email}`)
    .then(res => {
      if(res.status === 200) {
        setPosts(res.data.data.result);
      }
    })
    .catch(err => {
      alert("예상치 못한 에러가 발생했습니다 \n 잠시 후 다시 시도해주세요");
    });
  }, [])
  

  const handleDelete = data => {
    axios
      .post("http://localhost:8080/mypage/deletecontent", {
        id: data.id,
      })
      .then(res => {
        if (res.status === 200) {
          console.log(res.data);
        }
      })
      .catch(err => {
        alert("예상치 못한 에러가 발생했습니다. \n 잠시 후 다시 시도해주세요");
      });
  };

  return (
    <>
      <section className="page-show-section">
        <div className="page-show-section-title">게시물 조회</div>
        <div className="page-show-container">
          <div className="page-show-header">
            <span>제목</span>
          </div>
          {posts.map(function(post) {
            return (
              <>
                <div className="page-show-box">
                  <span className="page-show-title">{post.title}</span>
                  <span className="pade-show-delete-box">
                    <button
                      className="page-show-delete-btn"
                      onClick={() => handleDelete(post)}
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