import React from "react";
import formatMoney from "../../utils/formatMoney";

function CardItem({ card }) {
  return (
    <div className=" box_shadow card_item">
      <div className="card_item_content">
        <h5 className="mb-1">{card.title}</h5>
        <div>
          <span
            style={{
              fontSize: "24px",
              fontWeight: "700",
            }}
          >
            {card.type === "money"
              ? `$ ${formatMoney(card.value)} vnđ`
              : formatMoney(card.value)}
          </span>{" "}
          <p
            className="mb-0"
            style={{
              fontSize: "18px",
              color: card.increase
                ? "var(--success-color)"
                : "var(--primary-color)",
              fontWeight: "500",
            }}
          >
            <span>
              {"( "}
              {card.percent
                ? `${card.percent}% `
                : card.increase
                ? `Tăng ${card.gap} `
                : `Giảm ${card.gap} `}
              <i
                className={`fa-solid ${
                  card.increase ? "fa-arrow-up-long" : "fa-arrow-down-long"
                }`}
              />
              {" )"}
            </span>
          </p>
        </div>
      </div>
      <div className="card_item_icon">
        <i className={card.icon} />
      </div>
    </div>
  );
}

export default CardItem;
