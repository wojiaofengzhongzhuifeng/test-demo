const express = require('express')
const app = express()
const port = 3000
const path = require('path')

app.set('etag', false); // turn off


app.get('/', (req, res) => {
	console.log('request /');
	res.set({
		'Cache-Control': 'max-age=20'
	})
	res.sendFile(path.join(__dirname + '/index.html'));
})

app.get('/index.css', (req, res) => {
	console.log('request css');
	res.set({
		'Cache-Control': 'max-age=20'
	})
	res.sendFile(path.join(__dirname + '/index.css'));
})


app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`)
})