import React from "react";
import {
  cilSpeedometer,
  cilUser,
  cilMoney,
  cilInbox,
  cilWallet,
  cilChartLine,
  cilCast,
  cilUserPlus,
} from "@coreui/icons";
import CIcon from "@coreui/icons-react";
import { CNavGroup, CNavItem } from "@coreui/react";

const _nav = [
  {
    component: CNavItem,
    name: "Home",
    to: "/",
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
    badge: {
      color: "info",
      text: "NEW",
    },
  },
  // {
  //   component: CNavTitle,
  //   name: "Account",
  // },
  {
    component: CNavGroup,
    name: "Account Customer",
    // to: "/account",
    icon: <CIcon icon={cilUser} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: "Account List",
        to: "/accountCustomer",
      },
      // {
      //   component: CNavItem,
      //   name: "Ban User Request",
      //   to: "/ban-request",
      // },
    ],
  },
  {
    component: CNavGroup,
    name: "Account Salon",
    // to: "/account",
    icon: <CIcon icon={cilUserPlus} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: "Account List",
        to: "/accountSalon",
      },
      // {
      //   component: CNavItem,
      //   name: "Ban User Request",
      //   to: "/ban-request",
      // },
    ],
  },
  // {
  //   component: CNavTitle,
  //   name: "Aution",
  // },
  {
    component: CNavGroup,
    name: "Salon",
    // to: "/aution",
    icon: <CIcon icon={cilCast} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: "Salon",
        to: "/Salon",
      },
    ],
  },
  // {
  //   component: CNavTitle,
  //   name: "Product",
  // },
  {
    component: CNavGroup,
    name: "Voucher",
    // to: "/buttons",
    icon: <CIcon icon={cilInbox} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: "Voucher",
        to: "/product",
      },
    ],
  },
  // {
  //   component: CNavTitle,
  //   name: "Transaction",
  // },
  {
    component: CNavGroup,
    name: "Transaction",
    // to: "/buttons",
    icon: <CIcon icon={cilMoney} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: "Transaction",
        to: "/transaction",
      },
    ],
  },
  {
    component: CNavGroup,
    name: "Wallet",
    // to: "/buttons",
    icon: <CIcon icon={cilWallet} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: "Wallet History",
        to: "/wallet_history",
      },
    ],
  },
  {
    component: CNavGroup,
    name: "Config",
    // to: "/buttons",
    icon: <CIcon icon={cilChartLine} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: "Config",
        to: "/config",
      },
    ],
  },
];

export default _nav;
