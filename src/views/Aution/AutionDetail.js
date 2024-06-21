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
import { Card, Row, Col, Button, Form, Carousel } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  actAuctionGetAsync,
  actGetAllMemberJoinAuctionRoomGetAsync,
} from "../../store/auction/action";
const AutionDetail = () => {
  const { auctionId } = useParams(); // Lấy ID từ URL
  const navigate = useNavigate();
  const auctions = useSelector((state) => state.AUCTION.auctions);
  console.log("aucctionsss", auctions);
  const allMemberJoinInAuction = useSelector(
    (state) => state.AUCTION.allMemberJoinInAuction
  );
  const filterNumberMemberJoinRoom = allMemberJoinInAuction?.filter(
    (e) => e?.member_id?.role_id?.title !== "HOST"
  );
  const token = localStorage.getItem("ACCESS_TOKEN");
  const dispatch = useDispatch();
  const [auction, setAuction] = useState("");
  useEffect(() => {
    dispatch(actAuctionGetAsync(token));
    dispatch(actGetAllMemberJoinAuctionRoomGetAsync(auctionId, token));
  }, [auctionId, dispatch, token]);
  useEffect(() => {
    const item = auctions.find((i) => i._id === auctionId);
    setAuction(item);
  }, [auctions, auctionId]);
  console.log("auctionDetail", auction);
  function formatCurrencyVND(amount) {
    // Sử dụng hàm toLocaleString() để định dạng số
    // Cài đặt style là 'currency' và currency là 'VND'
    return amount?.toLocaleString("vi-VN", {
      style: "currency",
      currency: "VND",
    });
  }
  return (
    // <CRow>
    //   <CCol xs={12}>
    //     <CCard className="mb-4">
    //       <CCardBody>
    <Row>
      <Col xs={12}>
        <Card className="mb-4">
          <Card.Header>
            <strong>Thông tin chi tiết buổi đấu giá </strong>
          </Card.Header>
          <Card.Body>
            <Form>
              <Row className="mb-4">
                <Col md={6}>
                  <Card>
                    <Card.Body>
                      <Card.Title>Ảnh Sản Phẩm</Card.Title>
                      <Carousel>
                        {auction?.product_id?.image?.map((image, index) => (
                          <Carousel.Item key={index}>
                            <img
                              className="d-block w-100"
                              src={image}
                              alt={`Slide ${index + 1}`}
                              style={{
                                height: "400px",
                                objectFit: "cover",
                                width: "100%",
                              }}
                            />
                          </Carousel.Item>
                        ))}
                      </Carousel>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={6}>
                  <Card>
                    <Card.Body>
                      <Card.Title>Video Sản Phẩm</Card.Title>
                      <div
                        style={{
                          position: "relative",
                          marginTop: "20px",
                        }}
                      >
                        {/* <video controls style={{ maxWidth: "100%" }}>
                          <source
                            src={auction?.product_id?.video}
                            type="video/mp4"
                          />
                          Your browser does not support the video tag.
                        </video> */}
                        <video controls style={{ maxWidth: "100%" }}>
                          {auction?.product_id?.video?.map((video, index) => (
                            <source key={index} src={video} type="video/mp4" />
                          ))}
                          Your browser does not support the video tag.
                        </video>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
              <Row>
                <Col md={6}>
                  <Card>
                    <Card.Body>
                      <Card.Title>Thông Tin Sản Phẩm</Card.Title>
                      <Form.Group className="mb-3">
                        <Form.Label>Tên sản phẩm</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Nhập tên sản phẩm"
                          readOnly={auctionId}
                          value={auction?.product_id?.name}
                        />
                      </Form.Group>
                      <Form.Group className="mb-3">
                        <Form.Label>Mô tả</Form.Label>
                        <Form.Control
                          as="textarea"
                          rows={3}
                          placeholder="Mô tả sản phẩm"
                          readOnly={auctionId}
                          value={auction?.product_id?.description}
                        />
                      </Form.Group>
                      <Form.Group className="mb-3">
                        <Form.Label>Giá khởi điểm</Form.Label>
                        <Form.Control
                          placeholder="Giá khởi điểm"
                          readOnly={auctionId}
                          value={formatCurrencyVND(auction?.starting_price)}
                        />
                      </Form.Group>
                    </Card.Body>
                  </Card>
                  <Card style={{ marginTop: "10px" }}>
                    <Card.Body>
                      <Card.Title>Số lượng người tham gia đấu giá</Card.Title>
                      <Form.Group className="mb-3">
                        <Form.Label>
                          Số lượng: {filterNumberMemberJoinRoom.length}
                        </Form.Label>
                      </Form.Group>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={6}>
                  <Card>
                    <Card.Body>
                      <Card.Title>Thông Tin Auction</Card.Title>
                      <Form.Group className="mb-3">
                        <Form.Label>Thong tin dau gia</Form.Label>
                        <Form.Control
                          as="textarea"
                          readOnly={auctionId}
                          rows={3}
                          placeholder="Thông tin đấu giá"
                          value={auction?.auctionInfo}
                        />
                      </Form.Group>
                      <Form.Group className="mb-3">
                        <Form.Label>Bước giá tối thiểu</Form.Label>
                        <Form.Control
                          readOnly={auctionId}
                          placeholder="Minimun Price Step"
                          value={formatCurrencyVND(auction?.price_step)}
                        />
                      </Form.Group>
                      <Form.Group className="mb-3">
                        <Form.Label>Thời gian bắt đầu đăng kí</Form.Label>
                        <Form.Control
                          type="datetime-local"
                          readOnly={auctionId}
                          value={
                            auction?.regitration_start_time
                              ? auction.regitration_start_time.substring(0, 16)
                              : ""
                          }
                        />
                      </Form.Group>

                      <Form.Group className="mb-3">
                        <Form.Label>Thời gian kết thúc đăng kí</Form.Label>
                        <Form.Control
                          type="datetime-local"
                          readOnly={auctionId}
                          value={
                            auction?.regitration_end_time
                              ? auction.regitration_end_time.substring(0, 16)
                              : ""
                          }
                        />
                      </Form.Group>

                      <Form.Group className="mb-3">
                        <Form.Label>Thời gian bắt đầu</Form.Label>
                        <Form.Control
                          type="datetime-local"
                          readOnly={auctionId}
                          value={
                            auction?.start_time
                              ? auction.start_time.substring(0, 16)
                              : ""
                          }
                        />
                      </Form.Group>

                      <Form.Group className="mb-3">
                        <Form.Label>Thời gian kết thúc</Form.Label>
                        <Form.Control
                          type="datetime-local"
                          readOnly={auctionId}
                          value={
                            auction?.end_time
                              ? auction.end_time.substring(0, 16)
                              : ""
                          }
                        />
                      </Form.Group>
                    </Card.Body>
                  </Card>
                </Col>
                <Col xs="auto" className="mt-2">
                  <Button variant="success" onClick={() => navigate(-1)}>
                    Back
                  </Button>
                </Col>
              </Row>
            </Form>
          </Card.Body>
        </Card>
      </Col>
    </Row>
    //       </CCardBody>
    //     </CCard>
    //   </CCol>
    // </CRow>
  );
};

export default AutionDetail;
