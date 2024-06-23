import { toast } from "react-toastify";
import { voucherService } from "../../services/voucherService";

export const GET_VOUCHER_REQUEST = "GET_VOUCHER_REQUEST";
export const GET_VOUCHER_SUCCESS = "GET_VOUCHER_SUCCESS";
export const GET_VOUCHER_FAILURE = "GET_VOUCHER_FAILURE";

export const GET_VOUCHER_ID_REQUEST = "GET_VOUCHER_ID_REQUEST";
export const GET_VOUCHER_ID_SUCCESS = "GET_VOUCHER_ID_SUCCESS";
export const GET_VOUCHER_ID_FAILURE = "GET_VOUCHER_ID_FAILURE";

export const CREATE_VOUCHER_REQUEST = "CREATE_VOUCHER_REQUEST";
export const CREATE_VOUCHER_SUCCESS = "CREATE_VOUCHER_SUCCESS";
export const CREATE_VOUCHER_FAILURE = "CREATE_VOUCHER_FAILURE";

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
export const createVoucher = (data, navigate) => async (dispatch) => {
  dispatch({ type: CREATE_VOUCHER_REQUEST });
  try {
    const response = await voucherService.createVoucher(data);
    // console.log("GetVoucherBySalonId response:", response.data);
    dispatch({ type: CREATE_VOUCHER_SUCCESS, payload: response.data });
    dispatch(GetAllVoucher(1, 10));
    navigate("/Voucher");
    toast.success("Create Voucher thành công");
  } catch (error) {
    const errorMessage = error.response?.data?.message || error.message;
    dispatch({ type: CREATE_VOUCHER_FAILURE, payload: errorMessage });
    console.log("error createVoucher", errorMessage);
    toast.error("Create Voucher thất bại");
  }
};
