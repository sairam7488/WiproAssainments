// src/js/JuiceList.js
import React from "react";

// Child component inside the same file
const Juice = ({ id, name, price }) => {
  return (
    <tr>
      <td>{id}</td>
      <td>{name}</td>
      <td>₹{price}</td>
    </tr>
  );
};

// Parent component
const JuiceList = () => {
  const juices = [
    { id: 1, name: "Orange Juice", price: 40 },
    { id: 2, name: "Mango Juice", price: 50 },
    { id: 3, name: "Apple Juice", price: 60 },
    { id: 4, name: "Pineapple Juice", price: 45 }
  ];

  return (
    <div style={{ border: "2px solid purple", margin: "10px", padding: "15px" }}>
      <h2>Juice List</h2>
      <table border="1" cellPadding="10" style={{ borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Juice Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {juices.map((juice) => (
            <Juice key={juice.id} id={juice.id} name={juice.name} price={juice.price} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default JuiceList;
