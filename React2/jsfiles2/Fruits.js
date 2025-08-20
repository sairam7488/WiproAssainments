
import React, { Component } from "react";

// Child Functional Component
const FruitList = ({ fruits }) => {
  return (
    <div className="mt-3">
      <h4>Fruit List:</h4>
      <ul>
        {fruits.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>
    </div>
  );
};

// Parent Class Component
class Fruits extends Component {
  constructor(props) {
    super(props);

    // Initial state with default fruits
    this.state = {
      fruits: ["Apple", "Banana", "Mango"],
      newFruit: ""
    };
  }

  // Handle input change
  handleChange = (event) => {
    this.setState({ newFruit: event.target.value });
  };

  // Add fruit to the state array
  addFruit = () => {
    if (this.state.newFruit.trim() !== "") {
      this.setState((prevState) => ({
        fruits: [...prevState.fruits, prevState.newFruit],
        newFruit: "" // clear input
      }));
    }
  };

  render() {
    return (
      <div style={{ border: "2px solid green", margin: "10px", padding: "15px" }}>
        <h2>Fruits Manager</h2>

        {/* Input and button to add fruit */}
        <input
          type="text"
          placeholder="Enter a fruit"
          value={this.state.newFruit}
          onChange={this.handleChange}
        />
        <button onClick={this.addFruit} style={{ marginLeft: "10px" }}>
          Add Fruit
        </button>

        {/* Injecting Functional Component and passing fruits as props */}
        <FruitList fruits={this.state.fruits} />
      </div>
    );
  }
}

export default Fruits;
