import React from "react";
import Receipt from "./receipt";

const App = () => {
  const items = [
    { name: "Item 1", price: 10 },
    { name: "Item 2", price: 20 },
  ];

  return (
    <div>
      <h1>My Receipt App</h1>
      <Receipt businessName="My Store" items={items} total={30} />
    </div>
  );
};

export default App;
