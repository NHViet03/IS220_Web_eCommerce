import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import ExportCSV from "../../components/ExportCSV";
import Filter from "../../components/Customer/Filter";
import CustomerList from "../../components/Customer/CustomerList";

import { useSelector, useDispatch } from "react-redux";
import { getCustomers } from "../../redux/actions/customerAction";

function Customers() {
  const [customers, setCustomers] = useState([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState({
    search: "",
    revenue: [0, 0],
  });
  const [page, setPage] = useState(1);
  const pages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const auth = useSelector((state) => state.auth);
  const customer = useSelector((state) => state.customer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      getCustomers({
        page,
        auth,
        totalFrom: filter.revenue[0],
        totalTo: filter.revenue[1],
      })
    );
  }, [auth, dispatch, page, filter.revenue]);

  useEffect(() => {
    setCustomers(customer.customers);
  }, [customer.customers]);

  useEffect(() => {
    if (customers.length === 0) return;
    let newCustomers = [...customers];
    switch (filter.sort) {
      case "revenue_high_to_low":
        newCustomers.sort((a, b) => b.total - a.total);
        break;
      case "revenue_low_to_high":
        newCustomers.sort((a, b) => a.total - b.total);
        break;
      case "name_z_to_a":
        newCustomers.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case "name_a_to_z":
        newCustomers.sort((a, b) => -b.name.localeCompare(a.name));
        break;
      default:
        newCustomers = customer.customers;
    }
    setCustomers(newCustomers);
  }, [filter.sort]);

  const customExport = useCallback(() => {
    return customers.map((customer) => ({
      "Mã khách hàng": customer.id,
      "Tên khách hàng": customer.name,
      Email: customer.email,
      "Số điện thoại": customer.phone,
      "Doanh số": customer.total,
    }));
  }, [customers]);

  useEffect(() => {
    window.location.hash = `totalFrom=${filter.revenue[0]}&totalTo=${filter.revenue[1]}&page=${page}`;
  }, [page, filter.revenue]);

  const handleSearch = (e) => {
    e.preventDefault();

    window.location.hash = `name=${search}&page=$1`;

    dispatch(getCustomers({ auth, name:search }));
  };

  return (
    <div className="mb-3 table">
      <div className="box_shadow mb-3 table_container">
        <div className="mb-3 ">
          <div className="d-flex justify-content-between align-items-center mb-3 ">
            <h5>Danh sách Khách hàng</h5>
            <div className="d-flex align-items-center gap-4">
              <form
                className="d-flex justify-content-between align-items-center table_search"
                onSubmit={handleSearch}
              >
                <input
                  type="text"
                  placeholder="Tìm kiếm khách hàng..."
                  className="form-control me-2"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
                <i class="fa-solid fa-magnifying-glass" />
              </form>
              <Link
                to={{
                  pathname: "/customers/add",
                }}
                className="btn btn_table btn_add"
              >
                <i class="fa-solid fa-plus" />
                Thêm KH mới
              </Link>
              <ExportCSV
                csvData={customExport()}
                filename={"danh-sach-khach-hang"}
              />
            </div>
          </div>
          <div className="d-flex justify-content-between mb-3 ">
            <Filter filter={filter} setFilter={setFilter} />
          </div>
        </div>
        <div className="mb-3">
          <CustomerList customers={customers} />
        </div>
      </div>
      <div className="d-flex justify-content-between align-items-center ">
        <p>
          Hiển thị {(page - 1) * 10 + 1} đến {page * 10} trong tổng số{" "}
          {pages.length * 10} khách hàng
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

export default Customers;
