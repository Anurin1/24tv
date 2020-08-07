import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Landing from "./Landing";
import Movie from "./Movie";
import Watch from "./Watch";
// import Category from "./Category";

// import Carousel from './Carousel';
// import CarouselCopy from './CarouselCopy';

export default () => {
  return (
    <Router>
      <Fragment>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route path="/movie/:movieName" component={Movie} />
          <Route path="/wath/:movieName" component={Watch} />
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
