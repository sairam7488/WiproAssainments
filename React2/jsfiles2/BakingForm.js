import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function BakingForm() {
  // 🔹 State for form input fields (single object)
  const [form, setForm] = useState({
    itemName: "",
    quantity: "",
    ingredients: "",
    bakingTime: "",
    category: "Cake", // default selected
  });

  // 🔹 State for storing submitted baking items (array of objects)
  const [bakingItems, setBakingItems] = useState([]);

  // 🔹 Handle input changes (for all fields)
  const handleChange = (e) => {
    const { name, value } = e.target;
    // Spread operator keeps old values and updates only the changed one
    setForm({ ...form, [name]: value });
  };

  // 🔹 Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // prevent page reload
    setBakingItems([...bakingItems, form]); // add new item to array
    // reset form fields
    setForm({
      itemName: "",
      quantity: "",
      ingredients: "",
      bakingTime: "",
      category: "Cake",
    });
  };

  return (
    <div className="container mt-4">
      {/* Form Section */}
      <div className="card p-4 shadow">
        <h2 className="text-center mb-3">Baking Items Form</h2>
        <form onSubmit={handleSubmit}>
          {/* Item Name Input */}
          <div className="form-group mb-3">
            <label>Item Name</label>
            <input
              type="text"
              className="form-control"
              name="itemName"
              value={form.itemName}
              onChange={handleChange}
              required
            />
          </div>

          {/* Quantity Input */}
          <div className="form-group mb-3">
            <label>Quantity</label>
            <input
              type="number"
              className="form-control"
              name="quantity"
              value={form.quantity}
              onChange={handleChange}
              required
            />
          </div>

          {/* Ingredients Input */}
          <div className="form-group mb-3">
            <label>Ingredients</label>
            <input
              type="text"
              className="form-control"
              name="ingredients"
              value={form.ingredients}
              onChange={handleChange}
              required
            />
          </div>

          {/* Baking Time Input */}
          <div className="form-group mb-3">
            <label>Baking Time (in mins)</label>
            <input
              type="number"
              className="form-control"
              name="bakingTime"
              value={form.bakingTime}
              onChange={handleChange}
              required
            />
          </div>

          {/* Category Dropdown */}
          <div className="form-group mb-3">
            <label>Category</label>
            <select
              className="form-control"
              name="category"
              value={form.category}
              onChange={handleChange}
            >
              <option value="Cake">Cake</option>
              <option value="Bread">Bread</option>
              <option value="Pastry">Pastry</option>
            </select>
          </div>

          {/* Submit Button */}
          <button type="submit" className="btn btn-primary w-100">
            Add Baking Item
          </button>
        </form>
      </div>

      {/* Submitted Items Table */}
      {bakingItems.length > 0 && (
        <div className="card mt-4 p-3 shadow">
          <h3 className="text-success">Baking Items List</h3>
          <table className="table table-bordered table-striped">
            <thead>
              <tr>
                <th>Item Name</th>
                <th>Quantity</th>
                <th>Ingredients</th>
                <th>Baking Time (mins)</th>
                <th>Category</th>
              </tr>
            </thead>
            <tbody>
              {/* Loop through bakingItems array and display in table */}
              {bakingItems.map((item, index) => (
                <tr key={index}>
                  <td>{item.itemName}</td>
                  <td>{item.quantity}</td>
                  <td>{item.ingredients}</td>
                  <td>{item.bakingTime}</td>
                  <td>{item.category}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default BakingForm;
