import React from 'react';
import { Link } from 'react-router-dom';

function CartLastStep() {
  return (
    <div className="flex flex-col items-center p-4">
      <svg width="110px" height="110px" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill="#08b811" d="M512 64a448 448 0 110 896 448 448 0 010-896zm-55.808 536.384l-99.52-99.584a38.4 38.4 0 10-54.336 54.336l126.72 126.72a38.272 38.272 0 0054.336 0l262.4-262.464a38.4 38.4 0 10-54.272-54.336L456.192 600.384z"></path></g></svg>
      <h2 className="text-success font-semibold text-2xl">Thanh toán thành công</h2>
      <p className="text-center mb-5 mt-2">Cảm ơn bạn đã mua sắm tại DreamTech. Đơn hàng của bạn đã được xác nhận. Thời gian giao hàng sẽ từ 2-3 ngày.</p>
      <Link className="block text-center action-button uppercase px-5" to={'/'}>Tiếp tục mua hàng</Link>
    </div>
  )
}

export default CartLastStep;