import React, { useEffect } from "react";
import { Bar, Line, Doughnut } from "react-chartjs-2";
import {
  Chart,
  CategoryScale,
  BarElement,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import { useDispatch, useSelector } from "react-redux";
import {
  actProductCountGetAsync,
  actAuctionedtProductCountGetAsync,
  actUnAuctionedtProductCountGetAsync,
} from "src/store/product/action";
import {
  actAboutToAuctionCountGetAsync,
  actAuctionedAuctionCountGetAsync,
  actAuctioningAuctionCountGetAsync,
  actAuctionCountGetAsync,
  actNotYetAuctionCountGetAsync,
} from "src/store/auction/action";
import {
  actMemberCountGetAsync,
  actHostCountGetAsync,
  actAgvMemberAuctiontGetAsync,
} from "src/store/user/action";
import {
  actDepositCountGetAsync,
  actWithdrawCountGetAsync,
} from "src/store/wallet/action";
Chart.register(
  CategoryScale,
  BarElement,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Tooltip,
  Legend
);

// Giả sử dữ liệu cho các biểu đồ

function Home() {
  const token = localStorage.getItem("ACCESS_TOKEN");
  const Product = useSelector((state) => state.PRODUCT.productCount);
  const UnProduct = useSelector(
    (state) => state.PRODUCT.UnAuctionedProductCount
  );
  const AuctionProduct = useSelector(
    (state) => state.PRODUCT.AuctionedProductCount
  );
  const auctionsCount = useSelector((state) => state.AUCTION.auctionsCount);
  const notYetAuctionCount = useSelector(
    (state) => state.AUCTION.notYetAuctionCount
  );
  const aboutToAuctionCount = useSelector(
    (state) => state.AUCTION.aboutToAuctionCount
  );
  const auctioningCount = useSelector((state) => state.AUCTION.auctioningCount);
  const auctionedCount = useSelector((state) => state.AUCTION.auctionedCount);
  const allMember = useSelector((state) => state.USER.allMember);
  const allHost = useSelector((state) => state.USER.allHost);
  const AvgMemberAuction = useSelector((state) => state.USER.AvgMemberAuction);
  const depositCount = useSelector((state) => state.WALLET.depositCount);
  const withdarwCount = useSelector((state) => state.WALLET.withdrawCount);
  console.log(" 0 ", AvgMemberAuction);
  console.log(" 1: ", allHost);
  console.log(" 2: ", allMember);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actProductCountGetAsync());
    dispatch(actAuctionedtProductCountGetAsync());
    dispatch(actUnAuctionedtProductCountGetAsync());
    dispatch(actAuctionCountGetAsync());
    dispatch(actAboutToAuctionCountGetAsync());
    dispatch(actAuctionedAuctionCountGetAsync());
    dispatch(actAuctioningAuctionCountGetAsync());
    dispatch(actNotYetAuctionCountGetAsync());
    dispatch(actMemberCountGetAsync(token));
    dispatch(actHostCountGetAsync(token));
    dispatch(actAgvMemberAuctiontGetAsync(token));
    dispatch(actDepositCountGetAsync(token));
    dispatch(actWithdrawCountGetAsync(token));
  }, [dispatch, token]);
  const productData = {
    labels: [
      "Tất cả Sản phẩm",
      "Sản phẩm chưa đấu giá",
      "Sản phẩm đã lên đấu giá",
    ],
    datasets: [
      {
        label: "Số lượng",
        data: [Product?.productCount, UnProduct?.Count, AuctionProduct?.Count],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };
  const auctionDataCount = {
    labels: [
      // "Tất cả buổi đấu giá",
      // "Buổi đấu giá chưa diễn ra",
      // "Buổi đấu giá sắp diễn ra",
      // "Buổi đấu giá đang diễn ra",
      // "Buổi đấu giá đã diễn ra",
      "Tất cả",
      "chưa diễn ra",
      "sắp diễn ra",
      "đang diễn ra",
      "đã diễn ra",
    ],
    datasets: [
      {
        label: "Số phòng đấu giá",
        data: [
          auctionsCount?.Count,
          notYetAuctionCount?.Count,
          aboutToAuctionCount?.Count,
          auctioningCount?.Count,
          auctionedCount?.Count,
        ],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };
  const UserData = {
    labels: ["Member", "Host"],
    datasets: [
      {
        label: "Số tài khoản",
        data: [allMember?.memberCount, allHost?.memberCount],
        backgroundColor: ["rgba(255, 99, 132, 0.2)", "rgba(54, 162, 235, 0.2)"],
        borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)"],
        borderWidth: 1,
      },
    ],
  };
  const auctionData = {
    labels: ["3 ngày trước", "Hôm qua", "Hôm nay"],
    datasets: [
      {
        label: "Số lượng người tham gia",
        data: [50, 75, 120],
        fill: false,
        backgroundColor: "rgb(75, 192, 192)",
        borderColor: "rgba(75, 192, 192, 0.2)",
      },
    ],
  };

  const financeData = {
    labels: ["Thu", "Chi"],
    datasets: [
      {
        label: "Số tiền (triệu)",
        data: [500, 300],
        backgroundColor: ["rgba(255, 99, 132, 0.2)", "rgba(54, 162, 235, 0.2)"],
        borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)"],
        borderWidth: 1,
      },
    ],
  };
  const productsCreatedTodayData = {
    labels: ["0h-6h", "6h-12h", "12h-18h", "18h-24h"],
    datasets: [
      {
        label: "Sản phẩm được tạo",
        data: [5, 9, 15, 4],
        backgroundColor: ["rgba(153, 102, 255, 0.2)"],
        borderColor: ["rgba(153, 102, 255, 1)"],
        borderWidth: 1,
      },
    ],
  };

  const auctionsCreatedTodayData = {
    labels: ["0h-6h", "6h-12h", "12h-18h", "18h-24h"],
    datasets: [
      {
        label: "Auction được tạo",
        data: [2, 7, 3, 5],
        backgroundColor: "rgba(255, 159, 64, 0.2)",
        borderColor: "rgba(255, 159, 64, 1)",
        borderWidth: 1,
        fill: false,
      },
    ],
  };

  return (
    <div>
      <h1>Dashboard</h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: "20px",
        }}
      >
        <div>
          <h2>Biểu đồ sản phẩm</h2>
          <Bar data={productData} options={{ responsive: true }} />
        </div>
        <div>
          <h2>Biểu đồ buổi đấu giá</h2>
          <Bar data={auctionDataCount} options={{ responsive: true }} />
        </div>
        <div>
          <h2>Biểu đồ người dùng trong hệ thống</h2>
          <div style={{ width: "50%", height: "auto" }}>
            {/* <div> */}
            <Doughnut
              data={UserData}
              options={{ responsive: true, aspectRatio: 1 }}
            />
          </div>
        </div>
        <div>
          <h5>
            Trung bình số thành viên tham gia vào 1 buổi đấu giá:
            {AvgMemberAuction?.avgCount}
          </h5>
          <h5>
            Tổng số tiển người dùng trong hệ thống nạp vào:
            {depositCount?.count}
          </h5>
          <h5>
            Tổng số tiển người dùng trong hệ thống sử dụng:
            {withdarwCount?.count}
          </h5>
        </div>

        {/* <div>
          <h2>Biểu đồ đấu giá</h2>
          <Line data={auctionData} options={{ responsive: true }} />
        </div>
        <div>
          <h2>Biểu đồ tài chính</h2>
          <div style={{ width: "50%", height: "auto" }}>
            <Doughnut
              data={financeData}
              options={{ responsive: true, aspectRatio: 1 }}
            />
          </div>
        </div>
        <div>
          <h2>Sản phẩm được tạo trong ngày</h2>
          <Bar data={productsCreatedTodayData} options={{ responsive: true }} />
        </div>
        <div>
          <h2>Auction được tạo trong ngày</h2>
          <Line
            data={auctionsCreatedTodayData}
            options={{ responsive: true }}
          />
        </div> */}
      </div>
    </div>
  );
}

export default Home;
