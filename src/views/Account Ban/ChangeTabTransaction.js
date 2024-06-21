import PropTypes from "prop-types";
import React, { useState } from "react";
import { CNav, CNavItem, CNavLink, CTabContent, CTabPane } from "@coreui/react";
import CIcon from "@coreui/icons-react";
import { cilMediaPlay } from "@coreui/icons";

const ChangeTabAution = (props) => {
  const { requestContent, historyContent } = props;
  // State để quản lý tab hiện tại
  const [activeTab, setActiveTab] = useState("RequestTransaction");
  console.log(activeTab);

  // Hàm để thay đổi tab hiện tại
  const changeTab = (tabName) => {
    setActiveTab(tabName);
  };

  // Xác định nội dung để hiển thị dựa trên tab đang được chọn
  let contentToDisplay;
  switch (activeTab) {
    case "RequestTransaction":
      contentToDisplay = requestContent;
      break;
    case "HistoryTransaction":
      contentToDisplay = historyContent;
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
            active={activeTab === "RequestTransaction"}
            onClick={() => changeTab("RequestTransaction")}
          >
            <CIcon icon={cilMediaPlay} className="me-2" />
            Request Ban User
          </CNavLink>
        </CNavItem>
        <CNavItem>
          <CNavLink
            active={activeTab === "HistoryTransaction"}
            onClick={() => changeTab("HistoryTransaction")}
          >
            <CIcon icon={cilMediaPlay} className="me-2" />
            History Ban User
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
  requestContent: PropTypes.node,
  historyContent: PropTypes.node,
};

export default React.memo(ChangeTabAution);
