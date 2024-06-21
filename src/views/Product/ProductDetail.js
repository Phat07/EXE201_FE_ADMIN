import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Card, Row, Col, Button, Form, Carousel } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { actProductGetAsync } from "../../store/product/action";
const ProductDetail = () => {
  const { productId } = useParams(); // Lấy ID từ URL
  const navigate = useNavigate();
  const products = useSelector((state) => state.PRODUCT.products);
  console.log("Product: ", products);
  const token = localStorage.getItem("ACCESS_TOKEN");
  const dispatch = useDispatch();
  const [product, setProduct] = useState("");
  useEffect(() => {
    dispatch(actProductGetAsync(token));
  }, [dispatch, productId, token]);
  useEffect(() => {
    const item = products.find((i) => i._id === productId);
    setProduct(item);
  }, [productId, products]);
  console.log("ProductDetail: ", product);
  return (
    <Row>
      <Col xs={12}>
        <Card className="mb-4">
          <Card.Header>
            <strong>Thông tin chi tiết sản phẩm </strong>
          </Card.Header>
          <Card.Body>
            <Form>
              <Row className="mb-4">
                <Col md={6}>
                  <Card>
                    <Card.Body>
                      <Card.Title>Ảnh Sản Phẩm</Card.Title>
                      <Carousel>
                        {product?.image?.map((image, index) => (
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
                      {/* <div style={{ position: "relative", marginTop: "20px" }}>
                        <video controls style={{ maxWidth: "100%" }}>
                          <source src={product?.video} type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>
                      </div> */}
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
                          {product?.video?.map((video, index) => (
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
                <Col md={12}>
                  <Card>
                    <Card.Body>
                      <Card.Title>Thông Tin Sản Phẩm</Card.Title>
                      <Form.Group className="mb-3">
                        <Form.Label>Tên sản phẩm</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Nhập tên sản phẩm"
                          readOnly={productId}
                          value={product?.name}
                        />
                      </Form.Group>
                      <Form.Group className="mb-3">
                        <Form.Label>Mô tả</Form.Label>
                        <Form.Control
                          as="textarea"
                          rows={3}
                          placeholder="Mô tả sản phẩm"
                          readOnly={productId}
                          value={product?.description}
                        />
                      </Form.Group>
                    </Card.Body>
                  </Card>
                </Col>
                <Col xs="auto" className="mt-2">
                  <Button variant="success" onClick={() => navigate(-1)}>
                    Back
                  </Button>{" "}
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
