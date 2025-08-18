// src/js/CanteenMenu.js
import React from "react";

// Child component inside the same file
const CanteenItem = ({ name, price, category, available }) => {
  return (
    <div style={{ border: "1px solid gray", margin: "5px", padding: "10px" }}>
      <h4>{name}</h4>
      <p><strong>Price:</strong> ₹{price}</p>
      <p><strong>Category:</strong> {category}</p>
      <p><strong>Available:</strong> {available}</p>
    </div>
  );
};

// Parent component
const CanteenMenu = () => {
  return (
    <div style={{ border: "2px solid green", margin: "10px", padding: "15px" }}>
      <h2>Canteen Menu</h2>
      <p><strong>Canteen Name:</strong> Campus Food Court</p>
      <p><strong>Location:</strong> Block A - Ground Floor</p>
      <p><strong>Open Hours:</strong> 9 AM - 9 PM</p>
      <hr />

      {/* Injecting child components */}
      <CanteenItem name="Idli" price={30} category="Breakfast" available="Yes" />
      <CanteenItem name="Veg Thali" price={80} category="Lunch" available="Yes" />
      <CanteenItem name="Samosa" price={20} category="Snack" available="No" />
      <CanteenItem name="Paratha" price={50} category="Lunch" available="Yes" />
    </div>
  );
};

export default CanteenMenu;
