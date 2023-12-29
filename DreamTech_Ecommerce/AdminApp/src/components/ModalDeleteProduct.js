import React from "react";
import {useSelector,useDispatch} from 'react-redux';
import { deleteProduct } from "../redux/actions/productAction";

const ModalDeleteProduct = ({ setModalDelete,id }) => {
  const auth=useSelector(state=>state.auth);
  const dispatch=useDispatch();

  const handleClose = () => {
    setModalDelete(false);
  };

  const handleDelete =async () => {
    await dispatch(deleteProduct({id,auth}))
    setModalDelete(false);
  };

  return (
    <div className="modal_custom">
      <div className="modal_content">
        <div className="modal_close" onClick={handleClose}>
          <i className="fa-solid fa-xmark" />
        </div>
        <div className="modal_body">
          <h5>Bạn có chắc chắn muốn xóa sản phẩm này?</h5>
          <p>
            Sản phẩm sẽ được xóa vĩnh viễn. Bạn không thể hoàn tác hành động này.
          </p>
        </div>
        <div className="modal_footer">
          <button className="btn btn_normal" onClick={handleClose}>
            Hủy
          </button>
          <button className="btn btn_normal btn_accept" onClick={handleDelete}>
            Xóa
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalDeleteProduct;
