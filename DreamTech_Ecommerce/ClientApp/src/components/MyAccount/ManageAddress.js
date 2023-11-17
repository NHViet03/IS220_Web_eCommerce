import Footer from "../Footer";
import Sidebar from "./Sidebar";


function ManageAddress() {
    return (
        <div>
            {/* <Navigation /> */}
            {/* breadcrumbs */}
            <nav className="mx-auto w-full mt-4 max-w-[1200px] px-5">
                <ul className="flex items-center">
                    <li className="cursor-pointer">
                        <a href="/">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="h-5 w-5"
                            >
                                <path
                                    d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z"
                                />
                                <path
                                    d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z"
                                />
                            </svg>
                        </a>
                    </li>
                    <li>
                        <span className="mx-2 text-gray-500">&gt;</span>
                    </li>

                    <li className="text-gray-500">Địa chỉ</li>
                </ul>
            </nav>
            {/* breadcrumbs */}
            <div
                className="container flex-grow mx-auto max-w-[1200px] border-b py-5 lg:flex lg:flex-row lg:py-10"
            >
                <Sidebar activePage="address"/>
                <div
                    className="grid w-full max-w-[1200px] grid-cols-1 gap-3 px-5 pb-10"
                >
                    <div className="py-5">
                        <div className="w-full"></div>
                        <form className="flex w-full flex-col gap-3" action="">
                            <div className="flex flex-col">
                                <label className="mt-5">Địa chỉ</label>
                                <div className="mt-7 control flex justify-between w-full py-2 lg:w-1/2">
                                    <div className="select border">
                                        <select>
                                            <option>Tỉnh/TP</option>
                                            <option>Hồ Chí Minh</option>
                                            <option>Hà Nội</option>
                                            <option>Hải Phòng</option>
                                        </select>
                                    </div>
                                    <div className="select border ml-2">
                                        <select>
                                            <option>Quận/Huyện</option>
                                            <option>Thủ Đức</option>
                                            <option>Quận 9</option> 
                                            <option>Bình Thạnh</option>
                                        </select>
                                    </div>
                                    <div className="select border ml-2">
                                        <select>
                                            <option>Phường/Xã</option>
                                            <option>Linh Trung</option>
                                            <option>Linh Xuân</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="control mt-3 font-light">
                                <input className="input w-full border px-4 py-2 lg:w-1/2" type="text" placeholder="Số nhà/tên đường" />
                            </div>
                            <button className="mt-4 w-40 bg-red-600 px-4 py-2 text-white">
                                Lưu thay đổi
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default ManageAddress;