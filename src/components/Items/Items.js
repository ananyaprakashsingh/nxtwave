import React, { useState } from "react";
import Card from "../Cards/Card";
import Pagination from "../Pagination/Pagination";
import "./items.css";

const Items = ({ items }) => {
  let n = Math.ceil(items.length / 6);
  const [page, setPage] = useState(1);
  let k = (page - 1) * 6;
  return (
    <>
      <div className="card-container">
        {items.map((item, index) => {
          if (index >= k && index < Math.min(k + 6, items.length))
            return (
              <Card item={item} key={item.id} />
            )
        })}

      </div>
      <Pagination page={page} setPage={setPage} items={items} />
    </>
  );
};

export default Items;
