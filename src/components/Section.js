import React, { useState } from "react";
import DishCard from "./DishCard";
const urls = [
  "https://images.unsplash.com/photo-1484723091739-30a097e8f929?auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1521305916504-4a1121188589?auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1511690743698-d9d85f2fbf38?auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1506084868230-bb9d95c24759?auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1496412705862-e0088f16f791?auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1429554513019-6c61c19ffb7e?auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1432139509613-5c4255815697?auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1478145046317-39f10e56b5e9?auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1484980972926-edee96e0960d?auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1504544750208-dc0358e63f7f?auto=format&fit=crop&w=500&q=60",
];

export default function Section({ title, id, dishes, isSeeAll }) {
  const [totalShown, setTotalShown] = useState(5);

  const showExtraDish = () => {
    setTotalShown(totalShown + 6);
  };

  const giveExtraButton = () => {
    return (
      <div
        style={{
          width: "250px",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          height: "250px",
          border: "5px solid orange",
          margin: "20px",
          color: "orange",
          fontWeight: "bold",
          fontSize: "1.5rem",
          cursor: "grab",
        }}
        onClick={showExtraDish}
      >{`+${dishes.length - totalShown} More`}</div>
    );
  };

  return (
    <div
      className="section"
      style={
        (isSeeAll && title !== "See All") || (!isSeeAll && title === "See All")
          ? { display: "none" }
          : {}
      }
    >
      <div className="section-content" id={id}>
        <h1>{title}</h1>
        <div className="dishes-list">
          {dishes.map((dish, index) => {
            const imgSrc = urls[index % 11];
            if (index >= totalShown && title !== "See All") return;
            return <DishCard key={index} dish={dish} imgSrc={imgSrc} />;
          })}
          {totalShown < dishes.length &&
            title !== "See All" &&
            giveExtraButton()}
        </div>
      </div>
      <div className="custom-footer-line"></div>
    </div>
  );
}
