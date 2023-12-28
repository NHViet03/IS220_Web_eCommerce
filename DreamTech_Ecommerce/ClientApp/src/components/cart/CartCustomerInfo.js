import React, { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';

function CartCustomerInfo({
	inputEmail, inputName, inputPhone, inputNote, setInputEmail, setInputName, setInputPhone, setInputNote, setInputAddress,
}) {
	const [province, setProvince] = useState('');
	const [district, setDistrict] = useState('');
	const [ward, setWard] = useState('');
	const [street, setStreet] = useState('');
	const [districtList, setDistrictList] = useState([]);
	const [wardList, setWardList] = useState([]);
	const [provinces, setProvinces] = useState([]);

	const getProvinces = async () => {
		const res = await axios.get('https://provinces.open-api.vn/api/p/');
		setProvinces(res.data);
	}
	const getDistrict = async (provinceCode) => {
		try {
			const res = await axios.get(`https://provinces.open-api.vn/api/p/${provinceCode}?depth=2`);
			if (res) {
				setDistrictList(res.data.districts);
				setDistrict('');
				setWard('');
				setWardList([]);
			}
		} catch (err) {
			console.log(err);
		}
	}
	const getWards = async (districtCode) => {
		try {
			const res = await axios.get(`https://provinces.open-api.vn/api/d/${districtCode}?depth=2`);
			console.log(res)
			if (res) {
				setWardList(res.data.wards);
				setWard('');
			}
		} catch (err) {
			console.log(err);
		}
	}
	const handleChangeProvince = (event) => {
		getDistrict(event.target.options[event.target.selectedIndex].value);

		setProvince(event.target.options[event.target.selectedIndex].text);
		setInputAddress(`${street}, ${ward}, ${district}, ${province}.`);
	}

	const handlechangeDistrict = (event) => {
		getWards(event.target.options[event.target.selectedIndex].value);

		setDistrict(event.target.options[event.target.selectedIndex].text);
		setInputAddress(`${street}, ${ward}, ${district}, ${province}.`);
	}

	const handlechangeWard = (event) => {
		setWard(event.target.options[event.target.selectedIndex].text);

		setInputAddress(`${street}, ${ward}, ${district}, ${province}.`);
	}


	useEffect(() => {
		getProvinces();		
	}, [])

    return (
		<div className="form-edit mx-2">
			{/* Thông tin khách hàng*/}
			<div className="cart-block cart-form">
				<div className="cart-title">
					<h2 className="font-semibold">Thông tin khách mua hàng</h2>
				</div>
				<div className="cart-detail text-sm">
					<div className="checkbox-cart checkbox-gender flex mt-2 mb-3">
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
									placeholder=""
									minlength="10"
									maxlength="12"
									value={inputPhone}
									className={`form-data form-control form__field form__field--text ${inputPhone.trim() !== '' ? 'is-filled' : ''}`}
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
									value={inputEmail}
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
					<div className="checkbox-cart checkbox-shipmethod mb-3 mt-2 text-sm">
						<div className="checkbox-item flex item-center">
							<input type="radio" id="cod-method" name="method" value="Giao hàng tận nơi" checked/>
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
								<select
									className="form-data form-control form-select field-input select-province"
									required
									onChange={event => {
										handleChangeProvince(event)
									}}>
									<option value="" >Chọn Tỉnh, Thành phố</option>
									{provinces && provinces.map(p => <option value={p.code}>{ p.name }</option>) }
								</select>
							</div>
						</div>
						<div className="col-xl-6 col-lg-6 col-12 p-2">
							<div className="select-group">
								<select
									className="form-data form-control form-select field-input select-district"
									required
									onChange={event => handlechangeDistrict(event)}>
									<option value="" selected={district==""}>Chọn Quận, Huyện</option>
									{districtList && districtList.map(d => <option value={d.code}>{d.name}</option>)}
								</select>
							</div>
						</div>
						<div className="col-xl-6 col-lg-6 col-12 p-2">
							<div className="select-group no-mrg">
								<select
									className="form-data form-control form-select field-input select-ward"
									required
									onChange={event => handlechangeWard(event)}>
									<option value="" selected={ward == ""}>Chọn Phường, Xã</option>
									{wardList && wardList.map(w => <option value={w.code}>{w.name}</option>)}
								</select>
							</div>
						</div>
						<div className="col-xl-6 col-lg-6 col-12 p-2">
							<div className="no-mrg form__input-wrapper form__input-wrapper--labelled">
								<input
									required
									name="editcustomer[address]"
									id="editcustomer-address"
									type="text"
									className={`form-data form-control form__field form__field--text ${street.trim() !== '' ? 'is-filled' : ''}`} 
									placeholder=""
									value={street}
									onChange={event => setStreet(event.target.value)}
								/>
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
								<label className="ms-2" for="checkbox-bill" class="title">Xuất hoá đơn cho đơn hàng</label>
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