import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

class MarriageForm extends Component {
  constructor(props) {
    super(props);

    // 🔹 Initial state for form fields
    this.state = {
      brideName: "",   // Bride Name (text)
      groomName: "",   // Groom Name (text)
      date: "",        // Marriage Date (date input)
      venue: "",       // Venue (text input)
      submitted: null, // Stores submitted form details
    };
  }

  // 🔹 Handle input change for all fields
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  // 🔹 Handle form submission
  handleSubmit = (e) => {
    e.preventDefault(); // Prevent page refresh

    // Store submitted data
    this.setState({
      submitted: {
        brideName: this.state.brideName,
        groomName: this.state.groomName,
        date: this.state.date,
        venue: this.state.venue,
      },

      // Reset form fields after submission
      brideName: "",
      groomName: "",
      date: "",
      venue: "",
    });
  };

  render() {
    return (
      <div className="container mt-4">
        {/* 🔹 Form card */}
        <div className="card p-4 shadow">
          <h2 className="text-center mb-3">Marriage Registration Form</h2>

          {/* Form Section */}
          <form onSubmit={this.handleSubmit}>
            {/* Bride Name */}
            <div className="form-group mb-3">
              <label>Bride Name</label>
              <input
                type="text"
                className="form-control"
                name="brideName"
                value={this.state.brideName}
                onChange={this.handleChange}
                required
              />
            </div>

            {/* Groom Name */}
            <div className="form-group mb-3">
              <label>Groom Name</label>
              <input
                type="text"
                className="form-control"
                name="groomName"
                value={this.state.groomName}
                onChange={this.handleChange}
                required
              />
            </div>

            {/* Marriage Date */}
            <div className="form-group mb-3">
              <label>Date</label>
              <input
                type="date"
                className="form-control"
                name="date"
                value={this.state.date}
                onChange={this.handleChange}
                required
              />
            </div>

            {/* Venue */}
            <div className="form-group mb-3">
              <label>Venue</label>
              <input
                type="text"
                className="form-control"
                name="venue"
                value={this.state.venue}
                onChange={this.handleChange}
                required
              />
            </div>

            {/* Submit Button */}
            <button type="submit" className="btn btn-primary w-100">
              Submit
            </button>
          </form>
        </div>

        {/* 🔹 Display Submitted Data */}
        {this.state.submitted && (
          <div className="card mt-4 p-3 shadow">
            <h3 className="text-success">Marriage Details</h3>
            <p><strong>Bride Name:</strong> {this.state.submitted.brideName}</p>
            <p><strong>Groom Name:</strong> {this.state.submitted.groomName}</p>
            <p><strong>Date:</strong> {this.state.submitted.date}</p>
            <p><strong>Venue:</strong> {this.state.submitted.venue}</p>
          </div>
        )}
      </div>
    );
  }
}

export default MarriageForm;
