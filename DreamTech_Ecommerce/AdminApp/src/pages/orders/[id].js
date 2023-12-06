import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import moment from "moment";
import formatMoney from "../../utils/formatMoney";
import ModalUpdateAddress from "../../components/ModalUpdateAddress";

const fakeOrder = {
  id: "HD-012",
  quantity: 10,
  totalAmount: 47279000,
  orderDate: new Date(),
  address: "Quang Trung, Hà Đông, Hà Nội",
  user: {
    id: "KH03",
    name: "Lê Văn An",
    email: "An789@gmail.com",
    phone: "0833333333",
  },
  status: "Đã giao hàng",
  payment: "Thanh toán khi nhận hàng",
  orderItems: [
    {
      id: "CTHD-01",
      productId: "laptop-gaming-msi-gf63-12ucx-841vn",
      images: [
        "https://product.hstatic.net/200000722513/product/lg-gram-style-fix_4013ad0ecc9c449f9611fb4f31069a92_1024x1024.png",
      ],
      name: "Laptop LG Gram Style 14Z90RS GAH54A5",
      price: 38990000,
      sale_price: 35990000,
      quantity: 1,
    },
    {
      id: "CTHD-02",
      productId: "chuot-logitech-g102-lightsync-black",
      images: [
        "https://product.hstatic.net/200000722513/product/thumbchuot_a405fadb92a34c429c3eed4d11a84fb5_medium.jpg",
      ],
      name: "Chuột Logitech G102 LightSync Black",
      price: 599000,
      sale_price: 399000,
      quantity: 1,
    },
    {
      id: "CTHD-03",
      productId: "pc-gvn-intel-i3-12100f-vga-gtx-1650",
      images: [
        "https://product.hstatic.net/200000722513/product/5000d_white_aero_61797e20d29a47ff9f7589071a5099da_medium.png",
      ],
      name: "PC GVN Intel i3-12100F/ VGA GTX 1650",
      price: 11590000,
      sale_price: 10890000,
      quantity: 1,
    },
  ],
  notes: "Không có ghi chú",
};

function OrderDetail() {
  const [order, setOrder] = useState(fakeOrder);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/orders");
  };

  return (
    <form className="mb-4 order_detail" onSubmit={handleSubmit}>
      <header className="d-flex justify-content-between align-items-center mb-3">
        <div>
          <span
            className="mb-0"
            style={{
              opacity: "0.7",
            }}
          >
            Đơn hàng:{" "}
          </span>
          <span>
            {moment(order.orderDate).format("L")} - {order.user.name}
          </span>
        </div>
        <div className="d-flex gap-3">
          <button
            className="btn btn_normal"
            onClick={() => navigate("/orders")}
          >
            <i class="fa-solid fa-xmark me-1" />
            Hủy bỏ
          </button>
          <button className="btn btn_normal btn_accept" type="submit">
            <i className="fa-solid fa-check me-1" />
            Lưu thay đổi
          </button>
          <button className="btn btn_normal" type="button">
            <i className="fa-solid fa-ellipsis" />
          </button>
        </div>
      </header>
      <div className=" d-flex align-items-start gap-4 order_detail_body">
        <div className="box_shadow order_detail_items">
          <h5 className="fw-medium mb-3">Chi tiết đơn hàng</h5>
          <div className="mb-4 d-flex align-items-center justify-content-between order_detail_info">
            <div>
              <p className="mb-2">Ngày đặt</p>
              <p className="mt-0 fw-medium">
                {moment(order.orderDate).format("LLL")}
              </p>
            </div>
            <div className="d-flex justify-content-between gap-4">
              <div>
                <p className="mb-2">Trạng thái</p>
                <div className="order_state success">{order.status}</div>
              </div>
              <div>
                <p className="mb-2">Thanh toán</p>
                <div className="order_state shipping">{order.payment}</div>
              </div>
            </div>
          </div>
          <div
            className="mb-4"
            style={{
              borderBottom: "1px solid var(--border-color)",
            }}
          >
            {order.orderItems.map((item) => (
              <div key={item.id} className="mb-4 order_detail_item">
                <img src={item.images[0]} alt="Product" />
                <div className="flex-fill mx-3">
                  <p
                    className="fw-medium mb-1"
                    style={{
                      color: "var(--primary-color)",
                    }}
                  >
                    {item.name}
                  </p>
                  <p className="my-0">Mã sản phẩm: {item.productId}</p>
                  <p className="my-0">Số lượng: {item.quantity}</p>
                </div>
                <div>
                  <div className="mb-2 text-end d-flex">
                    <span className="flex-fill"> Giá:</span>
                    <span
                      style={{
                        display: "inline-block",
                        minWidth: "100px",
                      }}
                    >
                      {formatMoney(item.price)}đ
                    </span>
                  </div>
                  <div className="mb-2 text-end d-flex  justify-content-between">
                    <span className=" flex-fill">Tổng cộng:</span>
                    <span
                      style={{
                        display: "inline-block",
                        minWidth: "100px",
                        fontWeight: "500",
                        fontSize: "16px",
                      }}
                    >
                      {formatMoney(item.price * item.quantity)}đ
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div
            style={{
              fontSize: "16px",
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
        </div>
        <div className="box_shadow order_detail_ship-info">
          <div className="mb-4 pb-4">
            <h6 className="mb-3 fw-medium">Thông tin khách hàng</h6>
            <div className="d-flex mb-2">
              <p
                style={{
                  minWidth: "50px",
                }}
              >
                Tên:{" "}
              </p>
              <p className="mt-0 fw-medium">{order.user.name}</p>
            </div>
            <div className="d-flex mb-2">
              <p
                style={{
                  minWidth: "50px",
                }}
              >
                Email:{" "}
              </p>
              <p className="mt-0 fw-medium">{order.user.email}</p>
            </div>
            <div className="d-flex mb-2">
              <p
                style={{
                  minWidth: "50px",
                }}
              >
                SĐT:{" "}
              </p>
              <p className="mt-0 fw-medium">{order.user.phone}</p>
            </div>
          </div>
          <div className="mb-4">
            <h6 className="mb-3 fw-medium">Địa chỉ giao hàng</h6>
            {order.address.split(",").map((item, index) => (
              <p key={index} className="mt-0 mb-2">
                {item}
              </p>
            ))}
            <button
              className="mb-4 mt-3 btn btn_normal btn_accept"
              style={{
                borderRadius: "4px",
                padding: "8px",
              }}
              type="button"
              onClick={() => setShowModal(true)}
            >
              Cập nhật địa chỉ giao hàng
            </button>
          </div>
          <div>
            <h6 className="mb-3 fw-medium">Ghi chú</h6>
            <textarea
              className="form-control"
              value={order.notes}
              onChange={(e) => setOrder({ ...order, notes: e.target.value })}
            />
          </div>
        </div>
      </div>
      {showModal && (
        <ModalUpdateAddress
          setShowModal={setShowModal}
          order={order}
          setOrder={setOrder}
        />
      )}
    </form>
  );
}

export default OrderDetail;
