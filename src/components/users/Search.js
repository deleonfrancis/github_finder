import React, { Component } from "react";

export class Search extends Component {
  state = {
    text: "",
  };

  onChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  onSubmit = (event) => {
      event.preventDefault()
      console.log(this.state.text);
    // this.setState({ [event.target.name]: "" });
  };

  render() {
    return (
      <div>
        <form className="from" onSubmit={this.onSubmit}>
          <input
            type="text"
            name="text"
            placeholder="Search Users.."
            value={this.state.text}
            onChange={this.onChange}
          />
          <input
            className="btn btn-dark btn-block"
            type="submit"
            value="Search"
          />
        </form>
      </div>
    );
  }
}

export default Search;
