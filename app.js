// Boilerplate
const express = require('express');
const app = express();
app.listen(3000, () => console.log('Server Listenning 👍'));
app.use(express.json());

// Modules Import
const {isEmpty, isNumberOfFields} = require('./modules/requestAnalyser.js');

// Route Creation
const mainRouter = express.Router();
app.use('/format-address', mainRouter);
mainRouter
.route('/')
.post(isEmpty, isNumberOfFields)
      

