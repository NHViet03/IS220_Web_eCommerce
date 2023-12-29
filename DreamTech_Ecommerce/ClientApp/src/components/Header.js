import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { GLOBAL_TYPES } from "../redux/actions/globalTypes";
import Logo from "../images/logo.png";
import { getAllProducts } from "../redux/actions/productsAction";


function Header() {
  const user = useSelector((state) => state.auth.user);
  const product = useSelector((state) => state.product);
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  const [isShowDropdown, setIsShowDropdown] = useState(false);
  const [searchResult, setSearchResult] = useState([]);
  useEffect(() => {
    dispatch(getAllProducts());
  },[dispatch]);
  useEffect(() => {
   
  },[]);
  const handleShowModalAuth = () => {
    dispatch({ type: GLOBAL_TYPES.MODAL_AUTH, payload: true });
  };

  const handleShowModalLogout = () => {
    dispatch({ type: GLOBAL_TYPES.MODAL_LOGOUT, payload: true });
  };

  const handleSearch = (value) => {
    console.log(value);
    setSearch(value);

    if (value.length === 0) {
      return setSearchResult([]);
    }
    // Fake API
    const productAfterSearch = product?.filter((product) =>
      product.name.toLowerCase().includes(value.toLowerCase())
    );
    setSearchResult(productAfterSearch);
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
              {/* Phần tìm kiếm */}
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
                          {result.salePrice}
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
                    <img src={result.productImages[0].imageUrl} alt="Product" />
                  </Link>
                ))}
              </div>
              <Link to={'collections/laptop'}>
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
