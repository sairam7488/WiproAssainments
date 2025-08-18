// src/js/Phone.js
import React, { useState } from "react";

// Arrow Functional Component
const Phone = () => {
  // useState hooks to store phone details
  const [brand, setBrand] = useState("Apple");      // initial brand = Apple
  const [model, setModel] = useState("iPhone 15");  // initial model = iPhone 15
  const [price, setPrice] = useState(80000);        // initial price = 80000

  // Function to update price when button clicked
  const updatePrice = () => {
    setPrice(price + 5000); // increase price by 5000
  };

  return (
    <div style={{ border: "1px solid gray", margin: "10px", padding: "15px" }}>
      <h2>Phone Details</h2>
      {/* Displaying state values */}
      <p><strong>Brand:</strong> {brand}</p>
      <p><strong>Model:</strong> {model}</p>
      <p><strong>Price:</strong> ₹{price}</p>

      {/* Button to update price */}
      <button onClick={updatePrice}>Increase Price</button>
      
    </div>
  );
};

// Export component so App.js can use it
export default Phone;
