import React, { useState, useMemo, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import moment from "moment";
import formatMoney from "../../utils/formatMoney";
import ModalUpdateAddress from "../../components/ModalUpdateAddress";
import Invoice from "../../components/Order/Invoice";

import { useSelector, useDispatch } from "react-redux";
import { getDataAPI } from "../../utils/fetchData";

function OrderDetail() {
  const [order, setOrder] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [exportPDF, setExportPDF] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();

  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    const getOrderData = async () => {
      const res = await getDataAPI(`Order/GetOrderById/${id}`, auth.token);
      const order = {
        ...res.data,
        orderDetails: res.data.orderDetails.map((item) => ({
          id: item.id,
          productId: item.product.productId,
          images: [item.product.productImages[0].imageUrl],
          name: item.product.name,
          price: item.product.price,
          sale_price: item.product.salePrice,
          quantity: item.qty,
        })),
        user: {
          id: res.data.user.id,
          name: res.data.user.firstName + " " + res.data.user.lastName,
          email: res.data.user.email,
          phone: res.data.user.phone,
        },
        notes: "Không có ghi chú",
        payment: "Thanh toán khi nhận hàng",
      };
      console.log(order);

      setOrder(order);
    };

    getOrderData();
  }, [auth.token, id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/orders");
  };

  const handleExportPDF = () => {
    setExportPDF(true);
  };

  const orderCircle = useMemo(() => {
    let orderCircle = [
      {
        name: "Đã đặt hàng",
        active: true,
      },
      {
        name: "Đã tiếp nhận",
        active: true,
      },
      {
        name: "Đã đóng gói",
        active: true,
      },
      {
        name: "Đang giao hàng",
        active: true,
      },
      {
        name: "Đã giao hàng",
        active: true,
      },
    ];
    switch (order.orderStatus) {
      case 0:
        orderCircle[4].active = false;
        break;
      case 2:
        orderCircle[4].active = true;
        break;
      case 1:
        orderCircle[0].active = false;
        orderCircle[1].active = false;
        orderCircle[2].active = false;
        orderCircle[3].active = false;
        orderCircle[4].active = false;
        orderCircle.push({
          name: "Đã hủy đơn",
          active: true,
        });
        break;
      default:
        break;
    }
    return orderCircle;
  }, [order.orderStatus]);

  if (!order.id) return null;

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
          <div className="dropdown">
            <button
              className=" btn btn_normal "
              type="button"
              data-bs-toggle="dropdown"
            >
              <i className="fa-solid fa-ellipsis" />
            </button>
            <ul className="dropdown-menu">
              <li>
                <div
                  className="dropdown-item fw-medium"
                  onClick={handleExportPDF}
                >
                  <i className="fa-solid fa-receipt me-1 cursor-pointer" />
                  Xuất hóa đơn
                </div>
              </li>
            </ul>
          </div>
        </div>
      </header>
      <div className=" d-flex align-items-start gap-4 order_detail_body">
        <div className="box_shadow order_detail_items">
          <div className="mb-3 d-flex justify-content-between align-items-center">
            <h5 className="fw-medium">Chi tiết đơn hàng</h5>
            {order.orderStatus === 0 && (
              <div>
                <button
                  className="btn btn_normal btn_success me-3"
                  type="button"
                  style={{
                    borderRadius: "4px",
                    padding: "8px",
                  }}
                  onClick={() => setOrder({ ...order, orderStatus: "Đã giao hàng" })}
                >
                  Xác nhận giao hàng
                </button>
                <button
                  className="btn btn_normal btn_accept"
                  type="button"
                  style={{
                    borderRadius: "4px",
                    padding: "8px",
                  }}
                  onClick={() => setOrder({ ...order, orderStatus: "Đã hủy đơn" })}
                >
                  Huỷ đơn hàng
                </button>
              </div>
            )}
          </div>
          <div className="my-5 d-flex items-center justify-content-center">
            {orderCircle.map((item, index) => (
              <div
                key={index}
                className="d-flex flex-column align-items-center order_status"
                style={{
                  opacity: item.active ? 1 : 0.5,
                }}
              >
                {item.name === "Đã hủy đơn" ? (
                  <i className="fa-solid fa-ban" />
                ) : (
                  <i class="fa-solid fa-circle-dot" />
                )}
                <p>{item.name}</p>
              </div>
            ))}
          </div>
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
                <div
                  className={`order_state ${
                    order.orderStatus === 0
                      ? "shipping"
                      : order.orderStatus === 2
                      ? "success"
                      : "cancel"
                  }`}
                >
                  { order.orderStatus === 0
                      ? "Đang giao hàng"
                      : order.orderStatus === 2
                      ? "Đã giao hàng"
                      : "Đã hủy đơn"}
                </div>
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
            {order.orderDetails.map((item) => (
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
            {order.shippingAddress.split(",").map((item, index) => (
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

      {order.user && (
        <Invoice
          exportPDF={exportPDF}
          setExportPDF={setExportPDF}
          order={order}
        />
      )}
    </form>
  );
}

export default OrderDetail;
