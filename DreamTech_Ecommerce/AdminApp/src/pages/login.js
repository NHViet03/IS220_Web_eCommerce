import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../redux/actions/authAction";

function Login() {
  const dispatch = useDispatch();
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const [typePass, setTypePass] = useState(false);

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    dispatch(login(userData));
  };

  return (
    <div className="modal_main">
      <div className="modal_auth_container">
        <div className="modal_auth_header">
          <h4>ĐĂNG NHẬP</h4>
        </div>
        <form
          className="d-flex justify-content-center flex-column pt-4 auth_form "
          onSubmit={handleSubmit}
        >
          <div className="mb-3 form-floating">
            <input
              placeholder="Email"
              type="email"
              className=" form-control auth_input "
              id="email"
              onChange={handleChangeInput}
              value={userData.email}
              name="email"
            />
            <label htmlFor="email">Email</label>
          </div>
          <div className="mb-2 form-floating form_input">
            <input
              placeholder="Mật khẩu"
              type={typePass ? "text" : "password"}
              className="form-control auth_input"
              id="password"
              style={{
                position: "relative",
              }}
              onChange={handleChangeInput}
              value={userData.password}
              name="password"
            />
            <label htmlFor="password">Mật khẩu</label>

            <small className="show-hide" onClick={() => setTypePass(!typePass)}>
              {typePass ? "Ẩn" : "Hiển thị"}
            </small>
          </div>
          <button type="submit" className="btn btn_normal btn_accept w-100">
            ĐĂNG NHẬP
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
