import React from "react";
import Config from "./views/Config/Config";
import DetailConfig from "./views/Config/DetailConfig";
const Profile = React.lazy(() => import("./views/Profile/Profile"));
const Account = React.lazy(() => import("./views/AccountCustomer/Account"));
const AccountSalon = React.lazy(() =>
  import("./views/AccountSalonOwner/Account")
);
const Salon = React.lazy(() => import("./views/Salon/Salon"));
const Report = React.lazy(() => import("./views/Report/Report"));
const Voucher = React.lazy(() => import("./views/Voucher/Voucher"));
const CreateVoucher = React.lazy(() => import("./views/Voucher/CreateVoucher"));
const ProductDetail = React.lazy(() => import("./views/Voucher/VoucherDetail"));
const TransactionRequest = React.lazy(() =>
  import("./views/Transaction/Transaction")
);
const Home = React.lazy(() => import("./views/Home/Home"));
const AccountDetail = React.lazy(() =>
  import("./views/AccountCustomer/AccountDetail")
);
const AccountDetailSalon = React.lazy(() =>
  import("./views/AccountSalonOwner/AccountDetail")
);
const SalonDetail = React.lazy(() => import("./views/Salon/SalonDetail"));
const ReportDetail = React.lazy(() => import("./views/Report/DetailReport"));
const AutionConfirm = React.lazy(() => import("./views/Salon/AuctionConfirm"));
const BanRequest = React.lazy(() => import("./views/Account Ban/BanRequest"));
const WalletHistory = React.lazy(() => import("./views/Wallet/WalletHistory"));
const DetailTransaction = React.lazy(() =>
  import("./views/Transaction/DetailTransaction")
);
const routes = [
  { path: "/", exact: true, name: "Home", element: Home },
  {
    path: "/accountCustomer",
    name: "AccountCustomer",
    element: Account,
    exact: true,
  },
  {
    path: "/update-customer/:userId",
    name: "UpdateCustomer",
    element: AccountDetail,
    exact: true,
  },
  {
    path: "/accountSalon",
    name: "AccountSalon",
    element: AccountSalon,
    exact: true,
  },
  {
    path: "/update-salon/:userId",
    name: "UpdateSalon",
    element: AccountDetailSalon,
    exact: true,
  },
  {
    path: "/ban-request",
    name: "Ban Request",
    element: BanRequest,
    exact: true,
  },
  { path: "/Salon", name: "Aution", element: Salon, exact: true },
  {
    path: "/Salon-detail/:auctionId",
    name: "Aution Detail",
    element: SalonDetail,
    exact: true,
  },
  { path: "/Report", name: "Report", element: Report, exact: true },
  {
    path: "/Report-detail/:reportId",
    name: "Report Detail",
    element: ReportDetail,
    exact: true,
  },
  // {
  //   path: "/Report-detail/:auctionId",
  //   name: "Report Detail",
  //   element: ReportDetail,
  //   exact: true,
  // },
  {
    path: "/aution-confirm",
    name: "Aution",
    element: AutionConfirm,
    exact: true,
  },
  { path: "/Voucher", name: "Voucher", element: Voucher, exact: true },
  {
    path: "/create-voucher",
    name: "Create Voucher",
    element: CreateVoucher,
    exact: true,
  },
  {
    path: "/product-detail/:productId",
    name: "Product Detail",
    element: ProductDetail,
    exact: true,
  },
  {
    path: "/transaction",
    name: "Transaction",
    element: TransactionRequest,
    exact: true,
  },
  {
    path: "/transaction-detail/:paymentId",
    name: "TransactionDetail",
    element: DetailTransaction,
    exact: true,
  },
  {
    path: "/profile",
    name: "Profile",
    element: Profile,
    exact: true,
  },
  {
    path: "/wallet_history",
    name: "WalletHistory",
    element: WalletHistory,
    exact: true,
  },
  {
    path: "/config",
    name: "Config",
    element: Config,
    exact: true,
  },
  {
    path: "/config/:configId",
    name: "ConfigDetail",
    element: DetailConfig,
    exact: true,
  },
];

export default routes;
