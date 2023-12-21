import React, { useState, useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { GLOBAL_TYPES } from "../../redux/actions/globalTypes";
import Carousel from "../../components/Carousel";

const fakeProduct = {
  id: 4,
  images: [
    "https://product.hstatic.net/200000722513/product/lg-gram-style-fix_4013ad0ecc9c449f9611fb4f31069a92_1024x1024.png",
    "https://product.hstatic.net/200000722513/product/5.hinhanhsanpham1_d29de04024294f329e38332a99f2cb7c_f6f1e3c980974cd2b30dbc9e3438ae4c_1024x1024.jpg",
    "https://product.hstatic.net/200000722513/product/6.hinhanhsanpham3_9f2fbf6b901f4a83b85737612e957030_92ddadad61b14aa3a725c3924a3f8089_1024x1024.jpg",
    "https://product.hstatic.net/200000722513/product/14z90rs-02-1-gram-style-design-mobile_d3807c71442c4235b9da6ffdcf597d04_999d52f9503749069407961b41b8e2e7_1024x1024.jpg",
  ],
  name: "Laptop LG Gram Style 14Z90RS GAH54A5",
  price: "38.990.000",
  sale_price: "35.990.000",
  gifts: [
    {
      id: 123,
      name: "Móc khóa Keycap DreamTech",
    },
    {
      id: 124,
      name: "Túi chống sốc DreamTech",
    },
  ],
  description: [
    {
      tech: "CPU",
      content:
        "Intel Core i5-1340P (12 Cores: 4P + 8E, P: 1.9 up to 4.6 GHz / E: 1.4 up to 3.4 GHz) 12 MB Cache",
    },
    {
      tech: "RAM",
      content: "16GB LPDDR5 6000MHz (Dual Channel, Onboard, không nâng cấp)",
    },
    {
      tech: "Ổ cứng",
      content: "512GB PCIe NVMe M.2 SSD (2 slot, còn trống 1 khe M.2)",
    },
    {
      tech: "Card đồ họa",
      content: "Intel Iris Xe Graphics",
    },
    {
      tech: "Màn hình",
      content:
        "14 inch WQXGA+ 2K8 (2880 x 1800), 16:10, OLED 90Hz 0.2ms, DCI-P3 100%, LGD, 500 nits, Anti-Glare Flow Refrection",
    },
    {
      tech: "Hệ điều hành",
      content: "Windows 11 Home",
    },
    {
      tech: "Pin",
      content: "72 Wh Li-Ion, Thời lượng pin lên đến 15 giờ (Video playback)",
    },
    {
      tech: "Trọng lượng",
      content: "999 gram",
    },
    {
      tech: "Màu sắc",
      content: "Trắng",
    },
    {
      tech: "Kích thước",
      content: "31.16 cm x 21.39 cm x 1.59  cm",
    },
  ],
};

function Products() {
  const [product, setProduct] = useState(false);
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  useEffect(() => {
    setProduct(fakeProduct);
  }, []);

  const calculateDiscount = useCallback(() => {
    const price = parseInt(product.price);
    const sale_price = parseInt(product.sale_price);

    return Math.floor(((sale_price - price) / price) * 100);
  }, [product]);

  const renderProductAlert = useCallback(() => {
    return (
      <div>
        <div className="d-flex align-items-start justify-content-between gap-3 mb-2">
          <img src={product.images[0]} alt="" style={{ width: "50px" }} />
          <p>{product.name}</p>
        </div>
        <Link
          to="/cart"
          className="btn btn_primary w-100 "
          style={{
            fontWeight: "500",
          }}
        >
          XEM GIỎ HÀNG
        </Link>
      </div>
    );
  }, [product]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!auth) {
      return dispatch({
        type: GLOBAL_TYPES.MODAL_AUTH,
        payload: true,
      });
    }

    dispatch({
      type: GLOBAL_TYPES.ALERT,
      payload: {
        type: "success",
        title: "Thêm vào giỏ hàng thành công",
        data: renderProductAlert(),
        duration: 3000,
      },
    });
    dispatch({
      type: GLOBAL_TYPES.ADD_CART,
      payload: product,
    });
  };

  return (
    <form className="products" onSubmit={handleSubmit}>
      {product && (
        <div className="product_container">
          <div className="row product_content ">
            <div className="col-4">
              <Carousel images={product.images} id={product.id} />
            </div>
            <div className="col-8 product_info">
              <h4>{product.name}</h4>
              <div className="product_info_price">
                <span
                  style={{
                    fontSize: "32px",
                    color: "var(--primary-color)",
                    fontWeight: "600",
                  }}
                >
                  {product.sale_price}đ
                </span>
                <span
                  style={{
                    fontSize: "18px",
                    color: "var(--text-secondary-color)",
                    textDecoration: "line-through",
                  }}
                >
                  {product.price}đ
                </span>
                <span className="btn btn_primary_outline calculateDiscount">
                  {calculateDiscount()}%
                </span>
              </div>
              <div className="mb-4 product_info_gift">
                <h5>
                  <i className="fa-solid fa-gift me-2" />
                  Quà tặng khuyến mãi
                </h5>
                {product.gifts.map((gift, index) => (
                  <p key={index} className="product_info_item">
                    <span className="indicator">{index + 1}</span>{" "}
                    <span>{gift.name}</span>
                  </p>
                ))}
              </div>
              <button type="submit" className="mb-4 btn btn_primary w-50">
                <p>Mua ngay</p>
                <small>Giao tận nơi hoặc nhận tại cửa hàng</small>
              </button>
              <ul className="list-group list-group-flush mb-2 product_info_warranty">
                <li className="list-group-item">
                  <i class="fa-solid fa-check" />
                  <span> Bảo hành chính hãng 12 tháng.</span>
                </li>
                <li className="list-group-item">
                  <i class="fa-solid fa-check" />
                  <span> Hỗ trợ đổi mới trong 7 ngày. </span>
                </li>
                <li className="list-group-item">
                  <i class="fa-solid fa-check" />
                  <span> Windows bản quyền tích hợp. </span>
                </li>
                <li className="list-group-item">
                  <i class="fa-solid fa-check" />
                  <span> Miễn phí giao hàng toàn quốc.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
      {product && (
        <div className="product_detail">
          <h4>Thông số kỹ thuật</h4>
          <table className="table table-bordered">
            <tbody>
              {product.description.map((item, index) => (
                <tr key={index}>
                  <th scope="row">{item.tech}</th>
                  <td>{item.content}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <h4>Đánh giá chi tiết {product.name}</h4>
          <p>
            LG Gram Style 14Z90RS GAH54A5 khơi nguồn cảm hứng làm việc với thiết
            kế tinh xảo, kiểu dáng thời thượng chuẩn laptop hiện đại năm nay.
            Thu hút bởi ngoại hình sang trọng cùng hiệu năng hoạt động đỉnh cao
            cho mọi yêu cầu học tập và làm việc hằng ngày của người dùng.
          </p>
        </div>
      )}
    </form>
  );
}

export default Products;
