
import React from "react";

// Functional Component GroceryList
// Receives "items" as props from parent (App.js)
const GroceryList = ({ items }) => {
  return (
    <div style={{ padding: "20px" }}>
      {/* Heading */}
      <h2>Grocery List</h2>

      {/* Render grocery items dynamically using map() */}
      <ul>
        {items.map((item, index) => (
          // Each <li> needs a unique "key" so React can track changes
          <li key={index}>{item}</li>
        ))}
      </ul>

      {/* Button that shows alert when clicked */}
      <button onClick={() => alert("Groceries Added to Cart!")}>
        Add to Cart
      </button>
    </div>
  );
};

// Export the component so App.js can use it
export default GroceryList;
