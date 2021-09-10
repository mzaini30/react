import React from 'react'
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'

import GeneratedRoutes, { RouteConfig } from './routes'

const generatedRoutePaths = Object.keys(RouteConfig)

export default function(){
  return <Router>
    <Switch>
      <Route path={generatedRoutePaths}>
        <GeneratedRoutes />
      </Route>
      <Route path="*">
        <p>404 not found</p>
      </Route>
    </Switch>
  </Router>
}