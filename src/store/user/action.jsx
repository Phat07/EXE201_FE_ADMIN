import { UserServices } from "../../services/userServices";
import {
  actBanRequestGetAsync,
  actAlreadyBanRequestGetAsync,
} from "../../store/request/action";
import { toast } from "react-toastify";
export const ACT_USER_LOGIN = "ACT_USER_LOGIN";
export const ACT_USER_NOT_FETCH_ME = "ACT_USER_NOT_FETCH_ME";
export const ALL_CUSTOMER = "ALL_CUSTOMER";
export const GET_CUSTOMER_ID = "GET_CUSTOMER_ID";
export const ALL_SALON = "ALL_SALON";
export const GET_SALON_ID = "GET_SALON_ID";

export function actUserLogin(currentUser, token, role) {
  return {
    type: ACT_USER_LOGIN,
    payload: {
      currentUser,
      token,
      role,
    },
  };
}
export function actUserNotFetchMe(token) {
  return {
    type: ACT_USER_NOT_FETCH_ME,
    payload: token,
  };
}

export const GetAllCustomer = (list) => {
  return {
    type: ALL_CUSTOMER,
    payload: list,
  };
};
export const GetCustomerById = (list) => {
  return {
    type: GET_CUSTOMER_ID,
    payload: list,
  };
};
export const GetAllSalonOwner = (list) => {
  return {
    type: ALL_SALON,
    payload: list,
  };
};
export const GetSalonOwnerById = (list) => {
  return {
    type: GET_SALON_ID,
    payload: list,
  };
};

export function actGetAllCustomer(page, size) {
  return async (dispatch) => {
    try {
      const response = await UserServices.GetAllCustomer(page, size);
      if (response.status === 200 || response.status === 201) {
        // toast.success(`Bạn đã ban tài khoản thành công`);
        dispatch(GetAllCustomer(response.data));
      } else {
        // toast.error("Get All Customer fail");
        console.log("actGetAllCustomer fail");
      }
    } catch (error) {
      console.error("Error occurred while actGetAllCustomer:", error);
      // Xử lý lỗi ở đây, ví dụ hiển thị thông báo cho người dùng
    }
  };
}

export function actGetCustomerById(id) {
  return async (dispatch) => {
    try {
      const response = await UserServices.GetCustomerById(id);
      if (response.status === 200 || response.status === 201) {
        dispatch(GetCustomerById(response.data));
      } else {
        console.log("actGetCustomerById fail");
      }
    } catch (error) {
      console.error("Error occurred while actGetCustomerById:", error);
      // Xử lý lỗi ở đây, ví dụ hiển thị thông báo cho người dùng
    }
  };
}

export function actGetAllSalonOwner(page, size) {
  return async (dispatch) => {
    try {
      const response = await UserServices.GetAllSalonOwner(page, size);
      if (response.status === 200 || response.status === 201) {
        // toast.success(`Bạn đã ban tài khoản thành công`);
        dispatch(GetAllSalonOwner(response.data));
      } else {
        // toast.error("Get All Customer fail");
        console.log("actGetAllSalonOwner fail");
      }
    } catch (error) {
      console.error("Error occurred while actGetAllSalonOwner:", error);
      // Xử lý lỗi ở đây, ví dụ hiển thị thông báo cho người dùng
    }
  };
}

export function actGetSalonOwnerById(id) {
  return async (dispatch) => {
    try {
      const response = await UserServices.GetSalonOwnerById(id);
      if (response.status === 200 || response.status === 201) {
        dispatch(GetSalonOwnerById(response.data));
      } else {
        console.log("actGetSalonOwnerById fail");
      }
    } catch (error) {
      console.error("Error occurred while actGetSalonOwnerById:", error);
      // Xử lý lỗi ở đây, ví dụ hiển thị thông báo cho người dùng
    }
  };
}
