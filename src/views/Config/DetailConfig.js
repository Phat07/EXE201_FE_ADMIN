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
  actConfigPutAsync,
  actConfigGetAsync,
} from "../../store/config/action";
import { toast } from "react-toastify";
const DetailConfig = () => {
  const [config, setConfig] = useState();
  const [money, setMoney] = useState();
  const { configId } = useParams(); // Lấy ID từ URL
  const navigate = useNavigate();
  const allConfig = useSelector((state) => state.CONFIG.allConfig);
  const token = localStorage.getItem("ACCESS_TOKEN");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actConfigGetAsync(token));
  }, [dispatch, token]);
  useEffect(() => {
    const item = allConfig.find((i) => i._id === configId);
    setConfig(item);
    setMoney(item?.money);
  }, [allConfig, configId]);
  const handleUpdate = async (e) => {
    e.preventDefault();

    if (!+money) {
      toast.error("Vui lòng điền số tiền để add");
      return;
    }

    let data = {
      money: money,
    };
    dispatch(actConfigPutAsync(configId, data, token));
    toast.success(`Bạn đã thay đổi ${config.type_config} thành công !`);
    setMoney();
    navigate("/config");
  };
  console.log("Config Detail: ", config);
  return (
    // <CRow>
    //   <CCol xs={12}>
    //     <CCard className="mb-4">
    //       <CCardBody>
    <Row>
      <Col xs={12}>
        <Card className="mb-4">
          <Card.Header>
            <strong>Thông Tin Chi Tiết Cấu hình với ID {configId} </strong>
          </Card.Header>
          <Card.Body>
            <Form>
              <Row>
                <Col md={12}>
                  <Card>
                    <Card.Body>
                      <Card.Title>Thông Tin Cấu hình</Card.Title>
                      <Form.Group className="mb-3">
                        <Form.Label>Kiểu cấu hình</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Nhập kiểu cấu hình"
                          readOnly={configId}
                          value={config?.type_config}
                        />
                      </Form.Group>
                      <Form.Group className="mb-3">
                        <Form.Label>Số tiền</Form.Label>
                        <Form.Control
                          type="number"
                          placeholder="Số tiền"
                          // readOnly={configId}
                          value={money}
                          onChange={(e) => setMoney(e.target.value)}
                        />
                      </Form.Group>
                      <Form.Group className="mb-3">
                        <Form.Label>Mô tả</Form.Label>
                        <Form.Control
                          type="textarea"
                          rows={3}
                          placeholder="Mô tả"
                          readOnly={configId}
                          value={config?.description}
                        />
                      </Form.Group>
                    </Card.Body>
                  </Card>
                </Col>
                <Col xs="auto" className="mt-2">
                  <Button variant="success" onClick={() => navigate(-1)}>
                    Back
                  </Button>{" "}
                  <Button variant="warning" onClick={handleUpdate}>
                    Update Config
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

export default DetailConfig;
