import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { GLOBAL_TYPES } from "../redux/actions/globalTypes";
import Logo from "../images/logo.png";

const fakeSearchResult = [
  {
    id: 1,
    images: [
      "https://product.hstatic.net/200000722513/product/82xv00qpvn_cb7cf3e1339a4fca857fc1b06d49d0f3_large_1240c22a67834dc4b2446439760ac870_medium.png",
    ],
    name: "Laptop gaming Lenovo LOQ 15IRH8 82XV00QPVN",
    price: "21.990.000",
    sale_price: "19.990.000",
  },
  {
    id: 2,
    images: [
      "https://product.hstatic.net/200000722513/product/76kg_1433e407838944df88bd906b57729c0a_medium.png",
    ],
    name: "Laptop gaming Acer Predator Helios 300 PH315 55 76KG",
    price: "48.490.000",
    sale_price: "30.990.000",
  },
  {
    id: 3,
    images: [
      "https://product.hstatic.net/200000722513/product/4a46d43e4b82391209328e195_large_7fa59a1a8ef14c37b78bc34161b45a87_large_3c00edfcc07d4928b682a0f675620c81_medium.png",
    ],
    name: "Laptop gaming ASUS TUF Gaming A15 FA507NU LP034W",
    price: "29.490.000",
    sale_price: "25.490.000",
  },
  {
    id: 4,
    images: [
      "https://product.hstatic.net/200000722513/product/lg-gram-style-fix_4013ad0ecc9c449f9611fb4f31069a92_medium.png",
    ],
    name: "Laptop LG Gram Style 14Z90RS GAH54A5",
    price: "38.990.000",
    sale_price: "35.990.000",
  },
];

function Header() {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  const [isShowDropdown, setIsShowDropdown] = useState(false);
  const [searchResult, setSearchResult] = useState([]);

  const handleShowModalAuth = () => {
    dispatch({ type: GLOBAL_TYPES.MODAL_AUTH, payload: true });
  };

  const handleShowModalLogout = () => {
    dispatch({ type: GLOBAL_TYPES.MODAL_LOGOUT, payload: true });
  };

  const handleSearch = (value) => {
    setSearch(value);

    if (value.length === 0) {
      return setSearchResult([]);
    }
    // Fake API
    setSearchResult(fakeSearchResult);
  };

  return (
    <div className="header">
      <div className="header_container">
        <Link to={"/"}>
          <img src={Logo} alt="Logo" className="header_logo" />
        </Link>
        <Link className="header_item header_item_primary">
          <i className="fa-solid fa-bars" />
          <p>Danh mục</p>
        </Link>
        <div className="header_search">
          <input
            placeholder="Bạn cần tìm gì ?"
            className="form-control"
            value={search}
            onChange={(e)=>handleSearch(e.target.value)}
          />
          <i className="fa-solid fa-magnifying-glass" />
          {searchResult.length > 0 && (
            <div className="search_result">
              <div className="search_result_list">
                {searchResult.map((result) => (
                  <Link
                    to={`/products/${result.id}`}
                    key={result.id}
                    className="search_result_item"
                    onClick={()=>handleSearch("")}
                  >
                    <div className="search_result_item_content">
                      <p>{result.name}</p>
                      <div className="search_result_item_price">
                        <span
                          style={{
                            color: "var(--primary-color)",
                            marginRight: "8px",
                          }}
                        >
                          {result.sale_price}
                        </span>
                        <span
                          style={{
                            textDecoration: "line-through",
                            color: "var(--text-secondary-color)",
                            fontSize: "14px",
                          }}
                        >
                          {result.price}
                        </span>
                      </div>
                    </div>
                    <img src={result.images[0]} alt="Product" />
                  </Link>
                ))}
              </div>
              <Link>
                <p
                  className="pt-2 text-center"
                  style={{
                    color: "#000",
                    cursor: "pointer",
                  }}
                >
                  Xem thêm sản phẩm
                </p>
              </Link>
            </div>
          )}
        </div>

        <Link className="header_item">
          <i className="fa-solid fa-headset" />
          <p>
            Hotline <br />
            1800.6975
          </p>
        </Link>
        <Link className="header_item">
          <i className="fa-solid fa-location-dot" />
          <p>
            Hệ thống <br />
            Showroom
          </p>
        </Link>
        <Link to={"/account"} className="header_item">
          <i className="fa-solid fa-file-invoice" />
          <p>
            Tra cứu <br />
            đơn hàng
          </p>
        </Link>
        <Link to="/cart" className="header_item">
          <i
            className="fa-solid fa-cart-shopping"
            style={{
              position: "relative",
            }}
          >
            {user && user.carts.length > 0 && (
              <small
                style={{
                  position: "absolute",
                  top: "-5px",
                  right: "-5px",
                  backgroundColor: "#FDD835",
                  color: "#000",
                  fontSize: "12px",
                  fontWeight: "bold",
                  borderRadius: "50%",
                  padding: "1px",
                  width: "18px",
                  lineHeight: "15px",
                  height: "18px",
                  textAlign: "center",
                  border: "1px solid #fff",
                }}
              >
                {user.carts.length}
              </small>
            )}
          </i>
          <p>
            Giỏ <br />
            hàng
          </p>
        </Link>
        {user ? (
          <div className="dropdown">
            <div
              className="header_item header_item_primary"
              style={{
                position: "relative",
              }}
              onClick={() => setIsShowDropdown(!isShowDropdown)}
            >
              <i className="fa-solid fa-user" />
              <p>
                Xin chào <br />
                {user.firstName+" "+user.lastName}
              </p>
              {isShowDropdown && (
                <ul className="dropdown-menu">
                  <li>
                    <Link
                      className="dropdown-item"
                      to={{
                        pathname: "/account",
                        search: "?tab=profile",
                      }}
                    >
                      <i className="fa-solid fa-hands-clapping"></i>
                      <span>Xin chào, {user.lastName  }</span>
                    </Link>
                  </li>

                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link className="dropdown-item" to={"/account"}>
                      <i className="fa-solid fa-file-invoice" />
                      <span>Đơn hàng của tôi</span>
                    </Link>
                  </li>
                  <li>
                    <Link to={"/account"} className="dropdown-item">
                      <i className="fa-solid fa-eye" />
                      <span>Đã xem gần đây</span>
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      onClick={handleShowModalLogout}
                    >
                      <i className="fa-solid fa-right-from-bracket" />
                      Đăng xuất
                    </Link>
                  </li>
                </ul>
              )}
            </div>
          </div>
        ) : (
          <Link
            className="header_item header_item_primary"
            onClick={handleShowModalAuth}
          >
            <i className="fa-solid fa-user" />
            <p>Đăng nhập</p>
          </Link>
        )}
      </div>
      <div className="sub_header">
        <Link className="sub_header_item">
          <i className="fa-solid fa-tag" />
          <p>Black Friday 2023</p>
        </Link>
        <Link className="sub_header_item">
          <i className="fa-solid fa-newspaper" />
          <p>Tin công nghệ</p>
        </Link>
        <Link className="sub_header_item">
          <i className="fa-brands fa-youtube" />
          <p>Video</p>
        </Link>
        <Link className="sub_header_item">
          <i className="fa-solid fa-credit-card" />
          <p>Hướng dẫn thanh toán</p>
        </Link>
        <Link className="sub_header_item">
          <i className="fa-solid fa-coins" />
          <p>Hướng dẫn trả góp</p>
        </Link>
        <Link className="sub_header_item">
          <i className="fa-solid fa-shield" />
          <p>Chính sách bảo hành</p>
        </Link>
      </div>
    </div>
  );
}

export default Header;
