import React from "react";
import Sidebar from "../../components/MyAccount/Sidebar";
import "../../styles/account.css";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import moment from "moment";
import { getDataAPIWithAuth } from "../../utils/fetchData";

function ViewOrderDetail() {
  const token = useSelector((state) => state.auth.token);
  const [orderDetails, setOrderDetails] = useState({});
  const { orderId } = useParams();
  useEffect(() => {
    const fetchOrderDetails = async () => {
      try {
        const res = await getDataAPIWithAuth(
          `Order/GetOrderById/${orderId}`,
          token
        );
        console.log("Order details:", res.data);
        setOrderDetails(res.data);
      } catch (error) {
        console.error("Error fetching order details:", error);
      }
    };
    fetchOrderDetails();
  }, [orderId, token]);
  const formatPrice = (price) => {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(price);
  };
  const getOrderStatusLabel = (status) => {
    switch (status) {
      case 0:
        return "Đang vận chuyển";
      case 1:
        return "Đã hủy";
      case 2:
        return "Đã nhận hàng";
      default:
        return "Mới";
    }
  };
  return (
    <div>
      <div className="wrapbox-content-account">
        <div className="container-fluid max-w-screen-xl mx-auto px-2.5 pt-4 pb-2.5 pt-0 w-full block">
          <div className="row -mr-2 -ml-2 flex flex-wrap border-box text-left">
            <Sidebar activePage="orders-history" />
            <div className="order-2 mb-6 px-2 grow-0 shrink-0 w-3/4 relative p-0 box-border block text-left colright">
              <div className="right-main tab-content-container h-full m-0 p-0 text-left bg-white rounded box-border block">
                <div
                  class="right-main-box tab-content customers-orders-history"
                  id="orders-history"
                >
                  <div class="box-heading">
                    <div class="line-title">
                      <h2>
                        Chi tiết đơn hàng #{orderDetails.id} -{" "}
                        <span class="order-status">
                          {getOrderStatusLabel(orderDetails.orderStatus)}
                        </span>
                      </h2>
                      <div class="order-create">
                        <span>
                          Đặt lúc:{" "}
                          {moment(orderDetails.orderDate).format("lll")}
                        </span>
                      </div>
                      <a
                        href="javascript:void(0);"
                        class="button btn-tracking d-none"
                        id="btn-odt-customer"
                        data-target="#order_tracking"
                      >
                        Theo dõi đơn hàng
                      </a>
                    </div>
                  </div>
                  <div class="detail-box-info-account">
                    <div id="order_info" class="order-info">
                      <div class="info-box" id="order_customer">
                        <div class="info-box--title">
                          <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M0 19.9757V6.02194C0 4.90868 0.766 4 1.7 4H22.3C23.236 4 24 4.91106 24 6.02194V19.9781C24 21.0913 23.234 22 22.3 22H1.7C0.766 22 0 21.0889 0 19.9757Z"
                              fill="#F25700"
                            ></path>
                            <path
                              d="M8.64446 19H2.35554C2.1593 19 2 18.8279 2 18.616V9.38404C2 9.17207 2.1593 9 2.35554 9H8.64446C8.8407 9 9 9.17207 9 9.38404V18.6185C9 18.8279 8.8407 19 8.64446 19Z"
                              fill="white"
                            ></path>
                            <path
                              d="M9 18.7331V19H2V18.7331C2 17.6859 3.36421 17.1792 4.87716 17.0729V17.0006C4.24037 16.8128 3.67098 16.3469 3.38977 15.5802C3.10159 15.4806 2.93659 14.5601 3.01328 14.4402C2.9575 14.0534 2.58101 11.0204 5.5 11C8.41202 11.0136 8.04017 14.0399 7.97975 14.4334C8.05412 14.5533 7.89143 15.4738 7.60325 15.5734C7.32902 16.3401 6.75963 16.8128 6.12284 17.0006V17.0662C7.64509 17.186 9 17.747 9 18.7331Z"
                              fill="#111111"
                            ></path>
                            <path
                              d="M22.3 3H1.7C0.764 3 0 4.10774 0 5.45842V7H24V5.45842C24 4.10774 23.234 3 22.3 3Z"
                              fill="#285293"
                            ></path>
                            <path
                              d="M17.6565 10.1817H12.4941C12.221 10.1817 12 9.91748 12 9.59087C12 9.26427 12.221 9 12.4941 9H17.6565C17.9296 9 18.1506 9.26427 18.1506 9.59087C18.15 9.74736 18.0978 9.89723 18.0052 10.0079C17.9127 10.1185 17.7874 10.181 17.6565 10.1817ZM19.5059 13.1212H12.4941C12.221 13.1212 12 12.8569 12 12.5303C12 12.2037 12.221 11.9394 12.4941 11.9394H19.5059C19.779 11.9394 20 12.2037 20 12.5303C19.9994 12.6868 19.9471 12.8367 19.8546 12.9473C19.7621 13.058 19.6367 13.1204 19.5059 13.1212ZM16.86 16.0606H12.4941C12.221 16.0606 12 15.7963 12 15.4697C12 15.1431 12.221 14.8788 12.4941 14.8788H16.86C17.1332 14.8788 17.3542 15.1431 17.3542 15.4697C17.3536 15.6262 17.3013 15.7761 17.2088 15.8867C17.1163 15.9974 16.9909 16.0599 16.86 16.0606ZM15.6716 19H12.4941C12.221 19 12 18.7357 12 18.4091C12 18.0825 12.221 17.8183 12.4941 17.8183H15.6716C15.9447 17.8183 16.1658 18.0825 16.1658 18.4091C16.1658 18.7357 15.9447 19 15.6716 19Z"
                              fill="white"
                            ></path>
                            <path
                              d="M24 11.0063C23.9653 11.0042 23.9307 11 23.894 11C22.295 11 21 12.3425 21 14C21 15.6575 22.295 17 23.894 17C23.9286 17 23.9633 16.9958 24 16.9937V11.0063Z"
                              fill="#285293"
                            ></path>
                          </svg>
                          <h3>Thông tin khách hàng</h3>
                        </div>
                        <div class="info-box--body">
                          <div class="name-receive">
                            <span>Người nhận:</span>{" "}
                            <span>
                              {orderDetails.user &&
                                `${orderDetails.user.firstName} ${orderDetails.user.lastName}`}{" "}
                              - 0397764020
                            </span>
                          </div>
                          <div class="address-receive">
                            <span>Địa chỉ nhận hàng:</span>{" "}
                            <span>{orderDetails.shippingAddress}</span>
                          </div>
                          <div class="date-receive">
                            <span>Thời gian nhận hàng:</span> <span> </span>
                          </div>
                        </div>
                      </div>
                      <div class="info-box" id="order_payment">
                        <div class="info-box--title">
                          <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M21.5128 13.0065H12.0713C11.5653 12.9623 11.0644 13.1458 10.6769 13.5172C10.2894 13.8887 10.0465 14.4182 10.0008 14.9913L10 14.9993C10.0464 15.5798 10.2942 16.1158 10.6889 16.4893C11.0836 16.8628 11.593 17.0433 12.105 16.9912L12.0979 16.9921H21.5128C21.572 16.9983 21.6318 16.991 21.6886 16.9707C21.7453 16.9504 21.7979 16.9174 21.8433 16.8738C21.8887 16.8301 21.9259 16.7766 21.9528 16.7164C21.9797 16.6562 21.9958 16.5905 22 16.5232V13.4771C21.9846 13.3469 21.9281 13.2275 21.841 13.1409C21.7538 13.0544 21.642 13.0066 21.5261 13.0065H21.512H21.5128ZM12.0713 16.243C11.8494 16.243 11.6325 16.1684 11.448 16.0286C11.2634 15.8888 11.1196 15.6901 11.0347 15.4576C10.9498 15.2252 10.9276 14.9694 10.9709 14.7226C11.0142 14.4758 11.121 14.2491 11.2779 14.0712C11.4348 13.8933 11.6348 13.7721 11.8524 13.7231C12.07 13.674 12.2956 13.6992 12.5006 13.7955C12.7056 13.8917 12.8808 14.0548 13.0041 14.264C13.1274 14.4732 13.1932 14.7192 13.1932 14.9708V14.9744C13.1932 15.6754 12.6919 16.243 12.0744 16.243H12.0713Z"
                              fill="#111111"
                            ></path>
                            <path
                              d="M5 7V2H17V7H15.8641V4.86453C15.7431 4.89233 15.6169 4.9085 15.4854 4.91302C15.0846 4.91179 14.7006 4.75787 14.4173 4.48489C14.1339 4.21192 13.9743 3.84206 13.9732 3.45612V3.453C13.9774 3.33144 13.9942 3.2106 14.0235 3.09229H7.94957C7.98048 3.21135 7.9974 3.33339 8 3.45612C7.99872 3.84206 7.83888 4.21183 7.55539 4.48466C7.27191 4.7575 6.88782 4.91121 6.48703 4.91224H6.48378C6.35081 4.90756 6.22108 4.89038 6.10919 4.86384V7H5Z"
                              fill="#039800"
                            ></path>
                            <path
                              d="M11.3105 12.8973H21V9.97327C20.9585 9.53951 20.7467 9.13926 20.4101 8.85878C20.0735 8.5783 19.6391 8.44006 19.2006 8.47385H19.2062H3.81729C3.80419 8.45968 3.78627 8.45081 3.76697 8.44892C3.66027 8.39926 3.56893 8.32223 3.50243 8.22582C3.43592 8.1294 3.39667 8.01712 3.38874 7.90061V7.899C3.40166 7.75439 3.45888 7.61715 3.55273 7.50564C3.64659 7.39414 3.77259 7.31371 3.91388 7.27511L3.91875 7.27431V6C2.85792 6.04985 2 7.54927 2 9.42415V20.4966C2.04187 20.9298 2.25365 21.3295 2.58982 21.6097C2.92599 21.8899 3.35972 22.0283 3.79781 21.9952H3.79213H19.1811C19.6173 22.0271 20.0488 21.8888 20.3835 21.6098C20.7182 21.3309 20.9295 20.9334 20.9724 20.5022L20.9732 20.4958V17.5717H11.3373C9.77321 17.5717 8.51109 16.5217 8.51109 15.2474C8.51109 13.9481 9.7724 12.8981 11.3113 12.8981L11.3105 12.8973Z"
                              fill="#F25700"
                            ></path>
                            <path
                              d="M19 7H17V6L17.0161 6.00134C17.4686 6.0506 17.8906 6.16898 18.2391 6.34441C18.5876 6.51985 18.8502 6.74606 19 7Z"
                              fill="#F25700"
                            ></path>
                          </svg>
                          <h3>Tình trạng thanh toán</h3>
                        </div>
                        <div class="info-box--body">
                          <div
                            class={`font-medium ${
                              orderDetails.orderStatus === 2 ? "paid" : "unpaid"
                            }`}
                          >
                            <span>
                              {orderDetails.orderStatus === 2
                                ? "Đã thanh toán"
                                : "Thanh toán khi nhận hàng"}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div id="order_details" class="wrap_order">
                      <div class="info-box">
                        <div class="info-box--title">
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <rect
                              x="8"
                              y="6"
                              width="7"
                              height="12"
                              fill="white"
                            ></rect>
                            <path
                              d="M5 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V19C21 19.53 20.79 20.04 20.41 20.41C20.04 20.79 19.53 21 19 21H5C4.47 21 3.96 20.79 3.59 20.41C3.21 20.04 3 19.53 3 19V5C3 3.89 3.89 3 5 3ZM11 9H13V7H11V9ZM14 17V15H13V11H10V13H11V15H10V17H14Z"
                              fill="#F25700"
                            ></path>
                          </svg>
                          <h3>Thông tin sản phẩm</h3>
                        </div>
                        <div class="info-box--body">
                          <div class="table-order">
                            <div class="order-group single">
                              {orderDetails.orderDetails &&
                                orderDetails.orderDetails.map((orderItem) => (
                                  <div key={orderItem.id}>
                                    <div
                                      id="1709660626"
                                      data-vrid="1106614622"
                                      data-prid="1047215379"
                                      class="line-item"
                                    >
                                      <div class="left">
                                        <div class="image">
                                          <img
                                            src={
                                              orderItem.product.productImages[0]
                                                .imageUrl
                                            }
                                            alt="Product Image"
                                          />
                                        </div>
                                        <div class="info">
                                          <div class="name">
                                            {orderItem.product.name}
                                          </div>
                                          <div class="meta">
                                            <span class="quantity">
                                              Số lượng: {orderItem.qty}
                                            </span>
                                          </div>
                                        </div>
                                      </div>
                                      <div class="right">
                                        <div class="total money text-right">
                                          <div class="total-price">
                                            {formatPrice(
                                              orderItem.product.price
                                            )}
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                ))}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        class="total-order offset-lg-6 py-2"
                        id="order_details_total"
                      >
                        <div class="ac_line subtotal-price">
                          <div class="ac_line--l">
                            <span>Giá tạm tính:</span>
                          </div>
                          <div class="ac_line--r">
                            <span>{formatPrice(orderDetails.totalAmount)}</span>
                          </div>
                        </div>
                        <div class="ac_line shipping-fee">
                          <div class="ac_line--l">
                            <span>Phí vận chuyển:</span>
                          </div>
                          <div class="ac_line--r">
                            <span>Miễn phí</span>
                          </div>
                        </div>

                        <div class="ac_line discounts-fee d-none">
                          <div class="ac_line--l">
                            <span>Giảm giá trên đơn hàng:</span>
                          </div>
                          <div class="ac_line--r">
                            <span></span>
                          </div>
                        </div>

                        <div class="ac_line maintotal-price">
                          <div class="ac_line--l">
                            <span>Tổng tiền:</span>
                          </div>
                          <div class="ac_line--r">
                            <span>{formatPrice(orderDetails.totalAmount)}</span>
                          </div>
                        </div>
                        <div class="ac_line amount-paid">
                          <div class="ac_line--l">
                            {orderDetails.orderStatus === 2 && (
                              <svg
                                viewBox="0 0 16 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <rect
                                  width="16"
                                  height="16"
                                  rx="8"
                                  fill="#24B400"
                                ></rect>
                                <path
                                  d="M5 7.86842L7.4 10.5L11 5.5"
                                  stroke="white"
                                  stroke-width="2"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                ></path>
                              </svg>
                            )}
                            <span>
                              Số tiền{" "}
                              {orderDetails.orderStatus === 2 ? "đã" : "cần"}{" "}
                              thanh toán:
                            </span>
                          </div>
                          <div class="ac_line--r">
                            <span>
                              <b>{formatPrice(orderDetails.totalAmount)}</b>
                            </span>
                          </div>
                        </div>
                      </div>
                      <div class="action-order">
                        <NavLink
                          to="/account/orders-history"
                          class="action-order"
                        >
                          <div class="btn-back">
                            {" "}
                            Quay lại danh sách đơn hàng
                          </div>
                        </NavLink>
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
  );
}

export default ViewOrderDetail;
