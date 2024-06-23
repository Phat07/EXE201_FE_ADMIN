import { API } from "./api";

export const voucherService = {
  GetAllVoucher(page, size) {
    return API.get(`vouchers/GetAdminVoucher`, {
      params: {
        page,
        size,
      },
    });
  },
  getVoucherById(id) {
    return API.get(`vouchers/GetVoucherById/${id}`);
  },
};
