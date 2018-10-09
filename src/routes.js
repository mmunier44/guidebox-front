import React from 'react'

import {
  Router,
  Route,
  HashRouter,
  Switch,
  Link
} from 'react-router-dom'

import Layout from './components'

import { Home, Add } from './containers'

// App routes
// IndexRoute renders Home container by default
const Routes = () => (
  <HashRouter>
    <React.Fragment>
      <Switch>
        <Route exact path="/" component={Layout}>
          {
          }
          <Route exact path ="/" component={Home} />
          <Route exact path="Add" component={Add} />
        </Route>
      </Switch>
    </React.Fragment>
  </HashRouter>
)

export default Routes
