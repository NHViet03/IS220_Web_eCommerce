import '../../styles/tailwind-style.css'

function Profile() {
    return (
        <div>
            <div className='right-main-box tab-content box-border current' id="profile">
                <div class="box-heading py-4 px-6 m-0 box-border block">
                    <div className="line-title m-0 p-0 box-border block">
                        <h2 className='font-semibold mb-0 text-2xl'>Thông tin tài khoản</h2>
                    </div>
                </div>
                <div className='box-info-account py-4 px-6 box-border block'>
                    <form class="form-update max-w-xl m-0 p-0 block box-border font-medium" id="customer_update_form">
                        <div class="form__line-wrapper flex items-center mb-4 text-base text-left box-border">
                            <label className='grow-0 shrink-0 w-1/4 text-right mb-0 inline-block box-border mr-8'>Họ Tên</label>
                            <div class="form__input-wrapper grow-0 shrink-0 w-3/4 mb-0 flex items-center relative m-0 p-0 box-border">
                                <input className='' required="" type="text" id="customer-name" class="form-control" name="fullname" size="40" value="linhtran " />
                            </div>
                        </div>
                        <div class="form__line-wrapper flex items-center mb-4 box-border">
                            <label className='grow-0 shrink-0 w-1/4 text-right mb-0 inline-block box-border'>Giới tính</label>
                            <div class="form__radio-wrapper grow-0 shrink-0 w-3/4 mb-0 pl-8 flex items-center box-border">
                                <div class="box-radio items-center flex">
                                    <input id="radio2" type="radio" value="1" name="gender" />
                                    <label className='pl-1' for="radio2">Nam</label>
                                </div>
                                <div class="box-radio items-center flex ml-4">
                                    <input id="radio1" type="radio" value="0" name="gender" />
                                    <label className='pl-1' for="radio1">Nữ</label>
                                </div>
                            </div>
                        </div>
                        <div class="form__line-wrapper flex items-center mb-4 box-border">
                            <label className='grow-0 shrink-0 w-1/4 text-right mb-0 inline-block box-border'>Số điện thoại</label>
                            <div class="form__input-wrapper grow-0 shrink-0 w-3/4 mb-0 pl-8 flex items-center box-border">
                                <span class="hidden-half-text">0397764000</span>
                                <a className='color-app-blue underline pl-4 whitespace-nowrap' href="" data-change="phone">Thay đổi</a>
                            </div>
                        </div>
                        <div class="form__line-wrapper flex items-center mb-4 box-border">
                            <label className='grow-0 shrink-0 w-1/4 text-right mb-0 inline-block box-border'>Email</label>
                            <div class="form__input-wrapper grow-0 shrink-0 w-3/4 mb-0 pl-8 flex items-center box-border">
                                <input required="" type="email" value="linhtn0211@gmail.com" placeholder="Email" name="email" id="email" class="form-control is-filled d-none" size="30" />
                                <span class="hidden-half-text">linhtn0211@gmail.com</span>
                                <a href="" className="color-app-blue underline pl-4 whitespace-nowrap" data-change="email">Thay đổi</a>
                            </div>
                        </div>
                        <div class="form__line-wrapper flex items-center mb-4 box-border">
                            <label className='grow-0 shrink-0 w-1/4 text-right mb-0 inline-block box-border'>Ngày sinh</label>
                            <div class="form__select-wrapper d-flex control pl-8 items-center flex box-border">
                                <div class="select border relative box-border block text-left rounded">
                                    <select id="customer-day" class="px-2 py-2 rounded" name="day">
                                        <option value="">Ngày</option>
                                        <option value="01">01</option>
                                        <option value="02">02</option>
                                        <option value="03">03</option>
                                        <option value="04">04</option>
                                        <option value="05">05</option>
                                    </select>
                                </div>
                                <div class="select border ml-4 relative box-border block rounded">
                                    <select id="customer-month" class="px-2 py-2 rounded" name="month">
                                        <option value="">Tháng</option>
                                        <option value="01">01</option>
                                        <option value="02">02</option>
                                        <option value="03">03</option>
                                        <option value="04">04</option>
                                        <option value="05">05</option>
                                        <option value="06">06</option>
                                        <option value="07">07</option>
                                        <option value="08">08</option>
                                        <option value="09">09</option>
                                        <option value="10">10</option>
                                        <option value="11">11</option>
                                        <option value="12">12</option>
                                    </select>
                                </div>
                                <div className="select border ml-4 relative box-border block rounded">
                                    <select id="customer-year" class="px-2 py-2 rounded" name="year">
                                        <option value="">Năm</option>
                                        <option value="1910">2000</option>
                                        <option value="1911">2001</option>
                                        <option value="1912">2002</option>
                                        <option value="1913">2003</option>
                                        <option value="1914">2004</option>
                                        <option value="1915">2005</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div class="form__line-wrapper flex items-center mb-4 box-border">
                            <label className='grow-0 shrink-0 w-1/4 text-right mb-0 inline-block box-border'></label>
                            <div class="form__input-wrapper grow-0 shrink-0 w-3/4 mb-0 pl-8 flex items-center box-border">
                                <input class="button btn-update relative inline-block py-2.5 px-7 text-sm font-medium text-white rounded bgcolor-app-primary" id="update" type="submit" value="LƯU THAY ĐỔI" />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Profile;