import React, { useEffect } from "react";
import {
  CBadge,
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from "@coreui/react";
import { Row, Col, Card, Image } from "react-bootstrap";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { format } from "date-fns";
import { actGetSalonOwnerById } from "src/store/user/action";
import { GetReportBySalonId } from "src/store/request/action";
import { GetSalonInformationByOwnerId } from "src/store/salon/action";
import { GetPaymentBySalonId } from "src/store/payment/action";
const DetailUser = () => {
  const { userId } = useParams(); // Lấy ID từ URL
  const navigate = useNavigate();
  const formatDate = (dateString) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    return format(date, "dd/MM/yyyy - HH:mm");
  };
  function formatCurrencyVND(amount) {
    // Sử dụng hàm toLocaleString() để định dạng số
    // Cài đặt style là 'currency' và currency là 'VND'
    return amount?.toLocaleString("vi-VN", {
      style: "currency",
      currency: "VND",
    });
  }
  const [data, setData] = useState([]);
  const [userEditData, setUserEditData] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [currentPagePayment, setCurrentPagePayment] = useState(1);
  const [itemsPerPagePayment, setItemsPerPagePayment] = useState(10);
  const token = localStorage.getItem("ACCESS_TOKEN");
  // const allUser = useSelector((state) => state.USER.allUser);
  const detailSalon = useSelector((state) => state.USER.detailSalon);
  const salonDetail = useSelector((state) => state.SALON.salonDetail);
  const reportBySalon = useSelector((state) => state.REQUEST.reportBySalon);
  const paymentBySalonId = useSelector(
    (state) => state.PAYMENT.paymentBySalonId
  );
  console.log("detailCustomer", detailSalon);
  console.log("reportBySalon", reportBySalon);
  console.log("salonDetail", salonDetail);
  console.log("paymentBySalonId", paymentBySalonId);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actGetSalonOwnerById(userId));
    dispatch(GetSalonInformationByOwnerId(userId));
  }, [dispatch, userId]);
  useEffect(() => {
    dispatch(
      GetPaymentBySalonId(userId, currentPagePayment, itemsPerPagePayment)
    );
  }, [dispatch, userId, currentPagePayment, itemsPerPagePayment]);
  useEffect(() => {
    if (salonDetail && salonDetail?.id) {
      dispatch(GetReportBySalonId(salonDetail?.id, currentPage, itemsPerPage));
    }
  }, [dispatch, salonDetail, currentPage, itemsPerPage]);
  const [showDelete, setShowDelete] = useState(false);
  const [deleteData, setDeleteData] = useState({});
  console.log("Item data ", userEditData);
  return (
    <CRow>
      <CCol xs={6}>
        <CButton className="mb-4" color="primary" onClick={() => navigate(-1)}>
          Quay Lại
        </CButton>
      </CCol>

      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Thông Tin Chi Tiết Người Dùng </strong>
          </CCardHeader>
          <CCardBody>
            <Row className="mt-1">
              {/* Card bên phải */}
              <Col md={4}>
                <Card>
                  <div className="d-flex justify-content-center">
                    <Card.Img
                      variant="center"
                      src={detailSalon?.img}
                      style={{
                        width: "200px",
                        height: "200px",
                        borderRadius: "50%",
                        objectFit: "cover",
                      }}
                      className="mt-3"
                    />
                  </div>
                  <Card.Body>
                    <Card.Title>User Name: {detailSalon?.fullName}</Card.Title>
                    <Card.Text>{detailSalon?.email}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              {/* Card bên trái */}
              <Col md={8}>
                <Card>
                  <Card.Body>
                    <Card.Title>Thông Tin Cá Nhân</Card.Title>
                    <Card.Text>
                      <strong>Họ và Tên:</strong> {detailSalon?.fullName}
                    </Card.Text>
                    <Card.Text>
                      <strong>Giới tính:</strong> {detailSalon?.gender}
                    </Card.Text>
                    <Card.Text>
                      <strong>Email:</strong> {detailSalon?.email}
                    </Card.Text>
                    <Card.Text>
                      <strong>Địa chỉ:</strong> {detailSalon?.address}
                    </Card.Text>
                    <Card.Text>
                      <strong>Điện thoại:</strong> {detailSalon?.phone}
                    </Card.Text>
                    <Card.Text>
                      <strong>Role:</strong> CUSTOMER
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  );
};

export default DetailUser;
