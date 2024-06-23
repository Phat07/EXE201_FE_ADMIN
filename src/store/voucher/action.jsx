import { voucherService } from "../../services/voucherService";

export const GET_VOUCHER_REQUEST = "GET_VOUCHER_REQUEST";
export const GET_VOUCHER_SUCCESS = "GET_VOUCHER_SUCCESS";
export const GET_VOUCHER_FAILURE = "GET_VOUCHER_FAILURE";

export const GET_VOUCHER_ID_REQUEST = "GET_VOUCHER_ID_REQUEST";
export const GET_VOUCHER_ID_SUCCESS = "GET_VOUCHER_ID_SUCCESS";
export const GET_VOUCHER_ID_FAILURE = "GET_VOUCHER_ID_FAILURE";

export const GetAllVoucher = (page, size) => async (dispatch) => {
  dispatch({ type: GET_VOUCHER_REQUEST });
  try {
    const response = await voucherService.GetAllVoucher(page, size);
    // console.log("GetVoucherBySalonId response:", response.data);
    dispatch({ type: GET_VOUCHER_SUCCESS, payload: response.data });
  } catch (error) {
    const errorMessage = error.response?.data?.message || error.message;
    dispatch({ type: GET_VOUCHER_FAILURE, payload: errorMessage });
    console.log("error GetAllVoucher", errorMessage);
  }
};
export const getVoucherById = (id) => async (dispatch) => {
  dispatch({ type: GET_VOUCHER_ID_REQUEST });
  try {
    const response = await voucherService.getVoucherById(id);
    // console.log("GetVoucherBySalonId response:", response.data);
    dispatch({ type: GET_VOUCHER_ID_SUCCESS, payload: response.data });
  } catch (error) {
    const errorMessage = error.response?.data?.message || error.message;
    dispatch({ type: GET_VOUCHER_ID_FAILURE, payload: errorMessage });
    console.log("error getVoucherById", errorMessage);
  }
};
