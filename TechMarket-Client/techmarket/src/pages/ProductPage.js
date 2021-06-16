import React, { useEffect, useState } from "react";
import Nav from "../components/Nav";
import "../styles/ProductPage.css";
import axios from "axios";
let imageIndex = 0;
let imageUrl = "";

const Product = (props) => {
  const [product, setProduct] = useState([]);
  const [chat, setChat] = useState("");
  const [chats, setChats] = useState([]);
  const [img, setImg] = useState([]);

  axios // 해당 게시물의 모든 댓글 가져오기
  .get(`http://localhost:8080/comment?boardid=${props.location.state.id}`)
  .then(res => {
    if(res.status === 200) {
      setChats(res.data);
    }
  })

   // 해당 게시물 정보 가져오기
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
    
  const inputChatHandler = (e) => {
    setChat(e.target.value);
  }

  const clickChatButton = async () => {
    await axios.post(
      `http://localhost:8080/comment/create`,{
        username: localStorage.getItem("username"),
        content: chat,
        boardid: props.location.state.id
      }
    )
    .then(res => {
      if(res.status === 200) {
        //setProduct([...chats, res.data]);
        alert("댓글 작성이 완료되었습니다.");
      }
    })
    .catch(err => {
      console.log(err);
    })
  }

  const clickDeleteButton = async (chatid) => {
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

  const clickDealButton = async () => {
    var result = window.confirm("거래가 어땠는지 판단해주세요");
    if(result) {
      await axios.post(
        `http://localhost:8080/user/deal`, {
          writerid: product.writerid,
        }
      )
      .then(
        alert("평가가 완료되었습니다.")
      )
    } else {
      alert("평가가 완료되었습니다.");
    }
  }

  const changeImage = () => {
      imageIndex++;

      if(imageIndex < 0) {
        imageIndex = img.length-1;
      }
      else if(imageIndex >= img.length) {
        imageIndex = 0;
      }
      imageUrl = `http://localhost:8080/${img[imageIndex]}`;
  }
  
  return (
    <>
      <div id="product-container">
        <Nav />
        <div className="product-intro">
          <div className="product-photo-content-box">
            <div className="product-photo">
                  <button onClick={changeImage()}>x</button>
                  <img src={imageUrl}></img>
                  <button onClick={changeImage()}>x</button>

            </div>
            <div className="product-seller-info">
              <div className="product-seller-title">{product.title}</div>
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
              <button className="product-list-btn" onClick={() => {window.location = "/products"}}>게시물 목록으로</button>
              {
                localStorage.getItem("username") !== product.writerid ?
                <button className="product-list-btn" onClick={clickDealButton}>거래완료</button> :
                <></>
              }

            </div>
            {
              chats.map(chat => {
                return (
                  <>
                    <span className="product-modal-chat-users" key={chat.id}>
                      
                    <div className="product-modal-chat">
                      <div className="product-modal-chatter-info">
                        <span className="product-modal-chatter-name">{chat.username}</span>
                      </div>
                        <div className="product-modal-chatter-chat">
                          {chat.content}
                        </div>
                        {
                          localStorage.getItem("username") === chat.username ? 
                          <button className="product-modal-chatter-delete" onClick={() => clickDeleteButton(chat.id)}>삭제</button>
                          : <button></button>
                        }
                      </div>
                    </span>
                  </>
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