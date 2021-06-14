import React, { useEffect, useState } from "react";
import Nav from "../components/Nav";
import img from "../images/Earl of Lemongrab.jpeg";
import "../styles/ProductPage.css";
import axios from "axios";

const Product = (props) => {
  const [product, setProduct] = useState([]);
  const [chat, setChat] = useState("");
  const [chats, setChats] = useState([]);
  const [img, setImg] = useState([]);

  axios //모든 댓글 가져오기
  .get(`http://localhost:8080/comment?boardid=${props.location.state.id}`)
  .then(res => {
    if(res.status === 200) {
      setChats(res.data);
    }
  })

  useEffect(() => { //모든 게시물 가져오기
    axios
    .get(`http://localhost:8080/board?id=${props.location.state.id}`)
    .then(res => {
      if (res.status === 200) {
        setProduct(res.data);
        setImg(res.data.filename);
      } else {
        alert("예상치 못한 오류가 발생했습니다. \n 잠시 후 다시 시도해주세요.");
      }
    })
    .catch(err => {
      console.log(err);
    })
    return () => {
      console.log("");
    }
  },[]);

  const inputChatHandler = (e) => {
    setChat(e.target.value);
  }

  const clickChatButton = async () => { //댓글 작성하기 => 아이디, 작성시 비밀번호, 내용, 게시물 아이디
    await axios.post(
      `http://localhost:8080/comment/create`,{
        username: localStorage.getItem("username"),
        password: "1234",
        content: chat,
        boardid: props.location.state.id
      }
    )
    .then(res => {
      if(res.status === 200) {
        setProduct([...chats, res.data]);
        alert("댓글 작성이 완료되었습니다.");
      }
    })
    .catch(err => {
      console.log(err);
    })
  }

  const clickDeleteButton = async (chatid) => {
    console.log("delete");
    console.log(chats);
    //댓글의 아이디 보내기
    await axios.post(
      `http://localhost:8080/comment/delete`, {
        id: chatid,
      }
    )
    .then(res => {
      if(res.status === 200) {
        alert("댓글 삭제가 정상적으로 완료되었습니다.");

      }
    })
    .catch(err => {
      console.log(err);
    })
  }
  
  return (
    <>
      <div id="product-container">
        <Nav />
        <div className="product-intro">
          <div className="product-photo-content-box">
            <div className="product-photo">
            {
              img.map(el => {
                return (
                  <img src={`http://localhost:8080/${el}`}></img>
                )
              })
            }
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
                onChange={e => inputChatHandler(e)}
              />
              <button className="product-chat-btn" onClick={clickChatButton}>클릭</button>
            </div>
            {
              chats.map(chat => {
                return (
                  <div className="product-modal-chat-users" key={chat.id}>
                  <div className="product-modal-chat">
                    <div className="product-modal-chatter-info">
                      <span className="product-modal-chatter-name">{chat.username}</span>
                      <span className="product-modal-chatter-date">{chat.createdAt}</span>
                    </div>
                    <div className="product-modal-chatter-chat">
                      {chat.content}
                      {
                        localStorage.getItem("username") === chat.username ? 
                        <button className="product-modal-chatter-delete" onClick={() => clickDeleteButton(chat.id)}>삭제</button>
                        : <></>
                      }
                      </div>
                    </div>
                  </div>
                )
              })
            }

          </div>
        </div>
      </div>
    </>
  );
};

export default Product;