import React, {useEffect, useState} from 'react'
import { useDispatch } from 'react-redux';
import { hang } from '../../../redux/actions/filterAction';
const ModalHangPC = () => {
  const dispatch = useDispatch();
  const [MSI, setMSI] = useState(false);
  const [Lenovo, setLenovo] = useState(false);
  const [AcerPredato, setAcerPredato] = useState(false);
  const [ASUS, setASUS] = useState(false);
  const handleGVN = () => {
    setMSI(!MSI) 
  }
  const handleLenovo = () => {
    setLenovo(!Lenovo)
  }
  const handleAcerPredato = () => {
    setAcerPredato(!AcerPredato)
  }
  const handleASUS = () => {
    setASUS(!ASUS)
  }
  const handleBoChon = () => {
    setMSI(false)
    setLenovo(false)
    setAcerPredato(false)
    setASUS(false)
  }
  const Hang = []
  const handleXemKetQua = () => {
    
    if (MSI) {
      Hang.push('MSI')
    }
    if (Lenovo) {
      Hang.push('Lenovo')
    }
    if (AcerPredato) {
      Hang.push('AcerPredato')
    }
    if (ASUS) {
      Hang.push('ASUS')
      Hang.push('Asus')

    }
    dispatch(hang(Hang))
  }

  return (
    <div className='modal_hang'>
        <div className='selection'>
            <div className={MSI ? 'active' : ''} onClick={handleGVN}>
            MSI
            </div>
            <div className={Lenovo ? 'active' : ''} onClick={handleLenovo}>
            Lenovo
            </div>
            <div className={AcerPredato ? 'active' : ''} onClick={handleAcerPredato}>
            AcerPredato
            </div>
            <div className={ASUS ? 'active' : ''} onClick={handleASUS}>
            ASUS
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