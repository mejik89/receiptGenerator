import React from "react";

const Receipt = ({ businessName, items, total }) => {
  return (
    <div style={{ border: "1px solid black", padding: "20px", width: "300px" }}>
      <h1>{businessName}</h1>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item.name} - ${item.price}</li>
        ))}
      </ul>
      <h3>Total: ${total}</h3>
    </div>
  );
};

export default Receipt;
