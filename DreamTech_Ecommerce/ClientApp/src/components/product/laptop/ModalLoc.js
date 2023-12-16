import React from 'react'

const ModalLoc = ({setShowLoc,showLoc}) => {
  return (
    <div className='modal_loc'>
            <div className='flex justify-between mx-2 '>
            <h1 className='fw-medium my-2'>Tiêu chí đã chọn:</h1>
            <div className='flex align-items-center p-2 border border-secondary my-2 rounded' >
                <i class="fa-solid fa-xmark mr-2"></i>
                <h5>Đóng</h5>
            </div>
            </div>
        <h1 className='fw-medium p-2 pb-0 '>Hãng</h1>
        <div className='selection mb-2'>
            <div>ACER</div>
            <div>ASUS</div>
            <div>DELL</div>
            <div>LENOVO</div>
            <div>HP</div>
            <div>MSI</div>
            <div>Không thương hiệu</div>
        </div>
        <hr/>
        <h1 className='fw-medium p-2 pb-0 '>Giá</h1>
        <div className='selection'>
            <div>Dưới 10 triệu</div>
            <div>10 - 15 triệu</div>
            <div>15 - 20 triệu</div>
            <div>20 - 25 triệu</div>
            <div>25 - 30 triệu</div>
            <div>Trên 30 triệu</div>
        </div>
          
          <div className='modal_hang_selection flex align-items-center justify-center my-1 gap-3'>
            <button type="button" className="btn btn-warning">Bỏ chọn</button>
            <button  type="button" className="btn btn-light">Xem kết quả</button>
        </div>
    </div>
  )
}

export default ModalLoc