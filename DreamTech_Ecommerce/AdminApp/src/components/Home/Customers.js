import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import formatMoney from "../../utils/formatMoney";
import ExportCSV from "../ExportCSV";
import formatUserInfo from "../../utils/formatUserInfo";

function Customers({ customers }) {
  const navigate = useNavigate();

  const renderStar = (level) => {
    const res = [];
    let star;
    switch (level) {
      case "Diamond":
        star = 3;
        break;
      case "Platinum":
        star = 2;
        break;
      default:
        star = 1;
    }

    for (let i = 0; i < star; i++) {
      res.push(<i className="fa-solid fa-star" />);
    }
    return res;
  };

  const customExport = useCallback(() => {
    return customers.map((customer) => ({
      "Mã khách hàng": customer.id,
      "Tên khách hàng": customer.name,
      Email: customer.email,
      "Số điện thoại": customer.phone,
      "Doanh số": customer.total,
    }));
  }, [customers]);

  return (
    <div className="mb-5 box_shadow home_customers">
      <div className="mb-3 d-flex justify-content-between align-items-center">
        <div className="d-flex align-items-center">
          <h5 className="mb-0 me-2">Danh sách khách hàng hàng đầu</h5>

          <i
            class="fa-solid fa-ranking-star ms-2"
            style={{
              fontSize: "28px",
            }}
          />
        </div>
        <div>
          <ExportCSV csvData={customExport()} filename="ds-kh-tiem-nang" />
        </div>
      </div>
      <table class="table table-hover">
        <thead>
          <tr>
            <th scope="col">Mã khách hàng</th>
            <th scope="col">Họ tên</th>
            <th scope="col">Email</th>
            <th scope="col">Số điện thoại</th>
            <th scope="col">Doanh số (VNĐ)</th>
            <th scope="col">Tích lũy</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer, index) => {
            const newData = formatUserInfo(customer);

            return (
              <tr
                key={index}
                onClick={() => navigate(`/customers/${customer.id}`)}
              >
                <td>
                  <i className="fa-solid fa-user me-1" />
                  {newData.id}
                </td>
                <td>{newData.name}</td>
                <td>{newData.email}</td>
                <td>{newData.phone}</td>
                <td>{newData.total}</td>
                <td>
                  <span
                    className={`home_customers_level ${newData.level.toLowerCase()}`}
                  >
                    <span className="me-1"> {newData.level}</span>
                    {renderStar(newData.level)}
                  </span>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Customers;
