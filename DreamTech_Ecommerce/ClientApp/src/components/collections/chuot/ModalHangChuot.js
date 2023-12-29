import React, {useEffect, useState} from 'react'
import { useDispatch } from 'react-redux';
import { hang } from '../../../redux/actions/filterAction';
const ModalHangPC = () => {
  const dispatch = useDispatch();
  const [Logitech, setLogitech] = useState(false);

  const handleGVN = () => {
    setLogitech(!Logitech)
  }
  const handleBoChon = () => {
    setLogitech(false)
  }
  const Hang = []
  const handleXemKetQua = () => {
    
    if (Logitech) {
      Hang.push('Logitech')
    }
    dispatch(hang(Hang))
  }

  return (
    <div className='modal_hang'>
        <div className='selection'>
            <div className={Logitech ? 'active' : ''} onClick={handleGVN}>
            Logitech
            </div>
        </div>
        <div className='modal_hang_selection flex align-items-center justify-center gap-3'>
            <button type="button" className="btn btn-warning" onClick={handleBoChon}>Bỏ chọn</button>
            <button  type="button" className="btn btn-light" onClick={handleXemKetQua}>Xem kết quả</button>
        </div>
    </div>
  )
}

export default ModalHangPC