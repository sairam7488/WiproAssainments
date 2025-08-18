// src/js/Restaurant.js
import React, { Component } from "react";

// Child class component inside the same file
class MenuItem extends Component {
  render() {
    const { name, price, category, available } = this.props;
    return (
      <div style={{ border: "1px solid gray", margin: "5px", padding: "10px" }}>
        <h4>{name}</h4>
        <p><strong>Price:</strong> ₹{price}</p>
        <p><strong>Category:</strong> {category}</p>
        <p><strong>Available:</strong> {available}</p>
      </div>
    );
  }
}

// Parent class component
class Restaurant extends Component {
  render() {
    return (
      <div style={{ border: "2px solid red", margin: "10px", padding: "15px" }}>
        <h2>Restaurant Details</h2>
        <p><strong>Name:</strong> Food Paradise</p>
        <p><strong>Location:</strong> City Center</p>
        <p><strong>Open Hours:</strong> 10 AM - 11 PM</p>
        <hr />

        <h3>Menu</h3>
        <MenuItem name="Paneer Butter Masala" price={180} category="Main Course" available="Yes" />
        <MenuItem name="Chicken Biryani" price={220} category="Main Course" available="Yes" />
        <MenuItem name="French Fries" price={90} category="Snack" available="No" />
        <MenuItem name="Cold Coffee" price={70} category="Beverage" available="Yes" />
      </div>
    );
  }
}

export default Restaurant;
