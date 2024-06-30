import { API } from "./api";

export const SalonInfomationService = {
  getAllSalon(status, page, size) {
    return API.get(`saloninformations/GetSalonByStatus`, {
      params: {
        status,
        page,
        size,
      },
    });
  },
  searchSalon(serviceName, salonAddress, salonName, page, size) {
    return API.get(`saloninformations/GetSalonByServiceNameAddress`, {
      params: {
        serviceName,
        salonAddress,
        salonName,
        page,
        size,
      },
    });
  },
  getSalonById(id) {
    return API.get(`saloninformations/GetSalonInformationById/${id}`);
  },
  GetSalonEmployeeBySalonInformationId(id) {
    return API.get(`salonemployees/GetSalonEmployeeBySalonInformationId/${id}`);
  },
  GetServiceHairBySalonInformationId(id) {
    return API.get(`servicehairs/GetServiceHairBySalonInformationId/${id}`);
  },
  GetVoucherBySalonInformationId(id) {
    return API.get(`vouchers/GetVoucherBySalonId/${id}`);
  },
  changeStatusSalon(data) {
    return API.post(`approvals/CreateApproval`, data);
  },
  GetSalonInformationByOwnerId(id) {
    return API.get(`/saloninformations/GetSalonInformationByOwnerId/${id}`);
  },
};
