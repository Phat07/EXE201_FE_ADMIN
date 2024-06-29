import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { Row, Col } from "react-bootstrap";
import React, { useState } from "react";
import { toast } from "react-toastify";
// import { actRequestConfirmAsync } from "../../store/wallet/action";
// import {
//   actRequestGetMoneyPaidAsync,
//   actRequestGetMoneyUnpaidAsync,
// } from "src/store/request/action";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import CurrencyFormat from "react-currency-format";

const ModalConfirmTransaction = (props) => {
  const { confirmData = [], showProp, handleClose } = props;
  const [moneyToAdd, setMoneyToAdd] = useState();
  const [note, setNote] = useState("Cảm ơn quý khách");
  console.log("Confirm data: ", confirmData);
  const token = localStorage.getItem("ACCESS_TOKEN");
  const dispatch = useDispatch();
  const confirm = useSelector((state) => state.WALLET.confirmDeposit);
  console.log("confirm", confirm);
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!+moneyToAdd) {
      toast.error("Vui lòng điền số tiền để add");
      return;
    }

    let data = {
      reportRequestId: confirmData._id,
      depositAmount: +moneyToAdd,
      note: note,
    };
    console.log("Data add request: ", data);
    console.log("Money Add: ", moneyToAdd);
    // try {
    // Giả sử dispatch sẽ trả về Promise
    // dispatch(actRequestConfirmAsync(data, token));
    // dispatch(actRequestGetMoneyPaidAsync(token));
    // dispatch(actRequestGetMoneyUnpaidAsync(token));
    toast.success(
      `Bạn đã add ${moneyToAdd} vào tài khoản ${confirmData.user_id.fullName} `
    );
    setMoneyToAdd();
    setNote("Cảm ơn quý khách");
    handleClose();
  };

  return (
    <>
      {/* <Button variant="primary" onClick={handleShow}>
        Add New User
      </Button> */}

      <Modal
        show={showProp}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Confirm Transaction</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            You want to confirm transaction to {confirmData?.user_id?.fullName}
          </div>
          <div>Money on request: {confirmData?.description}</div>
          <Form className="mt-2">
            <Form.Group
              as={Row}
              className="justify-content-md-center mb-3"
              controlId="formHorizontalMoney"
            >
              <Col xs={12} md={4}>
                <Form.Label>Money to add</Form.Label>
              </Col>
              <Col xs={12} md={8}>
                <Form.Control
                  as={CurrencyFormat}
                  thousandSeparator={true}
                  decimalSeparator="."
                  allowNegative={false}
                  autoFocus
                  value={moneyToAdd}
                  // onChange={(e) => setMoneyToAdd(e.target.value)}
                  onValueChange={(values) => {
                    const { value } = values;
                    setMoneyToAdd(value);
                  }}
                  suffix=" đ"
                />
              </Col>
            </Form.Group>
            <Form.Group
              as={Row}
              className="justify-content-md-center mb-3"
              controlId="formHorizontalMoney"
            >
              <Col xs={12} md={4}>
                <Form.Label>Add note</Form.Label>
              </Col>
              <Col xs={12} md={8}>
                <Form.Control
                  type="text"
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                />
              </Col>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

// Định nghĩa propTypes cho component
ModalConfirmTransaction.propTypes = {
  // Xác định rằng `userDeleteData` là một đối tượng và là required
  confirmData: PropTypes.shape({
    id: PropTypes.number, // Giả sử id là một số và là required
    name: PropTypes.string, // Giả sử name là một chuỗi và là required
    money: PropTypes.number,
    // Bạn có thể thêm các thuộc tính khác của userDeleteData ở đây nếu cần
  }),

  // Xác định rằng `showProp` là một boolean và là required
  showProp: PropTypes.bool.isRequired,

  // Xác định rằng `handleClose` là một hàm và là required
  handleClose: PropTypes.func.isRequired,
};

export default ModalConfirmTransaction;
