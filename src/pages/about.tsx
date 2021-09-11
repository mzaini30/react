import React from 'react'

export default function({path}: {path: string}){
	document.title = 'About'
	
	return <div id="about">
		<h1>About</h1>
	</div>
}