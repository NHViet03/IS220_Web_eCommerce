import React from 'react';
import Sidebar from '../../components/MyAccount/Sidebar';
import "../../styles/account.css";
import { NavLink } from 'react-router-dom';

function ViewOrderDetail() {
    return (
            <div>
                <div className='wrapbox-content-account'>
                    <div className='container-fluid max-w-screen-xl mx-auto px-2.5 pt-4 pb-2.5 pt-0 w-full block'>
                        <div className='row -mr-2 -ml-2 flex flex-wrap border-box text-left'>
                            <Sidebar activePage="orders-history" />
                            <div className='order-2 mb-6 px-2 grow-0 shrink-0 w-3/4 relative p-0 box-border block text-left colright'>
                                <div className='right-main tab-content-container h-full m-0 p-0 text-left bg-white rounded box-border block'>
                                    <div class="right-main-box tab-content customers-orders-history" id="orders-history">
                                        <div class="box-heading">
                                            <div class="line-title">
                                                <h2>Chi tiết đơn hàng #168124 - <span class="order-status">Chưa nhận hàng</span></h2>
                                                <div class="order-create">
                                                    <span>Đặt lúc: 23:23 Thứ Bảy, 23.12.2023</span>
                                                </div>
                                                <a href="javascript:void(0);" class="button btn-tracking d-none" id="btn-odt-customer" data-target="#order_tracking">Theo dõi đơn hàng</a>
                                            </div>
                                        </div>
                                        <div class="detail-box-info-account">
                                            <div id="order_tracking" class="order-tracking">
                                                <div class="tracking-content tracking-detail">
                                                    <div class="box-detail" id="order-box-0">
                                                        <div class="tracking-w d-none">
                                                            <ul class="tracking-head">
                                                                <li class="tracking_quantity">
                                                                    <span>2</span>
                                                                    Sản phẩm
                                                                </li>
                                                                <li class="tracking_orderid">Đơn hàng - <span>undefined</span>
                                                                </li>
                                                                <li class="tracking_date_buy">Ngày mua: <span>23:23 - 23.12.2023</span>
                                                                </li>
                                                                <li class="tracking_phone d-none">Số điện thoại: <span>null</span></li>
                                                            </ul>
                                                        </div>
                                                        <div class="collapse-box__body clearfix">
                                                            <div class="order-tracking" id="odt-0">
                                                                <div class="order-tracking-wrap">
                                                                    <div class="ort-block active " id="ort-ordered">
                                                                        <div class="ort-block-circle">
                                                                            <svg width="56" height="56" viewBox="0 0 57 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                <circle cx="28.5" cy="28" r="26.5" stroke="#CFCFCF" stroke-width="3">
                                                                                </circle><path d="M19.1667 29.3333V18.6667C19.1667 17.9594 19.4476 17.2811 19.9477 16.781C20.4478 16.281 21.1261 16 21.8333 16H37.8333C38.5406 16 39.2189 16.281 39.719 16.781C40.219 17.2811 40.5 17.9594 40.5 18.6667V36C40.5 37.3333 39.7 40 36.5 40M36.5 40H20.5C19.1667 40 16.5 39.2 16.5 36V33.3333H32.5V36C32.5 39.2 35.1667 40 36.5 40ZM24.5 21.3333H35.1667M24.5 26.6667H29.8333" stroke="#CFCFCF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                                                                                </path>
                                                                            </svg>
                                                                            <span>
                                                                                <svg width="19" height="14" viewBox="0 0 19 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                    <path d="M16.2744 0.47078L6.69658 10.1165L2.72738 6.11917C2.42795 5.81773 2.02188 5.64842 1.59851 5.6485C1.17513 5.64857 0.769121 5.81802 0.469801 6.11957C0.170482 6.42112 0.00236659 6.83007 0.00244143 7.25645C0.00251627 7.68283 0.170775 8.09171 0.470201 8.39315L5.56799 13.5271C5.86735 13.8285 6.2733 13.9978 6.69658 13.9978C7.11986 13.9978 7.52582 13.8285 7.82517 13.5271L18.534 2.74155C18.8247 2.43835 18.9856 2.03226 18.982 1.61075C18.9784 1.18923 18.8105 0.786018 18.5145 0.487952C18.2186 0.189885 17.8182 0.0208135 17.3996 0.0171506C16.9811 0.0134878 16.5779 0.175527 16.2768 0.468369L16.2744 0.47078Z" fill="white">
                                                                                    </path>
                                                                                </svg>
                                                                            </span>
                                                                        </div>
                                                                        <div class="ort-block-title">Đơn hàng đã đặt</div><div class="ort-block-time">
                                                                            23:23 - 23.12.2023</div>
                                                                    </div>
                                                                    <div class="ort-block  " id="ort-processing">
                                                                        <div class="ort-block-circle">
                                                                            <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                <circle cx="28" cy="28" r="26.5" stroke="#CFCFCF" stroke-width="3">
                                                                                </circle>
                                                                                <mask id="mask0_7525_18447" maskUnits="userSpaceOnUse" x="15" y="16" width="27" height="24">
                                                                                    <path d="M25.9815 31.8895L29.537 33.0007C29.537 33.0007 38.4259 31.334 39.6111 31.334C40.7963 31.334 40.7963 32.4451 39.6111 33.5562C38.4259 34.6673 34.2778 38.0007 30.7222 38.0007C27.1667 38.0007 24.7963 36.334 22.4259 36.334H16.5" stroke="#CFCFCF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                                                                                    </path>
                                                                                    <path d="M16.5 29.6667C17.6852 28.5556 20.0556 26.8889 22.4259 26.8889C24.7963 26.8889 30.4259 29.1111 31.3148 30.2222C32.2037 31.3333 29.537 33 29.537 33M23.6111 23.5556V19.1111C23.6111 18.8164 23.736 18.5338 23.9582 18.3254C24.1805 18.1171 24.482 18 24.7963 18H39.0185C39.3328 18 39.6343 18.1171 39.8566 18.3254C40.0788 18.5338 40.2037 18.8164 40.2037 19.1111V28" stroke="#CFCFCF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                                                                                    </path>
                                                                                    <path d="M28.9443 18H34.8703V23H28.9443V18Z" fill="#CFCFCF" stroke="#CFCFCF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path></mask><g mask="url(#mask0_7525_18447)"><path d="M14.1299 13.5566H42.5743V40.2233H14.1299V13.5566Z" fill="#CFCFCF"></path></g></svg><span><svg width="19" height="14" viewBox="0 0 19 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                        <path d="M16.2744 0.47078L6.69658 10.1165L2.72738 6.11917C2.42795 5.81773 2.02188 5.64842 1.59851 5.6485C1.17513 5.64857 0.769121 5.81802 0.469801 6.11957C0.170482 6.42112 0.00236659 6.83007 0.00244143 7.25645C0.00251627 7.68283 0.170775 8.09171 0.470201 8.39315L5.56799 13.5271C5.86735 13.8285 6.2733 13.9978 6.69658 13.9978C7.11986 13.9978 7.52582 13.8285 7.82517 13.5271L18.534 2.74155C18.8247 2.43835 18.9856 2.03226 18.982 1.61075C18.9784 1.18923 18.8105 0.786018 18.5145 0.487952C18.2186 0.189885 17.8182 0.0208135 17.3996 0.0171506C16.9811 0.0134878 16.5779 0.175527 16.2768 0.468369L16.2744 0.47078Z" fill="white">
                                                                                        </path>
                                                                                    </svg>
                                                                            </span>
                                                                        </div>
                                                                        <div class="ort-block-title">Tiếp nhận và chờ xử lý</div>
                                                                        <div class="ort-block-time">
                                                                        </div>
                                                                    </div>
                                                                    <div class="ort-block  " id="ort-delivering">
                                                                        <div class="ort-block-circle">
                                                                            <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                <circle cx="28" cy="28" r="26.5" fill="#ffffff" stroke="#CFCFCF" stroke-width="3">
                                                                                </circle>
                                                                                <path d="M18.7627 35.1432C18.7627 35.901 19.0621 36.6277 19.5951 37.1635C20.1281 37.6993 20.851 38.0003 21.6048 38.0003C22.3586 38.0003 23.0815 37.6993 23.6145 37.1635C24.1475 36.6277 24.4469 35.901 24.4469 35.1432C24.4469 34.3855 24.1475 33.6588 23.6145 33.123C23.0815 32.5871 22.3586 32.2861 21.6048 32.2861C20.851 32.2861 20.1281 32.5871 19.5951 33.123C19.0621 33.6588 18.7627 34.3855 18.7627 35.1432ZM32.9732 35.1432C32.9732 35.901 33.2727 36.6277 33.8057 37.1635C34.3387 37.6993 35.0616 38.0003 35.8153 38.0003C36.5691 38.0003 37.292 37.6993 37.825 37.1635C38.358 36.6277 38.6574 35.901 38.6574 35.1432C38.6574 34.3855 38.358 33.6588 37.825 33.123C37.292 32.5871 36.5691 32.2861 35.8153 32.2861C35.0616 32.2861 34.3387 32.5871 33.8057 33.123C33.2727 33.6588 32.9732 34.3855 32.9732 35.1432Z" stroke="#CFCFCF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">

                                                                                </path>
                                                                                <path d="M18.7632 35.1426H15.9211V29.4284M14.5 18H30.1316V35.1426M24.4474 35.1426H32.9737M38.6579 35.1426H41.5V26.5713M41.5 26.5713H30.1316M41.5 26.5713L37.2368 19.4286H30.1316M15.9211 23.7142H21.6053" stroke="#CFCFCF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">

                                                                                </path>
                                                                            </svg>
                                                                            <span>
                                                                                <svg width="19" height="14" viewBox="0 0 19 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                    <path d="M16.2744 0.47078L6.69658 10.1165L2.72738 6.11917C2.42795 5.81773 2.02188 5.64842 1.59851 5.6485C1.17513 5.64857 0.769121 5.81802 0.469801 6.11957C0.170482 6.42112 0.00236659 6.83007 0.00244143 7.25645C0.00251627 7.68283 0.170775 8.09171 0.470201 8.39315L5.56799 13.5271C5.86735 13.8285 6.2733 13.9978 6.69658 13.9978C7.11986 13.9978 7.52582 13.8285 7.82517 13.5271L18.534 2.74155C18.8247 2.43835 18.9856 2.03226 18.982 1.61075C18.9784 1.18923 18.8105 0.786018 18.5145 0.487952C18.2186 0.189885 17.8182 0.0208135 17.3996 0.0171506C16.9811 0.0134878 16.5779 0.175527 16.2768 0.468369L16.2744 0.47078Z" fill="white">
                                                                                    </path>
                                                                                </svg>
                                                                            </span>
                                                                        </div>
                                                                        <div class="ort-block-title">Đã giao cho ĐVVC</div>
                                                                        <div class="ort-block-time">
                                                                        </div>
                                                                    </div>
                                                                    <div class="ort-block  " id="ort-fulfilled">
                                                                        <div class="ort-block-circle">
                                                                            <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                <circle cx="28" cy="28" r="26.5" fill="#ffffff" stroke="#CFCFCF" stroke-width="3"></circle>
                                                                                <path d="M18.7627 35.1432C18.7627 35.901 19.0621 36.6277 19.5951 37.1635C20.1281 37.6993 20.851 38.0003 21.6048 38.0003C22.3586 38.0003 23.0815 37.6993 23.6145 37.1635C24.1475 36.6277 24.4469 35.901 24.4469 35.1432C24.4469 34.3855 24.1475 33.6588 23.6145 33.123C23.0815 32.5871 22.3586 32.2861 21.6048 32.2861C20.851 32.2861 20.1281 32.5871 19.5951 33.123C19.0621 33.6588 18.7627 34.3855 18.7627 35.1432ZM32.9732 35.1432C32.9732 35.901 33.2727 36.6277 33.8057 37.1635C34.3387 37.6993 35.0616 38.0003 35.8153 38.0003C36.5691 38.0003 37.292 37.6993 37.825 37.1635C38.358 36.6277 38.6574 35.901 38.6574 35.1432C38.6574 34.3855 38.358 33.6588 37.825 33.123C37.292 32.5871 36.5691 32.2861 35.8153 32.2861C35.0616 32.2861 34.3387 32.5871 33.8057 33.123C33.2727 33.6588 32.9732 34.3855 32.9732 35.1432Z" stroke="#CFCFCF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path>

                                                                                <path d="M18.7632 35.1426H15.9211V29.4284M14.5 18H30.1316V35.1426M24.4474 35.1426H32.9737M38.6579 35.1426H41.5V26.5713M41.5 26.5713H30.1316M41.5 26.5713L37.2368 19.4286H30.1316M15.9211 23.7142H21.6053" stroke="#CFCFCF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">

                                                                                </path>
                                                                            </svg>
                                                                            <span>
                                                                                <svg width="19" height="14" viewBox="0 0 19 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                    <path d="M16.2744 0.47078L6.69658 10.1165L2.72738 6.11917C2.42795 5.81773 2.02188 5.64842 1.59851 5.6485C1.17513 5.64857 0.769121 5.81802 0.469801 6.11957C0.170482 6.42112 0.00236659 6.83007 0.00244143 7.25645C0.00251627 7.68283 0.170775 8.09171 0.470201 8.39315L5.56799 13.5271C5.86735 13.8285 6.2733 13.9978 6.69658 13.9978C7.11986 13.9978 7.52582 13.8285 7.82517 13.5271L18.534 2.74155C18.8247 2.43835 18.9856 2.03226 18.982 1.61075C18.9784 1.18923 18.8105 0.786018 18.5145 0.487952C18.2186 0.189885 17.8182 0.0208135 17.3996 0.0171506C16.9811 0.0134878 16.5779 0.175527 16.2768 0.468369L16.2744 0.47078Z" fill="white">

                                                                                    </path>
                                                                                </svg></span></div><div class="ort-block-title">Đang giao</div></div><div class="ort-block  " id="ort-completed"><div class="ort-block-circle"><svg width="57" height="56" viewBox="0 0 57 56" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="28.5" cy="28" r="26.5" stroke="#CFCFCF" stroke-width="3"></circle><path d="M28.5 22.7024L29.9315 27.4051H34.2262L30.7692 29.8547L32.1855 34.4061L28.5 31.6238L24.8145 34.4061L26.2308 29.8547L22.7738 27.4051H27.0685L28.5 22.7024ZM24.8145 24.3808H18.0223C16.5451 24.3808 15.9359 26.271 17.139 27.1178L22.6824 31.0492L20.5047 38.02C20.063 39.4263 21.7078 40.5604 22.8804 39.6682L28.5 35.4343L34.1196 39.6833C35.2922 40.5755 36.937 39.4414 36.4953 38.0351L34.3176 31.0643L39.861 27.1329C41.0641 26.271 40.4549 24.396 38.9777 24.396H32.1855L29.9468 17.0774C29.5051 15.6409 27.4644 15.6409 27.038 17.0774L24.8145 24.3808Z" fill="#CFCFCF">
                                                                                </path>
                                                                                </svg>
                                                                                    <span>
                                                                                        <svg width="19" height="14" viewBox="0 0 19 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.2744 0.47078L6.69658 10.1165L2.72738 6.11917C2.42795 5.81773 2.02188 5.64842 1.59851 5.6485C1.17513 5.64857 0.769121 5.81802 0.469801 6.11957C0.170482 6.42112 0.00236659 6.83007 0.00244143 7.25645C0.00251627 7.68283 0.170775 8.09171 0.470201 8.39315L5.56799 13.5271C5.86735 13.8285 6.2733 13.9978 6.69658 13.9978C7.11986 13.9978 7.52582 13.8285 7.82517 13.5271L18.534 2.74155C18.8247 2.43835 18.9856 2.03226 18.982 1.61075C18.9784 1.18923 18.8105 0.786018 18.5145 0.487952C18.2186 0.189885 17.8182 0.0208135 17.3996 0.0171506C16.9811 0.0134878 16.5779 0.175527 16.2768 0.468369L16.2744 0.47078Z" fill="white"></path>
                                                                                        </svg>
                                                                                    </span>
                                                                                </div>
                                                                        <div class="ort-block-title">Đánh giá</div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div id="order_info" class="order-info">
                                                <div class="info-box" id="order_customer">
                                                    <div class="info-box--title">
                                                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M0 19.9757V6.02194C0 4.90868 0.766 4 1.7 4H22.3C23.236 4 24 4.91106 24 6.02194V19.9781C24 21.0913 23.234 22 22.3 22H1.7C0.766 22 0 21.0889 0 19.9757Z" fill="#F25700"></path>
                                                            <path d="M8.64446 19H2.35554C2.1593 19 2 18.8279 2 18.616V9.38404C2 9.17207 2.1593 9 2.35554 9H8.64446C8.8407 9 9 9.17207 9 9.38404V18.6185C9 18.8279 8.8407 19 8.64446 19Z" fill="white"></path>
                                                            <path d="M9 18.7331V19H2V18.7331C2 17.6859 3.36421 17.1792 4.87716 17.0729V17.0006C4.24037 16.8128 3.67098 16.3469 3.38977 15.5802C3.10159 15.4806 2.93659 14.5601 3.01328 14.4402C2.9575 14.0534 2.58101 11.0204 5.5 11C8.41202 11.0136 8.04017 14.0399 7.97975 14.4334C8.05412 14.5533 7.89143 15.4738 7.60325 15.5734C7.32902 16.3401 6.75963 16.8128 6.12284 17.0006V17.0662C7.64509 17.186 9 17.747 9 18.7331Z" fill="#111111"></path>
                                                            <path d="M22.3 3H1.7C0.764 3 0 4.10774 0 5.45842V7H24V5.45842C24 4.10774 23.234 3 22.3 3Z" fill="#285293"></path>
                                                            <path d="M17.6565 10.1817H12.4941C12.221 10.1817 12 9.91748 12 9.59087C12 9.26427 12.221 9 12.4941 9H17.6565C17.9296 9 18.1506 9.26427 18.1506 9.59087C18.15 9.74736 18.0978 9.89723 18.0052 10.0079C17.9127 10.1185 17.7874 10.181 17.6565 10.1817ZM19.5059 13.1212H12.4941C12.221 13.1212 12 12.8569 12 12.5303C12 12.2037 12.221 11.9394 12.4941 11.9394H19.5059C19.779 11.9394 20 12.2037 20 12.5303C19.9994 12.6868 19.9471 12.8367 19.8546 12.9473C19.7621 13.058 19.6367 13.1204 19.5059 13.1212ZM16.86 16.0606H12.4941C12.221 16.0606 12 15.7963 12 15.4697C12 15.1431 12.221 14.8788 12.4941 14.8788H16.86C17.1332 14.8788 17.3542 15.1431 17.3542 15.4697C17.3536 15.6262 17.3013 15.7761 17.2088 15.8867C17.1163 15.9974 16.9909 16.0599 16.86 16.0606ZM15.6716 19H12.4941C12.221 19 12 18.7357 12 18.4091C12 18.0825 12.221 17.8183 12.4941 17.8183H15.6716C15.9447 17.8183 16.1658 18.0825 16.1658 18.4091C16.1658 18.7357 15.9447 19 15.6716 19Z" fill="white"></path>
                                                            <path d="M24 11.0063C23.9653 11.0042 23.9307 11 23.894 11C22.295 11 21 12.3425 21 14C21 15.6575 22.295 17 23.894 17C23.9286 17 23.9633 16.9958 24 16.9937V11.0063Z" fill="#285293"></path>
                                                        </svg>
                                                        <h3>Thông tin khách hàng</h3>
                                                    </div>
                                                    <div class="info-box--body">
                                                        <div class="name-receive"><span>Người nhận:</span> <span>linhtran  - 0397764020</span></div>
                                                        <div class="address-receive"><span>Địa chỉ nhận hàng:</span> <span>Thống Nhất</span></div>
                                                        <div class="date-receive"><span>Thời gian nhận hàng:</span> <span> </span></div>
                                                    </div>
                                                </div>
                                                <div class="info-box" id="order_payment">
                                                    <div class="info-box--title">
                                                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M21.5128 13.0065H12.0713C11.5653 12.9623 11.0644 13.1458 10.6769 13.5172C10.2894 13.8887 10.0465 14.4182 10.0008 14.9913L10 14.9993C10.0464 15.5798 10.2942 16.1158 10.6889 16.4893C11.0836 16.8628 11.593 17.0433 12.105 16.9912L12.0979 16.9921H21.5128C21.572 16.9983 21.6318 16.991 21.6886 16.9707C21.7453 16.9504 21.7979 16.9174 21.8433 16.8738C21.8887 16.8301 21.9259 16.7766 21.9528 16.7164C21.9797 16.6562 21.9958 16.5905 22 16.5232V13.4771C21.9846 13.3469 21.9281 13.2275 21.841 13.1409C21.7538 13.0544 21.642 13.0066 21.5261 13.0065H21.512H21.5128ZM12.0713 16.243C11.8494 16.243 11.6325 16.1684 11.448 16.0286C11.2634 15.8888 11.1196 15.6901 11.0347 15.4576C10.9498 15.2252 10.9276 14.9694 10.9709 14.7226C11.0142 14.4758 11.121 14.2491 11.2779 14.0712C11.4348 13.8933 11.6348 13.7721 11.8524 13.7231C12.07 13.674 12.2956 13.6992 12.5006 13.7955C12.7056 13.8917 12.8808 14.0548 13.0041 14.264C13.1274 14.4732 13.1932 14.7192 13.1932 14.9708V14.9744C13.1932 15.6754 12.6919 16.243 12.0744 16.243H12.0713Z" fill="#111111"></path>
                                                            <path d="M5 7V2H17V7H15.8641V4.86453C15.7431 4.89233 15.6169 4.9085 15.4854 4.91302C15.0846 4.91179 14.7006 4.75787 14.4173 4.48489C14.1339 4.21192 13.9743 3.84206 13.9732 3.45612V3.453C13.9774 3.33144 13.9942 3.2106 14.0235 3.09229H7.94957C7.98048 3.21135 7.9974 3.33339 8 3.45612C7.99872 3.84206 7.83888 4.21183 7.55539 4.48466C7.27191 4.7575 6.88782 4.91121 6.48703 4.91224H6.48378C6.35081 4.90756 6.22108 4.89038 6.10919 4.86384V7H5Z" fill="#039800"></path>
                                                            <path d="M11.3105 12.8973H21V9.97327C20.9585 9.53951 20.7467 9.13926 20.4101 8.85878C20.0735 8.5783 19.6391 8.44006 19.2006 8.47385H19.2062H3.81729C3.80419 8.45968 3.78627 8.45081 3.76697 8.44892C3.66027 8.39926 3.56893 8.32223 3.50243 8.22582C3.43592 8.1294 3.39667 8.01712 3.38874 7.90061V7.899C3.40166 7.75439 3.45888 7.61715 3.55273 7.50564C3.64659 7.39414 3.77259 7.31371 3.91388 7.27511L3.91875 7.27431V6C2.85792 6.04985 2 7.54927 2 9.42415V20.4966C2.04187 20.9298 2.25365 21.3295 2.58982 21.6097C2.92599 21.8899 3.35972 22.0283 3.79781 21.9952H3.79213H19.1811C19.6173 22.0271 20.0488 21.8888 20.3835 21.6098C20.7182 21.3309 20.9295 20.9334 20.9724 20.5022L20.9732 20.4958V17.5717H11.3373C9.77321 17.5717 8.51109 16.5217 8.51109 15.2474C8.51109 13.9481 9.7724 12.8981 11.3113 12.8981L11.3105 12.8973Z" fill="#F25700"></path>
                                                            <path d="M19 7H17V6L17.0161 6.00134C17.4686 6.0506 17.8906 6.16898 18.2391 6.34441C18.5876 6.51985 18.8502 6.74606 19 7Z" fill="#F25700"></path>
                                                        </svg>
                                                        <h3>Hình thức thanh toán</h3>
                                                    </div>
                                                    <div class="info-box--body"><div class="unpaid"><span>Chưa thanh toán</span></div></div>
                                                </div>
                                            </div>
                                            <div id="order_details" class="wrap_order">
                                                <div class="info-box">
                                                    <div class="info-box--title">
                                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <rect x="8" y="6" width="7" height="12" fill="white"></rect>
                                                            <path d="M5 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V19C21 19.53 20.79 20.04 20.41 20.41C20.04 20.79 19.53 21 19 21H5C4.47 21 3.96 20.79 3.59 20.41C3.21 20.04 3 19.53 3 19V5C3 3.89 3.89 3 5 3ZM11 9H13V7H11V9ZM14 17V15H13V11H10V13H11V15H10V17H14Z" fill="#F25700"></path>
                                                        </svg>
                                                        <h3>Thông tin sản phẩm</h3>
                                                    </div>
                                                    <div class="info-box--body">
                                                        <div class="table-order"><div class="order-group single"><div id="1709660626" data-vrid="1106614622" data-prid="1047215379" class="line-item"><div class="left"><div class="image">
                                                            <img src="https://product.hstatic.net/200000722513/product/thumbchuot_543cc8711e454bb78dad2bd8ec0720a5_722315ca336f43d1bffe01c68bc7a016.gif" alt="Lót Chuột Rapoo V1000" /></div><div class="info"><div class="name">Lót Chuột Rapoo V1000</div><div class="meta"><span class="variant">Lót Chuột Rapoo V1000 / LC-RAPOO-V1000</span><span class="quantity">Số lượng: 1</span></div></div></div><div class="right"><div class="total money text-right"><div class="total-price">150.000₫</div></div></div></div><div id="1709660629" data-vrid="1106694102" data-prid="1047273280" class="line-item"><div class="left"><div class="image">
                                                                <img src="https://product.hstatic.net/200000722513/product/9017_1_403877065bc54e3a9c5098fdfeb709ce.jpg" alt="Tấm lót chuột Steelseries Qck Mini Mousepad" /></div><div class="info"><div class="name">Tấm lót chuột Steelseries Qck Mini Mousepad</div><div class="meta"><span class="variant">Tấm lót chuột Steelseries Qck Mini Mousepad / 1328</span><span class="quantity">Số lượng: 1</span></div></div></div><div class="right"><div class="total money text-right"><div class="total-price">200.000₫</div></div></div></div></div></div>
                                                    </div>
                                                </div>
                                                <div class="total-order offset-lg-6" id="order_details_total">
                                                    <div class="line subtotal-price">
                                                        <div class="line--l"><span>Giá tạm tính:</span></div>
                                                        <div class="line--r"><span>350.000₫</span></div>
                                                    </div>

                                                    <div class="line shipping-fee">
                                                        <div class="line--l"><span>Phí vận chuyển:</span></div>
                                                        <div class="line--r"><span>Miễn phí</span></div>
                                                    </div>

                                                    <div class="line discounts-fee d-none">
                                                        <div class="line--l"><span>Giảm giá trên đơn hàng:</span></div>
                                                        <div class="line--r"><span></span></div>
                                                    </div>

                                                    <div class="line maintotal-price">
                                                        <div class="line--l"><span>Tổng tiền:</span></div>
                                                        <div class="line--r"><span>350.000₫</span></div>
                                                    </div>
                                                    <div class="line amount-paid">
                                                        <div class="line--l">
                                                            <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <rect width="16" height="16" rx="8" fill="#24B400"></rect>
                                                                <path d="M5 7.86842L7.4 10.5L11 5.5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                                            </svg>
                                                            <span>Số tiền đã thanh toán:</span>
                                                        </div>
                                                        <div class="line--r"><span><b>0₫</b></span></div>
                                                    </div>
                                                </div>
                                                <div class="action-order">
                                                    <a href="/account/orders-history" class="btn-back">  Quay lại danh sách đơn hàng</a>
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

export default ViewOrderDetail
