// src/js/SweetsList.js
import React from "react";

// Functional Component
const SweetsList = () => {
  // Array of JSON objects representing sweets
  const sweets = [
    { id: 1, name: "Laddu", price: 20 },
    { id: 2, name: "Jalebi", price: 30 },
    { id: 3, name: "Kaju Katli", price: 50 },
    { id: 4, name: "Rasgulla", price: 25 },
    { id: 5, name: "Gulab Jamun", price: 35 }
  ];

  return (
    <div style={{ border: "2px solid orange", margin: "10px", padding: "15px" }}>
      <h2>Sweets List</h2>

      {/* Using map() to dynamically display sweets */}
      {sweets.map((sweet) => (
        <div key={sweet.id}>
          {/* Format: Sweet Name - Price: ₹value */}
          {sweet.name} - Price: ₹{sweet.price}
        </div>
      ))}
    </div>
  );
};

export default SweetsList;
