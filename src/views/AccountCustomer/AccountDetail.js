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
import { actGetAllCustomer, actGetCustomerById } from "src/store/user/action";
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
  const token = localStorage.getItem("ACCESS_TOKEN");
  // const allUser = useSelector((state) => state.USER.allUser);
  const detailCustomer = useSelector((state) => state.USER.detailCustomer);
  console.log("detailCustomer", detailCustomer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actGetCustomerById(userId));
  }, [dispatch, userId]);
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
                      src={detailCustomer?.img}
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
                    <Card.Title>
                      User Name: {detailCustomer?.fullName}
                    </Card.Title>
                    <Card.Text>{detailCustomer?.email}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              {/* Card bên trái */}
              <Col md={8}>
                <Card>
                  <Card.Body>
                    <Card.Title>Thông Tin Cá Nhân</Card.Title>
                    <Card.Text>
                      <strong>Họ và Tên:</strong> {detailCustomer?.fullName}
                    </Card.Text>
                    <Card.Text>
                      <strong>Giới tính:</strong> {detailCustomer?.gender}
                    </Card.Text>
                    <Card.Text>
                      <strong>Email:</strong> {detailCustomer?.email}
                    </Card.Text>
                    <Card.Text>
                      <strong>Địa chỉ:</strong> {detailCustomer?.address}
                    </Card.Text>
                    <Card.Text>
                      <strong>Điện thoại:</strong> {detailCustomer?.phone}
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
