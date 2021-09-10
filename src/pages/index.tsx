import React from 'react'
import {Link} from '@reach/router'
import css from './index.module.css'

export default function({path}: {path: string}){
	return <div className={css.wadah}>
		<h1 className={css.teksBesar}>Beranda</h1>
		<p>Menuju ke <Link to='/about'>about</Link></p>
	</div>
}