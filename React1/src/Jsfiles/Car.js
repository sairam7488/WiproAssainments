
import React, { Component } from "react";

// Car component as a Class Component
// It receives props from parent App.js
class Car extends Component {
  render() {
    // Destructure props for cleaner code
    const { brand, model, color, year } = this.props;

    return (
      <div style={{
          border: "1px solid black",
          padding: "15px",
          margin: "10px",
          borderRadius: "8px"
        }}>
        <h2>Car Details</h2>
        {/* Displaying props values */}
        <p><strong>Brand:</strong> {brand}</p>
        <p><strong>Model:</strong> {model}</p>
        <p><strong>Color:</strong> {color}</p>
        <p><strong>Year:</strong> {year}</p>
      </div>
    );
  }
}

// Export component so App.js can use it
export default Car;
