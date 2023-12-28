import React, { useEffect } from 'react';

const CartPayment = function ({inputEmail, inputName, inputPhone, inputNote, total, inputAddress }) {
   useEffect(() => {

   });
   return (
      <section className="section-info-order ">
         <div className="cart-block cart-order-table no-mrg mt-3">
            <div className="cart-title ">
               <h2 className="font-semibold">Thông tin đặt hàng</h2>
            </div>
            <div className="cart-detail m-2">
               <div className="order-table row px-4 pb-3 pt-2 text-sm gap-y-2">
                  <div className="col-4 font-semibold mb-2">• Khách hàng</div>
                  <div className="col-8 mb-2">{inputName}</div>
                  <div className="col-4 font-semibold mb-2">• Số điện thoại</div>
                  <div className="col-8 mb-2">{inputPhone}</div>
                  <div className="col-4 font-semibold mb-2">• Địa chỉ nhận hàng</div>
                  <div className="col-8 mb-2">{inputAddress}</div>
                  <div className="col-4 font-semibold mb-2">• Phí vận chuyển</div>
                  <div className="col-8 text-custom-primary font-semibold mb-2">Miễn phí</div>
                  <div className="col-4 font-semibold mb-2">• Tổng tiền</div>
                       <div className="col-8 text-custom-primary font-semibold mb-2">{ total }</div>
               </div>
               <div class="w-full border-zinc-200 border-b"></div>
               <div className="pt-3">
                  <h2 className="font-semibold">Chọn hình thức thanh toán</h2>
                  <div className="flex items-center mt-3 ms-3">
                     <input type="radio" required checked name="COD" />
                     <img class="mx-3" width={25} src="https://file.hstatic.net/200000636033/file/pay_2d752907ae604f08ad89868b2a5554da.png" alt="cod" />
                     <label className="text-sm font-medium" for="COD">
                        Thanh toán khi nhận hàng (COD)
                     </label>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
};

export default CartPayment;
