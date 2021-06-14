import axios from "axios";
import React, { useState } from "react";

import Nav from "../components/Nav";

import "../styles/Post.css";

const Post = () => {
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [category, setCategory] = useState("notebook");
  const [selectedFile, setSelectedFile] = useState("");

  const inputTitleHandler = e => {
    setTitle(e.target.value);
  };

  const inputSummaryHandler = e => {
    setSummary(e.target.value);
  };

  const handleUploadPost = async () => {
    try {
      if(title !== "" && summary !== "") {
        console.log("버튼 누름");

        const formData = new FormData();
        console.log(selectedFile.name);
        formData.append('photos',selectedFile);
        for (let i = 0; i < selectedFile.length; i++) {
          formData.append('photos', selectedFile[i]);
        }
        formData.append('writerid', "jiwon");
        formData.append("category", category);
        formData.append("title", title);
        formData.append("content", summary);
        formData.append("registday", getCurrentDate());

        for (var pair of formData.entries()) {
          console.log(pair[0]+ ', ' + pair[1]); 
        }

        await axios.post (
          `http://localhost:8080/mypage/upload`,
          formData,
          // {
          //   headers: {
          //     'content-type':
          //         'multipart/form-data',
          // },
          // withCredentials: true,
          // }
          )
          .then(res => {
            if(res.status === 200) {
              alert("게시물 작성이 완료되었습니다.");
            }
          })
      } else {
        alert("모든 항목은 필수입니다.");
        // 게시물 목록 화면으로 이동하기
      }
    } catch(err) {
      console.log(err)
      alert("예상치 못한 에러가 발생했습니다. \n 잠시 후 다시 시도해주세요.");
    }
  }

  const handleCategory = (event) => {
    setCategory(event.target.value);
  }

  const selectFile = (e) => {
    setSelectedFile([...selectedFile, e.target.files[0]]); //[...selectedFile, e.target.files[0]]
    console.log(e.target.files);
  }

  const getCurrentDate = () => {
    var date = new Date();
    var year = date.getFullYear().toString();

    var month = date.getMonth() + 1;
    month = month < 10 ? '0' + month.toString() : month.toString();

    var day = date.getDate();
    day = day < 10 ? '0' + day.toString() : day.toString();

    var hour = date.getHours();
    hour = hour < 10 ? '0' + hour.toString() : hour.toString();

    var minute = date.getMinutes();
    minute = minute < 10 ? '0' + minute.toString() : minute.toString();

    var seconds = date.getSeconds();
    seconds = seconds < 10 ? '0' + seconds.toString() : seconds.toString();

    return `${year}-${month}-${day} ${hour}:${minute}:${seconds}`;
  }
 

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
            <select onChange={handleCategory} id="product-post-category">
              <option value="notebook">notebook</option>
              <option value="iPad">iPad</option>
              <option value="mobile phone">mobile phone</option>
              <option value ="AirPods">AirPods</option>
              <option value ="PC">PC</option>
              <option value="Etc">Etc</option>
            </select>
          </div>
          <div className="product-post-summary">
            <input
              type="textarea"
              value={summary}
              onChange={e => {
                inputSummaryHandler(e);
              }}
            >
            </input>
            <input type="file" name="myFile" onChange={selectFile}></input>
          </div>
          <div className="product-post-btn-container">
            <button className="product-post-btn" onClick={handleUploadPost}>글쓰기</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Post;
