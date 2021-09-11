import React, {Suspense} from 'react'
import {render} from 'react-dom'
import 'virtual:windi.css'
import { BrowserRouter } from "react-router-dom"
import { renderRoutes } from "react-router-config"
import routes from "virtual:generated-pages-react"

render(
	<Suspense fallback=''>
		<BrowserRouter>
			{renderRoutes(routes)}
		</BrowserRouter>
	</Suspense>,
	document.getElementById('root')
)