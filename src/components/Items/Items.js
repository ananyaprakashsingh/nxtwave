import React from "react";
import Card from "../Cards/Card";
import "./items.css";

const Items = ({ items }) => {
  return (
    <div className="card-container">
      {items.map((item) => (
        <Card item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Items;
