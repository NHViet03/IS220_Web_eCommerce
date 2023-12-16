import React, { useState } from 'react';

function CartCustomerInfo() {
	const [inputName, setInputName] = useState('');
	const [inputPhone, setInputPhone] = useState('');
	const [inputEmail, setInputEmail] = useState('');
	const [inputNote, setInputNote] = useState('');

    return (
		<div className="form-edit mx-2">
			{/* Thông tin khách hàng*/}
			<div className="cart-block cart-form">
				<div className="cart-title">
					<h2 className="font-semibold">Thông tin khách mua hàng</h2>
				</div>
				<div className="cart-detail text-sm">
					<div className="checkbox-cart checkbox-gender flex my-2">
						<div className="checkbox-item flex items-center me-3">
							<input type="radio" id="men" name="gender" value="Anh" checked/>
							<label for="men" className="ms-1">Anh</label>
						</div>
						<div className="checkbox-item flex items-center">
							<input type="radio" id="women" name="gender" value="Chị"/>
							<label for="women" className="ms-1">Chị</label>
						</div>
					</div>
					<div className="form-group inputs-customer row">
						<div className="col-xl-6 col-lg-6 col-12">
							<div className="no-mrg form__input-wrapper form__input-wrapper--labelled">
								<input
									required="true"
									name="editcustomer[name]"
									value={inputName}
									id="editcustomer-name"
									type="text"
									className={`form-data form-control form__field form__field--text ${inputName.trim() !== '' ? 'is-filled' : ''}`}
									placeholder=""
									onChange={event => setInputName(event.target.value)}
								/>
								<label for="editcustomer-name" className="form__floating-label">Nhập họ tên</label>
							</div>
						</div>
						<div className="col-xl-6 col-lg-6 col-12">
							<div className="no-mrg form__input-wrapper form__input-wrapper--labelled">
								<input
									required="true"
									name="editcustomer[phone]"
									id="editcustomer-phone"
									type="text"
									className="form-data form-control form__field form__field--text"
									placeholder=""
									minlength="10"
									maxlength="12"
									className={`form-data form-control form__field form__field--text ${inputPhone.trim() !== '' ? 'is-filled' : ''}`}
									placeholder=""
									onChange={event => setInputPhone(event.target.value)}
								/>
								<label for="editcustomer-phone" className="form__floating-label">Nhập số điện thoại</label>
							</div>
						</div>
						<div className="col-xl-6 col-lg-6 col-12 d-none">
							<div className="no-mrg form__input-wrapper form__input-wrapper--labelled">
								<input
									required="false"
									name="editcustomer[email]"
									id="editcustomer-email"
									type="email"
									className="form-data form-control form__field form__field--text is-filled"
									placeholder=""
									className={`form-data form-control form__field form__field--text ${inputEmail.trim() !== '' ? 'is-filled' : ''}`}
									placeholder=""
									onChange={event => setInputEmail(event.target.value)}
								/>
								<label for="editcustomer-email" className="form__floating-label">Nhập email</label>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* Chọn cách nhận hàng */}
			<div className="cart-block cart-form">
				<div className="cart-title">
					<h2 className="font-semibold">Chọn cách nhận hàng</h2>
				</div>
				<div className="cart-detail">
					<div className="checkbox-cart checkbox-shipmethod my-2 text-sm">
						<div className="checkbox-item flex item-center">
							<input type="radio" id="cod-method" name="method" value="Giao hàng tận nơi" checked=""/>
							<label className="ms-1" for="cod-method">Giao hàng tận nơi</label>
							<br/>
						</div>
						<div className="checkbox-item flex item-center d-none">
							<input type="radio" id="pickup-method" name="method" value="Nhận hàng tại Showroom" className="empty"/>
							<label className="ms-1" for="pickup-method">Nhận hàng tại Showroom</label>
							<br />
						</div>
					</div>
					<div className="form-group inputs-ship d-flex flex-wrap has-bg text-sm" id="cod-method-form">
						<div className="col-xl-6 col-lg-6 col-12 p-2">
							<div className="select-group">
								<select className="form-data form-control form-select field-input select-province" required="">
									<option value="">Chọn Tỉnh, Thành phố</option>
									<option value="HC" data-id="50">Hồ Chí Minh</option>
									<option value="HI" data-id="1">Hà Nội</option>
									<option value="DA" data-id="32">Đà Nẵng</option>
									<option value="AG" data-id="57">An Giang</option>
									<option value="BV" data-id="49">Bà Rịa - Vũng Tàu</option>
									<option value="BI" data-id="47">Bình Dương</option>
									<option value="BP" data-id="45">Bình Phước</option>
									<option value="BU" data-id="39">Bình Thuận</option>
									<option value="BD" data-id="35">Bình Định</option><option value="BL" data-id="62">Bạc Liêu</option><option value="BG" data-id="15">Bắc Giang</option><option value="BK" data-id="4">Bắc Kạn</option><option value="BN" data-id="18">Bắc Ninh</option><option value="BT" data-id="53">Bến Tre</option><option value="CB" data-id="3">Cao Bằng</option><option value="CM" data-id="63">Cà Mau</option><option value="CN" data-id="59">Cần Thơ</option><option value="GL" data-id="41">Gia Lai</option><option value="HG" data-id="2">Hà Giang</option><option value="HM" data-id="23">Hà Nam</option><option value="HT" data-id="28">Hà Tĩnh</option><option value="HO" data-id="11">Hòa Bình</option><option value="HY" data-id="21">Hưng Yên</option><option value="HD" data-id="19">Hải Dương</option><option value="HP" data-id="20">Hải Phòng</option><option value="HU" data-id="60">Hậu Giang</option><option value="KH" data-id="37">Khánh Hòa</option><option value="KG" data-id="58">Kiên Giang</option><option value="KT" data-id="40">Kon Tum</option><option value="LI" data-id="8">Lai Châu</option><option value="LA" data-id="51">Long An</option><option value="LO" data-id="6">Lào Cai</option><option value="LD" data-id="44">Lâm Đồng</option><option value="LS" data-id="13">Lạng Sơn</option><option value="ND" data-id="24">Nam Định</option><option value="NA" data-id="27">Nghệ An</option><option value="NB" data-id="25">Ninh Bình</option><option value="NT" data-id="38">Ninh Thuận</option><option value="PT" data-id="16">Phú Thọ</option><option value="PY" data-id="36">Phú Yên</option><option value="QB" data-id="29">Quảng Bình</option><option value="QM" data-id="33">Quảng Nam</option><option value="QG" data-id="34">Quảng Ngãi</option><option value="QN" data-id="14">Quảng Ninh</option><option value="QT" data-id="30">Quảng Trị</option><option value="ST" data-id="61">Sóc Trăng</option><option value="SL" data-id="9">Sơn La</option><option value="TH" data-id="26">Thanh Hóa</option><option value="TB" data-id="22">Thái Bình</option><option value="TY" data-id="12">Thái Nguyên</option><option value="TT" data-id="31">Thừa Thiên Huế</option><option value="TG" data-id="52">Tiền Giang</option><option value="TV" data-id="54">Trà Vinh</option><option value="TQ" data-id="5">Tuyên Quang</option><option value="TN" data-id="46">Tây Ninh</option><option value="VL" data-id="55">Vĩnh Long</option><option value="VT" data-id="17">Vĩnh Phúc</option><option value="YB" data-id="10">Yên Bái</option><option value="DB" data-id="7">Điện Biên</option><option value="DC" data-id="42">Đắk Lắk</option><option value="DO" data-id="43">Đắk Nông</option><option value="DN" data-id="48">Đồng Nai</option><option value="DT" data-id="56">Đồng Tháp</option></select>
							</div>
						</div>
						<div className="col-xl-6 col-lg-6 col-12 p-2">
							<div className="select-group">
								<select className="form-data form-control form-select field-input select-district" required="">
									<option value="">Chọn Quận, Huyện</option>
								</select>
							</div>
						</div>
						<div className="col-xl-6 col-lg-6 col-12 p-2">
							<div className="select-group no-mrg">
								<select className="form-data form-control form-select field-input select-ward" required="">
									<option value="">Chọn Phường, Xã</option>
								</select>
							</div>
						</div>
						<div className="col-xl-6 col-lg-6 col-12 p-2">
							<div className="no-mrg form__input-wrapper form__input-wrapper--labelled">
								<input required="" name="editcustomer[address]" id="editcustomer-address" type="text" className="form-data form-control form__field form__field--text" placeholder=""/>
								<label for="editcustomer-address" className="form__floating-label bg-gradient">Số nhà, tên đường</label>
							</div>
						</div>
					</div>
					<div className="form-group inputs-ship d-none flex-wrap has-bg empty" id="pickup-method-form"><div className="empty_location">Hiện tại không có showroom phù hợp với đơn hàng này.</div></div>
				</div>
			</div>
			{/* Note thêm */}
			<div class="cart-block cart-notes">
				<div class="cart-detail">
					<div class="no-mrg form__input-wrapper form__input-wrapper--labelled">
						<input
							type="text"
							id="note"
							name="note"
							className={`form-data form-control form__field form__field--text ${inputNote.trim() !== '' ? 'is-filled' : ''}`}
							placeholder=""
							onChange={event => setInputNote(event.target.value)}
						/>
						<label for="note" class="form__floating-label">Lưu ý, yêu cầu khác (Không bắt buộc)</label>
					</div>
				</div>
			</div>
			{/* Xuất hóa đơn checkbox */}
			<div class="cart-block cart-invoice" id="form-invoice">
				<div class="cart-detail">
					<div class="confirm-box d-none">
						<div class="r-bill">
							<div class="checkbox-cart">
								<input type="hidden" name="attributes[confirm]" id="re-checkbox-confirm" value=""/>
								<input type="checkbox" id="checkbox-confirm" value="yes" name="confirm-checkbox" class="regular-checkbox"/>
								<label for="checkbox-confirm" class="box"></label>
								<label for="checkbox-confirm" class="title">Gọi người khác nhận hàng (Nếu có)</label>
							</div>
						</div>
					</div>
					<div class="invoice-box">
						<div class="r-bill">
							<div class="checkbox-cart text-sm flex items-center">
								<input type="hidden" name="attributes[order_vat_invoice]" id="re-checkbox-bill" value=""/>
								<input type="checkbox" id="checkbox-bill" value="" name="regular-checkbox" class="regular-checkbox"/>
								<label for="checkbox-bill" class="box"></label>
								<label className="ms-1" for="checkbox-bill" class="title">Xuất hoá đơn cho đơn hàng</label>
							</div>
							<div class="bill-field d-none">
								<div class="form-group inputs-bill has-bg no-mrg d-flex flex-wrap">
									<div class="col-xl-12 col-lg-12 col-12">
										<div class="form__input-wrapper form__input-wrapper--labelled">
											<input required="" name="attributes[bill_order_company]" value="" id="bill_order_company " type="text" class="form-control form__field form__field--text val-f check_change " placeholder=""/>
											<label for="bill_order_company " class="form__floating-label bg-gradient">Tên công ty</label>
										</div>
									</div>
									<div class="col-xl-12 col-lg-12 col-12">
										<div class="form__input-wrapper form__input-wrapper--labelled">
											<input required="" name="attributes[bill_order_address]" value="" id="bill_order_address" type="text" class="form-control form__field form__field--text val-f check_change " placeholder=""/>
											<label for="bill_order_address" class="form__floating-label bg-gradient">Địa chỉ công ty</label>
										</div>
									</div>
									<div class="col-xl-6 col-lg-6 col-12">
										<div class="form__input-wrapper form__input-wrapper--labelled no-mrg">
											<input required="" name="attributes[bill_order_tax_code]" value="" id="bill_order_tax_code" type="number" pattern=".{10,}" onkeydown="return GVN.Helper.FilterInput(event)" onpaste="GVN.Helper.handlePaste(event)" class="form-control form__field form__field--text val-f check_change" placeholder=""/>
											<label for="bill_order_tax_code" class="form__floating-label bg-gradient">Mã số thuế</label>
										</div>
									</div>
									<div class="col-xl-6 col-lg-6 col-12">
										<div class="form__input-wrapper form__input-wrapper--labelled no-mrg">
											<input required="" name="attributes[bill_email]" value="" id="bill_email" type="email" class="form-control form__field form__field--text val-f check_change" placeholder=""/>
											<label for="bill_email" class="form__floating-label bg-gradient">Email</label>
										</div>
									</div>
									<div class="col-xl-12 col-lg-12 col-12 d-none">
										<div class="form-btn text-right"><a href="javascript:void();" class="button confirm-invoice">Lưu thông tin</a></div>
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

export default CartCustomerInfo;