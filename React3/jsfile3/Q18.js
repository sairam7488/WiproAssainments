// Q18.js
// React Application to display different furniture items using switch–case conditional rendering

import React, { useState } from "react"; // Import React and useState hook

// ------------------ Individual Furniture Components ------------------
// Each furniture type has its own component for better modularity and clarity

// Chair Component
const Chair = ({ item }) => (
  <div style={{ border: "2px solid #333", padding: "15px", margin: "10px" }}>
    <h2>🪑 Chair Details</h2>
    {/* Display Chair details from props */}
    <p><b>Name:</b> {item.name}</p>
    <p><b>Price:</b> ₹{item.price}</p>
    <p><b>Material:</b> {item.material}</p>
    <p><b>Size:</b> {item.size}</p>
    <p><b>Brand:</b> {item.brand}</p>
  </div>
);

// Table Component
const Table = ({ item }) => (
  <div style={{ border: "2px solid #333", padding: "15px", margin: "10px" }}>
    <h2>🍽️ Table Details</h2>
    {/* Display Table details from props */}
    <p><b>Name:</b> {item.name}</p>
    <p><b>Price:</b> ₹{item.price}</p>
    <p><b>Material:</b> {item.material}</p>
    <p><b>Size:</b> {item.size}</p>
    <p><b>Brand:</b> {item.brand}</p>
  </div>
);

// Sofa Component
const Sofa = ({ item }) => (
  <div style={{ border: "2px solid #333", padding: "15px", margin: "10px" }}>
    <h2>🛋️ Sofa Details</h2>
    {/* Display Sofa details from props */}
    <p><b>Name:</b> {item.name}</p>
    <p><b>Price:</b> ₹{item.price}</p>
    <p><b>Material:</b> {item.material}</p>
    <p><b>Size:</b> {item.size}</p>
    <p><b>Brand:</b> {item.brand}</p>
  </div>
);

// Bed Component
const Bed = ({ item }) => (
  <div style={{ border: "2px solid #333", padding: "15px", margin: "10px" }}>
    <h2>🛏️ Bed Details</h2>
    {/* Display Bed details from props */}
    <p><b>Name:</b> {item.name}</p>
    <p><b>Price:</b> ₹{item.price}</p>
    <p><b>Material:</b> {item.material}</p>
    <p><b>Size:</b> {item.size}</p>
    <p><b>Brand:</b> {item.brand}</p>
  </div>
);

// ------------------ Main Component ------------------
const Q18 = () => {
  // useState → to store which furniture the user has selected from dropdown
  const [selectedFurniture, setSelectedFurniture] = useState("Chair");

  // Sample furniture data (like coming from API)
  const furnitureData = {
    Chair: { name: "Office Chair", price: 2500, material: "Leather", size: "Medium", brand: "Godrej" },
    Table: { name: "Dining Table", price: 15000, material: "Wood", size: "Large", brand: "Durian" },
    Sofa: { name: "3-Seater Sofa", price: 30000, material: "Fabric", size: "Large", brand: "Ikea" },
    Bed: { name: "King Size Bed", price: 45000, material: "Teak Wood", size: "King", brand: "HomeTown" }
  };

  // Function that decides which furniture component to display using switch-case
  const renderFurniture = () => {
    switch (selectedFurniture) {
      case "Chair":
        return <Chair item={furnitureData.Chair} />;
      case "Table":
        return <Table item={furnitureData.Table} />;
      case "Sofa":
        return <Sofa item={furnitureData.Sofa} />;
      case "Bed":
        return <Bed item={furnitureData.Bed} />;
      default:
        return <p>⚠️ Please select a furniture item.</p>;
    }
  };

  return (
    <div>
      <h1>🛋️ Furniture Store</h1>

      {/* Dropdown menu → allows user to choose furniture type */}
      <label><b>Select Furniture: </b></label>
      <select
        value={selectedFurniture} // Current value of state
        onChange={(e) => setSelectedFurniture(e.target.value)} // Update state on change
      >
        <option value="Chair">Chair</option>
        <option value="Table">Table</option>
        <option value="Sofa">Sofa</option>
        <option value="Bed">Bed</option>
      </select>

      {/* Show the furniture details chosen from dropdown */}
      <div style={{ marginTop: "20px" }}>
        {renderFurniture()}
      </div>
    </div>
  );
};

export default Q18;
