import '../../styles/tailwind-style.css';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { getDataAPIWithAuth, putDataAPIWithAuth } from '../../utils/fetchData';

function Profile() {
    const [lastname, setLastName] = useState('');
    const [firstname, setFirstName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [gender, setGender] = useState('');
    const [day, setDay] = useState('');
    const [month, setMonth] = useState('');
    const [year, setYear] = useState('');

    const token = useSelector(state => state.auth.token);
    const id = useSelector(state => state.auth.user?.id);

    console.log(token);
    console.log("id", id);
    const fetchUserInfoData = async () => {
        try {
            const res = await getDataAPIWithAuth(`User/GetCustomerDetail/${id}`, token);
            console.log("Res khi goi api detail user", res);

            if (res.data) {
                const { firstName, lastName, gender, phone, email, birthday } = res.data;
                setFirstName(firstName || ''); // Ensure it's not null or undefined
                setLastName(lastName || ''); // Ensure it's not null or undefined
                setGender(gender);
                setPhone(phone);
                setEmail(email);
                const birthdayDate = new Date(birthday);
                setDay(birthdayDate.getDate().toString().padStart(2, '0'));
                setMonth((birthdayDate.getMonth() + 1).toString().padStart(2, '0'));
                setYear(birthdayDate.getFullYear().toString());
            } else {
                console.error("No data received from the API");
            }
        } catch (error) {
            console.error("Error fetching user information:", error);
        }
    }
    const updateUserInfo = async () => {
        try {
            const updatedData = {
                firstname,
                lastname,
                gender,
                phone,
                email,
                birthday: `${year}-${month}-${day}`,
            };

            const res = await putDataAPIWithAuth(`User/UpdateUserInfo/${id}`, updatedData, token);

            if (res.data) {
                console.log("User information updated successfully");
                fetchUserInfoData();
            } else {
                console.error("Failed to update user information");
            }
        } catch (error) {
            console.error("Error updating user information:", error);
        }
    };

    useEffect(() => {
        fetchUserInfoData();
    }, [id, token]);
    return (
        <div>
            <div className='right-main-box tab-content box-border current' id="profile">
                <div class="box-heading py-4 px-6 m-0 box-border block">
                    <div className="line-title m-0 p-0 box-border block">
                        <h2 className='font-semibold mb-0 text-2xl'>Thông tin tài khoản</h2>
                    </div>
                </div>
                <div className='box-info-account py-4 px-6 box-border block'>
                    <div class="form-update max-w-xl m-0 p-0 block box-border font-medium" id="customer_update_form">
                        <div className="form__row flex items-center mb-4 text-base text-left box-border">
                            <div className="form__line-wrapper flex items-center box-border ml-20">
                                <label className='grow-0 shrink-0 w-1/4 text-right mb-0 inline-block box-border mr-8'>Họ</label>
                                <div className="form__input-wrapper grow-0 shrink-0 w-2/4 mb-0 flex items-center relative m-0 p-0 box-border">
                                    <input
                                        required
                                        type="text"
                                        id="customer-lastname"
                                        className="form-control outline-none border rounded border-gray-300 px-4 py-2 w-full"
                                        name="lastname"
                                        size="40"
                                        value={lastname}
                                        onChange={(e) => setLastName(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="form__line-wrapper flex items-center box-border ml-4">
                                <label className='grow-0 shrink-0 w-1/4 text-right mb-0 inline-block box-border mr-8'>Tên</label>
                                <div className="form__input-wrapper grow-0 shrink-0 w-3/4 mb-0 flex items-center relative m-0 p-0 box-border">
                                    <input
                                        required
                                        type="text"
                                        id="customer-firstname"
                                        className="form-control outline-none border rounded border-gray-300 px-4 py-2 w-full"
                                        name="lastname"
                                        size="40"
                                        value={firstname}
                                        onChange={(e) => setFirstName(e.target.value)}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="form__line-wrapper flex items-center mb-4 box-border">
                            <label className="grow-0 shrink-0 w-1/4 text-right mb-0 inline-block box-border">
                                Giới tính
                            </label>
                            <div className="form__radio-wrapper grow-0 shrink-0 w-3/4 mb-0 pl-8 flex items-center box-border">
                                <div className="box-radio items-center flex">
                                    <input
                                        id="radio2"
                                        type="radio"
                                        value="male"
                                        name="gender"
                                        checked={gender === 1}
                                        onChange={() => setGender(1)}
                                    />
                                    <label className="pl-1" for="radio2">
                                        Nam
                                    </label>
                                </div>
                                <div className="box-radio items-center flex ml-4">
                                    <input
                                        id="radio1"
                                        type="radio"
                                        value="female"
                                        name="gender"
                                        checked={gender === 0}
                                        onChange={() => setGender(0)}
                                    />
                                    <label className="pl-1" for="radio1">
                                        Nữ
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="form__line-wrapper flex items-center mb-4 text-base text-left box-border">
                            <label className="grow-0 shrink-0 w-1/4 text-right mb-0 inline-block box-border mr-8">Số điện thoại</label>
                            <div className="form__input-wrapper grow-0 shrink-0 w-3/4 mb-0 flex items-center relative m-0 p-0 box-border">
                                <input
                                    required
                                    type="text"
                                    id="customer-phone"
                                    className="form-control outline-none border rounded border-gray-300 px-4 py-2 w-full"
                                    name="phone"
                                    size="40"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="form__line-wrapper flex items-center mb-4 text-base text-left box-border">
                            <label className="grow-0 shrink-0 w-1/4 text-right mb-0 inline-block box-border mr-8">
                                Email
                            </label>
                            <div className="form__input-wrapper grow-0 shrink-0 w-3/4 mb-0 flex items-center relative m-0 p-0 box-border">
                                <input
                                    required
                                    type="email"
                                    id="email"
                                    className="form-control outline-none border rounded border-gray-300 px-4 py-2 w-full"
                                    name="email"
                                    size="40"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="form__line-wrapper flex items-center mb-4 box-border">
                            <label className='grow-0 shrink-0 w-1/4 text-right mb-0 inline-block box-border'>Ngày sinh</label>
                            <div className="form__select-wrapper d-flex control pl-8 items-center flex box-border">
                                <div className="select border relative box-border block text-left rounded">
                                    <select
                                        id="customer-day"
                                        className="px-2 py-2 rounded"
                                        name="day"
                                        value={day}
                                        onChange={(e) => setDay(e.target.value)}
                                    >
                                        <option value="">Ngày</option>
                                        {Array.from({ length: 31 }, (_, i) => i + 1).map((day) => (
                                            <option key={day} value={day.toString().padStart(2, '0')}>{day}</option>
                                        ))}
                                    </select>
                                </div>
                                <div className="select border ml-4 relative box-border block rounded">
                                    <select
                                        id="customer-month"
                                        className="px-2 py-2 rounded"
                                        name="month"
                                        value={month}
                                        onChange={(e) => setMonth(e.target.value)}
                                    >
                                        <option value="">Tháng</option>
                                        {Array.from({ length: 12 }, (_, i) => i + 1).map((month) => (
                                            <option key={month} value={month.toString().padStart(2, '0')}>{month}</option>
                                        ))}
                                    </select>
                                </div>
                                <div className="select border ml-4 relative box-border block rounded">
                                    <select
                                        id="customer-year"
                                        className="px-2 py-2 rounded"
                                        name="year"
                                        value={year}
                                        onChange={(e) => setYear(e.target.value)}
                                    >
                                        <option value="">Năm</option>
                                        {Array.from({ length: 100 }, (_, i) => new Date().getFullYear() - i).map((year) => (
                                            <option key={year} value={year}>{year}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div class="form__line-wrapper flex items-center mb-4 box-border">
                            <label className='grow-0 shrink-0 w-1/4 text-right mb-0 inline-block box-border'></label>
                            <div class="form__input-wrapper grow-0 shrink-0 w-3/4 mb-0 pl-8 flex items-center box-border">
                                <input
                                    class="button btn-update relative inline-block py-2.5 px-7 text-sm font-medium text-white rounded bgcolor-app-primary"
                                    id="update"
                                    type="button"
                                    value="LƯU THAY ĐỔI"
                                    onClick={updateUserInfo}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile;