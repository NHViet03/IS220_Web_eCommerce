import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import formatMoney from "../../utils/formatMoney";

const OrderList = ({ orders, orderSmall }) => {
  const renderOrderState = (status) => {
    return (
      <span
        className={`order_state ${
          status === "Đã giao hàng"
            ? "success"
            : status === "Đang giao hàng"
            ? "shipping"
            : "cancel"
        }`}
      >
        <span className="me-1"> {status}</span>
        {status === "Đã giao hàng" ? (
          <i className="fa-solid fa-circle-check" />
        ) : status === "Đang giao hàng" ? (
          <i className="fa-solid fa-truck-fast" />
        ) : (
          <i className="fa-solid fa-ban" />
        )}
      </span>
    );
  };

  return (
    <table class="table table-hover">
      <thead>
        <tr>
          {!orderSmall && <th scope="col">#</th>}
          <th scope="col">Mã đơn hàng</th>
          <th
            scope="col"
            style={{
              cursor: "pointer",
            }}
          >
            Số lượng <i className="fa-solid fa-sort ms-1" />
          </th>
          <th
            scope="col"
            style={{
              cursor: "pointer",
            }}
          >
            Tổng tiền (VNĐ) <i className="fa-solid fa-sort ms-1" />
          </th>
          <th
            scope="col"
            style={{
              cursor: "pointer",
            }}
          >
            Ngày đặt <i className="fa-solid fa-sort ms-1" />
          </th>
          {!orderSmall && <th scope="col">Địa chỉ</th>}
          {!orderSmall && <th scope="col">Mã khách hàng</th>}
          <th scope="col">Trạng thái</th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        {orders.map((order, index) => (
          <tr key={index}>
            {!orderSmall && <td>{index + 1}</td>}
            <td>
              {order.id.length > 10 ? order.id.slice(0, 10) + "..." : order.id}
            </td>
            <td>{order.quantity}</td>
            <td>{formatMoney(order.totalAmount)}</td>
            <td>{moment(order.orderDate).format("L")}</td>
            {!orderSmall && (
              <td>
                {order.address.length > 20
                  ? order.address.slice(0, 20) + "..."
                  : order.address}
              </td>
            )}
            {!orderSmall && <td>{order.userId}</td>}
            <td>{renderOrderState(order.status)}</td>
            <td colSpan="1">
              <div className="d-flex align-items-center gap-3">
                <Link to={`/orders/${order.id}`}>
                  <button className="btn btn_table btn_detail">
                    <i className="fa-solid fa-circle-info" />
                    Chi tiết
                  </button>
                </Link>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default OrderList;
