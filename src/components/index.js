import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Landing from "./Landing";
import Movie from "./Movie";
import VideoPlayer from "./VideoPlayer";
// import Category from "./Category";

// import Carousel from './Carousel';
// import CarouselCopy from './CarouselCopy';

export default () => {
  return (
    <Router>
      <Fragment>
        <Switch>
          <Route exact path="/" component={Landing} />
          
          <Route exact path="/movies/:category/:movieName" component={Movie} />
          <Route exact path="/movies/:category/:movieName/watch" component={VideoPlayer} />
        </Switch>
      </Fragment>
    </Router>

    // <div className="container">
    //   <h1>24tv</h1>
    //   {/* <CarouselCopy />
    //   <CarouselCopy /> */}

    //   <Category />

    // </div>
  );
};

{
  /* <Route path="/user/:userId" component={UserPage} /> */
}
