import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

class AccessoriesForm extends Component {
  constructor(props) {
    super(props);

    // 🔹 Initial component state
    this.state = {
      name: "",          // text input → Accessory Name
      description: "",   // textarea → Description
      category: "Electronics", // select dropdown → default value
      brand: "",         // radio input → Brand
      available: false,  // checkbox → Available in stock
      warranty: "",      // number input → Warranty years
      submitted: null,   // object → stores submitted data for display
    };
  }

  // 🔹 Handle input changes (works for all types)
  handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    // For checkbox → use "checked", otherwise use "value"
    this.setState({
      [name]: type === "checkbox" ? checked : value,
    });
  };

  // 🔹 Handle form submission
  handleSubmit = (e) => {
    e.preventDefault(); // Prevent page refresh

    // Save submitted data in state
    this.setState({
      submitted: {
        name: this.state.name,
        description: this.state.description,
        category: this.state.category,
        brand: this.state.brand,
        available: this.state.available ? "Yes" : "No", // convert boolean to Yes/No
        warranty: this.state.warranty,
      },

      // Reset form fields after submission
      name: "",
      description: "",
      category: "Electronics",
      brand: "",
      available: false,
      warranty: "",
    });
  };

  render() {
    return (
      <div className="container mt-4">
        {/* 🔹 Bootstrap card for form */}
        <div className="card p-4 shadow">
          <h2 className="text-center mb-3">Accessories Form</h2>

          {/* Form */}
          <form onSubmit={this.handleSubmit}>
            
            {/* Accessory Name (Text Input) */}
            <div className="form-group mb-3">
              <label>Accessory Name</label>
              <input
                type="text"
                className="form-control"
                name="name"
                value={this.state.name}
                onChange={this.handleChange}
                required
              />
            </div>

            {/* Description (Textarea) */}
            <div className="form-group mb-3">
              <label>Description</label>
              <textarea
                className="form-control"
                name="description"
                value={this.state.description}
                onChange={this.handleChange}
              />
            </div>

            {/* Category (Select Dropdown) */}
            <div className="form-group mb-3">
              <label>Category</label>
              <select
                className="form-control"
                name="category"
                value={this.state.category}
                onChange={this.handleChange}
              >
                <option>Electronics</option>
                <option>Clothing</option>
                <option>Footwear</option>
                <option>Other</option>
              </select>
            </div>

            {/* Brand (Radio Buttons) */}
            <div className="form-group mb-3">
              <label>Brand</label> <br />
              <div className="form-check form-check-inline">
                <input
                  type="radio"
                  className="form-check-input"
                  name="brand"
                  value="Nike"
                  checked={this.state.brand === "Nike"}
                  onChange={this.handleChange}
                />
                <label className="form-check-label">Nike</label>
              </div>

              <div className="form-check form-check-inline">
                <input
                  type="radio"
                  className="form-check-input"
                  name="brand"
                  value="Adidas"
                  checked={this.state.brand === "Adidas"}
                  onChange={this.handleChange}
                />
                <label className="form-check-label">Adidas</label>
              </div>

              <div className="form-check form-check-inline">
                <input
                  type="radio"
                  className="form-check-input"
                  name="brand"
                  value="Other"
                  checked={this.state.brand === "Other"}
                  onChange={this.handleChange}
                />
                <label className="form-check-label">Other</label>
              </div>
            </div>

            {/* Available in Stock (Checkbox) */}
            <div className="form-group mb-3">
              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  name="available"
                  checked={this.state.available}
                  onChange={this.handleChange}
                />
                <label className="form-check-label">Available in stock</label>
              </div>
            </div>

            {/* Warranty (Number Input) */}
            <div className="form-group mb-3">
              <label>Warranty (in years)</label>
              <input
                type="number"
                className="form-control"
                name="warranty"
                value={this.state.warranty}
                onChange={this.handleChange}
              />
            </div>

            {/* Submit Button */}
            <button type="submit" className="btn btn-primary w-100">
              Submit
            </button>
          </form>
        </div>

        {/* 🔹 Display submitted data in Bootstrap table */}
        {this.state.submitted && (
          <div className="card mt-4 p-3 shadow">
            <h3 className="text-success">Submitted Accessory Details</h3>
            <table className="table table-bordered">
              <tbody>
                <tr>
                  <th>Accessory Name</th>
                  <td>{this.state.submitted.name}</td>
                </tr>
                <tr>
                  <th>Description</th>
                  <td>{this.state.submitted.description}</td>
                </tr>
                <tr>
                  <th>Category</th>
                  <td>{this.state.submitted.category}</td>
                </tr>
                <tr>
                  <th>Brand</th>
                  <td>{this.state.submitted.brand}</td>
                </tr>
                <tr>
                  <th>Available</th>
                  <td>{this.state.submitted.available}</td>
                </tr>
                <tr>
                  <th>Warranty</th>
                  <td>{this.state.submitted.warranty} years</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </div>
    );
  }
}

export default AccessoriesForm;
