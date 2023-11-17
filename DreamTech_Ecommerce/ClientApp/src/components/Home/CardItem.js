import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTruck, faGift, faFire, faStar, faMicrochip } from "@fortawesome/free-solid-svg-icons";
const CardItem = () => {
  return (
    <div className="Home_list-product-pc-slide_product col-2">
      <div className="Home_list-product-pc-slide_slide_product_header mb-2">
        <div className="Home_list-product-pc-slide_slide_product_header-QuaTangHot">
          <FontAwesomeIcon icon={faFire} style={{ color: "#ffd43b" }} />
          <h5>Quà tặng HOT</h5>
        </div>
        <FontAwesomeIcon icon={faGift} style={{ color: "#ee1b1b" }} />
      </div>
      <div className="Home_list-product-pc-slide_slide_product_body mb-2">
        <img src="//product.hstatic.net/200000722513/product/6969_7833f74e75ba4d1ab1c6fc41ff35c100_medium.png" />
      </div>
      <div className="Home_list-product-pc-slide_slide_product_hotsales mb-2">
        <div className="Home_list-product-pc-slide_slide_product_hotsales-banChay">
          <FontAwesomeIcon icon={faFire} style={{ color: "#ffd43b" }} />
          <h5>Bán chạy</h5>
        </div>
      </div>
      <div className="Home_list-product-pc-slide_slide_product_name mb-2">
        PC GVN Intel i7-13700F/ VGA RTX 4070
      </div>
      <div className="Home_list-product-pc-slide_slide_product_detail mb-2">
        <div className="Home_list-product-pc-slide_slide_product_detail_icon-name">
          <FontAwesomeIcon icon={faMicrochip} style={{ color: "#9197a1" }} />
          <h5>i7 13700F</h5>
        </div>
        <div className="Home_list-product-pc-slide_slide_product_detail_icon-name">
          <FontAwesomeIcon icon={faMicrochip} style={{ color: "#9197a1" }} />
          <h5>RTX 4060</h5>
        </div>
        <div className="Home_list-product-pc-slide_slide_product_detail_icon-name">
          <FontAwesomeIcon icon={faMicrochip} style={{ color: "#9197a1" }} />
          <h5>i7 13700F</h5>
        </div>
        <div className="Home_list-product-pc-slide_slide_product_detail_icon-name">
          <FontAwesomeIcon icon={faMicrochip} style={{ color: "#9197a1" }} />
          <h5>i7 13700F</h5>
        </div>
      </div>
      <div className="Home_list-product-pc-slide_slide_product_sale-price">
        5.740.000₫
      </div>
      <div className="Home_list-product-pc-slide_slide_product_main-price-persent">
        <h5>5.390.000₫</h5>
        <div>-5%</div>
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
  );
};

export default CardItem;
