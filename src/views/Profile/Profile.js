import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { useSelector } from "react-redux";

const Profile = () => {
  // Giả sử đây là thông tin người dùng lấy từ API hoặc State Management
  const user = useSelector((state) => state.USER.currentUser);

  return (
    <Container>
      <Row className="mt-5">
        {/* Card bên phải */}
        <Col md={4}>
          <Card>
            <Card.Img variant="top" src={user?.image} />
            {/* <Card.Body>
              <Card.Title>User name: {user?.username}</Card.Title>
              <Card.Text>{user?.email}</Card.Text>
            </Card.Body> */}
          </Card>
        </Col>
        {/* Card bên trái */}
        <Col md={8}>
          <Card>
            <Card.Body>
              <Card.Title>Thông Tin Cá Nhân</Card.Title>
              <Card.Text>
                <strong>User name:</strong> {user?.username}
              </Card.Text>
              <Card.Text>
                <strong>Họ và Tên:</strong> {user?.fullName}
              </Card.Text>
              <Card.Text>
                <strong>Giới tính:</strong> {user?.gender}
              </Card.Text>
              <Card.Text>
                <strong>Email:</strong> {user?.email}
              </Card.Text>
              <Card.Text>
                <strong>Địa chỉ:</strong> {user?.address}
              </Card.Text>
              <Card.Text>
                <strong>Điện thoại:</strong> {user?.phone}
              </Card.Text>
              <Card.Text>
                <strong>Role:</strong> {user?.role_id?.title}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Profile;
