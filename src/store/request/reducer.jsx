import {
  ALL_REQUEST,
  MONEY_PAID_REQUEST,
  MONEY_UNPAID_REQUEST,
  ALREADY_BAN_REQUEST,
  BAN_REQUEST,
  ALL_REQUEST_ID,
} from "./action";

const initialState = {
  request: [],
  requestPaid: [],
  requestUnpaid: [],
  banRequest: [],
  alreadyBanRequest: [],
  allRequestId: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ALL_REQUEST:
      // localStorage.setItem("ACCESS_TOKEN", action.payload.token);
      return {
        ...state,
        request: action.payload,
      };
    case ALL_REQUEST_ID:
      return {
        ...state,
        allRequestId: action.payload,
      };
    case MONEY_PAID_REQUEST:
      // localStorage.setItem("ACCESS_TOKEN", action.payload.token);
      return {
        ...state,
        requestPaid: action.payload,
      };
    case MONEY_UNPAID_REQUEST:
      // localStorage.setItem("ACCESS_TOKEN", action.payload.token);
      return {
        ...state,
        requestUnpaid: action.payload,
      };
    case BAN_REQUEST:
      // localStorage.setItem("ACCESS_TOKEN", action.payload.token);
      return {
        ...state,
        banRequest: action.payload,
      };
    case ALREADY_BAN_REQUEST:
      // localStorage.setItem("ACCESS_TOKEN", action.payload.token);
      return {
        ...state,
        alreadyBanRequest: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
