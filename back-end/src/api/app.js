const express = require('express');
const rescue = require('express-rescue');

const validateUser = require('./middlewares/validateUser');
const validateProductFields = require('./middlewares/validateProductFields');
const auth = require('./middlewares/auth');
const controller = require('./controller');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const upload = require('./middlewares/multer');

app.post('/login', validateUser, rescue(controller.login));
app.post('/register', rescue(controller.createUser));

app.get('/products', controller.getAllProducts);

app.post('/product', auth, validateProductFields, controller.createProduct);

app.patch('/product/:id', auth, rescue(controller.updateStock));
app.patch('/product/:id/image', upload.single('image'), auth, controller.updateImage);

app.get('/image/:image', controller.getImage);
app.get('/product/:id', rescue(controller.getProductById));

app.use((error, _req, res, _next) => {
    res.status(error.status).json({ message: error.message });
});

module.exports = app;
