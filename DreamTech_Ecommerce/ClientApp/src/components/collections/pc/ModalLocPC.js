import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { gia, hang } from '../../../redux/actions/filterAction';
import Slider from '@mui/material/Slider';

const ModalLocPC = ({setShowLoc,showLoc}) => {
  const dispatch = useDispatch();
  const [GVN, setGVN] = useState(false);

  const handleGVN = () => {
    setGVN(!GVN)
  }
  const handleBoChon = () => {
    setGVN(false)
      setMinValue(500000);
    setMaxValue(50000000);
    setValue([500000, 50000000]);
  }
  const Hang = []
  const handleXemKetQua = () => {
    
    if (GVN) {
      Hang.push('GVN')
    }
    dispatch(hang(Hang))
    dispatch(gia([minValue, maxValue]))
  }
  const [value, setValue] = useState([500000, 50000000]);
  const [minValue, setMinValue] = useState(500000);
  const [maxValue, setMaxValue] = useState(50000000);


  const handleChange = (event, newValue) => {
    setValue(newValue);
    setMinValue(newValue[0]);
    setMaxValue(newValue[1]);
  };

  const handleMinInputChange = (event) => {
    const newValue = parseInt(event.target.value, 10);
    setMinValue(newValue);
    setValue([newValue, maxValue]);
  };

  const handleMaxInputChange = (event) => {
    const newValue = parseInt(event.target.value, 10);
    setMaxValue(newValue);
    setValue([minValue, newValue]);
  };
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
        <div className='selection'>
            <div className={GVN ? 'active' : ''} onClick={handleGVN}>
            GVN
            </div>
        </div>
        <hr/>
        <h1 className='fw-medium p-2 pb-0 '>Giá</h1>
        <div className='slider mt-3 mx-4'>
        <Slider
          getAriaLabel={() => 'Giá'}
          value={value}
          onChange={handleChange}
          valueLabelDisplay="auto"
          getAriaValueText={() => 'Giá'}
          min={500000} // Giá trị tối thiểu
          max={50000000} // Giá trị tối đa
        />
      </div>
      <div className='input-container'>
        <input
          type='number'
          value={minValue}
          onChange={handleMinInputChange}
          min={500000}
          max={maxValue}
        />
        <span className='mx-2'>Đến</span>
        <input
          type='number'
          value={maxValue}
          onChange={handleMaxInputChange}
          min={minValue}
          max={50000000}
        />
      </div>
          
          <div className='modal_hang_selection flex align-items-center justify-center my-1 gap-3'>
            <button type="button" className="btn btn-warning" onClick={handleBoChon}>Bỏ chọn</button>
            <button  type="button" className="btn btn-light" onClick={handleXemKetQua}>Xem kết quả</button>
        </div>
    </div>
  )
}

export default ModalLocPC