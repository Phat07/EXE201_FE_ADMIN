import React, { useState } from "react";
import {
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
  CButton,
  CRow,
} from "@coreui/react";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { format } from "date-fns";
import PropTypes from "prop-types";

const CustomTable = ({ data = [], currentPage, itemsPerPage }) => {
  console.log("data: ", data);

  return (
    <>
      <CRow>
        <Col xs="auto">
          <Form className="d-flex mb-3" role="search">
            <Form.Control
              className="me-2"
              type="search"
              placeholder="Search Report"
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
              <CTableHeaderCell>Salon Name</CTableHeaderCell>
              <CTableHeaderCell>Customer Name</CTableHeaderCell>
              <CTableHeaderCell>Salon Owner Name</CTableHeaderCell>
              <CTableHeaderCell>Create Time</CTableHeaderCell>
              <CTableHeaderCell>Confirm Time</CTableHeaderCell>
              <CTableHeaderCell>Actions</CTableHeaderCell>
            </CTableRow>
          </CTableHead>
          <CTableBody>
            {data?.map((item, index) => (
              <CTableRow key={index}>
                <CTableDataCell>{index + 1}</CTableDataCell>
                <CTableDataCell>{item?.salonInformation?.name}</CTableDataCell>
                <CTableDataCell>{item?.customer?.fullName}</CTableDataCell>
                <CTableDataCell>{item?.salonOwner?.fullName}</CTableDataCell>
                <CTableDataCell>
                  {format(new Date(item?.createDate), "dd/MM/yyyy - hh:mm aa")}
                </CTableDataCell>
                <CTableDataCell>
                  {format(new Date(item?.timeConfirm), "dd/MM/yyyy - hh:mm aa")}
                </CTableDataCell>
                <CTableDataCell>
                  <CButton color="success">Detail</CButton>
                </CTableDataCell>
              </CTableRow>
            ))}
          </CTableBody>
        </CTable>
      </CRow>
    </>
  );
};

CustomTable.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      status: PropTypes.string,
    })
  ),
  currentPage: PropTypes.element,
  itemsPerPage: PropTypes.element,
};

export default CustomTable;
