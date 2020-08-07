import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import actions from "../actions";

import { getMovies } from "../reducers/movies";


import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';


const IMG_PATH = "https://image.tmdb.org/t/p/w154";

class Category extends Component {
  componentDidMount() {
    this.props.fetchMovies();
  }

  renderMovies() {
    const { movies } = this.props;

    return movies.map((movie, i) => {
      return (
        <Link to="/abc">
          <img src={IMG_PATH + movie.poster_path} key={movie.original_title} className="img-movie"/>
        </Link>
      );
    });
  }

  // renderMovie() {
  //   return (

  //   )
  // }

  render() {
    // console.log("Carousel -> render -> movies", movies)

    return (
      <div>
        <h2>Popular movies</h2>
        <Carousel
          slidesPerPage={8}
          slidesPerScroll={1}
          offset={30}
          itemWidth={154}
          
        >
         {this.renderMovies()}
        </Carousel>

        <h2>Popular series</h2>
        <Carousel
          slidesPerPage={8}
          slidesPerScroll={1}
          offset={30}
          itemWidth={154}
          
        >
         {this.renderMovies()}
        </Carousel>

        <h2>Family</h2>
        <Carousel
          slidesPerPage={8}
          slidesPerScroll={1}
          offset={30}
          itemWidth={154}
          
        >
         {this.renderMovies()}
        </Carousel>

        <h2>Documentary</h2>
        <Carousel
          slidesPerPage={8}
          slidesPerScroll={1}
          offset={30}
          itemWidth={154}
          
        >
         {this.renderMovies()}
        </Carousel>


      </div>
    );
  }
}

const mapStateToProps = state => ({
  movies: getMovies(state),
});

export default connect(mapStateToProps, {
  fetchMovies: actions.fetchMovies,
})(Category);

// export default Carousel;
