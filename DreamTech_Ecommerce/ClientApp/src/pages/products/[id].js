import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { GLOBAL_TYPES } from "../../redux/actions/globalTypes";
import Carousel from "../../components/Carousel";
import { getProductById } from "../../redux/actions/productsAction";
import { addToCart, updateQtyCart } from "../../redux/actions/cartAction";

function Products() {
  const [product, setProduct] = useState(false);
  const dispatch = useDispatch();
  const { auth } = useSelector((state) => state);
  const { sub_page: id } = useParams();
  const productRedux = useSelector((state) => state.product);
  useEffect(() => {
    dispatch(getProductById({ id: id }));
  }, [dispatch, id]);

  useEffect(() => {
    setProduct(productRedux);
  }, [productRedux]);

  const renderProductAlert = (product) => {
    return (
      <div>
        <div className="d-flex align-items-start justify-content-between gap-3 mb-2">
          <img
            src={product?.productImages[0].imageUrl}
            alt=""
            style={{ width: "50px" }}
          />
          <p>{product?.name}</p>
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
  };

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
        data: renderProductAlert(product),
        duration: 3000,
      },
    });

    const cart = auth.user.carts.find((cart) => cart.productId === product.id);

    if (cart) {
      dispatch(updateQtyCart({ id: cart.id, qty: cart.qty + 1, auth }));
    } else dispatch(addToCart({ product, auth }));
  };
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
    let numberString = number?.toString();

    // Tạo mảng chứa các nhóm 3 chữ số từ phải qua
    let groups = [];
    for (let i = numberString?.length; i > 0; i -= 3) {
      groups.unshift(numberString?.slice(Math.max(0, i - 3), i));
    }

    // Kết hợp các nhóm bằng dấu chấm và trả về kết quả
    return groups.join(".");
  }
  return (
    <form className="products" onSubmit={handleSubmit}>
      {product && (
        <div className="product_container">
          <div className="row product_content ">
            <div className="col-4">
              <Carousel productImages={product.productImages} id={1} />
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
                  {formatNumber(product.price)}đ
                </span>
                <span
                  style={{
                    fontSize: "18px",
                    color: "var(--text-secondary-color)",
                    textDecoration: "line-through",
                  }}
                >
                  {formatNumber(product.salePrice)}đ
                </span>
                <span className="btn btn_primary_outline calculateDiscount">
                  {tinhPhanTramGiamGia(product.price, product.salePrice)}%
                </span>
              </div>
              <div className="mb-4 product_info_gift">
                <h5>
                  <i className="fa-solid fa-gift me-2" />
                  Quà tặng khuyến mãi
                </h5>
                {product.gifts?.map((gift, index) => (
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
              <tr>
                <th scope="row">CPU</th>
                <td>{product.cpu}</td>
              </tr>
              <tr>
                <th scope="row">RAM</th>
                <td>{product.ram}</td>
              </tr>
              <tr>
                <th scope="row">DISK</th>
                <td>{product.disk}</td>
              </tr>
              <tr>
                <th scope="row">VGA</th>
                <td>{product.vga}</td>
              </tr>
              <tr>
                <th scope="row">SCREEN</th>
                <td>{product.screen}</td>
              </tr>
              <tr>
                <th scope="row">COLOR</th>
                <td>{product.color}</td>
              </tr>
              <tr>
                <th scope="row">SIZE</th>
                <td>{product.size}</td>
              </tr>
              <tr>
                <th scope="row">WEIGHT</th>
                <td>{product.weight}</td>
              </tr>
              <tr>
                <th scope="row">BATTERY</th>
                <td>{product.battery}</td>
              </tr>
            </tbody>
          </table>
          <h4>Đánh giá chi tiết {product.name}</h4>
          <p>{product.description}</p>
        </div>
      )}
    </form>
  );
}

export default Products;
