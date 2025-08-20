import React, { Component, createRef } from "react";



// ===============================================================
// 🔹 Controlled Component → Manages form fields using STATE
// ===============================================================
class FlightBookingControlled extends Component {
  constructor(props) {
    super(props);

    // Component state → each input field is linked to a state variable
    this.state = {
      passengerName: "",
      email: "",
      gender: "",
      meal: "Veg",    // default dropdown value
      request: "",    // special request
      submitted: null // stores submitted data for display
    };
  }

  // 🔹 Updates state whenever input value changes
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  // 🔹 Handle form submission
  handleSubmit = (e) => {
    e.preventDefault(); // prevent page refresh

    // Save form data in submitted object
    this.setState({
      submitted: {
        passengerName: this.state.passengerName,
        email: this.state.email,
        gender: this.state.gender,
        meal: this.state.meal,
        request: this.state.request,
      },
      // Reset form fields
      passengerName: "",
      email: "",
      gender: "",
      meal: "Veg",
      request: "",
    });
  };

  render() {
    return (
      <div className="card p-4 shadow mt-4">
        <h3 className="text-center mb-3">Controlled Flight Booking Form</h3>

        {/* 🔹 Controlled Form */}
        <form onSubmit={this.handleSubmit}>
          {/* Passenger Name */}
          <div className="form-group mb-3">
            <label>Passenger Name</label>
            <input
              type="text"
              className="form-control"
              name="passengerName"
              value={this.state.passengerName}
              onChange={this.handleChange}
              required
            />
          </div>

          {/* Email */}
          <div className="form-group mb-3">
            <label>Email</label>
            <input
              type="email"
              className="form-control"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
              required
            />
          </div>

          {/* Gender (Radio) */}
          <div className="form-group mb-3">
            <label>Gender</label> <br />
            <div className="form-check form-check-inline">
              <input
                type="radio"
                className="form-check-input"
                name="gender"
                value="Male"
                checked={this.state.gender === "Male"}
                onChange={this.handleChange}
              />
              <label className="form-check-label">Male</label>
            </div>
            <div className="form-check form-check-inline">
              <input
                type="radio"
                className="form-check-input"
                name="gender"
                value="Female"
                checked={this.state.gender === "Female"}
                onChange={this.handleChange}
              />
              <label className="form-check-label">Female</label>
            </div>
          </div>

          {/* Meal Preference */}
          <div className="form-group mb-3">
            <label>Meal Preference</label>
            <select
              className="form-control"
              name="meal"
              value={this.state.meal}
              onChange={this.handleChange}
            >
              <option>Veg</option>
              <option>Non-Veg</option>
            </select>
          </div>

          {/* Special Request */}
          <div className="form-group mb-3">
            <label>Special Request</label>
            <textarea
              className="form-control"
              name="request"
              value={this.state.request}
              onChange={this.handleChange}
            />
          </div>

          {/* Submit Button */}
          <button type="submit" className="btn btn-primary w-100">
            Submit
          </button>
        </form>

        {/* 🔹 Display submitted data in a table */}
        {this.state.submitted && (
          <div className="mt-4">
            <h5 className="text-success">Submitted Details</h5>
            <table className="table table-bordered">
              <tbody>
                <tr>
                  <th>Passenger Name</th>
                  <td>{this.state.submitted.passengerName}</td>
                </tr>
                <tr>
                  <th>Email</th>
                  <td>{this.state.submitted.email}</td>
                </tr>
                <tr>
                  <th>Gender</th>
                  <td>{this.state.submitted.gender}</td>
                </tr>
                <tr>
                  <th>Meal</th>
                  <td>{this.state.submitted.meal}</td>
                </tr>
                <tr>
                  <th>Special Request</th>
                  <td>{this.state.submitted.request}</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </div>
    );
  }
}


// ===============================================================
// 🔹 Uncontrolled Component → Uses Refs (direct DOM access)
// ===============================================================
class FlightBookingUncontrolled extends Component {
  constructor(props) {
    super(props);

    // Create refs for each input field
    this.flightNumberRef = createRef();
    this.sourceRef = createRef();
    this.destinationRef = createRef();
    this.dateRef = createRef();
    this.termsRef = createRef();

    this.state = { submitted: null };
  }

  // 🔹 Handle submission by reading values directly from refs
  handleSubmit = (e) => {
    e.preventDefault();

    this.setState({
      submitted: {
        flightNumber: this.flightNumberRef.current.value,
        source: this.sourceRef.current.value,
        destination: this.destinationRef.current.value,
        date: this.dateRef.current.value,
        terms: this.termsRef.current.checked ? "Accepted" : "Not Accepted",
      },
    });

    // Reset input values manually (since refs don’t auto-reset)
    this.flightNumberRef.current.value = "";
    this.sourceRef.current.value = "";
    this.destinationRef.current.value = "";
    this.dateRef.current.value = "";
    this.termsRef.current.checked = false;
  };

  render() {
    return (
      <div className="card p-4 shadow mt-4">
        <h3 className="text-center mb-3">Uncontrolled Flight Booking Form</h3>

        {/* 🔹 Uncontrolled Form (Refs instead of state) */}
        <form onSubmit={this.handleSubmit}>
          {/* Flight Number */}
          <div className="form-group mb-3">
            <label>Flight Number</label>
            <input type="text" className="form-control" ref={this.flightNumberRef} required />
          </div>

          {/* Source */}
          <div className="form-group mb-3">
            <label>Source</label>
            <input type="text" className="form-control" ref={this.sourceRef} required />
          </div>

          {/* Destination */}
          <div className="form-group mb-3">
            <label>Destination</label>
            <input type="text" className="form-control" ref={this.destinationRef} required />
          </div>

          {/* Travel Date */}
          <div className="form-group mb-3">
            <label>Travel Date</label>
            <input type="date" className="form-control" ref={this.dateRef} required />
          </div>

          {/* Terms Checkbox */}
          <div className="form-check mb-3">
            <input type="checkbox" className="form-check-input" ref={this.termsRef} />
            <label className="form-check-label">Accept Terms & Conditions</label>
          </div>

          {/* Submit Button */}
          <button type="submit" className="btn btn-success w-100">
            Submit
          </button>
        </form>

        {/* 🔹 Display submitted data */}
        {this.state.submitted && (
          <div className="card mt-4 p-3">
            <h5 className="text-success">Submitted Flight Details</h5>
            <p><strong>Flight Number:</strong> {this.state.submitted.flightNumber}</p>
            <p><strong>Source:</strong> {this.state.submitted.source}</p>
            <p><strong>Destination:</strong> {this.state.submitted.destination}</p>
            <p><strong>Date:</strong> {this.state.submitted.date}</p>
            <p><strong>Terms:</strong> {this.state.submitted.terms}</p>
          </div>
        )}
      </div>
    );
  }
}


// ===============================================================
// 🔹 Parent Component → Renders both Controlled & Uncontrolled Forms
// ===============================================================
function FlightBookingForm() {
  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Flight Booking Application</h2>
      {/* Controlled Component */}
      <FlightBookingControlled />
      {/* Uncontrolled Component */}
      <FlightBookingUncontrolled />
    </div>
  );
}

export default FlightBookingForm;
