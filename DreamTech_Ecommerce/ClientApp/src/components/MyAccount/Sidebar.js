import "../../styles/tailwind-style.css";
import '../../styles/account.css';
import React from "react";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { GLOBAL_TYPES } from "../../redux/actions/globalTypes";
import { FaUser, FaLocationDot, FaBagShopping, FaEye } from "react-icons/fa6";
import { IoLogOutSharp } from "react-icons/io5";

function Sidebar({ activePage }) {
  const dispatch = useDispatch();
  const handleShowLogoutModal = () => {
    dispatch({
      type: GLOBAL_TYPES.MODAL_LOGOUT,
      payload: true,
    });
  };

  return (
    <div className='order-1 mb-6 px-2 grow-0 shrink-0 w-1/4 relative box-border block colleft'>
      <div className='left-sidebar h-full bg-white rounded box-border m-0 p-0 block text-sm font-normal'>
        <div className='left-sidebar__avatar relative z-0 border-b-2 border-solid border-gray-200 p-4 mb-1 flex items-center box-border text-sm font-normal'>
          <div class="icon w-12 h-12 box-border block">
            <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M24 0C10.752 0 0 10.752 0 24C0 37.248 10.752 48 24 48C37.248 48 48 37.248 48 24C48 10.752 37.248 0 24 0ZM24 9.6C28.632 9.6 32.4 13.368 32.4 18C32.4 22.632 28.632 26.4 24 26.4C19.368 26.4 15.6 22.632 15.6 18C15.6 13.368 19.368 9.6 24 9.6ZM24 43.2C19.128 43.2 13.368 41.232 9.264 36.288C13.4679 32.9897 18.6567 31.1971 24 31.1971C29.3433 31.1971 34.5321 32.9897 38.736 36.288C34.632 41.232 28.872 43.2 24 43.2Z" fill="#6D6E72"></path>
            </svg>
          </div>
          <div class="info pl-6 grow shrink basis-auto box-border block">
            <div class="customer-name font-semibold text-lg leading-6 box-border block text-left">Linh Tran</div>
          </div>
        </div>
        <ul class="left-sidebar__list tabbed-nav list-none pb-5 box-border block my-4 mx-0 text-sm font-normal">
          <li class="tab current box-border list-item list-none" data-tab="profile">
            <NavLink
              to="/account"
              className={`font-semibold block py-3 px-4 relative text-base box-border list-none ${
                activePage === "profile" ? "text-red-600" : ""
              }`}
            >
              <span class="icon w-4 text-center mr-3 inline-block box-boder">
                <FaUser />
              </span>
              <span className='box-border'>Thông tin tài khoản</span>
            </NavLink>
          </li>
          <li class="tab box-border list-item list-none" data-tab="addresses">
            <NavLink
              to="/account/addresses"
              className={`font-semibold block py-3 px-4 relative text-base box-border list-none ${
                activePage === "addresses" ? "text-red-600" : ""
              }`}
            >
              <span class="icon w-4 text-center mr-3 inline-block box-boder">
                <FaLocationDot />
              </span>
              <span className='box-border'>Sổ địa chỉ</span>
            </NavLink>
          </li>
          <li class="tab box-border list-item list-none" data-tab="orders-history">
            <NavLink
              to="/account/orders-history"
              className={`font-semibold block py-3 px-4 relative text-base box-border list-none ${
                activePage === "orders-history" ? "text-red-600" : ""
              }`}
            >
              <span class="icon w-4 text-center mr-3 inline-block box-boder">
                <FaBagShopping />
              </span>
              <span className='box-border'>Quản lý đơn hàng</span>
            </NavLink>
          </li>
          <li class="tab box-border list-item list-none" data-tab="viewed">
            <NavLink
              to="/account/viewed"
              className={`font-semibold block py-3 px-4 relative text-base box-border list-none ${
                activePage === "viewed" ? "text-red-600" : ""
              }`}
            >
              <span class="icon w-4 text-center mr-3 inline-block box-boder">
                <FaEye />
              </span>
              <span className='box-border'>Sản phẩm đã xem</span>
            </NavLink>
          </li>
          <li onClick={handleShowLogoutModal} class="last m-0 p-0 box-border list-item list-none font-semibold text-base leading-6 py-3 px-4 mb-0">
            <a className='flex items-center block mr-3 relative font-semibold text-base box-border js-btn-logout' href="javascript:void(0);">
              <span class="icon w-4 text-center mr-3 inline-block box-boder">
                <IoLogOutSharp size={21} />
              </span>
              <span className='box-border'>Đăng xuất</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
