import { API } from "./api";

export const ReportRequestServices = {
  GetAllReportByRoleName(roleName, page, size) {
    return API.get("reports/GetAllReportByRoleName", {
      params: {
        roleName,
        page,
        size,
      },
    });
  },
  GetReportByCustomerId(customerId, page, size) {
    return API.get(`reports/GetReportByCustomerId/${customerId}`, {
      params: {
        page,
        size,
      },
    });
  },
  GetReportBySalonId(salonId, page, size) {
    return API.get(`reports/GetReportBySalonId/${salonId}`, {
      params: {
        page,
        size,
      },
    });
  },
};
