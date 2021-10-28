const express = require('express');
const app = express();
app.listen(3000, () => console.log('Server Listenning 👍'));

app.post('/', function (req, res) {
	res.send('Hello World')
})
       
      

