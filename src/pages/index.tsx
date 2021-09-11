import React, {lazy} from 'react'
import {Link} from '@reach/router'
import './index.pcss'

export default function({path}: {path: string}){
	document.title = 'Beranda'

	return <div id='index'>
		<h1 className='teksBesar'>Beranda</h1>
		<p>Menuju ke <Link to='/about' onMouseEnter={() => import('./about')}>about</Link></p>
	</div>
}