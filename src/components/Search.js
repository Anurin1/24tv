import React, { Component } from "react";
import { connect } from "react-redux";

import actions from "../actions";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = { input: "" };
  }

  handleSearchClick(e) {
    e.preventDefault();

    const { input } = this.state;

    this.props.fetchSearch(input);
  }

  render() {
    const { input } = this.state;

    return (
      <div>
        <h2>Search</h2>
        <form>
          <input
            value={input}
            onChange={e => this.setState({ input: e.target.value })}
            placeholder={"Find your favorite movie"}
          />
          <button onClick={e => this.handleSearchClick(e)}>Search</button>
        </form>
      </div>
    );
  }
}

export default connect(null, {
  fetchSearch: actions.fetchSearch,
})(Search);
