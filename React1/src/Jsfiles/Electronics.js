// src/js/Electronics.js
import React, { useState } from "react";

// Functional Component
const Electronics = () => {
  // useState hooks for each detail
  const [name, setName] = useState("Laptop");
  const [brand, setBrand] = useState("HP");
  const [price, setPrice] = useState(55000);

  // Function to update brand
  const updateBrand = () => {
    setBrand("APPLE"); // example change from Dell → HP
  };

  // Function to increase price
  const increasePrice = () => {
    setPrice(price + 5000); // adds 5000 to current price
  };

  return (
    <div style={{ border: "2px solid green", margin: "10px", padding: "15px" }}>
      <h2>Electronics Item</h2>
      <p><strong>Name:</strong> {name}</p>
      <p><strong>Brand:</strong> {brand}</p>
      <p><strong>Price:</strong> ₹{price}</p>

      {/* Buttons */}
      <button onClick={updateBrand} style={{ marginRight: "10px" }}>
        Update Brand
      </button>
      <button onClick={increasePrice}>Increase Price</button>
    </div>
  );
};

export default Electronics;
