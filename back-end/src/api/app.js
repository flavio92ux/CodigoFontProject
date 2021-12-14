const express = require('express');
const bodyParser = require('body-parser');

const { createUserController } = require('./controller/createUser');

const app = express();
app.use(bodyParser.json());

app.post('/register', createUserController);

module.exports = app;
