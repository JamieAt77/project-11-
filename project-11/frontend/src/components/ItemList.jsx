import React from "react";
import "../styles/global.css";

function ItemList({ items }) {
  return (
    <div className="item-list">
      <h2>Items</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default ItemList;
