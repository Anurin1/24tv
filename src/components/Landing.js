import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import actions from "../actions";

import { getMovies } from "../reducers/movies";

import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";

import api from "../utils/api";

import Movies from "./Movies";
import Search from "./Search";

import { getSearch } from "../reducers/movies"

const IMG_PATH = "https://image.tmdb.org/t/p/w154";

class Landing extends Component {
  constructor(props) {
    super(props);
    // this.state = { search: [], input: "", selectedMovie: null };
  }

  // componentDidMount() {
  //   this.props.fetchMovies();
  // }

  // renderMovies(movies) {
  //   // const { movies } = this.props;

  //   //!if ends with null remove
  //   // https://image.tmdb.org/t/p/w154null
  //   //https://image.tmdb.org/t/p/w154null

  //   <h2>Popular movies</h2>

  //   return movies.map((movie, i) => {
  //     return (

  //       <Link to={`/movie/${movie.urlTitle}`} movieEE={movie}>
  //         <img
  //           src={IMG_PATH + movie.poster_path}
  //           key={movie.original_title}
  //           className="img-movie"
  //         />
  //       </Link>
  //     );
  //   });
  // }

  // renderMovie() {
  //   return (

  //   )
  // }
  // renderSearch() {
  //   const { search, input } = this.state;
  //   if (search.length === 0) {
  //     return null;
  //   }
  //   //! show nothing found

  //   return (
  //     <Carousel
  //       slidesPerPage={8}
  //       slidesPerScroll={1}
  //       offset={30}
  //       itemWidth={154}
  //     >
  //       {this.renderMovies(this.state.search)}
  //     </Carousel>
  //   );
  // }

  // handleSearchClick(e) {
  //   e.preventDefault();

  //   const { input } = this.state;

  //   if (input.length < 3) {
  //     alert("You must type atleast 3 letters.")
  //     return;
  //   }

  //   this.fetchSearch(input);
  // }

  // async fetchSearch(input) {
  //   //"https://api.themoviedb.org/3/movie/",
  //   //https://api.themoviedb.org/3/search/movie?api_key=24f236a5226844fd146103fb45ff24f2&language=en-US&query=spider&page=1&include_adult=false

  //   //!add to store
  //   const res = await api.get(
  //     `search/movie?api_key=24f236a5226844fd146103fb45ff24f2&language=en-US&query=${input}&page=1&include_adult=false`
  //   );
  //   console.log("Landing -> fetchSearch -> res", res);
  //   this.setState({ search: res.data.results });
  // }

  render() {
    // console.log("Carousel -> render -> movies", movies)
    // const { input } = this.state;
    const { searchResults } = this.props;

    return (
      <div>
        <Movies category={"popular"} />
        <Search />
        {searchResults ? <Movies category={"search"} /> : null}
        
      </div>
    );
  }
}

const mapStateToProps = state => ({
  searchResults: getSearch(state),
});

export default connect(mapStateToProps, {
  // fetchMovies: actions.fetchMovies,
})(Landing);

// export default Carousel;

{
  /* <Carousel
slidesPerPage={8}
slidesPerScroll={1}
offset={30}
itemWidth={154}
>
{this.renderMovies('popular')}
</Carousel> */
}
