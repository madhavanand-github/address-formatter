// Boilerplate
const express = require('express');
const app = express();
app.listen(3000, () => console.log('Server Listenning 👍'));
app.use(express.json());

// Modules Import
const {isEmpty, isCorrectField} = require('./modules/requestAnalyser.js');
const {emptyFieldParser, fieldTypeParser, uniqueSoft} = require('./modules/fieldsProcessor');

// Route Creation
const mainRouter = express.Router();
app.use('/format-address', mainRouter);
mainRouter
.route('/')
.post(isEmpty, isCorrectField, emptyFieldParser, fieldTypeParser, uniqueSoft)
      

