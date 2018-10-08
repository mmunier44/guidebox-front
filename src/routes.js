import React from 'react'

import {
  Router,
  Route,
  IndexRoute,
  hashHistory
} from 'react-router'

import Layout from 'components'

import { Home, Add } from 'containers'

// App routes
// IndexRoute renders Home container by default
const Routes = (
  <Router history={hashHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={Home} />
      <Route path="Add" component={Add} />
    </Route>
  </Router>
)

export default Routes
