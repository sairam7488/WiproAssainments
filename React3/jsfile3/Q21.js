// Q21.js
// React App demonstrating Parent → Child, Child → Parent, and Sibling → Sibling communication

import React, { useState } from "react";

// ------------------ Child A ------------------
// Displays fruits passed from Parent (Parent → Child communication)
const ChildA = ({ fruits, onSelectFruit }) => {
  return (
    <div className="card p-3 m-2">
      <h3>🍎 Child A - Fruit List</h3>
      <ul>
        {fruits.map((fruit, index) => (
          <li key={index}>
            {fruit}
            {/* Button to select a fruit → sends info back to Parent */}
            <button
              className="btn btn-sm btn-outline-primary ms-2"
              onClick={() => onSelectFruit(fruit)}
            >
              Select
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

// ------------------ Child B ------------------
// Sends a new fruit back to Parent (Child → Parent communication)
const ChildB = ({ onAddFruit }) => {
  return (
    <div className="card p-3 m-2">
      <h3>🍊 Child B</h3>
      <button className="btn btn-success" onClick={() => onAddFruit("Orange")}>
        Send Fruit (Orange) to Parent
      </button>
    </div>
  );
};

// ------------------ Child C ------------------
// Displays the fruit selected in Child A (Sibling → Sibling via Parent state)
const ChildC = ({ selectedFruit }) => {
  return (
    <div className="card p-3 m-2">
      <h3>🍇 Child C - Selected Fruit</h3>
      <p>
        {selectedFruit
          ? `✅ Selected Fruit: ${selectedFruit}`
          : "❌ No fruit selected yet"}
      </p>
    </div>
  );
};

// ------------------ Parent Component ------------------
const Q21 = () => {
  // Parent manages fruit list
  const [fruits, setFruits] = useState(["Apple", "Mango"]);

  // Parent stores fruit selected in Child A
  const [selectedFruit, setSelectedFruit] = useState(null);

  // Function to add new fruit from Child B
  const handleAddFruit = (fruit) => {
    setFruits([...fruits, fruit]); // Add fruit to list
  };

  // Function to store selected fruit from Child A
  const handleSelectFruit = (fruit) => {
    setSelectedFruit(fruit);
  };

  return (
    <div className="container mt-4">
      <h1 className="text-center">🍉 Parent / Child / Sibling Communication</h1>

      {/* Pass fruits + event handler to Child A */}
      <ChildA fruits={fruits} onSelectFruit={handleSelectFruit} />

      {/* Pass event handler to Child B */}
      <ChildB onAddFruit={handleAddFruit} />

      {/* Pass selectedFruit to Child C */}
      <ChildC selectedFruit={selectedFruit} />

      {/* Parent shows current fruit list */}
      <div className="card mt-3 p-3">
        <h3>📋 Parent - Current Fruits</h3>
        <ul>
          {fruits.map((fruit, index) => (
            <li key={index}>{fruit}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Q21;
