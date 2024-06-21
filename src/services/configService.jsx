import { API } from "./api";

export const configServices = {
  getAllConfig(token) {
    return API.get("/configs", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },
  updateConfig(id, data, token) {
    return API.put(`/configs/${id}`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },
};
