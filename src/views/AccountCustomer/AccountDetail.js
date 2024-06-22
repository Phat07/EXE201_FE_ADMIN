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
import ChangeTabAution from "../Aution/ChangeTabAution";
import ModalConfirmDelete from "../Aution/ModalConfirmDelete";
import TableAution from "../Aution/TableAution";
import { actAllUserGetAsync } from "src/store/user/action";
import { actProductGetByUserIdAsync } from "src/store/product/action";
import {
  actNotYetAuctionGetIDAsync,
  actAboutToAuctionGetIDAsync,
  actAuctioningAuctionGetIDAsync,
  actAuctionedAuctionGetIDAsync,
  actNotYetAuctionGetMemberAsync,
  actAboutToAuctionGetMemberAsync,
  actAuctioningAuctionGetMemberAsync,
  actAuctionedAuctionGetMemberAsync,
} from "src/store/auction/action";
import CustomTable from "../Aution/TableAution";
import TableProduct from "../Product/TableProduct";
import { useDispatch, useSelector } from "react-redux";
import { actRequestGetByUserIdAsync } from "src/store/request/action";
import { format } from "date-fns";
import { actGetWalletHistoryByUserAsync } from "src/store/wallet/action";
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
  // const [notYet, setNotYet] = useState();
  // const [aboutTo, setAboutTo] = useState();
  // const [auctioning, setAuctioning] = useState();
  // const [auctined, setAuctined] = useState();
  const token = localStorage.getItem("ACCESS_TOKEN");
  const allUser = useSelector((state) => state.USER.allUser);
  // const products = useSelector((state) => state.PRODUCT.products);
  // const notYetAuction = useSelector((state) => state.AUCTION.notYetAuctionId);
  // const aboutToAuction = useSelector((state) => state.AUCTION.aboutToAuctionId);
  // const auctioningAuction = useSelector((state) => state.AUCTION.auctioningId);
  // const auctionedAuction = useSelector((state) => state.AUCTION.auctionedId);
  // const notYetAuctionMember = useSelector(
  //   (state) => state.AUCTION.notYetAuctionMember
  // );
  // const aboutToAuctionMember = useSelector(
  //   (state) => state.AUCTION.aboutToAuctionMember
  // );
  // const auctioningAuctionMember = useSelector(
  //   (state) => state.AUCTION.auctioningMember
  // );
  // const auctionedAuctionMember = useSelector(
  //   (state) => state.AUCTION.auctionedMember
  // );
  // const allRequestId = useSelector((state) => state.REQUEST.allRequestId);
  // const historyMoney = useSelector((state) => state.WALLET.walletHistory);
  const dispatch = useDispatch();
  useEffect(() => {
    // dispatch(actAllUserGetAsync(token));
    // dispatch(actProductGetByUserIdAsync(userId, token));
    // dispatch(actNotYetAuctionGetIDAsync(userId, token));
    // dispatch(actAboutToAuctionGetIDAsync(userId, token));
    // dispatch(actAuctioningAuctionGetIDAsync(userId, token));
    // dispatch(actAuctionedAuctionGetIDAsync(userId, token));
    // dispatch(actNotYetAuctionGetMemberAsync(userId, token));
    // dispatch(actAboutToAuctionGetMemberAsync(userId, token));
    // dispatch(actAuctioningAuctionGetMemberAsync(userId, token));
    // dispatch(actAuctionedAuctionGetMemberAsync(userId, token));
    // dispatch(actAllUserGetAsync(token));
    // dispatch(actRequestGetByUserIdAsync(userId, token));
    // dispatch(actGetWalletHistoryByUserAsync(userId, token));
  }, [dispatch, userId]);
  // useEffect(() => {
  //   const item = allUser.find((i) => i._id === userId);
  //   // const notYet = notYetAuction.find((i) => i.host_id === userId);
  //   // const aboutTo = aboutToAuction.find((i) => i.host_id === userId);
  //   // const auctioning = auctioningAuction.find((i) => i.host_id === userId);
  //   // const auctined = auctionedAuction.find((i) => i.host_id === userId);
  //   setUserEditData(item);
  //   // setNotYet(notYet);
  //   // setAboutTo(aboutTo);
  //   // setAuctioning(auctioning);
  //   // setAuctined(auctined);
  // }, [allUser, userId]);
  const [showDelete, setShowDelete] = useState(false);
  const [deleteData, setDeleteData] = useState({});
  console.log("Item data ", userEditData);
  // const handleDelete = (aution) => {
  //   console.log("Delete item with id:", aution.id);
  //   setDeleteData(aution);
  //   setShowDelete(true);
  // };
  const handleDetailAuction = (aution) => {
    // Chuyển hướng đến trang UpdateUser và truyền dữ liệu userEditData
    navigate(`/aution-detail/${aution._id}`);
    console.log("Update user at id:", aution.id);
  };

  const handleDetailProduct = (user) => {
    console.log("Update item with id:", user._id);
    navigate(`/product-detail/${user._id}`);
  };

  const handleUpdateUser = (aution) => {
    // Chuyển hướng đến trang UpdateUser và truyền dữ liệu userEditData
    // navigate(`/aution-detail/${aution.id}`);
    // console.log("Update user at id:", aution.id);
  };
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
                      src={userEditData?.image}
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
                    <Card.Title>User Name: {userEditData?.username}</Card.Title>
                    <Card.Text>{userEditData?.email}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              {/* Card bên trái */}
              <Col md={8}>
                <Card>
                  <Card.Body>
                    <Card.Title>Thông Tin Cá Nhân</Card.Title>
                    <Card.Text>
                      <strong>Họ và Tên:</strong> {userEditData?.fullName}
                    </Card.Text>
                    <Card.Text>
                      <strong>Giới tính:</strong> {userEditData?.gender}
                    </Card.Text>
                    <Card.Text>
                      <strong>Email:</strong> {userEditData?.email}
                    </Card.Text>
                    <Card.Text>
                      <strong>Địa chỉ:</strong> {userEditData?.address}
                    </Card.Text>
                    <Card.Text>
                      <strong>Điện thoại:</strong> {userEditData?.phone}
                    </Card.Text>
                    <Card.Text>
                      <strong>Role:</strong> {userEditData?.role_id?.title}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </CCardBody>
        </CCard>
      </CCol>
      {/* {userEditData?.role_id?.title === "HOST" && (
        <CCol xs={12}>
          <CCard className="mb-4">
            <CCardHeader>
              <strong>Thông tin chi tiết sản phẩm của người dùng </strong>
            </CCardHeader>
            <CCardBody>
              <p className="text-medium-emphasis small">
                Hiện thị các sản phẩm mà người dùng đã tạo
              </p>
              <TableProduct
                data={products}
                onUpdate={handleDetailProduct}
                // onDelete={handleDelete}
              />
            </CCardBody>
          </CCard>
        </CCol>
      )} */}

      {/* {userEditData?.role_id?.title === "HOST" && (
        <CCol xs={12}>
          <CCard className="mb-4">
            <CCardHeader>
              <strong>Thông tin chi tiết đấu giá của người dùng</strong>
            </CCardHeader>
            <CCardBody>
              <p className="text-medium-emphasis small">
                Hiện thị các đấu giá mà người dùng đã tạo
              </p>
              <ChangeTabAution
                chuaDienRaContent={
                  <div>
                    {
                      <TableAution
                        data={notYetAuction}
                        onUpdate={handleDetailAuction}
                      />
                    }
                  </div>
                }
                sapDienRaContent={
                  <div>
                    {
                      <TableAution
                        data={aboutToAuction}
                        onUpdate={handleDetailAuction}
                      />
                    }
                  </div>
                }
                dangDienRaContent={
                  <div>
                    {
                      <TableAution
                        data={auctioningAuction}
                        onUpdate={handleDetailAuction}
                      />
                    }
                  </div>
                }
                daDienRaContent={
                  <div>
                    {
                      <TableAution
                        data={auctionedAuction}
                        onUpdate={handleDetailAuction}
                      />
                    }
                  </div>
                }
              />
            </CCardBody>
          </CCard>
        </CCol>
      )} */}

      {/* {userEditData?.role_id?.title === "MEMBER" && (
        <CCol xs={12}>
          <CCard className="mb-4">
            <CCardHeader>
              <strong>Aution Member</strong>
            </CCardHeader>
            <CCardBody>
              <p className="text-medium-emphasis small">
                Hiện thị các đấu giá mà user đã đăng kí
              </p>
              <ChangeTabAution
                chuaDienRaContent={
                  <div>
                    {
                      <TableAution
                        data={notYetAuctionMember}
                        onUpdate={handleDetailAuction}
                      />
                    }
                  </div>
                }
                sapDienRaContent={
                  <div>
                    {
                      <TableAution
                        data={aboutToAuctionMember}
                        onUpdate={handleDetailAuction}
                      />
                    }
                  </div>
                }
                dangDienRaContent={
                  <div>
                    {
                      <TableAution
                        data={auctioningAuctionMember}
                        onUpdate={handleDetailAuction}
                      />
                    }
                  </div>
                }
                daDienRaContent={
                  <div>
                    {
                      <TableAution
                        data={auctionedAuctionMember}
                        onUpdate={handleDetailAuction}
                      />
                    }
                  </div>
                }
              />
            </CCardBody>
          </CCard>
        </CCol>
      )} */}
      {/* <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Thông tin yêu cầu của người dùng </strong>
          </CCardHeader>
          <CCardBody style={{ maxHeight: "400px", overflowY: "auto" }}>
            <p className="text-medium-emphasis small">
              Hiện thị các yêu cầu mà người dùng đã tạo
            </p>
            <CTable striped bordered hover responsive>
              <CTableHead>
                <CTableRow>
                  <CTableHeaderCell>ID</CTableHeaderCell>
                  <CTableHeaderCell>Name</CTableHeaderCell>
                  <CTableHeaderCell>Money</CTableHeaderCell>
                  <CTableHeaderCell>Date Send</CTableHeaderCell>
                  <CTableHeaderCell>Date Confirm</CTableHeaderCell>
                  <CTableHeaderCell>Note</CTableHeaderCell>
                  <CTableHeaderCell>Status</CTableHeaderCell>
                </CTableRow>
              </CTableHead>
              <CTableBody>
                {allRequestId?.map((item, index) => (
                  <CTableRow key={index}>
                    <CTableDataCell>{index + 1}</CTableDataCell>
                    <CTableDataCell>{item?.user_id?.fullName}</CTableDataCell>
                    <CTableDataCell>{item.description}</CTableDataCell>
                    <CTableDataCell>
                      {formatDate(item?.create_timestamp)}
                    </CTableDataCell>
                    <CTableDataCell>
                      {formatDate(item?.update_timestamp)}
                    </CTableDataCell>
                    <CTableDataCell> {item.note}</CTableDataCell>
                    <CTableDataCell>
                      {" "}
                      {item.status === true ? (
                        <CBadge color="warning">chưa xử lý</CBadge>
                      ) : (
                        <CBadge color="success">đã xử lý</CBadge>
                      )}
                    </CTableDataCell>
                  </CTableRow>
                ))}
              </CTableBody>
            </CTable>
          </CCardBody>
        </CCard>
      </CCol> */}
      {/* <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Thông tin lịch sử ví tiền của người dùng </strong>
          </CCardHeader>
          <CCardBody style={{ maxHeight: "400px", overflowY: "auto" }}>
            <p className="text-medium-emphasis small">
              Hiện thị lịch sử ví tiền mà người dùng đã sử dụng trong hệ thống
            </p>
            <CTable striped bordered hover responsive>
              <CTableHead>
                <CTableRow>
                  <CTableHeaderCell>ID</CTableHeaderCell>
                  <CTableHeaderCell>Money</CTableHeaderCell>
                  <CTableHeaderCell>Date</CTableHeaderCell>
                </CTableRow>
              </CTableHead>
              <CTableBody>
                {historyMoney?.map((item, index) => (
                  <CTableRow key={index}>
                    <CTableDataCell>{index + 1}</CTableDataCell>
                    <CTableDataCell
                      style={{
                        color: `${item?.type === "deposit" ? "green" : "red"}`,
                      }}
                    >
                      {item?.type === "deposit" ? "+" : "-"}
                      {formatCurrencyVND(item?.amount)}
                    </CTableDataCell>
                    <CTableDataCell>
                      {formatDate(item?.timestamp)}
                    </CTableDataCell>
                  </CTableRow>
                ))}
              </CTableBody>
            </CTable>
          </CCardBody>
        </CCard>
      </CCol> */}
      {/* <ModalConfirmDelete
        showProp={showDelete}
        handleClose={() => {
          setShowDelete(false);
        }}
        deleteData={deleteData}
      /> */}
    </CRow>
  );
};

export default DetailUser;
