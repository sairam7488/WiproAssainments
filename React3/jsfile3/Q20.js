// Q20.js
// React App: Restaurant Registration Form with useEffect & JSON Output

import React, { useState, useEffect } from "react";

const Q20 = () => {
  // ------------------ State Management ------------------
  const [formData, setFormData] = useState({
    restaurantName: "",
    ownerName: "",
    email: "",
    contact: "",
    address: "",
    cuisineType: "",
    openingHours: ""
  });

  const [submittedData, setSubmittedData] = useState(null); // Stores submitted form data

  // ------------------ useEffect Examples ------------------

  // 1. Run on every render
  useEffect(() => {
    console.log("📌 Restaurant Registration Component Rendered");
  });

  // 2. Run only once (on mount)
  useEffect(() => {
    alert("🍽️ Welcome to Restaurant Registration Form!");
  }, []);

  // 3. Run whenever formData changes
  useEffect(() => {
    console.log("✍️ Form Data Changed:", formData);
  }, [formData]);

  // 4. Auto-save every 5 seconds (with cleanup)
  useEffect(() => {
    const autoSave = setInterval(() => {
      console.log("💾 Auto-saving form data...", formData);
    }, 5000);

    // Cleanup function → clears interval on unmount
    return () => clearInterval(autoSave);
  }, [formData]);

  // ------------------ Handlers ------------------

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value }); // Update specific field in state
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload
    setSubmittedData(formData); // Store data in state
  };

  // ------------------ Render UI ------------------
  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">🍴 Restaurant Registration</h1>

      {/* Registration Form */}
      <form className="card p-4 shadow" onSubmit={handleSubmit}>
        {/* Restaurant Name */}
        <div className="form-group mb-3">
          <label><b>Restaurant Name</b></label>
          <input
            type="text"
            className="form-control"
            name="restaurantName"
            value={formData.restaurantName}
            onChange={handleChange}
            required
          />
        </div>

        {/* Owner Name */}
        <div className="form-group mb-3">
          <label><b>Owner Name</b></label>
          <input
            type="text"
            className="form-control"
            name="ownerName"
            value={formData.ownerName}
            onChange={handleChange}
            required
          />
        </div>

        {/* Email */}
        <div className="form-group mb-3">
          <label><b>Email</b></label>
          <input
            type="email"
            className="form-control"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        {/* Contact Number */}
        <div className="form-group mb-3">
          <label><b>Contact Number</b></label>
          <input
            type="text"
            className="form-control"
            name="contact"
            value={formData.contact}
            onChange={handleChange}
            required
          />
        </div>

        {/* Address */}
        <div className="form-group mb-3">
          <label><b>Address</b></label>
          <textarea
            className="form-control"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        {/* Cuisine Type */}
        <div className="form-group mb-3">
          <label><b>Cuisine Type</b></label>
          <input
            type="text"
            className="form-control"
            name="cuisineType"
            value={formData.cuisineType}
            onChange={handleChange}
            required
          />
        </div>

        {/* Opening Hours */}
        <div className="form-group mb-3">
          <label><b>Opening Hours</b></label>
          <input
            type="text"
            className="form-control"
            name="openingHours"
            value={formData.openingHours}
            onChange={handleChange}
            placeholder="e.g. 10 AM - 10 PM"
            required
          />
        </div>

        {/* Submit Button */}
        <button type="submit" className="btn btn-primary">
          Register Restaurant
        </button>
      </form>

      {/* Display Submitted Data as JSON */}
      {submittedData && (
        <div className="card mt-4 p-3 shadow">
          <h3>📋 Submitted Data (JSON Output)</h3>
          <pre>{JSON.stringify(submittedData, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default Q20;
