import '../styles/tailwind-style.css'
import '../styles/account.css'

function Footer() {
    return (
        <div className=''>
            <footer class="main-footer bg-white block m-0 p-0 box-border text-sm font-normal">
                <div class="main-footer--top pt-8 px-0 pb-0 m-0 box-border block text-sm font-normal">
                    <div class="container-fluid max-w-screen-xl mx-auto w-full text-sm font-normal py-0 px-2.5 m-0 box-border block leading-6">
                        <div class="row -mr-2 -ml-2 flex flex-wrap m-0 p-0 box-border text-left">
                            <div class="px-2 grow-0 shrink-0 w-1/6 relative m-0 p-0 box-border block">
                                <div class="pb-3 m-0 p-0 box-border block">
                                    <div class="footer-title m-0 p-0 box-border block">
                                        <h4 className="text-base font-semibold mb-2.5 mt-0 mx-0 relative uppercase leading-6">Về DREAMTECH</h4>
                                        <span class="icon-title hidden"></span>
                                    </div>
                                    <div class="footer-content box-border block font-medium">
                                        <ul>
                                            <li class="item block pb-2 relative list-none hover:text-red-600 hover:underline"><a href="#" title="Giới thiệu">Giới thiệu</a></li>
                                            <li class="item block pb-2 relative list-none hover:text-red-600 hover:underline"><a href="#" title="Tuyển dụng">Tuyển dụng</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="px-2 grow-0 shrink-0 w-1/6 relative m-0 p-0 box-border block">
                                <div class="pb-3 box-border block">
                                    <div class="footer-title">
                                        <h4 className="text-base font-semibold mb-2.5 mt-0 mx-0 relative uppercase leading-6">Chính sách </h4>
                                        <span class="icon-title hidden"></span>
                                    </div>
                                    <div class="footer-content block font-medium">
                                        <ul>
                                            <li class="item block pb-2 relative list-none hover:text-red-600 hover:underline"><a href="#" title="Chính sách bảo hành">Chính sách bảo hành</a></li>
                                            <li class="item block pb-2 relative list-none hover:text-red-600 hover:underline"><a href="#" title="Chính sách thanh toán">Chính sách thanh toán</a></li>
                                            <li class="item block pb-2 relative list-none hover:text-red-600 hover:underline"><a href="#" title="Chính sách giao hàng">Chính sách giao hàng</a></li>
                                            <li class="item block pb-2 relative list-none hover:text-red-600 hover:underline"><a href="#" title="Chính sách bảo mật">Chính sách bảo mật</a></li>

                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="px-2 grow-0 shrink-0 w-1/6 relative m-0 p-0 box-border block">
                                <div class="pb-3 box-border block">
                                    <div class="footer-title">
                                        <h4 className="text-base font-semibold mb-2.5 mt-0 mx-0 relative uppercase leading-6">Thông tin </h4>
                                        <span class="icon-title hidden"></span>
                                    </div>
                                    <div class="footer-content block font-medium">
                                        <ul>
                                            <li class="item item block pb-2 relative list-none hover:text-red-600 hover:underline"><a href="#" title="Hệ thống cửa hàng">Hệ thống cửa hàng</a></li>
                                            <li class="item item block pb-2 relative list-none hover:text-red-600 hover:underline"><a href="#" title="Trung tâm bảo hành">Trung tâm bảo hành</a></li>

                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="px-2 grow-0 shrink-0 w-1/4 relative box-border block">
                                <div class="pb-3 block box-border">
                                    <div class="footer-title">
                                        <h4 className="text-base font-semibold mb-2.5 mt-0 mx-0 relative uppercase leading-6">TỔNG ĐÀI HỖ TRỢ <span>(Miễn phí gọi)</span></h4>
                                    </div>
                                    <div class="footer-content block font-medium">
                                        <div class="box-border block">
                                            <p className="pb-2">
                                                <span className="pr-2 inline-block w-20 leading-6">Gọi mua: </span>
                                                <a className="text-blue-500 font-semibold" href="tel:18006975">
                                                    1800.6975
                                                    <span className="text-slate-600"> (8:00 - 21:00)</span>
                                                </a>
                                            </p>
                                            <p className="pb-2">
                                                <span className="pr-10 w-20">CSKH: </span>
                                                <a className="text-blue-500 font-semibold" href="tel:18006173">1800.6173
                                                    <span className="text-slate-600"> (8:00 - 21:00) </span>
                                                </a>
                                            </p>
                                            <p>
                                                <span className="pr-10 w-20">Email: </span>
                                                <a className="text-blue-500 font-semibold" href="mailto:cskh@dreamtechvn.com">cskh@dreamtechvn.com</a>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="px-2 grow-0 shrink-0 w-1/4 relative box-border block">
                                <div class="footer-col footer-block toggle-footer">
                                    <div class="footer-title">
                                        <h4 className="text-base font-semibold mb-2.5 mt-0 mx-0 relative uppercase leading-6">Đơn vị vận chuyển</h4></div>
                                    <div class="footer-content">
                                        <ul class="list-none flex flex-wrap -mx-0.5 my-0 p-0">
                                            <li className="w-3/12 inline-flex p-0.5 relative"><img data-sizes="auto" class="max-w-full align-middle" src="//theme.hstatic.net/200000722513/1001090675/14/ship_1.png?v=2813" data-src="//theme.hstatic.net/200000722513/1001090675/14/ship_1.png?v=2813" alt="Hình thức vận chuyển 1" sizes="69px" /></li>
                                            <li className="w-3/12 inline-flex p-0.5 relative"><img data-sizes="auto" class="max-w-full align-middle" src="//theme.hstatic.net/200000722513/1001090675/14/ship_2.png?v=2813" data-src="//theme.hstatic.net/200000722513/1001090675/14/ship_2.png?v=2813" alt="Hình thức vận chuyển 2" sizes="69px" /></li>
                                            <li className="w-3/12 inline-flex p-0.5 relative"><img data-sizes="auto" class="max-w-full align-middle" src="//theme.hstatic.net/200000722513/1001090675/14/ship_4.png?v=2813" data-src="//theme.hstatic.net/200000722513/1001090675/14/ship_4.png?v=2813" alt="Hình thức vận chuyển 3" sizes="69px" /></li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="pb-3 mt-2">
                                    <div class="footer-title">
                                        <h4 className="text-base font-semibold mb-2.5 mt-0 mx-0 relative uppercase leading-6">Cách thức thanh toán</h4></div>
                                    <div class="footer-content">
                                        <ul class="list-none flex flex-wrap -mx-0.5 my-0 p-0">
                                            <li className="w-3/12 inline-flex p-0.5 relative"><img data-sizes="auto" class="lazyautosizes lazyloaded" src="//theme.hstatic.net/200000722513/1001090675/14/pay_1.png?v=2813" data-src="//theme.hstatic.net/200000722513/1001090675/14/pay_1.png?v=2813" alt="Phương thức thanh toán 1" sizes="69px" /></li>
                                            <li className="w-3/12 inline-flex p-0.5 relative"><img data-sizes="auto" class="lazyautosizes lazyloaded" src="//theme.hstatic.net/200000722513/1001090675/14/pay_2.png?v=2813" data-src="//theme.hstatic.net/200000722513/1001090675/14/pay_2.png?v=2813" alt="Phương thức thanh toán 2" sizes="69px" /></li>
                                            <li className="w-3/12 inline-flex p-0.5 relative"><img data-sizes="auto" class="lazyautosizes lazyloaded" src="//theme.hstatic.net/200000722513/1001090675/14/pay_3.png?v=2813" data-src="//theme.hstatic.net/200000722513/1001090675/14/pay_3.png?v=2813" alt="Phương thức thanh toán 3" sizes="69px" /></li>
                                            <li className="w-3/12 inline-flex p-0.5 relative"><img data-sizes="auto" class="lazyautosizes lazyloaded" src="//theme.hstatic.net/200000722513/1001090675/14/pay_4.png?v=2813" data-src="//theme.hstatic.net/200000722513/1001090675/14/pay_4.png?v=2813" alt="Phương thức thanh toán 4" sizes="69px" /></li>
                                            <li className="w-3/12 inline-flex p-0.5 relative"><img data-sizes="auto" class="lazyautosizes lazyloaded" src="//theme.hstatic.net/200000722513/1001090675/14/pay_5.png?v=2813" data-src="//theme.hstatic.net/200000722513/1001090675/14/pay_5.png?v=2813" alt="Phương thức thanh toán 5" sizes="69px" /></li>
                                            <li className="w-3/12 inline-flex p-0.5 relative"><img data-sizes="auto" class="lazyautosizes lazyloaded" src="//theme.hstatic.net/200000722513/1001090675/14/pay_6.png?v=2813" data-src="//theme.hstatic.net/200000722513/1001090675/14/pay_6.png?v=2813" alt="Phương thức thanh toán 6" sizes="69px" /></li>
                                            <li className="w-3/12 inline-flex p-0.5 relative"><img data-sizes="auto" class="lazyautosizes lazyloaded" src="//theme.hstatic.net/200000722513/1001090675/14/pay_7.png?v=2813" data-src="//theme.hstatic.net/200000722513/1001090675/14/pay_7.png?v=2813" alt="Phương thức thanh toán 7" sizes="69px" /></li>
                                            <li className="w-3/12 inline-flex p-0.5 relative"><img data-sizes="auto" class="lazyautosizes lazyloaded" src="//theme.hstatic.net/200000722513/1001090675/14/pay_8.png?v=2813" data-src="//theme.hstatic.net/200000722513/1001090675/14/pay_8.png?v=2813" alt="Phương thức thanh toán 8" sizes="69px" /></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="main-footer--copyright pt-4">
                    <div class="container-fluid max-w-screen-xl mx-auto px-2.5 pb-2.5 pt-0 w-full block">
                        <div class="line pt-4 border-t-2 border-gray-300 border-solid">
                            <div class="items-center flex-nowrap flex">
                                <h4 class="text-sm font-semibold mx-0 my-0 uppercase whitespace-nowrap relative text-slate-900 px-0 py-0 block mt-6 mb-6 mx-0 text-left box-border">Kết nối với chúng tôi</h4>
                                <div class="footer-content text-sm mx-4 w-full justify-between items-center flex mx-0 my-0 px-0 py-0 box-border">
                                    <div class="social-list items-center flex mx-0 my-0 px-0 py-0 box-border text-sm font-normal leading-6">
                                        <a className="inline-flex mr-3 box-border " href="https://www.facebook.com" target="_blank" rel="nofollow">
                                            <img data-sizes="auto" class="relative h-8 w-full align-middle border-none p-0 m-0 box-border" src="https://file.hstatic.net/200000636033/file/facebook_1_0e31d70174824ea184c759534430deec.png" data-src="https://file.hstatic.net/200000636033/file/facebook_1_0e31d70174824ea184c759534430deec.png" alt="Dreamtech" sizes="32px" />
                                        </a>
                                        <a className="inline-flex mr-3 box-border " href="https://www.tiktok.com" target="_blank" rel="nofollow">
                                            <img data-sizes="auto" class="relative h-8 w-full align-middle border-none p-0 m-0 box-border" src="https://file.hstatic.net/200000722513/file/tiktok-logo_fe1e020f470a4d679064cec31bc676e4.png" data-src="https://file.hstatic.net/200000722513/file/tiktok-logo_fe1e020f470a4d679064cec31bc676e4.png" alt="Dreamtech" sizes="32px" />
                                        </a>
                                        <a className="inline-flex mr-3 box-border " href="https://www.youtube.com/" target="_blank" rel="nofollow">
                                            <img data-sizes="auto" class="relative h-8 w-full align-middle border-none p-0 m-0 box-border" src="https://file.hstatic.net/200000636033/file/youtube_1_d8de1f41ca614424aca55aa0c2791684.png" data-src="https://file.hstatic.net/200000636033/file/youtube_1_d8de1f41ca614424aca55aa0c2791684.png" alt="Dreamtech" sizes="32px" />
                                        </a>
                                        <a className="inline-flex mr-3 box-border" href="https://www.facebook.com/groups/VietnamGamingConner" target="_blank" rel="nofollow">
                                            <img data-sizes="auto" class="relative h-8 w-full align-middle border-none p-0 m-0 box-border" src="https://file.hstatic.net/200000636033/file/group_1_54d23abd89b74ead806840aa9458661d.png" data-src="https://file.hstatic.net/200000636033/file/group_1_54d23abd89b74ead806840aa9458661d.png" alt="Dreamtech" sizes="32px" />
                                        </a>
                                    </div>
                                    <div class="logo-footer p-0 m-0 box-border block text-sm font-normal text-left">
                                        <a className="no-underline outline-none m-0 p-0 box-border cursor-pointer text-sm  font-normal " rel="nofollow" target="_blank" href="http://online.gov.vn/Home/WebDetails/74686">
                                            <img src="//theme.hstatic.net/200000722513/1001090675/14/logo-bct.png?v=2813" data-src="//theme.hstatic.net/200000722513/1001090675/14/logo-bct.png?v=2813" class="h-12 w-full box-border cursor-pointer text-sm font-normal" alt="Bộ Công Thương" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <p class="d-none">Copyright © 2023 <a href="https://gearvn.com"><strong>Công ty TNHH Thương Mại Gearvn</strong></a>. <a href="https://www.haravan.com/?hchan=gearvn" rel="nofollow">Powered by Haravan Enterprise</a></p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer;
