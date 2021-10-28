// Boilerplate
const express = require('express');
const app = express();
app.listen(3000, () => console.log('Server Listenning 👍'));
app.use(express.json())

// Modules Import
const functions = require('./modules/functions.js')


app.post('/', function (req, res) {
	functions.logBody(req, res);
	res.send('Hello World');
})
       
      

