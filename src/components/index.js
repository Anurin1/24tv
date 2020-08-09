import React, { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Landing from "./Landing";
import Movie from "./Movie";
import VideoPlayer from "./VideoPlayer";

export default () => {
  return (
    <Router>
      <Fragment>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/browse/:id" component={Movie} />
          <Route exact path="/watch/:id" component={VideoPlayer} />
        </Switch>
      </Fragment>
    </Router>
  );
};
