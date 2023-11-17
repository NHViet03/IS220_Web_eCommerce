import { BiLogoFacebookCircle, BiLogoLinkedinSquare, BiLogoInstagramAlt } from "react-icons/bi";
import  '../styles/tailwind-style.css'

function Footer() {
    return (
        <div className='bg-red-700'>
            <footer
                className=" mx-auto w-full max-w-[1200px] justify-between pb-10 flex flex-col lg:flex-row"
            >
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    
                    <div className="mx-5 mt-10">
                        <p className="font-medium text-white">VỀ DREAMTECH</p>
                        <ul className="text-sm leading-8">
                            <li><a className='text-white' href="#">Giới thiệu</a></li>
                            <li><a className='text-white' href="#">Tuyển dụng</a></li>
                        </ul>
                    </div>

                    <div className="mx-5 mt-10">
                        <p className="font-medium text-white">CHÍNH SÁCH</p>
                        <ul className="text-sm leading-8 text-white">
                            <li><a className='text-white' href="#">Chính sách bảo hành</a></li>
                            <li><a className='text-white' href="#">Chính sách thanh toán</a></li>
                            <li><a className='text-white' href="#">Chính sách giao hàng</a></li>
                            <li><a className='text-white' href="#">Chính sách bảo mật</a></li>
                        </ul>
                    </div>

                    <div className="mx-5 mt-10">
                        <p className="font-medium text-white">THÔNG TIN</p>
                        <ul className="text-sm leading-8 text-white">
                            <li><a className='text-white' href="#">Hệ thống cửa hàng</a></li>
                            <li><a className='text-white' href="#">Trung tâm bảo hành</a></li>
                        </ul>
                    </div>

                    <div className="mx-5 mt-10">
                        <p className="font-medium text-white">THEO DÕI CHÚNG TÔI TRÊN</p>
                        <ul className="text-sm leading-8 text-white">
                            <li className='flex flex-row place-items-center'>
                                <BiLogoFacebookCircle size={18} className='mr-1.5' />
                                <a className='text-white' href="#">Facebook</a>
                            </li>

                            <li className='flex flex-row place-items-center'>
                                <BiLogoLinkedinSquare size={18} className='mr-1.5' />
                                <a className='text-white' href="#">Linkedin</a>
                            </li>

                            <li className='flex flex-row place-items-center'>
                                <BiLogoInstagramAlt size={18} className='mr-1.5' />
                                <a className='text-white' href="#">Instagram</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer;
