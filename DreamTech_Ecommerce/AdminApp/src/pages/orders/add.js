import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import moment from "moment";
import ModalUpdateAddress from "../../components/ModalUpdateAddress";
import formatMoney from "../../utils/formatMoney";
import Invoice from "../../components/Order/Invoice";

const fakeSearchUserList = [
  {
    id: "KH03",
    name: "Lê Văn An",
    email: "An789@gmail.com",
    phone: "0833333333",
  },
  {
    id: "KH05",
    name: "Trần Văn Tú",
    email: "Tu567@gmail.com",
    phone: "0866666666",
  },
  {
    id: "KH01",
    name: "Nguyễn Hoàng Việt",
    email: "Viet123@gmail.com",
    phone: "0848044777",
  },
];

const fakeSearchProductList = [
  {
    id: "laptop-gaming-msi-gf63-12ucx-841vn",
    name: "Laptop LG Gram Style 14Z90RS GAH54A5",
    images: [
      "https://product.hstatic.net/200000722513/product/lg-gram-style-fix_4013ad0ecc9c449f9611fb4f31069a92_1024x1024.png",
    ],
    price: 38990000,
    sale_price: 35990000,
  },
  {
    id: "chuot-logitech-g102-lightsync-black",
    images: [
      "https://product.hstatic.net/200000722513/product/thumbchuot_a405fadb92a34c429c3eed4d11a84fb5_medium.jpg",
    ],
    name: "Chuột Logitech G102 LightSync Black",
    price: 599000,
    sale_price: 399000,
  },
  {
    id: "pc-gvn-intel-i3-12100f-vga-gtx-1650",
    images: [
      "https://product.hstatic.net/200000722513/product/5000d_white_aero_61797e20d29a47ff9f7589071a5099da_medium.png",
    ],
    name: "PC GVN Intel i3-12100F/ VGA GTX 1650",
    price: 11590000,
    sale_price: 10890000,
  },
];

