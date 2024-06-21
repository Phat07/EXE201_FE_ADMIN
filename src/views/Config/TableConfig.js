import React, { useEffect, useState } from "react";
import {
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
  CButton,
  CRow,
  CBadge,
} from "@coreui/react";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import PropTypes from "prop-types"; // Import PropTypes
import { format } from "date-fns";
// import { actAllUserGetAsync } from "src/store/user/action";
// import { useDispatch, useSelector } from "react-redux";

const TableConfig = (props) => {
  const { data = [], onUpdate, onDelete } = props;
  // const [userEditData, setUserEditData] = useState();
  // const token = localStorage.getItem("ACCESS_TOKEN");
  // const allUser = useSelector((state) => state.USER.allUser);
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(actAllUserGetAsync(token));
  // }, [dispatch, token]);
  // useEffect(() => {
  //   const item = allUser.find(
  //     (i) => i.wallet_id.user_id === data?.wallet_id?.user_id
  //   );
  //   setUserEditData(item);
  // }, [allUser, data?.wallet_id?.user_id]);
  const formatDate = (dateString) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    return format(date, "dd/MM/yyyy - HH:mm");
  };
  return (
    <CRow>
      <Col xs="auto">
        {" "}
        {/* Sử dụng xs="auto" để ô chỉ chiếm không gian cần thiết */}
        <Form className="d-flex mb-3" role="search">
          <Form.Control
            className="me-2"
            type="search"
            placeholder="Search Name Auction"
            aria-label="Search"
          />
          <Button variant="outline-success" type="submit">
            Search
          </Button>
        </Form>
      </Col>
      <CTable align="middle" className="mb-0 border" hover responsive>
        <CTableHead color="light">
          <CTableRow>
            <CTableHeaderCell>ID</CTableHeaderCell>
            <CTableHeaderCell>Type</CTableHeaderCell>
            <CTableHeaderCell>Amount</CTableHeaderCell>
            <CTableHeaderCell>Description</CTableHeaderCell>
            <CTableHeaderCell>Actions</CTableHeaderCell>
          </CTableRow>
        </CTableHead>
        <CTableBody>
          {data.map((item, index) => (
            <CTableRow key={index}>
              <CTableDataCell>{index + 1}</CTableDataCell>
              <CTableDataCell>
                {item?.type_config === "Join in auction" ? (
                  <CBadge color="success">Join in auction</CBadge>
                ) : (
                  <CBadge color="success">Register auction</CBadge>
                )}
              </CTableDataCell>
              <CTableDataCell>{item?.money}</CTableDataCell>
              <CTableDataCell>{item?.description}</CTableDataCell>
              {/* <CTableDataCell>{formatDate(item?.timestamp)}</CTableDataCell> */}
              <CTableDataCell>
                {onUpdate && (
                  <CButton color="success" onClick={() => onUpdate(item)}>
                    Detail
                  </CButton>
                )}{" "}
                {onDelete && (
                  <CButton color="danger" onClick={() => onDelete(item)}>
                    Delete
                  </CButton>
                )}
              </CTableDataCell>
            </CTableRow>
          ))}
        </CTableBody>
      </CTable>
    </CRow>
  );
};

TableConfig.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      avatar: PropTypes.string, // Assuming avatar, registered, role, and status are optional
      registered: PropTypes.string,
      role: PropTypes.string,
      status: PropTypes.bool,
    })
  ),
  onUpdate: PropTypes.func,
  onDelete: PropTypes.func,
};

export default TableConfig;
