import {
  GET_VOUCHER_FAILURE,
  GET_VOUCHER_REQUEST,
  GET_VOUCHER_SUCCESS,
  GET_VOUCHER_ID_FAILURE,
  GET_VOUCHER_ID_REQUEST,
  GET_VOUCHER_ID_SUCCESS,
  CREATE_VOUCHER_FAILURE,
  CREATE_VOUCHER_REQUEST,
  CREATE_VOUCHER_SUCCESS,
} from "./action";

const initialState = {
  loading: false,
  allVoucher: [],
  createVoucher: null,
  Detailvoucher: null,
  error: null,
};

const voucherServiceReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_VOUCHER_REQUEST:
    case GET_VOUCHER_ID_REQUEST:
    case CREATE_VOUCHER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_VOUCHER_SUCCESS:
      return {
        ...state,
        loading: false,
        allVoucher: action.payload,
        error: null,
      };
    case GET_VOUCHER_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
        allVoucher: [],
      };
    case GET_VOUCHER_ID_SUCCESS:
      return {
        ...state,
        loading: false,
        Detailvoucher: action.payload,
        error: null,
      };
    case GET_VOUCHER_ID_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
        Detailvoucher: null,
      };
    case CREATE_VOUCHER_SUCCESS:
      return {
        ...state,
        loading: false,
        createVoucher: action.payload,
        error: null,
      };
    case CREATE_VOUCHER_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
        createVoucher: null,
      };
    default:
      return state;
  }
};

export default voucherServiceReducer;
