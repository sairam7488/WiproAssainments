// src/js/TailorShop.js
import React from "react";

// Child Component inside same file
const ServiceCard = ({ serviceName, price, fabricsAvailable }) => {
  return (
    <div className="col-md-4 mb-3">
      <div className="card shadow border-success"> {/* green border around each card */}
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

// Parent Component
const TailorShop = () => {
  const services = [
    { serviceName: "Shirts", price: 500, fabricsAvailable: ["Cotton", "Linen", "Silk"] },
    { serviceName: "Pants", price: 700, fabricsAvailable: ["Denim", "Cotton", "Polyester"] },
    { serviceName: "Boxer", price: 3000, fabricsAvailable: ["Silk", "Velvet", "Chiffon"] },
    { serviceName: "Tshirt", price: 800, fabricsAvailable: ["Cotton", "Silk", "Georgette"] }
  ];

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Tailoring Shop Services</h2>
      <div className="row g-3"> {/* Bootstrap gutter spacing */}
        {services.map((service, index) => (
          <React.Fragment key={index}>
            <ServiceCard
              serviceName={service.serviceName}
              price={service.price}
              fabricsAvailable={service.fabricsAvailable}
            />
            {/* Add a green horizontal line after each card */}
            <div className="w-100">
              <hr style={{ border: "2px solid green" }} />
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default TailorShop;
