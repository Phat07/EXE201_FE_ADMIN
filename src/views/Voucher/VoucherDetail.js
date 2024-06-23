import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Card, Row, Col, Button, Form, Carousel } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { actProductGetAsync } from "../../store/product/action";
import { getVoucherById } from "src/store/voucher/action";
const ProductDetail = () => {
  const { productId } = useParams(); // Lấy ID từ URL
  const navigate = useNavigate();
  const Detailvoucher = useSelector((state) => state.VOUCHER.Detailvoucher);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getVoucherById(productId));
  }, [dispatch, productId]);

  const dateModify = (date) => {
    if (!date) return "";
    const [datePart, timePart] = date.split("T");
    const timeWithoutSeconds = timePart.split(":").slice(0, 2).join(":");
    return `${datePart} - ${timeWithoutSeconds}`;
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(amount);
  };

  return (
    <Row>
      <Col xs={12}>
        <Card className="mb-4">
          <Card.Header>
            <strong>Thông tin chi tiết Voucher</strong>
          </Card.Header>
          <Card.Body>
            <Form>
              <Row>
                <Col md={12}>
                  <Card>
                    <Card.Body>
                      <Card.Title>Thông Tin Voucher</Card.Title>
                      <Form.Group className="mb-3">
                        <Form.Label>Mã code</Form.Label>
                        <Form.Control
                          type="text"
                          readOnly
                          value={Detailvoucher?.code}
                        />
                      </Form.Group>
                      <Form.Group className="mb-3">
                        <Form.Label>Mô tả</Form.Label>
                        <Form.Control
                          type="text"
                          readOnly
                          value={Detailvoucher?.description}
                        />
                      </Form.Group>
                      <Form.Group className="mb-3">
                        <Form.Label>Giá tối thiểu</Form.Label>
                        <Form.Control
                          type="text"
                          readOnly
                          value={formatCurrency(
                            Detailvoucher?.minimumOrderAmount
                          )}
                        />
                      </Form.Group>
                      <Form.Group className="mb-3">
                        <Form.Label>Ngày hết hạn</Form.Label>
                        <Form.Control
                          type="text"
                          readOnly
                          value={dateModify(Detailvoucher?.expiryDate)}
                        />
                      </Form.Group>
                      <Form.Group className="mb-3">
                        <Form.Label>Ngày tạo</Form.Label>
                        <Form.Control
                          type="text"
                          readOnly
                          value={dateModify(Detailvoucher?.createdDate)}
                        />
                      </Form.Group>
                      {Detailvoucher?.modifiedDate && (
                        <Form.Group className="mb-3">
                          <Form.Label>Ngày sửa đổi</Form.Label>
                          <Form.Control
                            type="text"
                            readOnly
                            value={dateModify(Detailvoucher?.modifiedDate)}
                          />
                        </Form.Group>
                      )}
                      <Form.Group className="mb-3">
                        <Form.Label>Phần trăm giảm giá</Form.Label>
                        <Form.Control
                          type="text"
                          readOnly
                          value={`${Detailvoucher?.discountPercentage}%`}
                        />
                      </Form.Group>
                      <Form.Group className="mb-3">
                        <Form.Label>Trạng thái kích hoạt</Form.Label>
                        <Form.Control
                          type="text"
                          readOnly
                          value={Detailvoucher?.isActive ? "Có" : "Không"}
                        />
                      </Form.Group>
                    </Card.Body>
                  </Card>
                </Col>
                <Col xs="auto" className="mt-2">
                  <Button variant="success" onClick={() => navigate(-1)}>
                    Quay lại
                  </Button>
                </Col>
              </Row>
            </Form>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default ProductDetail;
