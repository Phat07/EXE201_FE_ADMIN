import {
  ACT_SALON_INFORMATION,
  ACT_SALON_INFORMATION_BY_ID,
  GET_SALON_EMPPLOYEE_BY_SALON_ID,
  GET_SALON_SERVICE_BY_SALON_ID,
  SEARCH_SALON_INFORMATION,
  GET_VOUCHER_BY_SALON_ID,
} from "./action";

const initialState = {
  allSalon: [],
  salonDetail: [],
  salonEmployee: [],
  salonService: [],
  searchSalon: [],
  salonVoucher: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ACT_SALON_INFORMATION:
      return {
        ...state,
        allSalon: action.payload,
      };
    case ACT_SALON_INFORMATION_BY_ID:
      return {
        ...state,
        salonDetail: action.payload,
      };
    case GET_SALON_EMPPLOYEE_BY_SALON_ID:
      return {
        ...state,
        salonEmployee: action.payload.items,
      };
    case GET_SALON_SERVICE_BY_SALON_ID:
      return {
        ...state,
        salonService: action.payload,
      };
    case GET_VOUCHER_BY_SALON_ID:
      return {
        ...state,
        salonVoucher: action.payload,
      };
    case SEARCH_SALON_INFORMATION:
      return {
        ...state,
        searchSalon: action.payload.items,
      };
    default:
      return state;
  }
};
export default reducer;
