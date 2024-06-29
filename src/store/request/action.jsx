import { ReportRequestServices } from "../../services/reportRequest";

export const REPORT_BY_STATUS = "REPORT_BY_STATUS";

export const reportByRequest = (list) => {
  return {
    type: REPORT_BY_STATUS,
    payload: list,
  };
};

export function GetAllReportByRoleName(status, page, size) {
  return async (dispatch) => {
    try {
      const response = await ReportRequestServices.GetAllReportByRoleName(
        status,
        page,
        size
      );
      dispatch(reportByRequest(response.data)); // Giả sử response.data là danh sách salon
    } catch (error) {
      console.error("Failed to fetch reportByRequest:", error);
    }
  };
}
