import React from 'react'

const ModalGia = () => {
  return (
    <div className='modal_gia'>
        <div className='selection'>
            <div>Dưới 10 triệu</div>
            <div>10 - 15 triệu</div>
            <div>15 - 20 triệu</div>
            <div>20 - 25 triệu</div>
            <div>25 - 30 triệu</div>
            <div>Trên 30 triệu</div>
        </div>
        <div className='modal_hang_selection flex align-items-center justify-center my-3 gap-3'>
            <button type="button" className="btn btn-warning">Bỏ chọn</button>
            <button  type="button" className="btn btn-light">Xem kết quả</button>
        </div>
    </div>
  )
}

export default ModalGia