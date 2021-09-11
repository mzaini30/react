# Template React

## Library dan fitur

- Windi
- Vite
- Reach Router
- TypeScript

## Tutorial singkat

### Prefetch route

```tsx
<Link to='/about' onMouseEnter={() => import('./about')}>about</Link>
```

### Routing

```tsx
import React, {lazy, Suspense} from 'react'
import {Router} from '@reach/router'

const Index = lazy(() => import('./pages/index'))
const About = lazy(() => import('./pages/about'))

export default function({path}: {path: string}){
	return <Suspense fallback=''>
		<Router>
		  <Index path='/'></Index>
		  <About path='/about'></About>
		</Router>
	</Suspense>
}
```