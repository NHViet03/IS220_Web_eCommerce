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
    // <div>
    //   <div className="hidden w-[300px] flex-shrink-0 px-4 lg:block">
    //     <div className="border-b py-5">
    //       <div className="flex items-center">
    //         <img
    //           width="40px"
    //           height="40px"
    //           className="rounded-full object-cover"
    //           src={
    //             "https://img.meta.com.vn/Data/image/2021/09/22/anh-meo-cute-de-thuong-dang-yeu-41.jpg"
    //           }
    //           alt="Avatar portrait"
    //         />
    //         <div className="ml-5">
    //           <p className="font-medium text-gray-500">Xin chào,</p>
    //           <p className="font-bold">Nguyễn Văn A</p>
    //         </div>
    //       </div>
    //     </div>
    //     <div className="flex border-b py-5">
    //       <div className="w-full">
    //         <div className="flex w-full">
    //           <div className="flex flex-col gap-2">
    //             <Link
    //               to="/"
    //               className="flex items-center gap-2 font-medium hover:text-red-600"
    //             >
    //               <svg
    //                 xmlns="http://www.w3.org/2000/svg"
    //                 fill="none"
    //                 viewBox="0 0 24 24"
    //                 stroke-width="1.5"
    //                 stroke="currentColor"
    //                 className="h-5 w-5"
    //               >
    //                 <path
    //                   stroke-linecap="round"
    //                   stroke-linejoin="round"
    //                   d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z"
    //                 />
    //               </svg>
    //               Quản lý tài khoản
    //             </Link>
    //             <Link
    //               to="/account"
    //               className={`pl-3.5 ml-4 text-gray-500 duration-100 hover:text-red-600 ${
    //                 activePage === "profile" ? "text-red-600" : ""
    //               }`}
    //             >
    //               Thông tin cá nhân
    //             </Link>
    //             <Link
    //               to="/account/address"
    //               className={`pl-3.5 ml-4 text-gray-500 duration-100 hover:text-red-600 ${
    //                 activePage === "address" ? "bg-red-200" : ""
    //               }`}
    //             >
    //               Địa chỉ
    //             </Link>
    //             <Link
    //               to="/account/change-password"
    //               className={`pl-3.5 ml-4 text-gray-500 duration-100 hover:text-red-600 ${
    //                 activePage === "password" ? "bg-red-200" : ""
    //               }`}
    //             >
    //               Đổi mật khẩu
    //             </Link>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //     <div className="flex border-b py-5">
    //       <div className="flex w-full">
    //         <div className="flex flex-col gap-2">
    //           <a
    //             href="#"
    //             className="flex items-center gap-2 font-medium hover:text-red-600 active:text-violet-900"
    //           >
    //             <svg
    //               xmlns="http://www.w3.org/2000/svg"
    //               viewBox="0 0 24 24"
    //               fill="currentColor"
    //               className="h-5 w-5"
    //             >
    //               <path d="M3.375 3C2.339 3 1.5 3.84 1.5 4.875v.75c0 1.036.84 1.875 1.875 1.875h17.25c1.035 0 1.875-.84 1.875-1.875v-.75C22.5 3.839 21.66 3 20.625 3H3.375z" />
    //               <path
    //                 fill-rule="evenodd"
    //                 d="M3.087 9l.54 9.176A3 3 0 006.62 21h10.757a3 3 0 002.995-2.824L20.913 9H3.087zm6.163 3.75A.75.75 0 0110 12h4a.75.75 0 010 1.5h-4a.75.75 0 01-.75-.75z"
    //                 clip-rule="evenodd"
    //               />
    //             </svg>
    //             Lịch sử đơn hàng
    //           </a>
    //         </div>
    //       </div>
    //     </div>
    //     <div className="flex py-5">
    //       <div className="flex w-full">
    //         <div className="flex flex-col gap-2">
    //           <div
    //             onClick={handleShowLogoutModal}
    //             className="flex items-center gap-2 font-medium hover:text-red-600 active:text-violet-900 cursor-pointer"
    //           >
    //             <svg
    //               xmlns="http://www.w3.org/2000/svg"
    //               fill="none"
    //               viewBox="0 0 24 24"
    //               stroke-width="1.5"
    //               stroke="currentColor"
    //               className="h-5 w-5"
    //             >
    //               <path
    //                 stroke-linecap="round"
    //                 stroke-linejoin="round"
    //                 d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
    //               />
    //             </svg>
    //             Đăng xuất
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
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
