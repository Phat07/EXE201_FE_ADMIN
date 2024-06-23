import React from "react";
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
import { useNavigate } from "react-router-dom";

const TableProduct = (props) => {
  const { data = [], onUpdate, onDelete } = props;
  const navigate = useNavigate();
  const dateModify = (date) => {
    if (date) {
      const [datePart, timePart] = date?.split("T");
      const timeWithoutSeconds = timePart?.split(":").slice(0, 2).join(":");
      return `${datePart} - ${timeWithoutSeconds}`;
    }
  };

  return (
    <CRow>
      <Col xs="auto">
        <Form className="d-flex mb-3" role="search">
          {/* <Form.Control
            className="me-2"
            type="search"
            placeholder="Search Name Auction"
            aria-label="Search"
          /> */}
          <Button
            variant="outline-success"
            type="submit"
            onClick={() => {
              navigate(`/create-voucher`);
            }}
          >
            Create New Voucher
          </Button>
        </Form>
      </Col>
      <CTable align="middle" className="mb-0 border" hover responsive>
        <CTableHead color="light">
          <CTableRow>
            <CTableHeaderCell>ID</CTableHeaderCell>
            <CTableHeaderCell>Name</CTableHeaderCell>
            <CTableHeaderCell>Description</CTableHeaderCell>
            <CTableHeaderCell>Created Date</CTableHeaderCell>
            <CTableHeaderCell>Modified Date</CTableHeaderCell>
            <CTableHeaderCell>Expiry Date</CTableHeaderCell>
            <CTableHeaderCell>status</CTableHeaderCell>
            <CTableHeaderCell>Actions</CTableHeaderCell>
          </CTableRow>
        </CTableHead>
        <CTableBody>
          {data.map((item, index) => (
            <CTableRow key={index}>
              <CTableDataCell>{index + 1}</CTableDataCell>
              <CTableDataCell>{item?.code}</CTableDataCell>
              <CTableDataCell>{item?.description}</CTableDataCell>
              <CTableDataCell>{dateModify(item?.createdDate)}</CTableDataCell>
              <CTableDataCell>{dateModify(item?.modifiedDate)}</CTableDataCell>
              <CTableDataCell>{dateModify(item?.expiryDate)}</CTableDataCell>
              <CTableDataCell>
                {item?.isActive === false ? (
                  <CBadge color="danger">Không hoạt động</CBadge>
                ) : (
                  <CBadge color="success">Hoạt động</CBadge>
                )}
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

TableProduct.propTypes = {
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

export default TableProduct;
