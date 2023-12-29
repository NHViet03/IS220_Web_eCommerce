import React, { useInsertionEffect, useState, useTransition } from "react";
import { useNavigate } from "react-router-dom";
import ModalUpdateAddress from "../../components/ModalUpdateAddress";

import { useSelector, useDispatch } from "react-redux";
import { createCustomer } from "../../redux/actions/customerAction";

const AddCustomer = () => {
  const [customer, setCustomer] = useState({
    id: "KH101",
    name: "",
    email: "",
    phone: "",
    shippingAddress: "",
  });
  const [showModal, setShowModal] = useState(false);

  const navigate = useNavigate();
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCustomer({
      ...customer,
      [name]: value,
    });
  };

  const handleSubmit =async (e) => {
    e.preventDefault();
    await dispatch(createCustomer({ data: customer, auth }));
    navigate("/customers");
  };

  return (
    <form className="mb-4 customer_add" onSubmit={handleSubmit}>
      <h5 className="mb-4">Thêm Khách hàng mới</h5>
      <div className="customer_add_body">
        <div className="mb-4 d-flex align-items-center customer_add_name">
          <i className="fa-solid fa-circle-user fs-2 me-3" />
          <input
            className="form-control"
            style={{
              maxWidth: "300px",
              fontSize: "24px",
              fontWeight: "500",
              border: "none",
            }}
            type="text"
            name="name"
            placeholder="Tên khách hàng..."
            value={customer.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <div className="customer_add_card">
            <h6>Mã khách hàng</h6>
            <input className="form-control" value={customer.id} disabled />
          </div>
          <div className="customer_add_card">
            <h6>Email</h6>
            <input
              type="text"
              name="email"
              className="form-control"
              placeholder="VD: abc@gmail..."
              required
              value={customer.email}
              onChange={handleChange}
            />
          </div>
          <div className="customer_add_card">
            <h6>Số điện thoại</h6>
            <input
              type="text"
              name="phone"
              className="form-control"
              placeholder="VD: +843723..."
              required
              value={customer.phone}
              onChange={handleChange}
            />
          </div>
          <div className="customer_add_card">
            <h6>Địa chỉ giao hàng</h6>
            <input
              type="text"
              name="shippingAddress"
              className="form-control w-100"
              placeholder="VD: Thủ Đức, Hồ Chí Minh..."
              required
              value={customer.shippingAddress}
              onClick={() => setShowModal(true)}
            />
          </div>
        </div>
        <div className="d-flex justify-content-center gap-3">
          <button className="btn btn_normal btn_accept " type="submit">
            Thêm
          </button>
          <button
            type="button"
            className="btn btn_normal"
            onClick={() => navigate("/customer")}
          >
            Hủy
          </button>
        </div>
      </div>

      {showModal && (
        <ModalUpdateAddress
          setShowModal={setShowModal}
          customer={customer}
          setCustomer={setCustomer}
        />
      )}
    </form>
  );
};

export default AddCustomer;
