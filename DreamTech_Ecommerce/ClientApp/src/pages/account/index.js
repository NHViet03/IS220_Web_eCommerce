import  '../../styles/tailwind-style.css'
import Footer from "../../components/Footer";
import Sidebar from "../../components/MyAccount/Sidebar";

function AccountPage() {
    return (
        <div className="bg-white mx-[100px] mb-3 rounded-md" >
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

                    <li className="text-gray-500">Thông tin cá nhân</li>
                </ul>
            </nav>
            {/* breadcrumbs */}
            <section
                className="container flex-grow mx-auto max-w-[1200px] border-b py-5 lg:flex lg:flex-row lg:py-10"
            >
                <Sidebar activePage="profile"/>
                <section
                    className="grid w-full max-w-[1200px] grid-cols-1 gap-3 px-5 pb-10"
                >
                    <div className="py-5">
                        <div className="w-full">
                            <h2>Ảnh đại diện</h2>
                            <div
                                className="mx-auto mb-5 flex flex-row items-center bg-neutral-100 py-5 lg:mx-0 lg:w-1/2"
                            >
                                <img
                                    className="ml-5 mr-5 h-20 w-20 rounded-full"
                                    src={"https://img.meta.com.vn/Data/image/2021/09/22/anh-meo-cute-de-thuong-dang-yeu-41.jpg"}
                                    alt="Account image"
                                />
                                <form>
                                    <div>
                                        <label className="block">
                                            <span className="sr-only">Choose profile photo</span>
                                            <input
                                                id="file_input"
                                                type="file"
                                                className="mx-auto ml-5 flex w-full justify-center border-yellow-400 text-sm outline-none file:mr-4 file:bg-red-600 file:py-2 file:px-4 file:text-sm file:font-semibold"
                                            />
                                        </label>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <form className="flex w-full flex-col gap-3" action="">
                            <div className="flex w-full flex-col">
                                <label className="flex" for="name">Tên đầy đủ</label>
                                <input
                                    className="mt-3 w-full border px-4 py-2 lg:w-1/2"
                                    type="text"
                                    placeholder="Nguyễn Văn A"
                                />

                                <label className="flex mt-5">Giới tính</label>
                                <div className="control mt-3 flex justify-normalh">
                                    <label className="radio">
                                        <input classNameName="mr-1" type="radio" name="gender" />
                                        Nam
                                    </label>
                                    <label className="radio ml-5">
                                        <input classNameName="mr-1" type="radio" name="gender" />
                                        Nữ
                                    </label>
                                </div>

                                <label className="flex mt-5">Số điện thoại</label>
                                <input
                                    className="mt-3 w-full border px-4 py-2 lg:w-1/2"
                                    type="tel"
                                    placeholder="0391222927"
                                />
                            </div>
                            <div className="flex flex-col">

                                <button className="mt-4 w-40 bg-red-600 px-4 py-2 text-white">
                                    Lưu thay đổi
                                </button>
                            </div>
                        </form>
                    </div>
                </section>
            </section>
        </div>
    )
}

export default AccountPage;