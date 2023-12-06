import React, { useCallback } from "react";
import formatMoney from "../../utils/formatMoney";
import ExportCSV from "../ExportCSV";

function Customers({ customers }) {
  const customData = (data) => {
    const newData = {};
    newData.id = data.id;
    newData.name = data.name;

    let head_email = data.email.split("@")[0];
    let tail_email = data.email.split("@")[1];
    head_email =
      head_email.slice(0, 3) + head_email.slice(3).replace(/./g, "*");
    newData.email = head_email + "@" + tail_email;

    newData.phone =
      data.phone.slice(0, 4) + data.phone.slice(4).replace(/./g, "*");
    newData.total = formatMoney(data.total);

    if (data.total > 100000000) {
      newData.level = "Diamond";
    } else if (data.total > 10000000) {
      newData.level = "Platinum";
    } else {
      newData.level = "Bronze";
    }

    return newData;
  };

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
      "Email": customer.email,
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
            const newData = customData(customer);

            return (
              <tr key={index}>
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
