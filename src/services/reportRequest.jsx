import { API } from "./api";

export const ReportRequestServices = {
  getByMoneyUnpaidRequest(token) {
    return API.get("/report_requests/getByRequestMoney", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },
  getByMoneyPaidRequest(token) {
    return API.get("/report_requests/getByRequestMoneyPaid", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },
  getByBanRequest(token) {
    return API.get("/report_requests/getByRequestBan", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },
  getByAlreadyBanRequest(token) {
    return API.get("/report_requests/getByRequestAlreadyBan", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },
  getAllRequestByUserId(id, token) {
    return API.get(`/report_requests/getRequest/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },
};
