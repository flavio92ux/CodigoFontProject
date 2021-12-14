const express = require('express');
const bodyParser = require('body-parser');
const rescue = require('express-rescue');

const validateUser = require('./middlewares/validateUser');
const validateProductFields = require('./middlewares/validateProductFields');
const controller = require('./controller');

const app = express();
app.use(bodyParser.json());

app.post('/login', rescue(controller.login));
app.post('/register', validateUser, rescue(controller.createUser));

app.post('/product', validateProductFields, controller.createProduct);

app.use((error, _req, res, _next) => {
    res.status(error.status).json({ message: error.message });
});

module.exports = app;
