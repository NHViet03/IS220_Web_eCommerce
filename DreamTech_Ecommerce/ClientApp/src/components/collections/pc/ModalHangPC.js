import React, {useEffect, useState} from 'react'
import { useDispatch } from 'react-redux';
import { hang } from '../../../redux/actions/filterAction';
const ModalHangPC = () => {
  const dispatch = useDispatch();
  const [GVN, setGVN] = useState(false);

  const handleGVN = () => {
    setGVN(!GVN)
  }
  const handleBoChon = () => {
    setGVN(false)
  }
  const Hang = []
  const handleXemKetQua = () => {
    
    if (GVN) {
      Hang.push('GVN')
    }
    dispatch(hang(Hang))
  }  

  return (
    <div className='modal_hang'>
        <div className='selection'>
            <div className={GVN ? 'active' : ''} onClick={handleGVN}>
            GVN
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