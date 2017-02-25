import React from 'react';
import {Route, Router, IndexRoute} from 'react-router';

import App from './containers/app';
import Home from './containers/home';
import Detail from './containers/detail';
import Search from './containers/search';

export default (
  <Router>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path=":make/:model/:id" component={Detail} />
      <Route path="Search" component={Search} />
    </Route>
  </Router>
)