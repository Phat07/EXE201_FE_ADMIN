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
const DetailTransaction = () => {
  const { paymentId } = useParams(); // Lấy ID từ URL
  const allPayments = useSelector((state) => state.PAYMENT.allPayments);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [detailPayment, setdetailPayment] = useState();

  useEffect(() => {
    const item = allPayments?.items?.find((i) => i.id === paymentId);
    setdetailPayment(item);
  }, [allPayments, paymentId]);

  //cái này bỏ khi làm UI
  const detailCustomer = useSelector((state) => state.USER.detailCustomer);

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
                      paymentCode: {detailPayment?.paymentCode}
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

export default DetailTransaction;
