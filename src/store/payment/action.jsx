import { toast } from "react-toastify";
import { paymentService } from "src/services/paymentService";
export const ACT_ALL_PAYMENT = "ACT_ALL_PAYMENT";
export const ACT_PAYMENT_BY_SALON_ID = "ACT_PAYMENT_BY_SALON_ID";

export function actGetAllPayments(list) {
  return {
    type: ACT_ALL_PAYMENT,
    payload: list,
  };
}
export function actGetPaymentBySalonId(list) {
  return {
    type: ACT_PAYMENT_BY_SALON_ID,
    payload: list,
  };
}

export function getAllPayments(page, size) {
  return async (dispatch) => {
    try {
      const response = await paymentService.GetAllPayments(page, size);
      dispatch(actGetAllPayments(response.data));
    } catch (error) {
      console.error("Failed to GetPaymentBySalonId:", error);
    }
  };
}
export function GetPaymentBySalonId(ownerId, page, size) {
  return async (dispatch) => {
    try {
      const response = await paymentService.GetPaymentByOwnerId(
        ownerId,
        page,
        size
      );
      dispatch(actGetPaymentBySalonId(response.data));
    } catch (error) {
      console.error("Failed to GetPaymentBySalonId:", error);
    }
  };
}
