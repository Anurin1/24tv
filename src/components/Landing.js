import React from "react";
import { connect } from "react-redux";

import { getSearch } from "../reducers/movies";

import Movies from "./Movies";
import Search from "./Search";

const Landing = props => {
  const { searchResults } = props;

  return (
    <div>
      <Movies category={"popular"} />
      <Search />
      {searchResults ? <Movies category={"search"} /> : null}
    </div>
  );
};

const mapStateToProps = state => ({
  searchResults: getSearch(state),
});

export default connect(mapStateToProps)(Landing);
