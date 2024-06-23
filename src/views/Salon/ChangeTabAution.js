import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";
import {
  CButton,
  CNav,
  CNavItem,
  CNavLink,
  CTabContent,
  CTabPane,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import { cilMediaPlay } from "@coreui/icons";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchSalonInformation } from "src/store/salon/action";
import TableAution from "src/views/Salon/TableAution";
const ChangeTabAution = (props) => {
  const {
    // chuaDienRaContent,
    // sapDienRaContent,
    // dangDienRaContent,
    // daDienRaContent,
    // ApproveContent,
    // RejectedConent,
    // PendingContent,
    // EditedContent,
    // UnavailableContent,
    // CreatingContent,
    // DisableContent,
  } = props;
  const token = localStorage.getItem("ACCESS_TOKEN");
  const salonInformation = useSelector((state) => state.SALON.allSalon);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [activeTab, setActiveTab] = useState("APPROVED");
  console.log(activeTab);
  console.log("salonInformation", salonInformation);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchSalonInformation(activeTab, currentPage, itemsPerPage));
  }, [activeTab, currentPage, dispatch, itemsPerPage]);
  const navigate = useNavigate();
  const handleUpdateUser = (aution) => {
    navigate(`/Salon-detail/${aution.id}`);
    console.log("Update user at id:", aution.id);
  };
  const filterByStatus = (status) => {
    return salonInformation?.items?.filter((salon) => salon.status === status);
  };
  // State để quản lý tab hiện tại

  // Hàm để thay đổi tab hiện tại
  const changeTab = (tabName) => {
    setActiveTab(tabName);
    setCurrentPage(1);
    setItemsPerPage(10);
  };

  // Xác định nội dung để hiển thị dựa trên tab đang được chọn
  let contentToDisplay;
  switch (activeTab) {
    case "APPROVED":
      contentToDisplay = (
        <div>
          {
            <TableAution
              currentPage={currentPage}
              itemsPerPage={itemsPerPage}
              data={salonInformation?.items}
              onUpdate={handleUpdateUser}
            />
          }
          <div
            className="d-flex justify-content-center"
            style={{
              marginTop: "20px",
            }}
          >
            {/* {currentPage > 1 && ( */}
            <CButton
              disabled={currentPage === 1}
              color="success"
              className="px-4"
              onClick={() => setCurrentPage(currentPage - 1)}
            >
              Previos
            </CButton>
            {/* )} */}
            <p
              className="text-medium-emphasis medium"
              style={{
                marginLeft: "20px",
                marginRight: "20px",
                textAlign: "center",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {salonInformation.page}
            </p>
            {/* {currentPage < salonInformation?.totalPages && ( */}
            <CButton
              disabled={currentPage === salonInformation?.totalPages}
              color="success"
              className="px-4"
              onClick={() => setCurrentPage(currentPage + 1)}
            >
              Next
            </CButton>
            {/* )} */}
          </div>
        </div>
      );
      break;
    case "REJECTED":
      contentToDisplay = (
        <div>
          {
            <TableAution
              currentPage={currentPage}
              itemsPerPage={itemsPerPage}
              data={salonInformation?.items}
              onUpdate={handleUpdateUser}
            />
          }
          <div
            className="d-flex justify-content-center"
            style={{
              marginTop: "20px",
            }}
          >
            {/* {currentPage > 1 && ( */}
            <CButton
              disabled={currentPage === 1}
              color="success"
              className="px-4"
              onClick={() => setCurrentPage(currentPage - 1)}
            >
              Previos
            </CButton>
            {/* )} */}
            <p
              className="text-medium-emphasis medium"
              style={{
                marginLeft: "20px",
                marginRight: "20px",
                textAlign: "center",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {salonInformation.page}
            </p>
            {/* {currentPage < salonInformation?.totalPages && ( */}
            <CButton
              disabled={currentPage === salonInformation?.totalPages}
              color="success"
              className="px-4"
              onClick={() => setCurrentPage(currentPage + 1)}
            >
              Next
            </CButton>
            {/* )} */}
          </div>
        </div>
      );
      break;
    case "PENDING":
      contentToDisplay = (
        <div>
          {
            <TableAution
              currentPage={currentPage}
              itemsPerPage={itemsPerPage}
              data={salonInformation?.items}
              onUpdate={handleUpdateUser}
            />
          }
          <div
            className="d-flex justify-content-center"
            style={{
              marginTop: "20px",
            }}
          >
            {/* {currentPage > 1 && ( */}
            <CButton
              disabled={currentPage === 1}
              color="success"
              className="px-4"
              onClick={() => setCurrentPage(currentPage - 1)}
            >
              Previos
            </CButton>
            {/* )} */}
            <p
              className="text-medium-emphasis medium"
              style={{
                marginLeft: "20px",
                marginRight: "20px",
                textAlign: "center",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {salonInformation.page}
            </p>
            {/* {currentPage < salonInformation?.totalPages && ( */}
            <CButton
              disabled={currentPage === salonInformation?.totalPages}
              color="success"
              className="px-4"
              onClick={() => setCurrentPage(currentPage + 1)}
            >
              Next
            </CButton>
            {/* )} */}
          </div>
        </div>
      );
      break;
    case "EDITED":
      contentToDisplay = (
        <div>
          {
            <TableAution
              currentPage={currentPage}
              itemsPerPage={itemsPerPage}
              data={salonInformation?.items}
              onUpdate={handleUpdateUser}
            />
          }
          <div
            className="d-flex justify-content-center"
            style={{
              marginTop: "20px",
            }}
          >
            {/* {currentPage > 1 && ( */}
            <CButton
              disabled={currentPage === 1}
              color="success"
              className="px-4"
              onClick={() => setCurrentPage(currentPage - 1)}
            >
              Previos
            </CButton>
            {/* )} */}
            <p
              className="text-medium-emphasis medium"
              style={{
                marginLeft: "20px",
                marginRight: "20px",
                textAlign: "center",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {salonInformation.page}
            </p>
            {/* {currentPage < salonInformation?.totalPages && ( */}
            <CButton
              disabled={currentPage === salonInformation?.totalPages}
              color="success"
              className="px-4"
              onClick={() => setCurrentPage(currentPage + 1)}
            >
              Next
            </CButton>
            {/* )} */}
          </div>
        </div>
      );
      break;
    case "UNAVAILABLE":
      contentToDisplay = (
        <div>
          {
            <TableAution
              currentPage={currentPage}
              itemsPerPage={itemsPerPage}
              data={salonInformation?.items}
              onUpdate={handleUpdateUser}
            />
          }
          <div
            className="d-flex justify-content-center"
            style={{
              marginTop: "20px",
            }}
          >
            {/* {currentPage > 1 && ( */}
            <CButton
              disabled={currentPage === 1}
              color="success"
              className="px-4"
              onClick={() => setCurrentPage(currentPage - 1)}
            >
              Previos
            </CButton>
            {/* )} */}
            <p
              className="text-medium-emphasis medium"
              style={{
                marginLeft: "20px",
                marginRight: "20px",
                textAlign: "center",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {salonInformation.page}
            </p>
            {/* {currentPage < salonInformation?.totalPages && ( */}
            <CButton
              disabled={currentPage === salonInformation?.totalPages}
              color="success"
              className="px-4"
              onClick={() => setCurrentPage(currentPage + 1)}
            >
              Next
            </CButton>
            {/* )} */}
          </div>
        </div>
      );
      break;
    case "CREATING":
      contentToDisplay = (
        <div>
          {
            <TableAution
              currentPage={currentPage}
              itemsPerPage={itemsPerPage}
              data={salonInformation?.items}
              onUpdate={handleUpdateUser}
            />
          }
          <div
            className="d-flex justify-content-center"
            style={{
              marginTop: "20px",
            }}
          >
            {/* {currentPage > 1 && ( */}
            <CButton
              disabled={currentPage === 1}
              color="success"
              className="px-4"
              onClick={() => setCurrentPage(currentPage - 1)}
            >
              Previos
            </CButton>
            {/* )} */}
            <p
              className="text-medium-emphasis medium"
              style={{
                marginLeft: "20px",
                marginRight: "20px",
                textAlign: "center",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {salonInformation.page}
            </p>
            {/* {currentPage < salonInformation?.totalPages && ( */}
            <CButton
              disabled={currentPage === salonInformation?.totalPages}
              color="success"
              className="px-4"
              onClick={() => setCurrentPage(currentPage + 1)}
            >
              Next
            </CButton>
            {/* )} */}
          </div>
        </div>
      );
      break;
    case "DISABLED":
      contentToDisplay = (
        <div>
          {
            <TableAution
              currentPage={currentPage}
              itemsPerPage={itemsPerPage}
              data={salonInformation?.items}
              onUpdate={handleUpdateUser}
            />
          }
          <div
            className="d-flex justify-content-center"
            style={{
              marginTop: "20px",
            }}
          >
            {/* {currentPage > 1 && ( */}
            <CButton
              disabled={currentPage === 1}
              color="success"
              className="px-4"
              onClick={() => setCurrentPage(currentPage - 1)}
            >
              Previos
            </CButton>
            {/* )} */}
            <p
              className="text-medium-emphasis medium"
              style={{
                marginLeft: "20px",
                marginRight: "20px",
                textAlign: "center",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {salonInformation.page}
            </p>
            {/* {currentPage < salonInformation?.totalPages && ( */}
            <CButton
              disabled={currentPage === salonInformation?.totalPages}
              color="success"
              className="px-4"
              onClick={() => setCurrentPage(currentPage + 1)}
            >
              Next
            </CButton>
            {/* )} */}
          </div>
        </div>
      );
      break;
    default:
      contentToDisplay = <div>Không có nội dung</div>;
  }

  if (contentToDisplay === undefined) {
    contentToDisplay = <div>Không có dữ liệu</div>;
  }
  console.log(contentToDisplay.props.children);
  return (
    <div className="example">
      <CNav variant="tabs">
        <CNavItem>
          <CNavLink
            active={activeTab === "APPROVED"}
            onClick={() => changeTab("APPROVED")}
          >
            <CIcon icon={cilMediaPlay} className="me-2" />
            APPROVED
          </CNavLink>
        </CNavItem>
        <CNavItem>
          <CNavLink
            active={activeTab === "REJECTED"}
            onClick={() => changeTab("REJECTED")}
          >
            <CIcon icon={cilMediaPlay} className="me-2" />
            REJECTED
          </CNavLink>
        </CNavItem>
        <CNavItem>
          <CNavLink
            active={activeTab === "PENDING"}
            onClick={() => changeTab("PENDING")}
          >
            <CIcon icon={cilMediaPlay} className="me-2" />
            PENDING
          </CNavLink>
        </CNavItem>
        <CNavItem>
          <CNavLink
            active={activeTab === "EDITED"}
            onClick={() => changeTab("EDITED")}
          >
            <CIcon icon={cilMediaPlay} className="me-2" />
            EDITED
          </CNavLink>
        </CNavItem>
        <CNavItem>
          <CNavLink
            active={activeTab === "UNAVAILABLE"}
            onClick={() => changeTab("UNAVAILABLE")}
          >
            <CIcon icon={cilMediaPlay} className="me-2" />
            UNAVAILABLE
          </CNavLink>
        </CNavItem>
        <CNavItem>
          <CNavLink
            active={activeTab === "CREATING"}
            onClick={() => changeTab("CREATING")}
          >
            <CIcon icon={cilMediaPlay} className="me-2" />
            CREATING
          </CNavLink>
        </CNavItem>
        <CNavItem>
          <CNavLink
            active={activeTab === "DISABLED"}
            onClick={() => changeTab("DISABLED")}
          >
            <CIcon icon={cilMediaPlay} className="me-2" />
            DISABLED
          </CNavLink>
        </CNavItem>
      </CNav>
      <CTabContent className="rounded-bottom">
        <CTabPane visible className="p-3 preview">
          {contentToDisplay}
        </CTabPane>
      </CTabContent>
    </div>
  );
};

ChangeTabAution.propTypes = {
  // chuaDienRaContent: PropTypes.node,
  // sapDienRaContent: PropTypes.node,
  // dangDienRaContent: PropTypes.node,
  // daDienRaContent: PropTypes.node,
  // ApproveContent: PropTypes.node,
  // RejectedConent: PropTypes.node,
  // PendingContent: PropTypes.node,
  // EditedContent: PropTypes.node,
  // UnavailableContent: PropTypes.node,
  // CreatingContent: PropTypes.node,
  // DisableContent: PropTypes.node,
};

export default React.memo(ChangeTabAution);
