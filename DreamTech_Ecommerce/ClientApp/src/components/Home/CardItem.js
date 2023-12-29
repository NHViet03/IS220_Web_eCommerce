import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGift,
  faFire,
  faStar,
  faMicrochip,
} from "@fortawesome/free-solid-svg-icons";
const CardItem = ({ item, details }) => {
  // Random Rate
  function randomInRangeWithOneDecimalAndFormat(min, max) {
    var randomNumber = Math.random() * (max - min) + min;
    var formattedNumber = randomNumber.toFixed(1);
    return Number.isInteger(randomNumber)
      ? formattedNumber + ".0"
      : formattedNumber;
  }
  // Percent
  function tinhPhanTramGiamGia(giaBan, giaGiam) {
    // Kiểm tra tránh chia cho 0
    if (giaBan === 0) {
      return 0;
    }

    // Tính phần trăm giảm giá và lấy phần nguyên
    var phanTramGiamGia = (((giaBan - giaGiam) / giaBan) * 100).toFixed(0);

    return phanTramGiamGia;
  }
  // Chuyển đổi giá thành 3 số rồi chấm
  function formatNumber(number) {
    // Chuyển số thành chuỗi
    let numberString = number.toString();

    // Tạo mảng chứa các nhóm 3 chữ số từ phải qua
    let groups = [];
    for (let i = numberString.length; i > 0; i -= 3) {
        groups.unshift(numberString.slice(Math.max(0, i - 3), i));
    }

    // Kết hợp các nhóm bằng dấu chấm và trả về kết quả
    return groups.join('.');
}
  return (
    <a href={`/products/${item.id}`}>
      <div className="Home_list-product-pc-slide_product col-2">
        <div className="Home_list-product-pc-slide_slide_product_header mb-2">
          <div className="Home_list-product-pc-slide_slide_product_header-QuaTangHot">
            <FontAwesomeIcon icon={faFire} style={{ color: "#ffd43b" }} />
            <h5>Quà tặng HOT</h5>
          </div>
          <FontAwesomeIcon icon={faGift} style={{ color: "#ee1b1b" }} />
        </div>
        <div className="Home_list-product-pc-slide_slide_product_body mb-2">
          <img src={item.productImages[0].imageUrl} />
        </div>
        <div className="Home_list-product-pc-slide_slide_product_hotsales mb-2">
          <div className="Home_list-product-pc-slide_slide_product_hotsales-banChay">
            <FontAwesomeIcon icon={faFire} style={{ color: "#ffd43b" }} />
            <h5>Bán chạy</h5>
          </div>
        </div>
        <div className="Home_list-product-pc-slide_slide_product_name mb-2">
          {item.name}
        </div>
        <div className="Home_list-product-pc-slide_slide_product_detail mb-2">
          <div className="Home_list-product-pc-slide_slide_product_detail_icon-name">
            <FontAwesomeIcon icon={faMicrochip} style={{ color: "#9197a1" }} />
            <h5>{details[0]}</h5>
          </div>
          <div className="Home_list-product-pc-slide_slide_product_detail_icon-name">
            <FontAwesomeIcon icon={faMicrochip} style={{ color: "#9197a1" }} />
            <h5>{details[1]}</h5>
          </div>
          <div className="Home_list-product-pc-slide_slide_product_detail_icon-name">
            <FontAwesomeIcon icon={faMicrochip} style={{ color: "#9197a1" }} />
            <h5>{details[2]}</h5>
          </div>
          <div className="Home_list-product-pc-slide_slide_product_detail_icon-name">
            <FontAwesomeIcon icon={faMicrochip} style={{ color: "#9197a1" }} />
            <h5>{details[3]}</h5>
          </div>
        </div>
        <div className="Home_list-product-pc-slide_slide_product_sale-price">
          {formatNumber(item.price)}₫
        </div>
        <div className="Home_list-product-pc-slide_slide_product_main-price-persent">
          <h5>{formatNumber(item.salePrice)}₫</h5>
          <div>{tinhPhanTramGiamGia(item.price, item.salePrice)}%</div>
        </div>
        <div className="Home_list-product-pc-slide_slide_product_rate mb-4 mt-2">
          <h4> {randomInRangeWithOneDecimalAndFormat(4.0, 5.0)}</h4>
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
