import React, { useState } from "react";

import Nav from "../components/Nav";

import "../styles/Post.css";

const Post = () => {
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");

  const inputTitleHandler = e => {
    setTitle(e.target.value);
  };

  const inputSummaryHandler = e => {
    setSummary(e.target.value);
  };

  return (
    <>
      <div id="product-post-container">
        <Nav />
        <div className="product-post-model">
          <div className="product-post-title">
            <input
              type="text"
              placeholder="제목을 입력하세요."
              value={title}
              onChange={e => inputTitleHandler(e)}
            ></input>
            <select id="product-post-category"></select>
          </div>
          <div className="product-post-summary">
            <input
              type="textarea"
              value={summary}
              onChange={e => {
                inputSummaryHandler(e);
              }}
            ></input>
          </div>
          <div className="product-post-btn-container">
            <button className="product-post-btn">글쓰기</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Post;
