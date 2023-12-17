import React, { useState, useEffect } from "react";
import CardItem from "../components/Home/CardItem";

import Chart from "chart.js/auto";
import { Tooltip } from "chart.js";
import BarChart from "../components/Home/BarChart";
import LineChart from "../components/Home/LineChart";
import Customers from "../components/Home/Customers";

Chart.register(Tooltip);

const CustomerStatistic = [
  { id: 4, month: "4", num: 250 },
  { id: 5, month: "5", num: 300 },
  { id: 6, month: "6", num: 200 },
  { id: 7, month: "7", num: 400 },
  { id: 8, month: "8", num: 450 },
  { id: 9, month: "9", num: 500 },
  { id: 10, month: "10", num: 450 },
  { id: 11, month: "11", num: 400 },
  { id: 12, month: "12", num: 350 },
];

const SalesStatistic = [
  [
    { id: 4, month: "4", num: 50 },
    { id: 5, month: "5", num: 300 },
    { id: 6, month: "6", num: 320 },
    { id: 7, month: "7", num: 230 },
    { id: 8, month: "8", num: 240 },
    { id: 9, month: "9", num: 200 },
    { id: 10, month: "10", num: 350 },
    { id: 11, month: "11", num: 500 },
    { id: 12, month: "12", num: 600 },
  ],
  [
    { id: 4, month: "4", num: 30 },
    { id: 5, month: "5", num: 150 },
    { id: 6, month: "6", num: 220 },
    { id: 7, month: "7", num: 130 },
    { id: 8, month: "8", num: 100 },
    { id: 9, month: "9", num: 120 },
    { id: 10, month: "10", num: 250 },
    { id: 11, month: "11", num: 300 },
    { id: 12, month: "12", num: 350 },
  ],
];

const cusData = [
  {
    id: 3,
    name: "Lê Văn An",
    email: "An789@gmail.com",
    phone: "0833333333",
    total: 300000000,
  },
  {
    id: 5,
    name: "Trần Văn Tú",
    email: "Tu567@gmail.com",
    phone: "0866666666",
    total: 250000000,
  },
  {
    id: 1,
    name: "Nguyễn Hoàng Việt",
    email: "Viet123@gmail.com",
    phone: "0848044777",
    total: 20000000,
  },
  {
    id: 4,
    name: "Phạm Thị Hương",
    email: "Huong012@gmail.com",
    phone: "0844444444",
    total: 18000000,
  },
  {
    id: 2,
    name: "Trần Thị Mai",
    email: "Mai456@gmail.com",
    phone: "0856789123",
    total: 1500000,
  },
];

const fakeCardData = [
  {
    title: "Doanh thu trong ngày",
    value: "$ 120.000 vnđ",
    percent: "12",
    icon: "fa-solid fa-coins",
    increase: true,
  },
  {
    title: "Đơn hàng trong ngày",
    value: "2.300",
    percent: "5",
    icon: "fa-solid fa-clipboard-list",
    increase: true,
  },
  {
    title: "Số lượng sản phẩm",
    value: "124",
    percent: "-3",
    icon: "fa-solid fa-basket-shopping",
    increase: false,
  },
  {
    title: "Khách hàng mới",
    value: "30",
    percent: "-2",
    icon: "fa-solid fa-users",
    increase: false,
  },
];

function Home() {
  const [cardsData, setCardsData] = useState([]);
  const [chartLeftData, setChartLeftData] = useState({
    labels: CustomerStatistic.map((item) => item.month),
    datasets: [
      {
        label: "Khách hàng mới ",
        data: CustomerStatistic.map((data) => data.num),
        backgroundColor: ["#fff"],
        borderRadius: 8,
        barThickness: 8,
      },
    ],
  });
  const [chartRightData, setChartRightData] = useState({
    labels: SalesStatistic[0].map((item) => item.month),
    datasets: [
      {
        label: "Laptop, PC,... ",
        data: SalesStatistic[0].map((data) => data.num),
        backgroundColor: ["#1BC2E8"],
        borderColor: "#1BC2E8",
        tension: 0.4,
        pointRadius: 3,
        borderWidth: 3,
      },
      {
        label: "Phụ kiện khác... ",
        data: SalesStatistic[1].map((data) => data.num),
        backgroundColor: ["#364E72"],
        borderColor: "#364E72",
        tension: 0.4,
        pointRadius: 3,
        borderWidth: 3,
      },
    ],
  });
  const [customers, setCustomers] = useState(cusData);

  useEffect(() => {
    // Fake API
    setCardsData(fakeCardData);
  }, []);

  return (
    <div className="home">
      <div className="mb-5 home_cards">
        {cardsData.map((card, index) => (
          <CardItem key={index} card={card} />
        ))}
      </div>

      <div className="mb-5 home_charts">
        <div className=" box_shadow home_charts_left">
          <BarChart chartData={chartLeftData} />
          <div className="mt-4">
            <h5
              className="mb-0"
              style={{
                fontSize: "18px",
              }}
            >
              Khách hàng mới
            </h5>
            <p>
              <span className="fw-medium">{"( +23% )"}</span> so với tuần trước
            </p>
            <div className="home_charts_left_cards">
              <div className="home_charts_left_cards_item">
                <div
                  style={{
                    background:
                      "linear-gradient(310deg, rgb(121, 40, 202), rgb(255, 0, 128))",
                  }}
                >
                  <i className="fa-solid fa-user" />
                </div>
                <span>Khách hàng</span>
              </div>
              <div className="home_charts_left_cards_item">
                <div
                  style={{
                    background:
                      "linear-gradient(310deg, rgb(33, 82, 255), rgb(33, 212, 253))",
                  }}
                >
                  <i className="fa-solid fa-hand-pointer" />
                </div>
                <span>Lượt truy cập</span>
              </div>
              <div className="home_charts_left_cards_item">
                <div
                  style={{
                    background:
                      "linear-gradient(310deg, rgb(245, 57, 57), rgb(251, 207, 51))",
                  }}
                >
                  <i className="fa-solid fa-hand-holding-dollar" />
                </div>
                <span>Doanh số</span>
              </div>
              <div className="home_charts_left_cards_item">
                <div
                  style={{
                    background:
                      "linear-gradient(310deg, rgb(234, 6, 6), rgb(255, 102, 124))",
                  }}
                >
                  <i class="fa-solid fa-tag" />
                </div>
                <span>Danh mục</span>
              </div>
            </div>
          </div>
        </div>
        <div className=" box_shadow home_charts_right">
          <h5
            className="mb-3"
            style={{
              fontSize: "18px",
            }}
          >
            Doanh số bán hàng
          </h5>

          <LineChart chartData={chartRightData} />
        </div>
      </div>
      <Customers customers={customers} />
    </div>
  );
}

export default Home;