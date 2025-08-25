// Q17.js
// Conditional Rendering with Multiple Components (Ternary Operators)

import React, { useState, useEffect } from "react";

// Component 1 → Loading message
const LoadingComponent = () => {
  return <h2>⏳ Loading product details...</h2>;
};

// Component 2 → Error message
const ErrorComponent = () => {
  return <h2>⚠️ Error fetching product details</h2>;
};

// Component 3 → Displays Product details
const ProductComponent = ({ product }) => {
  return (
    <div style={{ border: "2px solid black", padding: "15px", margin: "10px" }}>
      <h2>Electronic Product Details</h2>
      <p><b>Name:</b> {product.name}</p>
      <p><b>Brand:</b> {product.brand}</p>
      <p>
        <b>Price:</b> ₹{product.price}
        {/* Price based condition */}
        → {product.price > 50000 ? "💎 Premium Product" : "💰 Budget Product"}
      </p>
      <p>
        {/* Warranty based condition */}
        {product.warranty > 0
          ? `Warranty: ${product.warranty} years`
          : "No Warranty"}
      </p>
      <p>
        {/* Availability check */}
        {product.availability ? "✅ In Stock" : "❌ Out of Stock"}
      </p>
      {/* Special offer for Laptop */}
      {product.category === "Laptop" && <p>🎒 Free Laptop Bag Offer</p>}
    </div>
  );
};

// Main Component for Q17
const Q17 = () => {
  // State to handle loading, error, and product
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [product, setProduct] = useState(null);

  // Simulate API call
  useEffect(() => {
    setTimeout(() => {
      const isError = Math.random() < 0.3; // 30% chance of error
      if (isError) {
        setError(true);
        setLoading(false);
      } else {
        setProduct({
          name: "MacBook Pro",
          brand: "Apple",
          price: 120000,
          category: "Laptop",
          warranty: 2,
          availability: true,
        });
        setLoading(false);
      }
    }, 2000);
  }, []);

  // Conditional rendering using ternary operators
  return (
    <div>
      <h1>🛒 Electronics Store</h1>
      {loading ? (
        <LoadingComponent />
      ) : error ? (
        <ErrorComponent />
      ) : (
        <ProductComponent product={product} />
      )}
    </div>
  );
};

export default Q17;
