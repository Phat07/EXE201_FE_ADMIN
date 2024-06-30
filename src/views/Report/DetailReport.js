import React from "react";
import {
  Card,
  CardBody,
  Col,
  Container,
  ListGroup,
  Row,
} from "react-bootstrap";
import { format } from "date-fns";
import { useLocation, useParams } from "react-router-dom";

const DetailReport = () => {
  const location = useLocation();
  const reportDetail = location.state?.reportDetail;
  console.log("reportDetail", reportDetail);

  return (
    <Container fluid style={{ backgroundColor: "white", padding: "20px" }}>
      <Row>
        {/* Phần hiển thị thông tin Salon */}
        <Col md={4}>
          <Card>
            <Card.Header>Thông Tin Salon</Card.Header>
            <Card.Img variant="top" src={reportDetail?.salonInformation?.img} />
            <CardBody>
              <Card.Title>{reportDetail?.salonInformation?.name}</Card.Title>
              <Card.Text>
                Địa chỉ: {reportDetail?.salonInformation?.address}
              </Card.Text>
              <Card.Text>
                Mô tả: {reportDetail?.salonInformation?.description}
              </Card.Text>
              <Card.Text>
                Đánh giá: {reportDetail?.salonInformation?.totalRating} (
                {reportDetail?.salonInformation?.totalReviewer} đánh giá)
              </Card.Text>
            </CardBody>
          </Card>
        </Col>

        {/* Phần hiển thị lịch */}
        <Col md={4}>
          <Card className="mb-3">
            <Card.Header>Lịch Làm Việc</Card.Header>
            <ListGroup variant="flush">
              {reportDetail?.salonInformation?.schedules?.map((schedule) => (
                <ListGroup.Item key={schedule.id}>
                  <Card.Title>{schedule.dayOfWeek}</Card.Title>
                  Từ {schedule.startTime} đến {schedule.endTime}
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Card>
        </Col>

        {/* Phần hiển thị báo cáo */}
        <Col md={4}>
          <Card className="mb-3">
            <Card.Header>Báo cáo</Card.Header>
            <CardBody>
              <Card.Text>Lý do báo cáo: {reportDetail?.reasonReport}</Card.Text>
              <Card.Text>
                Hình ảnh báo cáo:
                <ListGroup variant="flush">
                  {reportDetail?.fileReports?.map((file) => (
                    <ListGroup.Item key={file.id}>
                      {file.img ? (
                        <Card.Img
                          src={file.img}
                          alt="Report"
                          style={{ maxWidth: "100%" }}
                        />
                      ) : (
                        "Không có hình ảnh"
                      )}
                      {file.video && (
                        <video
                          controls
                          style={{ maxWidth: "100%", marginTop: "10px" }}
                        >
                          <source src={file.video} type="video/mp4" />
                          Trình duyệt của bạn không hỗ trợ video.
                        </video>
                      )}
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              </Card.Text>
            </CardBody>
          </Card>
        </Col>
      </Row>
      <Row style={{ marginTop: "2rem" }}>
        {/* Phần hiển thị thông tin cuộc hẹn */}
        <Col md={6}>
          <Card className="mb-3">
            <Card.Header>Thông Tin Cuộc Hẹn</Card.Header>
            <CardBody>
              <Card.Text>
                Ngày tạo: {reportDetail?.appointment?.createdDate}
              </Card.Text>
              <Card.Text>
                Ngày bắt đầu: {reportDetail?.appointment?.startDate}
              </Card.Text>
              <Card.Text>
                Tổng giá: {reportDetail?.appointment?.totalPrice} vnd
              </Card.Text>
              <Card.Text>
                Giá gốc: {reportDetail?.appointment?.originalPrice} vnd
              </Card.Text>
              <Card.Text>
                Giảm giá: {reportDetail?.appointment?.discountedPrice} vnd
              </Card.Text>
              <Card.Text>
                Trạng thái: {reportDetail?.appointment?.status}
              </Card.Text>
              <Card.Text>Chi tiết cuộc hẹn:</Card.Text>
              <ListGroup variant="flush">
                {reportDetail?.appointment?.appointmentDetails?.map(
                  (detail) => (
                    <ListGroup.Item key={detail.id}>
                      <Card>
                        <Card.Header>Dịch vụ: {detail.serviceName}</Card.Header>
                        <CardBody>
                          <Card.Text>
                            Mô tả: {detail.descriptionServiceHair}
                          </Card.Text>
                          <Card.Text>
                            Giá: {detail.priceServiceHair} vnd
                          </Card.Text>
                          <Card.Text>
                            Từ{" "}
                            {format(
                              new Date(detail.startTime),
                              "dd/MM/yyyy - hh:mm aa"
                            )}
                            {" "}đến{" "}
                            {format(
                              new Date(detail.endTime),
                              "dd/MM/yyyy - hh:mm aa"
                            )}
                          </Card.Text>
                          <Card.Img
                            src={detail.imgServiceHair}
                            alt="Service"
                            style={{ maxWidth: "100%" }}
                          />
                        </CardBody>
                      </Card>
                    </ListGroup.Item>
                  )
                )}
              </ListGroup>
            </CardBody>
          </Card>
        </Col>

        {/* Phần hiển thị thông tin Customer và Salon Owner */}
        <Col md={6}>
          <Row>
            <Col md={12}>
              <Card className="mb-3">
                <Card.Header>Thông Tin Khách Hàng</Card.Header>
                <CardBody>
                  <Card.Img variant="top" src={reportDetail?.customer?.img} />
                  <Card.Title>{reportDetail?.customer?.fullName}</Card.Title>
                  <Card.Text>Email: {reportDetail?.customer?.email}</Card.Text>
                  <Card.Text>
                    Điện thoại: {reportDetail?.customer?.phone}
                  </Card.Text>
                </CardBody>
              </Card>
            </Col>
            <Col md={12}>
              <Card className="mb-3">
                <Card.Header>Thông Tin Chủ Salon</Card.Header>
                <CardBody>
                  <Card.Img
                    variant="top"
                    src={reportDetail?.salonInformation?.salonOwner?.img}
                  />
                  <Card.Title>
                    {reportDetail?.salonInformation?.salonOwner?.fullName}
                  </Card.Title>
                  <Card.Text>
                    Email: {reportDetail?.salonInformation?.salonOwner?.email}
                  </Card.Text>
                  <Card.Text>
                    Điện thoại:{" "}
                    {reportDetail?.salonInformation?.salonOwner?.phone}
                  </Card.Text>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default DetailReport;
