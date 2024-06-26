import React, { useState } from "react";
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
  CModal,
  CModalHeader,
  CModalTitle,
  CModalBody,
  CModalFooter,
  CFormSelect,
  CFormInput,
} from "@coreui/react";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { format } from "date-fns";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { fetchUpdateStatusBySalon } from "src/store/salon/action";

const CustomTable = ({
  data = [],
  onUpdate,
  onDelete,
  currentPage,
  itemsPerPage,
}) => {
  const [visible, setVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [status, setStatus] = useState("");
  const [content, setContent] = useState("");
  const currentUser = useSelector((state) => state.USER.currentUser);
  console.log("current", currentUser);
  const dispatch = useDispatch();
  const formatDate = (dateString) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    return format(date, "dd/MM/yyyy - HH:mm");
  };

  const handleStatusChangeClick = (item) => {
    setSelectedItem(item);
    setStatus(item?.status || "");
    setVisible(true);
  };
  console.log("item", selectedItem);

  const handleModalSubmit = () => {
    const id = selectedItem?.id;
    const updatedItem = {
      salonInformationId: id,
      status,
      reasonReject: content,
      adminId: currentUser?.id,
    };
    dispatch(fetchUpdateStatusBySalon(updatedItem, currentPage, itemsPerPage));
    console.log("update", updatedItem);
    // onUpdate && onUpdate(updatedItem);
    setContent("");
    setVisible(false);
  };
  console.log("data: ", data);


  return (
    <>
      <CRow>
        <Col xs="auto">
          <Form className="d-flex mb-3" role="search">
            <Form.Control
              className="me-2"
              type="search"
              placeholder="Search Name Salon"
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
              <CTableHeaderCell>Address</CTableHeaderCell>
              <CTableHeaderCell>Description</CTableHeaderCell>
              <CTableHeaderCell>Avatar</CTableHeaderCell>
              {/* <CTableHeaderCell>End Time</CTableHeaderCell> */}
              <CTableHeaderCell>Status</CTableHeaderCell>
              {data[0]?.status === "PENDING" && (
                <CTableHeaderCell>Change Status</CTableHeaderCell>
              )}
              <CTableHeaderCell>Actions</CTableHeaderCell>
            </CTableRow>
          </CTableHead>
          <CTableBody>
            {data?.map((item, index) => (
              <CTableRow key={index}>
                <CTableDataCell>{index + 1}</CTableDataCell>
                <CTableDataCell>{item?.name}</CTableDataCell>
                <CTableDataCell>{item?.address}</CTableDataCell>
                <CTableDataCell>{item?.description}</CTableDataCell>
                <CTableDataCell>
                  <img
                    src={item?.img}
                    alt={item?.name}
                    style={{
                      width: "50px",
                      height: "50px",
                      objectFit: "cover",
                    }}
                  />
                </CTableDataCell>
                {/* <CTableDataCell>{formatDate(item?.end_time)}</CTableDataCell> */}
                <CTableDataCell>
                  <CBadge color="danger">{item?.status}</CBadge>
                </CTableDataCell>
                {item?.status === "PENDING" && (
                  <CTableDataCell>
                    <CButton
                      color="primary"
                      onClick={() => handleStatusChangeClick(item)}
                    >
                      Change Status
                    </CButton>
                  </CTableDataCell>
                )}

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

      <CModal visible={visible} onClose={() => setVisible(false)}>
        <CModalHeader onClose={() => setVisible(false)}>
          <CModalTitle>Change Status</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <CFormInput
            className="mb-3"
            value={selectedItem?.name || ""}
            readOnly
          />
          <CFormSelect
            className="custom-select"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            aria-label="Select status"
          >
            <option value="">Select status</option>
            <option value="APPROVED">APPROVED</option>
            <option value="REJECTED">REJECTED</option>
            {/* <option value="Completed">Completed</option>
            <option value="Cancelled">Cancelled</option> */}
          </CFormSelect>
          <CFormInput
            className="mt-3"
            placeholder="Enter content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </CModalBody>
        <CModalFooter>
          <CButton color="secondary" onClick={() => setVisible(false)}>
            Cancel
          </CButton>
          <CButton color="primary" onClick={handleModalSubmit}>
            Save changes
          </CButton>
        </CModalFooter>
      </CModal>
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
  onUpdate: PropTypes.func,
  onDelete: PropTypes.func,
  currentPage: PropTypes.element,
  itemsPerPage: PropTypes.element,
};

export default CustomTable;
