import React from "react";
import { useDispatch } from "react-redux";
import { GLOBAL_TYPES } from "../redux/actions/globalTypes";
import { logout } from "../redux/actions/authAction";

function ModalLogout() {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    handleCloseModal();
  };
  const handleCloseModal = () => {
    dispatch({
      type: GLOBAL_TYPES.MODAL_LOGOUT,
      payload: false,
    });
  };

  return (
    <div className="modal_main">
      <div className="modal_logout_container">
        <i className="fa-regular fa-circle-question" />
        <div className="mt-3 modal_logout_content">
          <p className="text-center mb-3">Bạn muốn thoát tài khoản</p>
          <button className="mb-2 btn btn_primary w-100" onClick={handleLogout}>
            Đồng ý
          </button>
          <button
            className="btn btn_secondary w-100"
            onClick={handleCloseModal}
          >
            Không
          </button>
        </div>
      </div>
    </div>
  );
}

export default ModalLogout;
