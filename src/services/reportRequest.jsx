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
};
