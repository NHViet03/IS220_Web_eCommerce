import React from 'react'

const ModalHang = () => {
  return (
    <div className='modal_hang'>
        <div className='selection'>
            <div>ACER</div>
            <div>ASUS</div>
            <div>DELL</div>
            <div>LENOVO</div>
            <div>HP</div>
            <div>MSI</div>
            <div>Không thương hiệu</div>
        </div>
        <div className='modal_hang_selection flex align-items-center justify-center my-3 gap-3'>
            <button type="button" className="btn btn-warning">Bỏ chọn</button>
            <button  type="button" className="btn btn-light">Xem kết quả</button>
        </div>
    </div>
  )
}

export default ModalHang