import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { CSSTransition } from "react-transition-group";
import "../../../styles/account.css";

const ModalUpdateAddress = (props) => {
  const closeOnEscapeKeyDown = e => {
    if ((e.charCode || e.keyCode) === 27) {
      props.onClose();
    }
  };
  useEffect(() => {
    document.body.addEventListener("keydown", closeOnEscapeKeyDown);
    return function cleanup() {
      document.body.removeEventListener("keydown", closeOnEscapeKeyDown);
    };
  }, []);

  const [address, setAddress] = useState({
    province: '',
    district: '',
    ward: '',
    street: '',
  });
  const [provinces, setProvinces] = useState([]);
  const [districts, setDistricts] = useState([]);
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
    ).code;

    fetch(
      `https://cdn.jsdelivr.net/gh/thien0291/vietnam_dataset@1.0.0/data/${provinceCode}.json`
    )
      .then((res) => res.json())
      .then((data) => {
        setDistricts(data.district);
      });
  }, [address.province, provinces]);

  const handleChange = (e) => {
    setAddress({
      ...address,
      [e.target.name]: e.target.value,
    });
  };

  const handleUpdateAddress = () => {
    const updatedAddress = `${address.street}, ${address.ward}, ${address.district}, ${address.province}`;
    props.onUpdateAddress(updatedAddress);
    props.onClose();
  };

  return ReactDOM.createPortal(
    <CSSTransition
      in={props.show}
      unmountOnExit
      timeout={{ enter: 0, exit: 300 }}
    >
      <div className="modal" onClick={props.onClose}>
        <div className="modal-content" onClick={e => e.stopPropagation()}>
          <div className="modal-header py-4 px-6"
            style={{
              paddingRight: "24px",
              paddingLeft: "24px"
            }}
          >
            <h4 className="modal-title modal-title text-lg font-semibold">{props.title}</h4>
            <button type="button" data-dismiss="modal" onClick={props.onClose}>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.99586 8L15.5824 2.41348C15.8475 2.14881 15.9967 1.78966 15.997 1.41503C15.9973 1.0404 15.8488 0.680986 15.5841 0.415851C15.3195 0.150716 14.9603 0.00157854 14.5857 0.0012477C14.2111 0.000916852 13.8517 0.14942 13.5865 0.414087L8 6.00061L2.41348 0.414087C2.14834 0.148952 1.78874 0 1.41378 0C1.03882 0 0.679222 0.148952 0.414087 0.414087C0.148952 0.679222 0 1.03882 0 1.41378C0 1.78874 0.148952 2.14834 0.414087 2.41348L6.00061 8L0.414087 13.5865C0.148952 13.8517 0 14.2113 0 14.5862C0 14.9612 0.148952 15.3208 0.414087 15.5859C0.679222 15.851 1.03882 16 1.41378 16C1.78874 16 2.14834 15.851 2.41348 15.5859L8 9.99939L13.5865 15.5859C13.8517 15.851 14.2113 16 14.5862 16C14.9612 16 15.3208 15.851 15.5859 15.5859C15.851 15.3208 16 14.9612 16 14.5862C16 14.2113 15.851 13.8517 15.5859 13.5865L9.99586 8Z" fill="#6D6E72"></path>
              </svg>
            </button>
          </div>
          <div className="modal-body">
            {props.children}
            <div className="modal_body px-3">
              <div className="forms_address grid grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Tỉnh/Thành phố</label>
                  <select
                    className="form-select mt-1 block w-full"
                    style={{
                      marginBottom: "16px"
                    }}
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
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Quận/Huyện</label>
                  <select
                    className="form-select mt-1 block w-full"
                    name="district"
                    style={{
                      marginBottom: "16px"
                    }}
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
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Phường/Xã</label>
                  <select className="form-select mt-1 block w-full"
                    name="ward"
                    style={{
                      marginBottom: "16px"
                    }}
                    onChange={handleChange}
                  >
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
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Số nhà, địa chỉ</label>
                  <input
                    type="text"
                    name="street"
                    style={{
                      marginBottom: "16px"
                    }}
                    className="form-control mt-1 block w-full"
                    placeholder="Số nhà, tên đường"
                    value={address.street}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="modal-footer bg-red-600">
            <button onClick={handleUpdateAddress}
              className="bg-red-600 text-red px-4 w-full py-2 rounded hover:bg-red-600 focus:outline-none"
              style={{
                fontSize: '16px',
                backgroundColor: 'rgb(220, 38, 38)',
                fontWeight: 600,
                color: "#fff"
              }}
            >
              Hoàn thành
            </button>
          </div>
        </div>
      </div>
    </CSSTransition >,
    document.getElementById("root")
  );
};

export default ModalUpdateAddress;





