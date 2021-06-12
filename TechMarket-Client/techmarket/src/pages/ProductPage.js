import React from "react";
// , { useState }

import Nav from "../components/Nav";

import feature from "../images/Earl of Lemongrab.jpeg";

import "../styles/ProductPage.css";

const Product = props => {
  // 해당 사진 클릭할 때 onClick 실행
  // 이 때 onClick은 True
  return (
    <>
      <div id="product-container">
        <Nav />
        <div className="product-intro">
          <div className="product-photo">
            <img alt="" src={feature} />
          </div>
          <div className="product-seller-info">
            <div className="product-seller-name">나는야판매자</div>
            <div className="product-seller-comment">상태좋구어쩌구저쩌구</div>
          </div>
          <div className="product-modal-chats-container">
            <div className="product-chat-box">
              <input
                type="text"
                placeholder="50자 미만으로 댓글 작성해주세요."
              />
              <button className="product-chat-btn">클릭</button>
            </div>

            <div className="product-modal-chat-users">
              <div className="product-modal-chat">
                <div className="product-modal-chatter-info">
                  <span className="product-modal-chatter-name">이름</span>
                  <span className="product-modal-chatter-date">날짜</span>
                </div>
                <div className="product-modal-chatter-chat">
                  안녕하세요. 이 물건 사고 싶은데여.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
