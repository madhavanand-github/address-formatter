// Boilerplate
const express = require('express');
const app = express();
app.listen(3000, () => console.log('Server Listenning 👍'));
app.use(express.json())

// Modules Import
const requestAnalyser = require('./modules/requestAnalyser.js')


app.post('/', function (req, res) {
	console.log('-------------');
	if(requestAnalyser.allChecksPassed(req, res)){
		res.send('Yet to be made 😀')
	}
	else{
		console.log("Request Rejected : 🚫");
	}
	
})
       
      

