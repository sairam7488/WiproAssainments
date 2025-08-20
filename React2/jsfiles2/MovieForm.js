import React, { Component } from "react";


class MovieForm extends Component {
  constructor(props) {
    super(props);

    //  Initial state to hold form inputs and submitted movies
    this.state = {
      title: "",          // Movie Title (text)
      director: "",       // Director (text)
      year: "",           // Release Year (number)
      genre: "Action",    // Dropdown → default value "Action"
      rating: "",         // Rating (radio buttons 1–5)
      description: "",    // Movie Description (textarea)
      platforms: {        // Platforms (checkbox group)
        netflix: false,
        prime: false,
        disney: false,
        others: false,
      },
      movies: [],         // Stores list of submitted movies
      showForm: true,     // For toggle button → to demo componentWillUnmount
    };

    console.log("constructor executed → state initialized");
  }

  //  Lifecycle: Runs before every render if props change
  static getDerivedStateFromProps(props, state) {
    console.log("getDerivedStateFromProps executed → prepares state from props if needed");
    return null; // no changes needed here
  }

  //  Lifecycle: Runs once after first render
  componentDidMount() {
    console.log("componentDidMount executed → component mounted to DOM");
  }

  //  Lifecycle: Decides whether to re-render or not
  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate executed → always returns true here");
    return true;
  }

  //  Lifecycle: Runs just before DOM updates (rarely used in real apps)
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("getSnapshotBeforeUpdate executed → before updating DOM");
    return null;
  }

  // Lifecycle: Runs after DOM update
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("componentDidUpdate executed → DOM updated successfully");
  }

  // Lifecycle: Runs when component is removed from DOM
  componentWillUnmount() {
    console.log("componentWillUnmount executed → cleanup before component removal");
  }

  // Handles changes for text, number, select, and radio inputs
  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  //  Handles checkbox changes (platforms → Netflix, Prime, etc.)
  handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    this.setState((prevState) => ({
      platforms: { ...prevState.platforms, [name]: checked },
    }));
  };

  //  Handles form submission
  handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload

    const { title, director, year, genre, rating, description, platforms } = this.state;

    // Collect selected platforms into a string
    const selectedPlatforms = Object.keys(platforms)
      .filter((p) => platforms[p]) // keep only checked ones
      .join(", ") || "None";       // if none checked → "None"

    // Create new movie object
    const newMovie = { title, director, year, genre, rating, description, selectedPlatforms };

    // Add movie to movies array & reset form fields
    this.setState((prevState) => ({
      movies: [...prevState.movies, newMovie], // add to list
      title: "",
      director: "",
      year: "",
      genre: "Action",
      rating: "",
      description: "",
      platforms: { netflix: false, prime: false, disney: false, others: false },
    }));
  };

  //  Toggle form visibility → used to demonstrate componentWillUnmount
  toggleForm = () => {
    this.setState({ showForm: !this.state.showForm });
  };

  render() {
    console.log("render executed → UI re-rendered");

    return (
      <div className="container mt-4">
        <h2 className="text-center mb-4">Movie Form</h2>

        {/* Toggle button to hide/show form */}
        <button className="btn btn-warning mb-3" onClick={this.toggleForm}>
          {this.state.showForm ? "Hide Form" : "Show Form"}
        </button>

        {/* Show/Hide form based on showForm */}
        {this.state.showForm && (
          <div className="card p-4 shadow">
            <form onSubmit={this.handleSubmit}>
              {/* Movie Title */}
              <div className="form-group mb-3">
                <label>Movie Title</label>
                <input
                  type="text"
                  className="form-control"
                  name="title"
                  value={this.state.title}
                  onChange={this.handleChange}
                  required
                />
              </div>

              {/* Director */}
              <div className="form-group mb-3">
                <label>Director</label>
                <input
                  type="text"
                  className="form-control"
                  name="director"
                  value={this.state.director}
                  onChange={this.handleChange}
                  required
                />
              </div>

              {/* Release Year */}
              <div className="form-group mb-3">
                <label>Release Year</label>
                <input
                  type="number"
                  className="form-control"
                  name="year"
                  value={this.state.year}
                  onChange={this.handleChange}
                  required
                />
              </div>

              {/* Genre */}
              <div className="form-group mb-3">
                <label>Genre</label>
                <select
                  className="form-control"
                  name="genre"
                  value={this.state.genre}
                  onChange={this.handleChange}
                >
                  <option>Action</option>
                  <option>Comedy</option>
                  <option>Drama</option>
                  <option>Sci-Fi</option>
                  <option>Horror</option>
                </select>
              </div>

              {/* Rating */}
              <div className="form-group mb-3">
                <label>Rating</label> <br />
                {[1, 2, 3, 4, 5].map((num) => (
                  <div className="form-check form-check-inline" key={num}>
                    <input
                      type="radio"
                      className="form-check-input"
                      name="rating"
                      value={num}
                      checked={this.state.rating === String(num)}
                      onChange={this.handleChange}
                    />
                    <label className="form-check-label">{num}</label>
                  </div>
                ))}
              </div>

              {/* Description */}
              <div className="form-group mb-3">
                <label>Description</label>
                <textarea
                  className="form-control"
                  name="description"
                  value={this.state.description}
                  onChange={this.handleChange}
                />
              </div>

              {/* Platforms (checkbox group) */}
              <div className="form-group mb-3">
                <label>Available on Streaming Platforms</label> <br />
                <div className="form-check form-check-inline">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    name="netflix"
                    checked={this.state.platforms.netflix}
                    onChange={this.handleCheckboxChange}
                  />
                  <label className="form-check-label">Netflix</label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    name="prime"
                    checked={this.state.platforms.prime}
                    onChange={this.handleCheckboxChange}
                  />
                  <label className="form-check-label">Prime</label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    name="disney"
                    checked={this.state.platforms.disney}
                    onChange={this.handleCheckboxChange}
                  />
                  <label className="form-check-label">Disney+</label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    name="others"
                    checked={this.state.platforms.others}
                    onChange={this.handleCheckboxChange}
                  />
                  <label className="form-check-label">Others</label>
                </div>
              </div>

              {/* Submit button */}
              <button type="submit" className="btn btn-primary w-100">
                Add Movie
              </button>
            </form>
          </div>
        )}

        {/* Display list of submitted movies */}
        {this.state.movies.length > 0 && (
          <div className="card mt-4 p-3 shadow">
            <h3 className="text-success">Movie List</h3>
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Director</th>
                  <th>Year</th>
                  <th>Genre</th>
                  <th>Rating</th>
                  <th>Description</th>
                  <th>Platforms</th>
                </tr>
              </thead>
              <tbody>
                {this.state.movies.map((movie, index) => (
                  <tr key={index}>
                    <td>{movie.title}</td>
                    <td>{movie.director}</td>
                    <td>{movie.year}</td>
                    <td>{movie.genre}</td>
                    <td>{movie.rating}</td>
                    <td>{movie.description}</td>
                    <td>{movie.selectedPlatforms}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    );
  }
}

export default MovieForm;
