import React, { useState, useEffect } from "react";
import CardItem from "../components/Home/CardItem";

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

  useEffect(() => {
    // Fake API
    setCardsData(fakeCardData);
  }, []);

  return (
    <div className="home">
      <div className="home_cards">
        {cardsData.map((card, index) => (
          <CardItem key={index} card={card} />
        ))}
      </div>
    </div>
  );
}

export default Home;
