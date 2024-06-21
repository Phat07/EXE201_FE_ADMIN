import { ReportRequestServices } from "../../services/reportRequest";

export const ALL_REQUEST = "ALL_REQUEST";
export const MONEY_UNPAID_REQUEST = "MONEY_UNPAID_REQUEST";
export const MONEY_PAID_REQUEST = "MONEY_PAID_REQUEST";
export const BAN_REQUEST = "BAN_REQUEST";
export const ALREADY_BAN_REQUEST = "ALREADY_BAN_REQUEST";
export const ALL_REQUEST_ID = "ALL_REQUEST_ID";

export const allRequest = (list) => {
  return {
    type: ALL_REQUEST,
    payload: list,
  };
};
export const allRequestById = (list) => {
  return {
    type: ALL_REQUEST_ID,
    payload: list,
  };
};
export const moneyUnpaidRequest = (list) => {
  return {
    type: MONEY_UNPAID_REQUEST,
    payload: list,
  };
};
export const moneyPaidRequest = (list) => {
  return {
    type: MONEY_PAID_REQUEST,
    payload: list,
  };
};
export const banRequest = (list) => {
  return {
    type: BAN_REQUEST,
    payload: list,
  };
};
export const alreadyBanRequest = (list) => {
  return {
    type: ALREADY_BAN_REQUEST,
    payload: list,
  };
};
export function actRequestGetMoneyUnpaidAsync(token) {
  return (dispatch) => {
    console.log("request");
    ReportRequestServices.getByMoneyUnpaidRequest(token)
      .then((response) => {
        console.log("dataRequest", response);
        if (response.status === 200 || response.status === 201) {
          dispatch(moneyUnpaidRequest(response.data));
          // dispatch(actRequestGetMoneyPaidAsync(token));
        } else {
          // toast.error("get all syllabus to fail");
          console.log("fail");
        }
      })
      .catch((error) => {
        // Xử lý lỗi nếu có
        console.error("Error while fetching all products:", error);
        // Nếu bạn muốn dispatch một action để xử lý lỗi, bạn có thể thực hiện ở đây
      });
  };
}

export function actRequestGetMoneyPaidAsync(token) {
  return (dispatch) => {
    console.log("request");
    ReportRequestServices.getByMoneyPaidRequest(token)
      .then((response) => {
        console.log("dataRequest", response);
        if (response.status === 200 || response.status === 201) {
          dispatch(moneyPaidRequest(response.data));
        } else {
          // toast.error("get all syllabus to fail");
          console.log("fail");
        }
      })
      .catch((error) => {
        // Xử lý lỗi nếu có
        console.error("Error while fetching all products:", error);
        // Nếu bạn muốn dispatch một action để xử lý lỗi, bạn có thể thực hiện ở đây
      });
  };
}

export function actBanRequestGetAsync(token) {
  return (dispatch) => {
    console.log("request");
    ReportRequestServices.getByBanRequest(token)
      .then((response) => {
        console.log("dataRequest", response);
        if (response.status === 200 || response.status === 201) {
          dispatch(banRequest(response.data));
        } else {
          // toast.error("get all syllabus to fail");
          console.log("fail");
        }
      })
      .catch((error) => {
        // Xử lý lỗi nếu có
        console.error("Error while fetching all products:", error);
        // Nếu bạn muốn dispatch một action để xử lý lỗi, bạn có thể thực hiện ở đây
      });
  };
}

export function actAlreadyBanRequestGetAsync(token) {
  return (dispatch) => {
    console.log("request");
    ReportRequestServices.getByAlreadyBanRequest(token)
      .then((response) => {
        console.log("dataRequest", response);
        if (response.status === 200 || response.status === 201) {
          dispatch(alreadyBanRequest(response.data));
        } else {
          // toast.error("get all syllabus to fail");
          console.log("fail");
        }
      })
      .catch((error) => {
        // Xử lý lỗi nếu có
        console.error("Error while fetching all products:", error);
        // Nếu bạn muốn dispatch một action để xử lý lỗi, bạn có thể thực hiện ở đây
      });
  };
}
export function actRequestGetByUserIdAsync(id, token) {
  return (dispatch) => {
    ReportRequestServices.getAllRequestByUserId(id, token)
      .then((response) => {
        if (response.status === 200 || response.status === 201) {
          dispatch(allRequestById(response.data));
        } else {
          // toast.error("get all syllabus to fail");
        }
      })
      .catch((error) => {
        // Xử lý lỗi nếu có
        console.error("Error while fetching all Request:", error);
        // Nếu bạn muốn dispatch một action để xử lý lỗi, bạn có thể thực hiện ở đây
      });
  };
}
