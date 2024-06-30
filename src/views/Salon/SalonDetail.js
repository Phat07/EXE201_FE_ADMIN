import React, { useState, useEffect } from "react";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CButton,
} from "@coreui/react";
import {
  Card,
  Row,
  Col,
  Button,
  Form,
  Carousel,
  Container,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchSalonInformationById } from "src/store/salon/action";
import { GetReportBySalonId } from "src/store/request/action";
const AutionDetail = () => {
  const { auctionId } = useParams();
  const navigate = useNavigate();

  const { salonService, salonDetail, salonEmployee, salonVoucher } =
    useSelector((state) => state.SALON);
  const reportBySalon = useSelector((state) => state.REQUEST.reportBySalon);
  console.log("salonService", salonService);
  console.log("salonDetail", salonDetail);
  console.log("salonEmployee", salonEmployee);
  console.log("voucher", salonVoucher);
  console.log("reportBySalon", reportBySalon);
  const dispatch = useDispatch();
  const [auction, setAuction] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  useEffect(() => {
    async function fetchData() {
      dispatch(fetchSalonInformationById(auctionId));
    }
    fetchData();
  }, [auctionId]);

  useEffect(() => {
    dispatch(GetReportBySalonId(auctionId, currentPage, itemsPerPage));
  }, [dispatch, auctionId, currentPage, itemsPerPage]);

  const [currentPageService, setCurrentPageService] = useState(1);
  const [servicesPerPage] = useState(3); // Giả sử 6 dịch vụ trên mỗi trang

  const indexOfLastService = currentPageService * servicesPerPage;
  const indexOfFirstService = indexOfLastService - servicesPerPage;
  const currentServices = salonService.slice(
    indexOfFirstService,
    indexOfLastService
  );

  const paginateService = (pageNumber) => setCurrentPageService(pageNumber);

  const [currentPageEmployee, setCurrentPageEmployee] = useState(1);
  const [employeesPerPage] = useState(3); // Giả sử 6 nhân viên trên mỗi trang

  const indexOfLastEmployee = currentPageEmployee * employeesPerPage;
  const indexOfFirstEmployee = indexOfLastEmployee - employeesPerPage;
  const currentEmployees = salonEmployee.slice(
    indexOfFirstEmployee,
    indexOfLastEmployee
  );

  const paginateEmployee = (pageNumber) => setCurrentPageEmployee(pageNumber);

  const [currentPageVoucher, setCurrentPageVoucher] = useState(1);
  const [vouchersPerPage] = useState(3);

  const indexOfLastVoucher = currentPageVoucher * vouchersPerPage;
  const indexOfFirstVoucher = indexOfLastVoucher - vouchersPerPage;
  const currentVouchers = salonVoucher?.items?.slice(
    indexOfFirstVoucher,
    indexOfLastVoucher
  );

  const paginateVoucher = (pageNumber) => setCurrentPageVoucher(pageNumber);

  return (
    <Container fluid style={{ backgroundColor: "white", padding: "20px" }}>
      <div>
        <Row>
          {/* Phần nhỏ thứ nhất: Thông tin salon và thông tin chủ salon */}
          <Col md={8}>
            {/* Thông tin salon */}
            <Card>
              <Card.Img variant="top" src={salonDetail.img} />
              <Card.Body>
                <Card.Title>{salonDetail.name}</Card.Title>
                <Card.Text>Địa chỉ: {salonDetail.address}</Card.Text>
                <Card.Text>Mô tả: {salonDetail.description}</Card.Text>
                <Card.Text>
                  Đánh giá: {salonDetail.totalRating} (
                  {salonDetail.totalReviewer} đánh giá)
                </Card.Text>
              </Card.Body>
            </Card>
            {/* Thông tin chủ salon */}
            <Card className="mt-3">
              <Card.Body>
                <Card.Title>Thông tin chủ salon</Card.Title>
                <Card.Text>Tên: {salonDetail.salonOwner?.fullName}</Card.Text>
                <Card.Text>Email: {salonDetail.salonOwner?.email}</Card.Text>
                <Card.Text>
                  Số điện thoại: {salonDetail.salonOwner?.phone}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          {/* Phần nhỏ thứ hai: Lịch làm việc */}
          <Col md={4}>
            <h3>Lịch làm việc</h3>
            {salonDetail.schedules?.map((schedule) => (
              <Card key={schedule.id} className="mb-3">
                <Card.Body>
                  <Card.Title>{`Ngày làm việc: ${schedule.dayOfWeek}`}</Card.Title>
                  <Card.Text>
                    Giờ làm việc: Từ {schedule.startTime} đến {schedule.endTime}
                  </Card.Text>
                </Card.Body>
              </Card>
            ))}
          </Col>
        </Row>
      </div>
      <div>
        <Row className="mt-4">
          <h3>Dịch vụ của Salon</h3>
          {currentServices.map((service) => (
            <Col key={service.id} md={4} className="mb-4">
              <Card>
                <Card.Img
                  variant="top"
                  src={service.img}
                  style={{ maxHeight: "15rem" }}
                />
                <Card.Body>
                  <Card.Title>{service.serviceName}</Card.Title>
                  <Card.Text>Mô tả: {service.description}</Card.Text>
                  <Card.Text>Giá: {service.price} VND</Card.Text>
                  <Card.Text>Thời gian: {service.time} giờ</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        <div style={{ display: "flex", justifyContent: "center" }}>
          {[
            ...Array(Math.ceil(salonService.length / servicesPerPage)).keys(),
          ].map((number) => (
            <button
              key={number}
              onClick={() => paginateService(number + 1)}
              style={{
                border: "none",
                margin: "0 5px", // Tạo khoảng cách giữa các nút
                borderRadius: "5px",
                cursor: "pointer",
                transition: "background-color 0.3s ease",
              }}
            >
              {number + 1}
            </button>
          ))}
        </div>
      </div>
      <div>
        <Row className="mt-4">
          <h3>Nhân viên salon</h3>
          {currentEmployees.map((employee) => (
            <Col key={employee.id} md={4} className="mb-4">
              <Card>
                <Card.Img
                  variant="top"
                  src={employee.img}
                  style={{ maxHeight: "15rem" }}
                />
                <Card.Body>
                  <Card.Title>{employee.fullName}</Card.Title>
                  <Card.Text>Giới tính: {employee.gender}</Card.Text>
                  <Card.Text>Số điện thoại: {employee.phone}</Card.Text>
                  <Card.Text>
                    Lịch làm việc:
                    <ul>
                      {employee.schedules.map((schedule) => (
                        <li
                          key={schedule.id}
                        >{`${schedule.dayOfWeek}: ${schedule.startTime} - ${schedule.endTime}`}</li>
                      ))}
                    </ul>
                  </Card.Text>
                  <Card.Text>
                    Dịch vụ:
                    <ul>
                      {employee.serviceHairs.map((service) => (
                        <li
                          key={service.id}
                        >{`${service.serviceName} - ${service.price} VND`}</li>
                      ))}
                    </ul>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        <div style={{ display: "flex", justifyContent: "center" }}>
          {[
            ...Array(Math.ceil(salonEmployee.length / employeesPerPage)).keys(),
          ].map((number) => (
            <button
              key={number}
              onClick={() => paginateEmployee(number + 1)}
              style={{
                border: "none",
                margin: "0 5px", // Tạo khoảng cách giữa các nút
                borderRadius: "5px",
                cursor: "pointer",
                transition: "background-color 0.3s ease",
              }}
            >
              {number + 1}
            </button>
          ))}
        </div>
      </div>
      <div>
        <h2>Danh sách voucher</h2>
        <Row>
          {currentVouchers?.map((voucher) => (
            <Col key={voucher.id} md={4} className="mb-4">
              {" "}
              {/* Sử dụng md={4} để chia layout thành 3 cột trên màn hình lớn */}
              <Card>
                <Card.Body>
                  <Card.Title>{voucher.code}</Card.Title>
                  <Card.Text>Mô tả: {voucher.description}</Card.Text>
                  <Card.Text>Giảm giá: {voucher.discountPercentage}%</Card.Text>
                  <Card.Text>
                    Giá trị đơn hàng tối thiểu:{" "}
                    {voucher.minimumOrderAmount.toLocaleString()} VND
                  </Card.Text>
                  <Card.Text>
                    Hạn sử dụng:{" "}
                    {new Date(voucher.expiryDate).toLocaleDateString()}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "20px",
        }}
      >
        {[...Array(salonVoucher.totalPages).keys()].map((number) => (
          <button
            key={number}
            onClick={() => paginateVoucher(number + 1)}
            style={{
              border: "none",
              margin: "0 5px", // Tạo khoảng cách giữa các nút
              borderRadius: "5px",
              cursor: "pointer",
              transition: "background-color 0.3s ease",
            }}
          >
            {number + 1}
          </button>
        ))}
      </div>
      <div>
        <Button variant="success" onClick={() => navigate(-1)}>
          Back
        </Button>
      </div>
    </Container>
  );
};

export default AutionDetail;
