const express = require('express')
const app = express()
const port = 3000
const path = require('path')

app.get('/', (req, res) => {
	console.log('request /');
	res.set({
		'Content-type': 'text/html;',
		// 'Cache-Control': 'max-age=10'
	})
	res.sendFile(path.join(__dirname + '/index.html'));
})

app.get('/test', (req, res) => {
	console.log('request /test');

	res.set({
		'Cache-Control': 'max-age=30'
	})
	
	res.send({
		test: 1
	})
	res.sendFile(path.join(__dirname + '/index.html'));
})

app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`)
})