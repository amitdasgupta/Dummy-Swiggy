import React, { useState } from "react";

import star from "../assets/images/star.svg";

export default function DishCard(props) {
  const {
    name,
    food_types,
    ratings,
    delivery_time,
    price_for_two,
  } = props.dish;
  const { imgSrc } = props;
  const [isShown, setIsShown] = useState(false);

  const toggleIsShown = (value) => () => {
    setIsShown(value);
  };
  return (
    <div style={isShown ? { boxShadow: "0px 2px 6px rgba(68,68,68,0.6)" } : {}}>
      <div
        className="dish-card"
        onMouseEnter={toggleIsShown(true)}
        onMouseLeave={toggleIsShown(false)}
      >
        <div className="dish-card-img">
          <img src={imgSrc} alt="Dish" />
        </div>
        <h3>{name}</h3>
        <div
          style={{
            display: "flex",
            fontSize: "0.9rem",
            flexFlow: "row wrap",
            color: "#614444",
          }}
        >
          {food_types.map((name, index) => {
            return (
              <span key={index}>
                {name}
                {index < food_types.length - 1 && ","}
              </span>
            );
          })}
        </div>
        <div className="bottom-card-section">
          <span>
            <img src={star} alt="star"></img>
            {ratings ? ratings : "___"}
          </span>
          <span className="make-round"></span>
          <span>{delivery_time}</span>
          <span className="make-round"></span>
          <span>₹ {price_for_two} for two</span>
        </div>

        <div
          className="card-bottom-line"
          style={
            isShown
              ? {
                  backgroundColor: "lightgray",
                }
              : {}
          }
        ></div>
        <div
          className="card-bottom-line"
          style={
            isShown
              ? { textAlign: "center", color: "#0e71bf", fontWeight: "bold" }
              : {}
          }
        >
          Quick view
        </div>
      </div>
    </div>
  );
}
