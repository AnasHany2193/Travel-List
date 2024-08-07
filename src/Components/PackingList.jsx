import Item from "./Item";
import { useState } from "react";

function PackingList({ items, onDeleteItem, onToggleItem, onClearItems }) {
  const [sortBy, setSortBy] = useState("input");

  let sortedItem;

  sortedItem =
    sortBy === "description"
      ? items.slice().sort((a, b) => a.description.localeCompare(b.description))
      : sortBy === "packed"
      ? items.slice().sort((a, b) => Number(a.packed) - Number(b.packed))
      : items;

  return (
    <div className="list">
      <ul style={{ height: "100%" }}>
        {sortedItem.map((item) => (
          <Item
            item={item}
            key={item.id}
            onDeleteItem={onDeleteItem}
            onToggleItem={onToggleItem}
          />
        ))}
      </ul>

      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed status</option>
        </select>

        <button onClick={onClearItems}>Clear List</button>
      </div>
    </div>
  );
}

export default PackingList;
