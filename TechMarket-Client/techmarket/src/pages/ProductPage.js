import React, { useEffect, useState } from "react";
import axios from "axios";
import Nav from "../components/Nav";
import Modal from "../components/mapmodal";
import "../styles/ProductPage.css";

let imageIndex = 0;
let imageUrl = "";

const Product = (props) => {
  const [product, setProduct] = useState([]);
  const [chat, setChat] = useState("");
  const [img, setImg] = useState([]);
  const [InputText, setInputText] = useState('')
  const [Place, setPlace] = useState('')
  const [ modalOpen, setModalOpen ] = useState(false);

  axios
  .get(`${process.env.REACT_APP_API_URL}/board?id=${props.location.state.id}`)
  .then(res => {
    if (res.status === 200) {
      setProduct(res.data);
      setImg(res.data.filename);
    } else {
      alert("게시물이 하나도 없습니다.")
    }
  })
  .catch(err => {
    alert("예상치 못한 오류가 발생했습니다. \n 잠시 후 다시 시도해주세요.");
  })
  
  const inputChatHandler = (e) => {
    setChat(e.target.value);
  }

  const clickChatButton = async () => {
    await axios.post(
      `${process.env.REACT_APP_API_URL}/comment/create`,{
        username: localStorage.getItem("username"),
        content: chat,
        boardid: props.location.state.id
      }
    )
    .then(res => {
      if(res.status === 200) {
        alert("댓글 작성이 완료되었습니다.");
      }
    })
    .catch(err => {
      alert("예상치 못한 오류가 발생했습니다. \n 잠시 후 다시 시도해주세요");
    })
  }

  const clickDeleteButton = async (chatid) => {
    await axios.post(
      `${process.env.REACT_APP_API_URL}/comment/delete`, {
        id: chatid,
      }
    )
    .then(res => {
      if(res.status === 200) {
        alert("댓글 삭제가 정상적으로 완료되었습니다.");
      }
    })
    .catch(err => {
      alert("예상치 못한 오류가 발생했습니다. \n 잠시 후 다시 시도해주세요.");
    })
  }

  const clickDealButton = async () => {
    var result = window.confirm("거래가 어땠는지 판단해주세요!");
    if(result) {
      await axios.post(
        `${process.env.REACT_APP_API_URL}/user/deal`, {
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

  const openModal = () => {
    setModalOpen(true);
  }
  const closeModal = () => {
    setModalOpen(false);
  }
  
  return (
    <>
      <div id="product-container">
        <Nav />
        <div className="product-intro">
          <div className="product-photo-content-box">
            <div className="product-photo">
              <img src={`${process.env.REACT_APP_API_URL}/${img[0]}`}></img>
            </div>
            <div className="product-seller-info">
              <div className="product-seller-title">{product.title}</div>
              <div className="product-seller-comment">{product.content}</div>
            </div>
            <React.Fragment>
            <button className="product-map" onClick={ openModal }>지도로 위치 찾기</button>
            <Modal open={ modalOpen } close={ closeModal } header="지도로 직거래 장소 찾아보기">
            </Modal>
            </React.Fragment>
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
            { product.comments !== undefined ? 
              product.comments.map(chat => {
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
              }): <div>- 해당 게시물에는 아직 댓글이 없습니다 -</div>
            }

          </div>
        </div>
      </div>
    </> 
  );
};

export default Product;