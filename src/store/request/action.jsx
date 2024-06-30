import { ReportRequestServices } from "../../services/reportRequest";

export const REPORT_BY_STATUS = "REPORT_BY_STATUS";
export const GET_REPORT_BY_CUSTOMER = "GET_REPORT_BY_CUSTOMER";
export const GET_REPORT_BY_SALON = "GET_REPORT_BY_SALON";

export const reportByRequest = (list) => {
  return {
    type: REPORT_BY_STATUS,
    payload: list,
  };
};
export const reportByCutomer = (list) => {
  return {
    type: GET_REPORT_BY_CUSTOMER,
    payload: list,
  };
};
export const reportBySalon = (list) => {
  return {
    type: GET_REPORT_BY_SALON,
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
export function GetReportByCustomerId(customerId, page, size) {
  return async (dispatch) => {
    try {
      const response = await ReportRequestServices.GetReportByCustomerId(
        customerId,
        page,
        size
      );
      dispatch(reportByCutomer(response.data)); // Giả sử response.data là danh sách salon
    } catch (error) {
      console.error("Failed to fetch GetReportByCustomerId:", error);
    }
  };
}
export function GetReportBySalonId(salonId, page, size) {
  return async (dispatch) => {
    try {
      const response = await ReportRequestServices.GetReportBySalonId(
        salonId,
        page,
        size
      );
      dispatch(reportBySalon(response.data)); // Giả sử response.data là danh sách salon
    } catch (error) {
      console.error("Failed to fetch GetReportByCustomerId:", error);
    }
  };
}
