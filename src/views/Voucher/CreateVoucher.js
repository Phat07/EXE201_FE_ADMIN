import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Card, Row, Col, Button, Form, Carousel } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { actProductGetAsync } from "../../store/product/action";
import { createVoucher, getVoucherById } from "src/store/voucher/action";
const CreateVoucher = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [voucherData, setVoucherData] = useState({
    salonInformationId: null,
    description: "",
    minimumOrderAmount: "",
    discountPercentage: "",
    expiryDate: "",
    createdDate: new Date().toISOString(),
    modifiedDate: null,
    isSystemCreated: true,
    isActive: true,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setVoucherData({ ...voucherData, [name]: value });
  };

  const handleSubmit = () => {
    const { description, minimumOrderAmount, discountPercentage, expiryDate } =
      voucherData;

    // Kiểm tra nếu các trường đều đã điền
    if (description && minimumOrderAmount && discountPercentage && expiryDate) {
      // Kiểm tra nếu expiryDate lớn hơn ngày hiện tại
      const currentDate = new Date();
      const expiryDateObject = new Date(expiryDate);

      if (expiryDateObject > currentDate) {
        dispatch(createVoucher(voucherData, navigate));
      } else {
        alert("Ngày hết hạn phải lớn hơn ngày hiện tại!");
      }
    } else {
      alert("Vui lòng điền đầy đủ thông tin!");
    }
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
            <strong>Tạo Voucher cho hệ thống</strong>
          </Card.Header>
          <Card.Body>
            <Form>
              <Row>
                <Col md={12}>
                  <Card>
                    <Card.Body>
                      <Card.Title>Thông Tin Voucher</Card.Title>
                      <Form.Group className="mb-3">
                        <Form.Label>Mô tả</Form.Label>
                        <Form.Control
                          type="text"
                          name="description"
                          value={voucherData.description}
                          onChange={handleChange}
                        />
                      </Form.Group>
                      <Form.Group className="mb-3">
                        <Form.Label>Giá tối thiểu</Form.Label>
                        <Form.Control
                          type="number"
                          name="minimumOrderAmount"
                          value={voucherData.minimumOrderAmount}
                          onChange={handleChange}
                        />
                      </Form.Group>
                      <Form.Group className="mb-3">
                        <Form.Label>Phần trăm giảm giá</Form.Label>
                        <Form.Control
                          type="number"
                          name="discountPercentage"
                          value={voucherData.discountPercentage}
                          onChange={handleChange}
                        />
                      </Form.Group>
                      <Form.Group className="mb-3">
                        <Form.Label>Ngày hết hạn</Form.Label>
                        <Form.Control
                          type="datetime-local"
                          name="expiryDate"
                          value={voucherData.expiryDate}
                          onChange={handleChange}
                        />
                      </Form.Group>
                      <Form.Group className="mb-3">
                        <Form.Label>Trạng thái kích hoạt</Form.Label>
                        <Form.Check
                          type="checkbox"
                          label="Kích hoạt"
                          name="isActive"
                          checked={voucherData.isActive}
                          onChange={(e) =>
                            setVoucherData({
                              ...voucherData,
                              isActive: e.target.checked,
                            })
                          }
                        />
                      </Form.Group>
                    </Card.Body>
                  </Card>
                </Col>
                <Col xs="auto" className="mt-2">
                  <Button variant="success" onClick={handleSubmit}>
                    Submit
                  </Button>
                  <Button
                    variant="secondary"
                    onClick={() => navigate(-1)}
                    className="ms-2"
                  >
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

export default CreateVoucher;
