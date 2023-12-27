import React, { useState, useEffect } from "react";

const ModalUpdateAddress = ({
  setShowModal,
  order,
  setOrder,
  customer,
  setCustomer,
}) => {
  const [provinces, setProvinces] = useState([]);
  const [districts, setDistricts] = useState([]);
  const addressArr = order
    ? order.shippingAddress.split(", ")
    : customer.shippingAddress.split(", ");
  const [address, setAddress] = useState({
    province: addressArr[addressArr.length - 1] || "",
    district: addressArr[addressArr.length - 2] || "",
    ward: addressArr[addressArr.length - 3] || "",
    street: addressArr[addressArr.length - 4] || "",
  });

  useEffect(() => {
    fetch(
      "https://cdn.jsdelivr.net/gh/thien0291/vietnam_dataset@1.0.0/Index.json"
    )
      .then((res) => res.json())
      .then((data) => {
        data = {
          ...data,
          "Hà Nội": {
            code: "HN",
          },
        };
        const provincesName = Object.keys(data);

        setProvinces(
          provincesName.map((province, index) => ({
            code: data[provincesName[index]].code,
            name: provincesName[index],
          }))
        );
      });
  }, []);

  useEffect(() => {
    if (address.province === "" || provinces.length === 0) return;

    const provinceCode = provinces.find(
      (province) => province.name === address.province
    )?.code;

    fetch(
      `https://cdn.jsdelivr.net/gh/thien0291/vietnam_dataset@1.0.0/data/${provinceCode}.json`
    )
      .then((res) => res.json())
      .then((data) => {
        setDistricts(data.district);
      });
  }, [address.province, provinces]);

  const handleClose = () => {
    setShowModal(false);
  };

  const handleChange = (e) => {
    setAddress({
      ...address,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = () => {
    const addressArr = [
      address.street,
      address.ward,
      address.district,
      address.province,
    ];
    if (order) {
      setOrder({
        ...order,
        shippingAddress: addressArr.join(", "),
      });
    } else {
      setCustomer({
        ...customer,
        shippingAddress: addressArr.join(", "),
      });
    }

    setShowModal(false);
  };

  return (
    <div className="modal_custom">
      <div
        className="modal_content"
        style={{
          width: "600px",
        }}
      >
        <div
          className="d-flex justify-content-between align-items-center px-3 pb-3"
          style={{
            borderBottom: "1px solid var(--border-color)",
          }}
        >
          <h5 className="fw-medium">{order ? "Cập nhật địa chỉ giao hàng" : "Thêm địa chỉ giao hàng"}</h5>
          <div className="modal_close" onClick={handleClose}>
            <i className="fa-solid fa-xmark" />
          </div>
        </div>
        <div className="modal_body px-3">
          <div className="forms_address">
            <select
              className="form-select"
              name="province"
              onChange={handleChange}
            >
              <option>Chọn Tỉnh/Thành phố</option>
              {provinces.map((province, index) => (
                <option
                  key={index}
                  value={province.name}
                  selected={province.name === address.province}
                >
                  {province.name}
                </option>
              ))}
            </select>
            <select
              className="form-select"
              name="district"
              onChange={handleChange}
            >
              <option selected>Chọn Quận/Huyện</option>
              {districts.map((district, index) => (
                <option
                  key={index}
                  value={district.name}
                  selected={district.name === address.district}
                >
                  {district.name}
                </option>
              ))}
            </select>
            <select className="form-select" name="ward" onChange={handleChange}>
              <option selected>Chọn Phường/Xã</option>
              {districts
                .find((district) => district.name === address.district)
                ?.ward.map((ward, index) => (
                  <option
                    key={index}
                    value={ward.name}
                    selected={ward.name === address.ward}
                  >
                    {ward.name}
                  </option>
                ))}
            </select>
            <input
              type="text"
              name="street"
              className="form-control"
              placeholder="Số nhà, địa chỉ"
              value={address.street}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="modal_footer px-3">
          <button
            className="btn btn_normal"
            type="button"
            onClick={handleClose}
          >
            Hủy
          </button>
          <button
            className="btn btn_normal btn_accept"
            type="button"
            onClick={handleSave}
          >
           {order ? "Cập nhật" : "Lưu"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalUpdateAddress;
