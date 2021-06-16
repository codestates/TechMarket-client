import React, { useState } from "react";
import Nav from "../components/Nav";
import { Link } from "react-router-dom";
import axios from "axios";
import "../styles/ProductsPage.css";
import loading from "../images/loading.gif";
import like from "../images/like.png"


const Products = props => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  if (props.location.state) { //검색어를 입력하고 들어왔으면
    const word = props.location.state.search;
    axios
      .get(`http://localhost:8080/search?search_word=${word}`,{
      })
      .then(res => {
        if (res.status === 200) {
          if(res.data.data){
            setProducts(res.data.data.result);
            setIsLoading(false);
          } else {
            alert("검색 결과가 없습니다.");
          }
        } else {
            alert(
              "예상치 못한 오류가 발생했습니다. \n 잠시 후 다시 시도해주세요."
            );
          }
      });
  } else {  //전체 상품 보기를 입력하고 들어왔으면
      axios.get(`http://localhost:8080/products`).then(res => {
        if (res.status === 200) {
          setProducts(res.data);
          setIsLoading(false);
        } else {
          alert("예상치 못한 오류가 발생했습니다. \n 잠시 후 다시 시도해주세요.");
        }
      });
  }
  return (
    <>
      <div id="products-container">
        <Nav />
        { !isLoading ? 
          <div id="section-search-products">
            <div className="products-header">
              <div className="products-search-mention">
                찾으시는 상품이 있으신가요?
              </div>
              <div className="products-search-introduction">
                TechMarket에서는 원하시는 상품을 어느 곳에서나 찾으실 수 있습니다
              </div>
            </div> 
            {products.map(product => {
              return (
                <Link
                  to={{
                    pathname: `/show/${product.id}`,
                    state: { id: product.id }
                  }}
                  className="products-link"
                >
                  <div className="body-products" >
                    <div>
                      <img
                        src={`http://localhost:8080/${product.thumbnail}`}
                        className="product-image"
                      ></img>
                    </div>
                    <div className="product-title">{product.title}</div>
                    <span className="product-writer">{product.writerid}</span>
                      <span className="product-users-watch">
                        <img src={like} className="like"></img>32
                      </span>
                  </div>
                </Link>
              );
            })}
          </div> : <img src={loading} className="loadingImage"></img>
        }
      </div>
      <div id="products-footer"></div>
    </> 
  );
};

export default Products;
