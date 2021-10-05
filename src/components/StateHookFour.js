import React, { useState } from "react";

function StateHookFour(props) {
  const [items, setItems] = useState([]);
  const appendItems = () => {
    setItems([
      ...items,
      {
        id: items.length,
        value: Math.floor(Math.random() * 10 + 1),
      },
    ]);
  };
  return (
    <div>
      <ul>
        {items.map((item) => (
          <li key="item.id">{item.value}</li>
        ))}
      </ul>

      <button onClick={appendItems}>Add items</button>
    </div>
  );
}

export default StateHookFour;
