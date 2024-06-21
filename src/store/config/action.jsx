import { configServices } from "../../services/configService";

export const ALL_CONFIG = "ALL_CONFIG";

export const allConfig = (list) => {
  return {
    type: ALL_CONFIG,
    payload: list,
  };
};

export function actConfigGetAsync(token) {
  return (dispatch) => {
    configServices
      .getAllConfig(token)
      .then((response) => {
        console.log("all config: ", response);
        if (response.status === 200 || response.status === 201) {
          dispatch(allConfig(response.data));
        } else {
          // toast.error("get all syllabus to fail");
          console.log("fail");
        }
      })
      .catch((error) => {
        // Xử lý lỗi nếu có
        console.error("Error while fetching all config:", error);
        // Nếu bạn muốn dispatch một action để xử lý lỗi, bạn có thể thực hiện ở đây
      });
  };
}

export function actConfigPutAsync(id, data, token) {
  return (dispatch) => {
    configServices
      .updateConfig(id, data, token)
      .then((response) => {
        console.log("config data update: ", response);
        if (response.status === 200 || response.status === 201) {
          dispatch(actConfigGetAsync(token));
        } else {
          // toast.error("get all syllabus to fail");
          console.log("fail");
        }
      })
      .catch((error) => {
        // Xử lý lỗi nếu có
        console.error("Error while fetching config:", error);
        // Nếu bạn muốn dispatch một action để xử lý lỗi, bạn có thể thực hiện ở đây
      });
  };
}
