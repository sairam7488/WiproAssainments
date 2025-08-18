
import React from "react";

// Functional Component
const TempleList = () => {
  // Array of temple objects
  const temples = [
    {
      id: 1,
      name: "Tirupati Balaji Temple",
      location: "Andhra Pradesh",
      deities: ["Lord Venkateswara", "Goddess Padmavati"]
    },
    {
      id: 2,
      name: "Kashi Vishwanath Temple",
      location: "Varanasi, UP",
      deities: ["Lord Shiva"]
    },
    {
      id: 3,
      name: "Jagannath Temple",
      location: "Puri, Odisha",
      deities: ["Lord Jagannath", "Balabhadra", "Subhadra"]
    }
  ];

  return (
    <div style={{ border: "2px solid brown", margin: "10px", padding: "15px" }}>
      <h2>Temple List</h2>

      {/* Table to display temples and deities */}
      <table border="1" cellPadding="10" style={{ borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Temple Name</th>
            <th>Location</th>
            <th>Deities</th>
          </tr>
        </thead>
        <tbody>
          {/* Outer map for temples */}
          {temples.map((temple) => (
            <tr key={temple.id}>
              <td>{temple.id}</td>
              <td>{temple.name}</td>
              <td>{temple.location}</td>
              <td>
                {/* Inner map for deities array */}
                <ul>
                  {temple.deities.map((deity, index) => (
                    <li key={index}>{deity}</li>
                  ))}
                </ul>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TempleList;
