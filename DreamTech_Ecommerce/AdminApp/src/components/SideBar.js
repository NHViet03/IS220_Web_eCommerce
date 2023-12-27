import React, { useState, useMemo } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../images/logo.png";
import {useSelector} from 'react-redux';

function SideBar({ showSideBar }) {
  const [active, setActive] = useState(0);
  const MenuItems = useMemo(
    () => [
      {
        title: "Trang chủ",
        icon: "fa-solid fa-house-user",
        link: "/",
      },
      {
        title: "Sản phẩm",
        icon: "fa-brands fa-shopify",
        link: "/products",
      },
      {
        title: "Đơn hàng",
        icon: "fa-solid fa-clipboard-list",
        link: "/orders",
      },
      {
        title: "Khách hàng",
        icon: "fa-solid fa-users",
        link: "/customers",
      },
      {
        title: "Doanh thu",
        icon: "fa-solid fa-chart-pie",
        link: "/revenue",
      },
    ],
    []
  );

  const { pathname } = useLocation();
  const auth=useSelector(state=>state.auth);

  const resetActive = () => {
    setActive(-1);
  };

  if(!auth.token || pathname==='/login') return null;

  return (
    <div className={`side_bar ${showSideBar ? "active" : ""}`}>
      <div className="side_bar-logo">
        <img src={Logo} alt="Logo" />
      </div>
      <hr className="divider" />
      <nav className="navbar">
        <ul className="navbar-nav d-flex flex-col">
          {MenuItems.map((item, index) => (
            <li key={index} className="nav-item mb-3">
              <Link
                to={item.link}
                className={`nav-link ${active === index ? "active" : ""}`}
                onClick={() => setActive(index)}
              >
                <span className="icon_wrapper">
                  <i className={item.icon} />
                </span>
                <span>{item.title}</span>
              </Link>
            </li>
          ))}
          <span
            className="my-4"
            style={{
              color: "rgba(0, 0, 0, 0.54)",
              fontWeight: "bold",
              fontSize: "16px",
            }}
          >
            TRANG TÀI KHOẢN
          </span>
          <li className="nav-item mb-3">
            <Link
              to="/profile"
              className={`nav-link ${pathname === "/profile" ? "active" : ""}`}
              onClick={resetActive}
            >
              <span className="icon_wrapper">
                <i className="fa-solid fa-id-card-clip" />
              </span>
              <span>Thông tin cá nhân</span>
            </Link>
          </li>
          <li className="nav-item mb-3">
            <button className={`nav-link`}>
              <span className="icon_wrapper">
                <i class="fa-solid fa-right-from-bracket" />
              </span>
              <span>Đăng xuất</span>
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default SideBar;
