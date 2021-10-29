// Boilerplate
const express = require('express');
const app = express();
app.listen(3000, () => console.log('Server Listenning 👍'));
app.use(express.json())

// Modules Import
const requestCheck = require('./modules/requestCheck.js')


app.post('/', function (req, res) {
	requestCheck.requestChecker(req, res);
	res.send('Hello World');
})
       
      

