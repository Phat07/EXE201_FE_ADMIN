import { API } from "./api";

export const UserServices = {
  loginUser(data) {
    return API.post("auth/Login", data);
  },
  fetchMe: (token) => {
    return API.get(`auth/FetchUser/${token}`);
  },
  GetAllCustomer(page, size) {
    return API.get(`customers/GetAllCustomer`, {
      params: {
        page,
        size,
      },
    });
  },
  GetCustomerById(id) {
    return API.get(`customers/GetUserById/${id}`);
  },
  // getOneUser(id, token) {
  //   return API.get("/users//userid/:userid", id, {
  //     headers: {
  //       Authorization: `Bearer ${token}`,
  //     },
  //   });
  // },

  // getAllMemberCount(token) {
  //   return API.get("/users/MemberCount", {
  //     headers: {
  //       Authorization: `Bearer ${token}`,
  //     },
  //   });
  // },
  // getAllHostCount(token) {
  //   return API.get("/users/HostCount", {
  //     headers: {
  //       Authorization: `Bearer ${token}`,
  //     },
  //   });
  // },
  // getAgvMemberAuctiont(token) {
  //   return API.get("/users/AgvMemberAuction", {
  //     headers: {
  //       Authorization: `Bearer ${token}`,
  //     },
  //   });
  // },
};
