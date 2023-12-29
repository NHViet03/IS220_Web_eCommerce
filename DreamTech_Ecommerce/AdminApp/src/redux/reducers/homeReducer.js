import { HOME_TYPES } from "../actions/homeAction";

const initialState = {
  customers: [],
  cardsData: [
    {
      title: "Doanh thu ",
      value: 0,
      percent: 0,
      icon: "fa-solid fa-coins",
      increase: true,
      type: "money",
    },
    {
      title: "Đơn hàng ",
      value: 0,
      percent: 0,
      icon: "fa-solid fa-clipboard-list",
      increase: true,
    },
    {
      title: "Số lượng sản phẩm",
      value: 0,
      percent: -3,
      icon: "fa-solid fa-basket-shopping",
      increase: true,
    },
    {
      title: "Khách hàng mới",
      value: 0,
      percent: 0,
      icon: "fa-solid fa-users",
      increase: true,
    },
  ],
};

const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case HOME_TYPES.GET_TOP_CUSTOMERS:
      return {
        ...state,
        customers: action.payload,
      };

    case HOME_TYPES.GET_STATISTICS:
      return {
        ...state,
        cardsData: state.cardsData.map((card, index) => ({
          ...card,
          ...action.payload[index],
        })),
      };
    default:
      return state;
  }
};

export default homeReducer;
