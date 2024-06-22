import React from "react";
import Config from "./views/Config/Config";
import DetailConfig from "./views/Config/DetailConfig";
const Profile = React.lazy(() => import("./views/Profile/Profile"));
const Account = React.lazy(() => import("./views/AccountCustomer/Account"));
const Aution = React.lazy(() => import("./views/Aution/Aution"));
const Product = React.lazy(() => import("./views/Product/Product"));
const ProductDetail = React.lazy(() => import("./views/Product/ProductDetail"));
const TransactionRequest = React.lazy(() =>
  import("./views/Transaction/TransactionRequest")
);
const Home = React.lazy(() => import("./views/Home/Home"));
const AccountDetail = React.lazy(() =>
  import("./views/AccountCustomer/AccountDetail")
);
const AutionDetail = React.lazy(() => import("./views/Aution/AutionDetail"));
const AutionConfirm = React.lazy(() => import("./views/Aution/AuctionConfirm"));
const BanRequest = React.lazy(() => import("./views/Account Ban/BanRequest"));
const WalletHistory = React.lazy(() => import("./views/Wallet/WalletHistory"));

const routes = [
  { path: "/", exact: true, name: "Home", element: Home },
  { path: "/account", name: "Account", element: Account, exact: true },
  {
    path: "/update-user/:userId",
    name: "UpdateUser",
    element: AccountDetail,
    exact: true,
  },
  {
    path: "/ban-request",
    name: "Ban Request",
    element: BanRequest,
    exact: true,
  },
  { path: "/aution", name: "Aution", element: Aution, exact: true },
  {
    path: "/aution-detail/:auctionId",
    name: "Aution Detail",
    element: AutionDetail,
    exact: true,
  },
  {
    path: "/aution-confirm",
    name: "Aution",
    element: AutionConfirm,
    exact: true,
  },
  { path: "/product", name: "Product", element: Product, exact: true },
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
