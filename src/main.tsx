import React, {lazy, Suspense} from 'react'
import {render} from 'react-dom'
import {Router} from '@reach/router'
import 'virtual:windi.css'

const Index = lazy(() => import('./pages/index'))
const About = lazy(() => import('./pages/about'))

render(
  <Suspense fallback=''>
    <Router>
      <Index path='/'></Index>
      <About path='/about'></About>
    </Router>
  </Suspense>,
  document.getElementById('root')
)