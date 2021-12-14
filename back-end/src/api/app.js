const express = require('express');
const bodyParser = require('body-parser');
const rescue = require('express-rescue');

const validateUser = require('./middlewares/validateUser');
const controller = require('./controller');

const app = express();
app.use(bodyParser.json());

app.post('/register', validateUser, rescue(controller.createUserController));

app.use((error, _req, res, _next) => {
    res.status(error.status).json({ message: error.message });
});

module.exports = app;
