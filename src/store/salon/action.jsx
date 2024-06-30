import { toast } from "react-toastify";
import { SalonInfomationService } from "src/services/salonService";
export const ACT_SALON_INFORMATION = "ACT_SALON_INFORMATION";
export const ACT_SALON_INFORMATION_BY_OWNER_ID =
  "ACT_SALON_INFORMATION_BY_OWNER_ID";
export const ACT_SALON_INFORMATION_BY_ID = "ACT_SALON_INFORMATION_BY_ID";
export const GET_SALON_EMPPLOYEE_BY_SALON_ID =
  "GET_SALON_EMPPLOYEE_BY_SALON_ID";
export const GET_VOUCHER_BY_SALON_ID = "GET_VOUCHER_BY_SALON_ID";
export const GET_SALON_SERVICE_BY_SALON_ID = "GET_SALON_SERVICE_BY_SALON_ID";
export const SEARCH_SALON_INFORMATION = "SEARCH_SALON_INFORMATION";
export function actSalonInformation(list) {
  return {
    type: ACT_SALON_INFORMATION,
    payload: list,
  };
}
export function actSalonInformationById(detail) {
  return {
    type: ACT_SALON_INFORMATION_BY_ID,
    payload: detail,
  };
}
// export function GetSalonEmployeeBySalonInformationId(list) {
//   return {
//     type: GET_SALON_EMPPLOYEE_BY_SALON_ID,
//     payload: list,
//   };
// }
// export function GetServiceHairBySalonInformationId(list) {
//   return {
//     type: GET_SALON_SERVICE_BY_SALON_ID,
//     payload: list,
//   };
// }
export function fetchSalonInformation(status, page, size) {
  return async (dispatch) => {
    try {
      const response = await SalonInfomationService.getAllSalon(
        status,
        page,
        size
      );
      dispatch(actSalonInformation(response.data)); // Giả sử response.data là danh sách salon
    } catch (error) {
      console.error("Failed to fetch salon information:", error);
    }
  };
}
export function searchSalonInformation(
  serviceName,
  salonAddress,
  salonName,
  page,
  size
) {
  return async (dispatch) => {
    try {
      const response = await SalonInfomationService.searchSalon(
        serviceName,
        salonAddress,
        salonName,
        page,
        size
      );
      dispatch({
        type: SEARCH_SALON_INFORMATION,
        payload: response.data,
      });
    } catch (error) {
      console.error("Failed to search salon information:", error);
    }
  };
}
export function fetchSalonInformationById(id) {
  return async (dispatch) => {
    try {
      const response = await SalonInfomationService.getSalonById(id);
      dispatch(actSalonInformationById(response.data));
      dispatch(fetchSalonEmployeeBySalonInformationId(id));
      dispatch(fetchServiceHairBySalonInformationId(id));
      dispatch(fetchVoucherBySalonInformationId(id));
    } catch (error) {
      console.error("Failed to fetch SalonInformation By Id:", error);
    }
  };
}
export function fetchSalonEmployeeBySalonInformationId(id) {
  return async (dispatch) => {
    try {
      const response =
        await SalonInfomationService.GetSalonEmployeeBySalonInformationId(id);
      dispatch({
        type: GET_SALON_EMPPLOYEE_BY_SALON_ID,
        payload: response.data,
      });
    } catch (error) {
      console.error(
        "Failed to fetch SalonEmployee By SalonInformationId:",
        error
      );
    }
  };
}
export function fetchVoucherBySalonInformationId(id) {
  return async (dispatch) => {
    try {
      const response =
        await SalonInfomationService.GetVoucherBySalonInformationId(id);
      dispatch({
        type: GET_VOUCHER_BY_SALON_ID,
        payload: response.data,
      });
    } catch (error) {
      console.error("Failed to fetch Voucher By SalonInformationId:", error);
    }
  };
}
export function fetchServiceHairBySalonInformationId(id) {
  return async (dispatch) => {
    try {
      const response =
        await SalonInfomationService.GetServiceHairBySalonInformationId(id);
      dispatch({ type: GET_SALON_SERVICE_BY_SALON_ID, payload: response.data });
    } catch (error) {
      console.error(
        "Failed to fetch ServiceHair By SalonInformationId:",
        error
      );
    }
  };
}
export function fetchUpdateStatusBySalon(data, currentPage, itemsPerPage) {
  return async (dispatch) => {
    try {
      const response = await SalonInfomationService.changeStatusSalon(data)
        .then((res) => {
          console.log("res", res);
          dispatch(
            fetchSalonInformation(
              { status: "PENDING" },
              currentPage,
              itemsPerPage
            )
          );
        })
        .catch((err) => {
          toast.error("Error status");
        });
    } catch (error) {
      console.error(
        "Failed to fetch ServiceHair By SalonInformationId:",
        error
      );
    }
  };
}
export function GetSalonInformationByOwnerId(id) {
  return async (dispatch) => {
    try {
      const response =
        await SalonInfomationService.GetSalonInformationByOwnerId(id);
      dispatch({
        type: ACT_SALON_INFORMATION_BY_OWNER_ID,
        payload: response.data,
      });
    } catch (error) {
      console.error("Failed to fetch GetSalonInformationByOwnerId:", error);
    }
  };
}
