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
import { format } from "date-fns";
import PropTypes from "prop-types"; // Import PropTypes

const CustomTable = ({ data = [], onUpdate, onDelete }) => {
  const formatDate = (dateString) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    return format(date, "dd/MM/yyyy - HH:mm");
  };
  console.log("Data in table auction: ", data);
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
            <CTableHeaderCell>Host</CTableHeaderCell>
            <CTableHeaderCell>Regitration</CTableHeaderCell>
            <CTableHeaderCell>Start Time</CTableHeaderCell>
            <CTableHeaderCell>End Time</CTableHeaderCell>
            <CTableHeaderCell>Status</CTableHeaderCell>
            <CTableHeaderCell>Actions</CTableHeaderCell>
          </CTableRow>
        </CTableHead>
        <CTableBody>
          {data?.map((item, index) => (
            <CTableRow key={index}>
              <CTableDataCell>{index + 1}</CTableDataCell>
              <CTableDataCell>{item?.name}</CTableDataCell>
              <CTableDataCell>{item?.host_id?.fullName}</CTableDataCell>
              <CTableDataCell>
                {formatDate(item?.regitration_start_time)} -{" "}
                {formatDate(item?.regitration_end_time)}
              </CTableDataCell>
              <CTableDataCell>{formatDate(item?.start_time)}</CTableDataCell>
              <CTableDataCell>{formatDate(item?.end_time)}</CTableDataCell>
              <CTableDataCell>
                <CBadge color="danger">{item?.status}</CBadge>
              </CTableDataCell>
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

CustomTable.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      status: PropTypes.string, // Giả sử rằng status cũng là một phần của data object
    })
  ), // Không còn là isRequired
  onUpdate: PropTypes.func, // Không bắt buộc
  onDelete: PropTypes.func, // Không bắt buộc
};

export default CustomTable;
