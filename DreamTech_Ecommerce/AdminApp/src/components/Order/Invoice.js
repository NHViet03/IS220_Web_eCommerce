import React, { useEffect } from "react";
import { usePDF } from "react-to-pdf";
import moment from "moment";
import Logo from "../../images/logo_small.png";
import formatMoney from "../../utils/formatMoney";

const Invoice = ({ exportPDF, setExportPDF, order }) => {
  const { toPDF, targetRef } = usePDF({
    filename: `hoa_don_${order.id}.pdf`,
    page: {
      format: "letter",
    },
  });

  useEffect(() => {
    if (exportPDF) {
      toPDF();
      setExportPDF(false);
    }
  }, [exportPDF, setExportPDF, toPDF]);

  return (
    <div
      ref={targetRef}
      className="bg-white"
      style={{
        display: exportPDF ? "block" : "none",
        padding: "64px 96px",
      }}
    >
      <div className="d-flex justify-content-between align-items-center mb-2 ">
        <img
          src={Logo}
          alt="logo"
          style={{
            width: "100px",
            height: "100px",
            objectFit: "cover",
          }}
        />
        <div className="text-end fs-6">
          <h5
            className="fw-medium"
            style={{
              color: "var(--primary-color)",
            }}
          >
            DREAM TECH
          </h5>
          <p>Trường Đại học Công nghệ Thông tin</p>
          <p className="mt-0 mb-1">ĐHQG TP.HCM - UIT</p>
          <i>Save money. Live better.</i>
        </div>
      </div>
      <div className="text-end">
        <p>
          <i
            className="fa-solid fa-at me-1"
            style={{
              color: "var(--primary-color)",
            }}
          />
          dreamerTeam@gmail.com
        </p>
        <p className="mt-0">
          <i
            className="fa-solid fa-hashtag me-1"
            style={{
              color: "var(--primary-color)",
            }}
          />
          +84 123 456 789
        </p>
      </div>
      <div
        className="d-flex justify-content-between align-items-start mt-5"
        style={{
          marginBottom: "64px",
        }}
      >
        <div>
          <h6 className="fw-medium mb-3">Người nhận</h6>
          <p
            style={{
              textTransform: "uppercase",
            }}
          >
            {order.user.name}
          </p>
          {order.address.split(",").map((item, index) => (
            <p key={index} className="my-0">
              {item}
            </p>
          ))}
          <div className="mt-3">
            <p>
              <i
                className="fa-solid fa-at me-1"
                style={{
                  color: "var(--primary-color)",
                }}
              />
              {order.user.email}
            </p>
            <p className="mt-0">
              <i
                className="fa-solid fa-hashtag me-1"
                style={{
                  color: "var(--primary-color)",
                }}
              />
              {order.user.phone}
            </p>
          </div>
        </div>
        <div className="text-end">
          <h2
            className="fw-medium mb-3"
            style={{
              lineHeight: "36px",
            }}
          >
            Hóa Đơn
          </h2>
          <div className="mb-3">
            <h6 className="fw-medium">Mã hóa đơn</h6>
            <p>{order.id}</p>
          </div>
          <div>
            <h6 className="fw-medium">Ngày đặt</h6>
            <p>{moment(order.orderDate).format("LLL")}</p>
          </div>
        </div>
      </div>
      <table class="table table-hover">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Mã sản phẩm</th>
            <th scope="col" colSpan={2}>
              Tên sản phẩm
            </th>
            <th scope="col" className="text-end">
              Đơn giá
            </th>
            <th scope="col" className="text-end">
              Số lượng
            </th>
            <th scope="col" className="text-end">
              Tổng cộng
            </th>
          </tr>
        </thead>
        <tbody>
          {order.orderItems.map((item, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{item.productId}</td>
              <td colSpan={2}>{item.name}</td>
              <td className="text-end"> {formatMoney(item.price)}đ</td>
              <td className="text-end"> {item.quantity}</td>
              <td className="text-end">
                {" "}
                {formatMoney(item.price * item.quantity)}đ
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div
        className="mt-3"
        style={{
          fontSize: "16px",
          marginLeft: "50%",
          marginRight: "8px",
        }}
      >
        <div className="d-flex justify-content-between mb-3">
          <p>Tổng phụ</p>
          <p className="mt-0">{formatMoney(order.totalAmount)}đ</p>
        </div>
        <div className="d-flex justify-content-between mb-3">
          <p>Giảm giá</p>
          <p className="mt-0">{formatMoney(0)}đ</p>
        </div>
        <div className="d-flex justify-content-between mb-3">
          <p>Phí giao hàng</p>
          <p className="mt-0">{formatMoney(0)}đ</p>
        </div>
        <div className="d-flex justify-content-between mb-3">
          <p>Thuế</p>
          <p className="mt-0">{formatMoney(0)}đ</p>
        </div>
        <div
          className="d-flex justify-content-between fs-5 fw-medium pt-3"
          style={{
            borderTop: "1px solid var(--border-color)",
          }}
        >
          <p>Tổng tiền</p>
          <p className="mt-0">{formatMoney(order.totalAmount)}đ</p>
        </div>
      </div>
      <p className="mt-2">Lưu ý: {order.notes}</p>
    </div>
  );
};

export default Invoice;
