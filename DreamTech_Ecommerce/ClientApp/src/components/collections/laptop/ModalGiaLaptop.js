import React, { useState } from 'react';
import Slider from '@mui/material/Slider';
import { useDispatch } from 'react-redux';
import { gia } from '../../../redux/actions/filterAction';
const ModalGiaPC = () => {
  const [value, setValue] = useState([500000, 50000000]);
  const [minValue, setMinValue] = useState(500000);
  const [maxValue, setMaxValue] = useState(50000000);

  const dispatch = useDispatch();

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
  const handleBoChon = () => {
    setMinValue(500000);
    setMaxValue(50000000);
    setValue([500000, 50000000]);
  }
  const handleXemKetQua = () => {
    dispatch(gia([minValue, maxValue]))
  }
  return (
    <div className='modal_gia'>
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
      <div className='modal_hang_selection flex align-items-center justify-center mt-3 gap-3'>
        <button type="button" className="btn btn-warning" onClick={handleBoChon}>
          Bỏ chọn
        </button>
        <button type="button" className="btn btn-light" onClick={handleXemKetQua}>
          Xem kết quả
        </button>
      </div>
    </div>
  );
};

export default ModalGiaPC;
