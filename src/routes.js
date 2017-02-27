import React from 'react';
import {Route, Router, IndexRoute} from 'react-router';

import App from './containers/app';
import Home from './containers/home';
import Detail from './containers/detail';
import Search from './containers/search';
import NotFound from './containers/notfound';

export default (
  <Router>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path=":make/:model/:id" component={Detail} />
      <Route path="search" component={Search} />
      <Route path="error" component={NotFound} />
      {/*<Route path="*" component={NotFound} status={404} />*/}
    </Route>
  </Router>
)