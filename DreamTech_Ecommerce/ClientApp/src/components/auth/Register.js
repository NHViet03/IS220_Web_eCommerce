import React, { useState, useCallback } from "react";
import { useDispatch } from "react-redux";
import { GLOBAL_TYPES } from "../../redux/actions/globalTypes";
import { register } from "../../redux/actions/authAction";

function ModalAuth({ setIsLogin }) {
  const dispatch = useDispatch();
  const [userData, setUserData] = useState({
    fullname: "",
    email: "",
    password: "",
  });
  const { fullname, email, password } = userData;

  const [error, setError] = useState({});
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
    let err = {};
    if (!email) err.email = "*Email không được để trống.";
    if (email && !validateEmail(email)) err.email = "*Email không hợp lệ.";

    if (!fullname) err.fullname = "*Tên đầy đủ không được để trống.";

    if (password.length < 6) err.password = "*Mật khẩu ít nhất 6 kí tự.";

    if (Object.keys(err).length > 0) return setError(err);

    const res=await dispatch(register(userData))
    if(res){
      handleCloseModal();
    }
  };

  const validateEmail = useCallback((email) => {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      return true;
    }
    return false;
  }, []);

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
          <h4>
            ĐĂNG KÝ TÀI KHOẢN{" "}
            <span
              style={{
                color: "var(--primary-color)",
              }}
            >
              DREAMTECH
            </span>
          </h4>
          <i className="fa-solid fa-xmark" onClick={handleCloseModal} />
        </div>
        <form
          className="d-flex justify-content-center flex-column pt-4 auth_form "
          onSubmit={handleSubmit}
        >
          <div className="mb-3 form-floating">
            <input
              placeholder="Họ và Tên"
              type="text"
              className=" form-control auth_input "
              id="fullname"
              onChange={handleChangeInput}
              value={userData.fullname}
              name="fullname"
            />
            <label htmlFor="fullname">Họ và Tên</label>
            {error.fullname && (
              <small
                className="form-text"
                style={{
                  color: "var(--primary-color)",
                }}
              >
                {error.fullname}
              </small>
            )}
          </div>
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
            {error.email && (
              <small
                className="form-text"
                style={{
                  color: "var(--primary-color)",
                }}
              >
                {error.email}
              </small>
            )}
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
            {error.password && (
              <small
                className="form-text"
                style={{
                  color: "var(--primary-color)",
                }}
              >
                {error.password}
              </small>
            )}
            <small
              className="show-hide"
              onClick={() => setTypePass(!typePass)}
              style={{
                marginTop: error.password ? "-12px" : "0",
              }}
            >
              {typePass ? "Ẩn" : "Hiển thị"}
            </small>
          </div>

          <button type="submit" className="mt-4 btn btn_primary w-100">
            ĐĂNG KÝ
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
          Bạn đã có tài khoản?{" "}
          <span
            style={{
              color: "var(--primary-color)",
              fontWeight: "500",
              cursor: "pointer",
            }}
            onClick={() => setIsLogin(true)}
          >
            Đăng nhập
          </span>
        </p>
      </div>
    </div>
  );
}

export default ModalAuth;
