import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faGift, faFire, faStar, faMicrochip } from "@fortawesome/free-solid-svg-icons";
const CardItem = ({item}) => {
  return (
    <a href="/products/abc">
      <div className="Home_list-product-pc-slide_product col-2">
        <div className="Home_list-product-pc-slide_slide_product_header mb-2">
          <div className="Home_list-product-pc-slide_slide_product_header-QuaTangHot">
            <FontAwesomeIcon icon={faFire} style={{ color: "#ffd43b" }} />
            <h5>Quà tặng HOT</h5>
          </div>
          <FontAwesomeIcon icon={faGift} style={{ color: "#ee1b1b" }} />
        </div>
        <div className="Home_list-product-pc-slide_slide_product_body mb-2">
          <img src={item.url} />
        </div>
        <div className="Home_list-product-pc-slide_slide_product_hotsales mb-2">
          <div className="Home_list-product-pc-slide_slide_product_hotsales-banChay">
            <FontAwesomeIcon icon={faFire} style={{ color: "#ffd43b" }} />
            <h5>Bán chạy</h5>
          </div>
        </div>
        <div className="Home_list-product-pc-slide_slide_product_name mb-2" >
          {item.name}
        </div>
        <div className="Home_list-product-pc-slide_slide_product_detail mb-2">
          <div className="Home_list-product-pc-slide_slide_product_detail_icon-name">
            <FontAwesomeIcon icon={faMicrochip} style={{ color: "#9197a1" }} />
            <h5>{item.detail[0]}</h5>
          </div>
          <div className="Home_list-product-pc-slide_slide_product_detail_icon-name">
            <FontAwesomeIcon icon={faMicrochip} style={{ color: "#9197a1" }} />
            <h5>{item.detail[1]}</h5>
          </div>
          <div className="Home_list-product-pc-slide_slide_product_detail_icon-name">
            <FontAwesomeIcon icon={faMicrochip} style={{ color: "#9197a1" }} />
            <h5>{item.detail[2]}</h5>
          </div>
          <div className="Home_list-product-pc-slide_slide_product_detail_icon-name">
            <FontAwesomeIcon icon={faMicrochip} style={{ color: "#9197a1" }} />
            <h5>{item.detail[3]}</h5>
          </div>
        </div>
        <div className="Home_list-product-pc-slide_slide_product_sale-price">
          {item.price_old}₫
        </div>
        <div className="Home_list-product-pc-slide_slide_product_main-price-persent">
          <h5>{item.price_new}₫</h5>
          <div>{item.percent}%</div>
        </div>
        <div className="Home_list-product-pc-slide_slide_product_rate mb-4 mt-2">
          <h4> 5.0</h4>
          <FontAwesomeIcon
            icon={faStar}
            style={{ color: "#ffd43b", fontSize: "15px" }}
          />
          <h5>(0 đánh giá)</h5>
        </div>
      </div>
    </a>
  );
};

export default CardItem;
