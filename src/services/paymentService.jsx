import { API } from "./api";

export const paymentService = {
  GetAllPayments(page, size) {
    return API.get("payment/GetPayments", {
      params: {
        page,
        size,
      },
    });
  },
  GetPaymentByOwnerId(ownerId, page, size) {
    return API.get(`payment/GetPaymentByOwnerId/${ownerId}`, {
      params: {
        page,
        size,
      },
    });
  },
};
