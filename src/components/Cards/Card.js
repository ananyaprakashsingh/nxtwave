import React from "react";
import "./card.css";

const Card = ({
  item: { title, icon_url, link, description, category, tag, id },
}) => {
  return (
    <div className="card">
      <div className="cardHead">
        <div className="cardImg">
          <img src={icon_url} />
        </div>
        <div>
          <h1 className="card-title">{title}</h1>
          <h2 className="card-subtitle">{category}</h2>
        </div>
      </div>
      <a href={link} className="card-link">
        {link}
      </a>
      <div className="card-desc">{description}</div>
    </div>
  );
};

export default Card;
