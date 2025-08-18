// src/js/ServiceCard.js
import React from "react";

// Child Component (Service Card)
const ServiceCard = ({ serviceName, price, fabricsAvailable }) => {
  return (
    <div className="col-md-4 mb-3">
      <div className="card shadow">
        <div className="card-body">
          <h4 className="card-title">{serviceName}</h4>
          <p className="card-text"><strong>Price:</strong> ₹{price}</p>

          <h6>Fabrics Available:</h6>
          <ul className="list-group list-group-flush">
            {fabricsAvailable.map((fabric, index) => (
              <li key={index} className="list-group-item">
                {fabric}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
