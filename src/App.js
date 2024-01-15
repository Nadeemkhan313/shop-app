import React, { useState } from "react";
import "./App.css";
import { productsData } from "./Data";
import { ProductCard } from "./ProductCart";

const App = () => {
  const [activeTab, setActiveTab] = useState("men");

  const filteredProducts = productsData.filter(
    (product) => product.category === activeTab
  );

  return (
    <div>
      <div className="tabs">
        <h3>SELECT YOUR CHOICE</h3> <br />
        <button onClick={() => setActiveTab("men")}>Men</button>
        <button onClick={() => setActiveTab("women")}>Women</button>
        <button onClick={() => setActiveTab("kids")}>Kids</button>
      </div>
      <div className="product-container">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default App;
