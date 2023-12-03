import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

function Header({ setShowSideBar }) {
  const auth = useSelector((state) => state.auth);
  const { pathname } = useLocation();
  console.log(pathname);

  const path = useMemo(() => {
    const path = pathname.split("/");
    console.log(path);
    let navigate = "";
    switch (path[1]) {
      case "":
        navigate = "Trang chủ";
        break;
      case "products":
        navigate = "Sản phẩm";
        break;
      case "orders":
        navigate = "Đơn hàng";
        break;
      case "shipping":
        navigate = "Giao hàng";
        break;
      case "customers":
        navigate = "Khách hàng";
        break;
      case "revenue":
        navigate = "Doanh thu";
        break;
      case "profile":
        navigate = "Thông tin cá nhân";
        break;
      default:
        navigate = "Trang chủ";
        break;
    }

    if (path[2]) {
      navigate += " / " + path[2];
    }

    return navigate;
  }, [pathname]);

  return (
    <div className="d-flex justify-content-between align-items-center  box_shadow header">
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
