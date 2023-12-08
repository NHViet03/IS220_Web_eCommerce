import React from "react";

const ModalDeleteProduct = ({ setModalDelete }) => {
  const handleClose = () => {
    setModalDelete(false);
  };

  const handleDelete = () => {
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
            Sản phẩm sẽ được xóa vĩnh viễn.Bạn không thể hoàn tác hành động này.
          </p>
        </div>
        <div className="modal_footer">
          <button className="btn btn_cancel" onClick={handleClose}>
            Hủy
          </button>
          <button className="btn btn_delete" onClick={handleDelete}>
            Xóa
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalDeleteProduct;
