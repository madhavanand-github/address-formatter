// Boilerplate
const express = require('express');
const app = express();
let port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server Listenning at ${port} 👍 `));
app.use(express.json());

// Modules Import
const {isEmpty, isCorrectField} = require('./modules/requestAnalyser.js');
const {emptyFieldParser, fieldTypeParser, uniqueSoft, serpUpdate, hardParser} = require('./modules/fieldsProcessor');

// Route Creation
const mainRouter = express.Router();
app.use('/format-address', mainRouter);
mainRouter.route('/')
.post(isEmpty, isCorrectField, emptyFieldParser, fieldTypeParser, uniqueSoft, serpUpdate, hardParser)
      

