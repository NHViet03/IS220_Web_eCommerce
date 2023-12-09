import React, { useState } from 'react';
import '../../styles/tailwind-style.css';
import Sidebar from '../../components/MyAccount/Sidebar';
import ModalUpdateAddress from '../../components/MyAccount/Modal/ModalUpdateAddress';

function Addresses() {
    const [show, setShow] = useState(false);
    return (
        <div>
            <div className='wrapbox-content-account'>
                <div className='container-fluid max-w-screen-xl mx-auto px-2.5 pt-4 pb-2.5 pt-0 w-full block'>
                    <div className='row -mr-2 -ml-2 flex flex-wrap border-box text-left'>
                        <Sidebar activePage="addresses" />
                        <div className='order-2 mb-6 px-2 grow-0 shrink-0 w-3/4 relative p-0 box-border block text-left colright'>
                            <div className='right-main tab-content-container h-full m-0 p-0 text-left bg-white rounded box-border block'>
                                <div class="right-main-box tab-content customers-address box-border" id="addresses">
                                    <div class="box-heading py-4 px-6 box-border block">
                                        <div>
                                            <div class="line-title flex items-center justify-between box-border">
                                                <h2 className='mb-0 text-2xl font-semibold'>Thông tin tài khoản</h2>
                                                <button
                                                    className="button add-new-address font-medium py-2 px-3 bgcolor-app-blue text-white text-center text-sm rounded"
                                                    type="button"
                                                    onClick={() => setShow(true)}
                                                >
                                                    + Thêm địa chỉ mới
                                                </button>

                                            </div>
                                            <ModalUpdateAddress title="My Modal" onClose={() => setShow(false)} show={show}>
                                                <p>This is modal body</p>
                                            </ModalUpdateAddress>
                                        </div>
                                    </div>
                                    <div class="box-info-account py-2 px-6 box-border block text-left">
                                        <div id="address_tables" class="address_table_list flex flex-col box-border">
                                            <div class="address_table default order-none py-5 px-0 relative border-t-2 solid">
                                                <div id="view_address_1139209403" class="customer_address block box-border">
                                                    <div class="address_wrap flex space-between flex-row box-border">

                                                        <div class="colright view_address grow-0 shrink-0 w-3/4 mb-0">
                                                            <div class="line m-0 p-0 box-border block font-normal">
                                                                <p className='mb-2'>
                                                                    <span class="default_address note color-app-primary border-1 px-1 py-1 border-red-600 inline-flex items-center justify-center mr-2 text-sm font-semibold rounded">Mặc định</span>
                                                                    <span class="name_address inline-block font-semibold">Linh Tran</span>
                                                                </p>
                                                            </div>
                                                            <div class="line">
                                                                <p>Vietnam</p>
                                                            </div>
                                                            <div class="line d-none"><p>Nhà riêng</p></div>
                                                        </div>
                                                        <div class="colleft grow-0 shrink-0 w-1/4 text-right mb-0 box-border block">
                                                            <div class="address_actions flex justify-end flex-wrap">
                                                                <div>
                                                                    <div>
                                                                        <span class="action_edit box-border text-right">
                                                                            <a className='inline-block relative no-underline text-right' data-id="1139209403" data-default="1" data-first-name="" data-last-name="linhtran" data-phone="" data-province="" data-provinceid="" data-district="" data-districtid="" data-ward="" data-wardid="" data-address="" data-type="Nhà riêng" href="javascript:void(0);" class="js-edit-customer">
                                                                                <button 
                                                                                class="btn-edit box-border text-right text-sm not-italic font-semibold color-app-blue-nd"
                                                                                type='button'
                                                                                onClick={() => setShow(true)}
                                                                                >
                                                                                    Cập nhật
                                                                                </button>
                                                                            </a>
                                                                        </span>
                                                                    </div>
                                                                    <ModalUpdateAddress title="My Modal" onClose={() => setShow(false)} show={show}>
                                                                        <p>This is modal body</p>
                                                                    </ModalUpdateAddress>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Addresses;