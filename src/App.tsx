import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const Index = lazy(() => import('./pages/index'));
const About = lazy(() => import('./pages/about'));

export default function(){
  return <Router>
    <Suspense fallback={<div></div>}>
      <Switch>
        <Route exact path="/" component={Index}/>
        <Route path="/about" component={About}/>
      </Switch>
    </Suspense>
  </Router>
}