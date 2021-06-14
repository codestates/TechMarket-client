import React, { useState } from "react";

import Nav from "../components/Nav";

import img from "../images/Earl of Lemongrab.jpeg";

import "../styles/ProductPage.css";
import axios from "axios";

// props === {accessToken, issueAccessToken}
const Product = props => {
  console.log(props.match.params.id);
  console.log(props);
  const [product, setProduct] = useState([]);

  // const id = props.location.state.id;
  // console.log(id);
  const id = props.match.params.id;
  console.log(id);

  axios.get(`http://localhost:8080/board?id=${id}`).then(res => {
    if (res.status === 200) {
      console.log(res.data);
      setProduct(res.data);
    } else {
      alert("예상치 못한 오류가 발생했습니다. \n 잠시 후 다시 시도해주세요.");
    }
  });

  return (
    <>
      <div id="product-container">
        <Nav />
        <div className="product-intro">
          <div className="product-photo-content-box">
            <div className="product-photo">
              <img alt="" src={img} />
            </div>
            <div className="product-seller-info">
              <div className="product-seller-name">{product.writerid}</div>
              <div className="product-seller-comment">{product.content}</div>
            </div>
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
