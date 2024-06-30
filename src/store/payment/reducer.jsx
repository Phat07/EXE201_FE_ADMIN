import { ACT_ALL_PAYMENT, ACT_PAYMENT_BY_SALON_ID } from "./action";

const initialState = {
  allPayments: [],
  paymentBySalonId: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ACT_ALL_PAYMENT:
      return {
        ...state,
        allPayments: action.payload,
      };
    case ACT_PAYMENT_BY_SALON_ID:
      return {
        ...state,
        paymentBySalonId: action.payload,
      };
    default:
      return state;
  }
};
export default reducer;
