import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

function Header({ setShowSideBar }) {
  const auth = useSelector((state) => state.auth);
  const { pathname } = useLocation();
  console.log(pathname);

  const path = useMemo(() => {
    switch (pathname) {
      case "/":
        return "Trang chủ";
      case "/products":
        return "Sản phẩm";
      case "/orders":
        return "Đơn hàng";
      case "/shipping":
        return "Giao hàng";
      case "/customers":
        return "Khách hàng";
      case "/revenue":
        return "Doanh thu";
      case "/profile":
        return "Thông tin cá nhân";
      default:
        return "Trang chủ";
    }
  }, [pathname]);

  return (
    <div className="d-flex justify-content-between align-items-center header">
      <div className="d-flex align-items-center">
        <i
          className="fa-solid fa-bars me-4"
          style={{
            cursor: "pointer",
            fontSize: "24px",
          }}
          onClick={() => setShowSideBar((pre) => !pre)}
        />

        <i className="fa-solid fa-house" />
        <span className="mx-2">/</span>
        <span>{path}</span>
      </div>

      <div className="header_config">
        <i className="fa-solid fa-bell" />
        <div className="d-flex align-items-center header_auth">
          <div className="me-2">
            <p className="mb-0">Quản trị viên</p>
            <p className="mb-0 fw-medium">{auth.user.fullname}</p>
          </div>
          <img src={auth.user.avatar} alt="Avatar" />
        </div>
      </div>
    </div>
  );
}

export default Header;
