// src/js/Television.js
import React, { Component } from "react";

// Child Functional Component
const TelevisionList = ({ televisions }) => {
  return (
    <div className="mt-3">
      <h4>Television List:</h4>
      <table border="1" cellPadding="10" style={{ borderCollapse: "collapse", width: "100%" }}>
        <thead>
          <tr>
            <th>Brand</th>
            <th>Model</th>
            <th>Size (inches)</th>
            <th>Price (₹)</th>
          </tr>
        </thead>
        <tbody>
          {televisions.map((tv, index) => (
            <tr key={index}>
              <td>{tv.brand}</td>
              <td>{tv.model}</td>
              <td>{tv.size}</td>
              <td>{tv.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

// Parent Class Component
class TelevisionManager extends Component {
  constructor(props) {
    super(props);
    this.state = {
      televisions: [
        { brand: "Samsung", model: "QLED", size: 55, price: 65000 },
        { brand: "LG", model: "OLED", size: 65, price: 120000 },
        { brand: "Sony", model: "Bravia", size: 50, price: 75000 }
      ],
      brand: "",
      model: "",
      size: "",
      price: ""
    };
  }

  // Handle input changes
  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  // Add a new TV
  addTelevision = () => {
    const { brand, model, size, price } = this.state;
    if (brand && model && size && price) {
      this.setState((prevState) => ({
        televisions: [
          ...prevState.televisions,
          { brand, model, size: parseInt(size), price: parseInt(price) }
        ],
        brand: "",
        model: "",
        size: "",
        price: ""
      }));
    }
  };

  render() {
    return (
      <div style={{ border: "2px solid blue", margin: "10px", padding: "15px" }}>
        <h2>Television Manager</h2>

        {/* Input fields */}
        <input
          type="text"
          name="brand"
          placeholder="Brand"
          value={this.state.brand}
          onChange={this.handleChange}
        />
        <input
          type="text"
          name="model"
          placeholder="Model"
          value={this.state.model}
          onChange={this.handleChange}
          style={{ marginLeft: "10px" }}
        />
        <input
          type="number"
          name="size"
          placeholder="Size"
          value={this.state.size}
          onChange={this.handleChange}
          style={{ marginLeft: "10px" }}
        />
        <input
          type="number"
          name="price"
          placeholder="Price"
          value={this.state.price}
          onChange={this.handleChange}
          style={{ marginLeft: "10px" }}
        />
        <button onClick={this.addTelevision} style={{ marginLeft: "10px" }}>
          Add TV
        </button>

        {/* Child Component injected */}
        <TelevisionList televisions={this.state.televisions} />
      </div>
    );
  }
}

export default TelevisionManager;