const AddOrder = () => {
  const [order, setOrder] = useState({
    id: "HD-013",
    totalAmount: 0,
    orderDate: new Date(),
    shippingAddress: "",
    user: {
      id: "",
      name: "",
      email: "",
      phone: "",
    },
    payment: "",
    orderDetails: [],
    notes: "",
  });
  const [showModal, setShowModal] = useState(false);
  const [searchUser, setSearchUser] = useState("");
  const [searchUserList, setSearchUserList] = useState([]);
  const [searchProduct, setSearchProduct] = useState("");
  const [showSearchProduct, setShowSearchProduct] = useState(false);
  const [searchProductList, setSearchProductList] = useState([]);
  const [exportPDF, setExportPDF] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const totalAmount = handleUpdateOrder();
    console.log({
      ...order,
      totalAmount: totalAmount,
    });
  };

  const handleExportPDF = () => {
    setExportPDF(true);
  };

  const handleSearchUser = (value) => {
    setSearchUser(value);
    setSearchUserList(fakeSearchUserList);
  };

  const handleClickUser = (user) => {
    setSearchUser(user.id);
    setSearchUserList([]);
    setOrder({
      ...order,
      user: user,
    });
  };

  const handleSearchProduct = (value) => {
    setSearchProduct(value);
    setSearchProductList(fakeSearchProductList);
  };

  const handleClickProduct = (product) => {
    setSearchProduct("");
    setSearchProductList([]);
    setShowSearchProduct(false);

    if (order.orderDetails.find((item) => item.id === product.id)) return;

    const newItem = {
      ...product,
      quantity: 1,
      subTotal: product.sale_price,
    };
    setOrder({
      ...order,
      orderDetails: [...order.orderDetails, newItem],
    });
  };

  const handleChangeQuantity = (value, id) => {
    if (value < 1) return;
    const newOrderItems = order.orderDetails.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          quantity: value,
          subTotal: item.sale_price * value,
        };
      }
      return item;
    });
    setOrder({
      ...order,
      orderDetails: newOrderItems,
    });
  };

  const handleDeleteProduct = (id) => {
    setOrder({
      ...order,
      orderDetails: order.orderDetails.filter((item) => item.id !== id),
    });
  };

  const handleUpdateOrder = () => {
    const totalAmount = order.orderDetails.reduce(
      (total, item) => total + item.subTotal,
      0
    );
    setOrder({
      ...order,
      totalAmount: totalAmount,
    });
    return totalAmount;
  };

  return (
    <form className="mb-4 order_add" onSubmit={handleSubmit}>
      <header className="d-flex justify-content-between align-items-center mb-3">
        <div>
          <span
            className="mb-0"
            style={{
              opacity: "0.7",
            }}
          >
            Tạo đơn hàng mới:{" "}
          </span>
          <span>
            {moment(order.orderDate).format("L")} - {order.id}
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
            Xác nhận
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
      <div className="d-flex align-items-start justify-content-between gap-4 order_add_body">
        <div className="box_shadow order_add_items">
          <h5 className="fw-medium mb-3">Chi tiết đơn hàng</h5>
          <div className="mb-4 d-flex align-items-center justify-content-between order_add_items_info">
            <div>
              <p className="mb-2">Ngày đặt</p>
              <p className="mt-0 fw-medium">
                {moment(order.orderDate).format("LLL")}
              </p>
            </div>
            <div className="d-flex justify-content-between gap-4">
              <div>
                <p className="mb-2">Thanh toán</p>
                <select
                  className="form-select"
                  required
                  onChange={(e) =>
                    setOrder({ ...order, payment: e.target.value })
                  }
                >
                  <option value="banking">Chuyển khoản</option>
                  <option value="cod">Thanh toán khi nhận hàng</option>
                </select>
              </div>
            </div>
          </div>
          <table class="table table-hover">
            <thead>
              <tr>
                <th scope="col">Tên sản phẩm</th>
                <th scope="col">Số lượng</th>
                <th scope="col">Đơn giá gốc (VNĐ)</th>
                <th scope="col">Đơn giá giảm (VNĐ)</th>
                <th scope="col">Tổng phụ (VNĐ)</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {order.orderDetails.map((item, index) => (
                <tr key={index}>
                  <td>
                    {item.name.length > 20
                      ? item.name.slice(0, 20) + "..."
                      : item.name}
                  </td>
                  <td>
                    <input
                      type="number"
                      className="form-control"
                      value={item.quantity}
                      style={{
                        maxWidth: "100px",
                      }}
                      onChange={(e) =>
                        handleChangeQuantity(e.target.value, item.id)
                      }
                    />
                  </td>
                  <td>{formatMoney(item.price)}đ</td>
                  <td>{formatMoney(item.sale_price)}đ</td>
                  <td>{formatMoney(item.subTotal)}đ</td>
                  <td>
                    <button
                      className="btn btn_table btn_delete px-2"
                      onClick={() => handleDeleteProduct(item.id)}
                    >
                      <i className="fa-solid fa-trash me-0" />
                    </button>
                  </td>
                </tr>
              ))}
              <tr>
                {!showSearchProduct ? (
                  <td
                    className="fw-medium"
                    colSpan={6}
                    style={{
                      color: "var(--primary-color)",
                      cursor: "pointer",
                    }}
                    onClick={() => setShowSearchProduct(true)}
                  >
                    Thêm sản phẩm
                  </td>
                ) : (
                  <td className="position-relative" colSpan={6}>
                    <input
                      type="text"
                      className="form-control"
                      style={{
                        borderRadius: "4px",
                        width: "150px",
                        border: "none",
                      }}
                      placeholder="Nhập sản phẩm..."
                      autoFocus={showSearchProduct && true}
                      value={searchProduct}
                      onChange={(e) => handleSearchProduct(e.target.value)}
                    />
                    <div className="order_add_search_product">
                      {searchProductList.map((product, index) => (
                        <div 
                        className="d-flex align-items-center"
                          key={index}
                          onClick={() => handleClickProduct(product)}
                        >
                          <img src={product.images[0]} alt="Product"/>
                          <p>{product.name}</p>

                        </div>
                      ))}
                    </div>
                  </td>
                )}
              </tr>
            </tbody>
          </table>
          <div className="mb-3 text-end">
            <button
              className="btn btn_normal px-2 rounded"
              onClick={handleUpdateOrder}
            >
              Cập nhật
            </button>
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
        <div className="box_shadow order_add_info">
          <div className="mb-4 pb-4">
            <h6 className="mb-3 fw-medium">Thông tin khách hàng</h6>
            <div className="d-flex align-items-center mb-2 ">
              <p
                style={{
                  minWidth: "58px",
                  paddingRight: "8px",
                }}
              >
                Mã KH:{" "}
              </p>
              <div className="position-relative">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nhập khách hàng..."
                  value={searchUser}
                  onChange={(e) => handleSearchUser(e.target.value)}
                />
                {searchUserList.length > 0 && (
                  <div className="order_add_search_user">
                    {searchUserList.map((user, index) => (
                      <div key={index} onClick={() => handleClickUser(user)}>
                        <p>
                          {user.id} - {user.name}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
            <div className="d-flex mb-2">
              <p
                style={{
                  minWidth: "58px",
                }}
              >
                Tên:{" "}
              </p>
              <p className="mt-0 fw-medium">{order.user.name}</p>
            </div>
            <div className="d-flex mb-2">
              <p
                style={{
                  minWidth: "58px",
                }}
              >
                Email:{" "}
              </p>
              <p className="mt-0 fw-medium">{order.user.email}</p>
            </div>
            <div className="d-flex mb-2">
              <p
                style={{
                  minWidth: "58px",
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
              Thêm địa chỉ giao hàng
            </button>
          </div>
          <div>
            <h6 className="mb-3 fw-medium">Ghi chú</h6>
            <textarea
              className="form-control"
              placeholder="Nhập ghi chú..."
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
      <Invoice
        exportPDF={exportPDF}
        setExportPDF={setExportPDF}
        order={order}
      />
    </form>
  );
};

export default AddOrder;
