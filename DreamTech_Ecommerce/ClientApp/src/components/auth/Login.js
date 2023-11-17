import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { GLOBAL_TYPES } from "../../redux/actions/globalTypes";
import { login } from "../../redux/actions/authAction";

function ModalAuth({ setIsLogin }) {
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
  
    const res= await dispatch(login(userData));
    if(res){
      handleCloseModal();
    }
  };

  const handleCloseModal = () => {
    dispatch({
      type: GLOBAL_TYPES.MODAL_AUTH,
      payload: false,
    });
  };

  return (
    <div className="modal_main">
      <div className="modal_auth_container">
        <div className="modal_auth_header">
          <h4>ĐĂNG NHẬP</h4>
          <i className="fa-solid fa-xmark" onClick={handleCloseModal} />
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
          <p
            className="mb-4"
            style={{
              textAlign: "right",
              color: "var(--primary-color)",
              fontWeight: "500",
              cursor: "pointer",
            }}
          >
            Quên mật khẩu ?
          </p>
          <button type="submit" className="btn btn_primary w-100">
            ĐĂNG NHẬP
          </button>
        </form>
        <div className="my-4 modal_separate">
          <span className="separate" />
          <span>HOẶC</span>
          <span className="separate" />
        </div>
        <div className="modal_auth_social">
          <button className="btn btn_social btn_google">
            <i className="fa-brands fa-google" />
            <span>Google</span>
          </button>
          <button className="btn btn_social btn_facebook">
            <i className="fa-brands fa-facebook" />
            <span>Facebook</span>
          </button>
        </div>
        <p className="modal_auth_switch">
          Bạn chưa có tài khoản?{" "}
          <span
            style={{
              color: "var(--primary-color)",
              fontWeight: "500",
              cursor: "pointer",
            }}
            onClick={() => setIsLogin(false)}
          >
            Đăng ký
          </span>
        </p>
      </div>
    </div>
  );
}

export default ModalAuth;
