import React from 'react'
import {Link} from 'react-router-dom'
import './index.pcss'

export default function(){
	document.title = 'Beranda'

	return <div id='index'>
		<h1 className='teksBesar'>Beranda</h1>
		<p>Menuju ke <Link to='/about' onMouseEnter={() => import('./about')}>about</Link></p>
	</div>
}