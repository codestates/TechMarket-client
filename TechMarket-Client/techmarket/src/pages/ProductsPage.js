import React from "react";
import Nav from "../components/Nav";

import "../styles/ProductsPage.css";

const Products = () => {
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
          <div className="body-products-outer-container">
            <div className="body-products-container">
              <div className="product-feature">
                {/* <a href="#"></a> */}
                <div className="product-photo">
                  <img alt="" src="../images/Earl of Lemongrab.jpeg" />
                </div>
                <div className="product-info">
                  <div className="product-title">레몬그랩</div>
                  <div className="product-region">서울특별시</div>
                  <div className="product-price-container">
                    <span className="product-price-tag">14000원</span>
                    <span className="product-users-watch">
                      {/* 하트 이모지*/}32
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="products-footer"></div>
      </div>
    </>
  );
};

export default Products;
