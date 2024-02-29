const express = require('express');
const app = express();
const path = require('path');
const port = 8080;

app.use(express.static(path.join(__dirname, '/')));

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(port, () => {
	console.log('Listening...');
});