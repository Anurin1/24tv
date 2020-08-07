import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Category from "./Category";
import Movie from "./Movie";
// import Category from "./Category";


// import Carousel from './Carousel';
// import CarouselCopy from './CarouselCopy';

export default () => {
  return (

    <Router>
    <Fragment>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/movie/:movieName" component={Movie} />
      </Switch>
    </Fragment>
  </Router>


    <div className="container">
      <h1>24tv</h1>
      {/* <CarouselCopy />
      <CarouselCopy /> */}

      <Category />

    </div>
  )
}



<Route path="/user/:userId" component={UserPage} />