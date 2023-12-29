import React, { useState, useEffect, useCallback } from "react";
import moment from "moment";
import { Link } from "react-router-dom";
import ExportCSV from "../../components/ExportCSV";
import formatMoney from "../../utils/formatMoney";
import OrderList from "../../components/Order/OrderList";
import Filter from "../../components/Order/Filter";

import { useSelector, useDispatch } from "react-redux";
import { getOrders } from "../../redux/actions/orderAction";

function Products() {
  const [orders, setOrders] = useState([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [filter, setFilter] = useState({
    sort: "default",
    status: "all",
    date: [new Date(new Date().getFullYear() - 2, 0, 1), new Date()],
  });

  const pages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const auth = useSelector((state) => state.auth);
  const order = useSelector((state) => state.order);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      getOrders({
        status: filter.status,
        dateFrom: filter.date[0],
        dateTo: filter.date[1],
        page,
        auth,
      })
    );
  }, [auth, dispatch, page, filter.status, filter.date]);

  useEffect(() => {
    setOrders(order.orders);
  }, [order.orders]);

  const customData = useCallback(() => {
    return orders.map((order) => ({
      "Mã đơn hàng": order.id,
      "Số lượng": order.orderDetails.length,
      "Tổng tiền": formatMoney(order.totalAmount),
      "Ngày đặt": moment(order.orderDate).format("LLL"),
      "Địa chỉ": order.address,
      "Mã khách hàng": order.userId,
      "Trạng thái": order.orderStatus,
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
        newOrders.sort((a, b) => new Date(b.orderDate) - new Date(a.orderDate));
        break;
      case "date_oldest_to_newest":
        newOrders.sort((a, b) => new Date(a.orderDate) - new Date(b.orderDate));
        break;
      default:
        newOrders = order.orders;
    }
    setOrders(newOrders);
  }, [filter.sort]);

  useEffect(() => {
    window.location.hash = `status=${filter.status}&dateFrom=${moment(
      filter.date[0]
    ).format("l")}&dateTo=${moment(filter.date[1]).format("l")}&page=${page}`;

    
  }, [page, filter.status, filter.date]);

  const handleSearch = (e) => {
    e.preventDefault();
    window.location.hash = `search=${search}&page=1`;
    dispatch(
      getOrders({
        search,
        auth,
      })
    );
  };

  return (
    <div className="mb-3 table">
      <div className="box_shadow mb-3 table_container">
        <div className="mb-3 ">
          <div className="d-flex justify-content-between align-items-center mb-3 ">
            <h5>Danh sách Đơn hàng</h5>
            <div className="d-flex align-items-center gap-4">
              <form
                className="d-flex justify-content-between align-items-center table_search"
                onSubmit={handleSearch}
              >
                <input
                  type="text"
                  placeholder="Tìm kiếm đơn hàng..."
                  className="form-control me-2"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
                <i class="fa-solid fa-magnifying-glass" />
              </form>
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
          Hiển thị {(page - 1) * 10 + 1} đến {page * 10} trong tổng số{" "}
          {pages.length * 10} đơn hàng
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
