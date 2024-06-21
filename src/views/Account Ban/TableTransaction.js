import React from "react";
import {
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
  CButton,
  CBadge,
  CRow,
} from "@coreui/react";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import PropTypes from "prop-types"; // Import PropTypes
import { format } from "date-fns";

const TableTrannsacton = ({ data = [], onConfirm, onDelete }) => {
  // Cung cấp giá trị mặc định cho data
  console.log("check data: ", data);
  const formatDate = (dateString) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    return format(date, "dd/MM/yyyy - HH:mm");
  };
  const showPaid = data.some((item) => item.status === false);
  const showUnPaid = data.some((item) => item.status === true);
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
            <CTableHeaderCell>Name</CTableHeaderCell>
            <CTableHeaderCell>Reason Ban</CTableHeaderCell>
            <CTableHeaderCell>Date Send</CTableHeaderCell>
            {showPaid && <CTableHeaderCell>Date Confirm</CTableHeaderCell>}
            {showPaid && <CTableHeaderCell>Note</CTableHeaderCell>}
            <CTableHeaderCell>Status</CTableHeaderCell>
            {showUnPaid && <CTableHeaderCell>Actions</CTableHeaderCell>}
          </CTableRow>
        </CTableHead>
        <CTableBody>
          {data?.map((item, index) => (
            <CTableRow key={index}>
              <CTableDataCell>{index + 1}</CTableDataCell>
              <CTableDataCell>{item?.user_id?.username}</CTableDataCell>
              <CTableDataCell>{item.description}</CTableDataCell>
              <CTableDataCell>
                {formatDate(item?.create_timestamp)}
              </CTableDataCell>
              {item.status === false && (
                <CTableDataCell>
                  {formatDate(item?.update_timestamp)}
                </CTableDataCell>
              )}
              {item.status === false && (
                <CTableDataCell>{item.note}</CTableDataCell>
              )}
              <CTableDataCell>
                {item.status === true ? (
                  <CBadge color="warning">Not banned yet</CBadge>
                ) : (
                  <CBadge color="success">banned</CBadge>
                )}
              </CTableDataCell>
              {onConfirm && (
                <CTableDataCell>
                  <CButton color="success" onClick={() => onConfirm(item)}>
                    Confirm
                  </CButton>

                  {/* {onDelete && (
                  <CButton color="danger" onClick={() => onDelete(item)}>
                    Delete
                  </CButton>
                )} */}
                </CTableDataCell>
              )}
            </CTableRow>
          ))}
        </CTableBody>
      </CTable>
    </CRow>
  );
};

TableTrannsacton.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      user_id: PropTypes.shape({
        fullName: PropTypes.string,
      }),
      description: PropTypes.string,
      status: PropTypes.bool,
    })
  ),
  onConfirm: PropTypes.func,
  onDelete: PropTypes.func,
};

export default TableTrannsacton;
