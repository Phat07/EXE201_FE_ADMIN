import {
  REPORT_BY_STATUS,
  GET_REPORT_BY_CUSTOMER,
  GET_REPORT_BY_SALON,
} from "./action";

const initialState = {
  reportByRole: [],
  reportByCustomer: [],
  reportBySalon: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case REPORT_BY_STATUS:
      return {
        ...state,
        reportByRole: action.payload,
      };
    case GET_REPORT_BY_CUSTOMER:
      return {
        ...state,
        reportByCustomer: action.payload,
      };
    case GET_REPORT_BY_SALON:
      return {
        ...state,
        reportBySalon: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
