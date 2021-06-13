import React, { useState } from "react";
import Nav from "../components/Nav";
import axios from "axios";
import "../styles/ProductsPage.css";
import img from "../images/profileImg.png";

const Products = () => {
  const [item, setItem] = useState(0);
  const incrementItem = () => setItem(item + 1);

  const [products, setProducts] = useState([]);

  axios.get(`http://localhost:8080/products`).then(res => {
    if (res.status === 200) {
      setProducts(res.data);
    } else {
      alert("예상치 못한 오류가 발생했습니다. \n 잠시 후 다시 시도해주세요.");
    }
  });

  return (
    <>
      <div id="products-container">
        <Nav />
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
              <div className="body-products" key={product.id}>
                <img src={img} alt=""></img>
                <div className="product-title">{product.title}</div>
                <div className="product-category">{product.category}</div>
                <div className="product-writer-container">
                  <span className="product-writer">{product.writerid}</span>
                  <span className="product-users-watch">
                    {/* 하트 이모지*/}32
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div id="products-footer"></div>
    </>
  );
};

export default Products;
