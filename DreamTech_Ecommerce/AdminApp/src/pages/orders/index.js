import React, { useState, useEffect, useCallback } from "react";
import moment from "moment";
import { Link } from "react-router-dom";
import ExportCSV from "../../components/ExportCSV";
import formatMoney from "../../utils/formatMoney";
import OrderList from "../../components/Order/OrderList";
import Filter from "../../components/Order/Filter";

const fakeOrders = [
  {
    id: "HD-012",
    quantity: 10,
    totalAmount: 38990000,
    orderDate: new Date(),
    address: "Quang Trung, Hà Đông, Hà Nội",
    userId: "user-01",
    status: "Đã giao hàng",
  },
  {
    id: "HD-013",
    quantity: 7,
    totalAmount: 28990000,
    orderDate: new Date(2023, 5, 4),
    address: "Trần Phú, Hà Đông, Hà Nội",
    userId: "user-02",
    status: "Đang giao hàng",
  },
  {
    id: "HD-013",
    quantity: 15,
    totalAmount: 18990000,
    orderDate: new Date(2023, 3, 1),
    address: "Thủ Đức, Hồ Chí Minh",
    userId: "user-03",
    status: "Đã hủy đơn",
  },
];

function Products() {
  const [orders, setOrders] = useState([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [filter, setFilter] = useState({
    sort: "default",
    status: "all",
    date: [new Date(new Date().getFullYear(), 0, 1), new Date()],
  });

  const pages = [1, 2, 3, 4, 5];

  useEffect(() => {
    let newArr = [];
    for (let i = 0; i < 3; i++) {
      newArr.push(...fakeOrders);
    }
    setOrders(newArr);
  }, []);

  const customData = useCallback(() => {
    return orders.map((order) => ({
      "Mã đơn hàng": order.id,
      "Số lượng": order.quantity,
      "Tổng tiền": formatMoney(order.totalAmount),
      "Ngày đặt": moment(order.orderDate).format("LLL"),
      "Địa chỉ": order.address,
      "Mã khách hàng": order.userId,
      "Trạng thái": order.status,
    }));
  }, [orders]);

  useEffect(() => {
    if (orders.length === 0) return;
    let newOrders = [...orders];
    switch (filter.sort) {
      case "total_high_to_low":
        newOrders.sort((a, b) => b.totalAmount - a.totalAmount);
        break;
      case "total_low_to_high":
        newOrders.sort((a, b) => a.totalAmount - b.totalAmount);
        break;
      case "date_newest_to_oldest":
        newOrders.sort((a, b) => b.orderDate - a.orderDate);
        break;
      case "date_oldest_to_newest":
        newOrders.sort((a, b) => a.orderDate - b.orderDate);
        break;
      default:
        let newArr = [];
        for (let i = 0; i < 3; i++) {
          newArr.push(...fakeOrders);
          newOrders = newArr;
        }
    }
    setOrders(newOrders);
  }, [filter.sort]);

  return (
    <div className="mb-3 table">
      <div className="box_shadow mb-3 table_container">
        <div className="mb-3 ">
          <div className="d-flex justify-content-between align-items-center mb-3 ">
            <h5>Danh sách Đơn hàng</h5>
            <div className="d-flex align-items-center gap-4">
              <div className="d-flex justify-content-between align-items-center table_search">
                <input
                  type="text"
                  placeholder="Tìm kiếm đơn hàng..."
                  className="form-control me-2"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
                <i class="fa-solid fa-magnifying-glass" />
              </div>
              <Link
              to={{
                pathname: "/orders/add",
              }}
              className="btn btn_table btn_add"
            >
              <i class="fa-solid fa-plus" />
              Tạo đơn hàng
            </Link>
              <ExportCSV
                csvData={customData()}
                filename={"danh-sach-don-hang"}
              />
            </div>
          </div>
          <div className="d-flex justify-content-between mb-3 ">
            <Filter filter={filter} setFilter={setFilter} />
          </div>
        </div>
        <div className="mb-3">
          <OrderList orders={orders} />
        </div>
      </div>
      <div className="d-flex justify-content-between align-items-center ">
        <p>
          Hiển thị {1} đến {10} trong tổng số {50} đơn hàng
        </p>
        <div className="pagination">
          <button
            className="btn btn_page"
            disabled={page <= 1 && true}
            onClick={() => setPage(page - 1)}
          >
            Trước
          </button>
          {pages.map((id) => (
            <button
              key={id}
              className={`btn btn_page ${id === page ? "active" : ""} `}
              onClick={() => setPage(id)}
            >
              {id}
            </button>
          ))}
          <button
            className="btn btn_page"
            disabled={page >= pages.length && true}
            onClick={() => setPage(page + 1)}
          >
            Sau
          </button>
        </div>
      </div>
    </div>
  );
}

export default Products;
