import React, { useState } from 'react';

function Cart() {
    const [quantity, setQuantity] = useState(1);
    return (
        <div className="row mx-1 relative">
            {/* Item image*/}
            <div className="col col-2 ps-1">
                <div className="left">
                    <div className="item-img">
                        <a href="/products/pc-gvn-x-msi-project-zero-white">
                            <img src="https://product.hstatic.net/200000722513/product/zero_msi_-_3_7723ef0bfeaa45c88b40cc0216973eb8.png" alt="PC GVN x MSI PROJECT ZERO WHITE (Intel i5-13400F/ VGA RTX 4060)"/>
                        </a>
                    </div>
                    <div className="item-remove">
                        <div className="remove">
                            <a href="/cart/change?line=1&amp;quantity=0" className="cart text-xs">
                                <svg width="16" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9.58036 11.75H10.1696C10.317 11.75 10.4643 11.6328 10.4643 11.4688V6.40625C10.4643 6.26563 10.317 6.125 10.1696 6.125H9.58036C9.40848 6.125 9.28571 6.26563 9.28571 6.40625V11.4688C9.28571 11.6328 9.40848 11.75 9.58036 11.75ZM13.6071 3.875H11.5692L10.7344 2.5625C10.5379 2.23438 10.1451 2 9.72768 2H7.24777C6.83036 2 6.4375 2.23438 6.24107 2.5625L5.40625 3.875H3.39286C3.17188 3.875 3 4.0625 3 4.25V4.625C3 4.83594 3.17188 5 3.39286 5H3.78571V12.875C3.78571 13.5078 4.30134 14 4.96429 14H12.0357C12.6741 14 13.2143 13.5078 13.2143 12.875V5H13.6071C13.8036 5 14 4.83594 14 4.625V4.25C14 4.0625 13.8036 3.875 13.6071 3.875ZM7.19866 3.19531C7.22321 3.17188 7.27232 3.125 7.32143 3.125C7.32143 3.125 7.32143 3.125 7.34598 3.125H9.65402C9.70313 3.125 9.75223 3.17188 9.77679 3.19531L10.1942 3.875H6.78125L7.19866 3.19531ZM12.0357 12.875H4.96429V5H12.0357V12.875ZM6.83036 11.75H7.41964C7.56696 11.75 7.71429 11.6328 7.71429 11.4688V6.40625C7.71429 6.26563 7.56696 6.125 7.41964 6.125H6.83036C6.65848 6.125 6.53571 6.26563 6.53571 6.40625V11.4688C6.53571 11.6328 6.65848 11.75 6.83036 11.75Z" fill="#6D6E72">
                                    </path>
                                </svg>Xoá
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            {/* Item detail */}
            <div className="col col-7">
                <div className="item-info text-black">
                    <a href="/products/pc-gvn-x-msi-project-zero-white" className="text-black hover:text-black">
                        <h3 className="text-sm font-semibold mb-3">PC GVN x MSI PROJECT ZERO WHITE (Intel i5-13400F/ VGA RTX 4060)</h3>
                    </a>
                    <div className="gifts-list text-xs">
                        <h4 className="font-semibold">Quà tặng khuyến mãi</h4>
                        <div className="line-gift" data-line="2" data-variant-id="1115984334" data-pro-id="1051514299">
                            <div className="gift-info">Tặng:  <a className="text-black hover:text-black" href="/products/ram-corsair-vengeance-rgb-32gb-2x16gb-5200-ddr5-white-cmh32gx5m2b5200c40w">Ram Corsair Vengeance RGB 32GB (2x16GB) 5200 DDR5 White (CMH32GX5M2B5200C40W)</a>
                                <span> Trị giá: 3.290.000₫</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Item price */}
            <div className="col col-3 text-right pe-1">
                <div className="item-price mb-2"><span className="text font-semibold">26.990.000₫</span></div>
                <div className="item-quan text-sm">
                    <div className="flex justify-end">
                        <button type="button" className="p-1 border rounded-bl rounded-tl" onClick={() => quantity > 1 && setQuantity(quantity - 1) }>
                            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13.3332 8H7.99984H2.6665" stroke="#111111" stroke-width="1" stroke-linecap="round"></path>
                            </svg>
                        </button>
                        <input
                            type="text"
                            readOnly="true"
                            data-quantity={quantity}
                            data-product="1051608380"
                            size="1"
                            name="updates[]"
                            min="1"
                            data-price="2699000000"
                            value={quantity}
                            className="p-1 border text-center outline-none"
                        />
                        <button type="button" className="p-1 border rounded-br rounded-tr" onClick={() => setQuantity(quantity + 1)}>
                            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.00033 13.3334V8.00008M8.00033 8.00008V2.66675M8.00033 8.00008H13.3337M8.00033 8.00008H2.66699" stroke="#111111" stroke-width="1" stroke-linecap="round">
                                </path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart;