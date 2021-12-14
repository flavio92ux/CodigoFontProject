const Joi = require('joi');

const schema = Joi.object({
  productName: Joi.string().required(),
  price: Joi.number().required(),
  amount: Joi.number().integer().required(),
  stock: Joi.number().integer().required(),
  image: Joi.string().required(),
});

const errMessage = {
  status: 400,
  message: 'Dados inválidos',
};

module.exports = (req, _res, next) => {
  const result = schema.validate(req.body);

  if (result.error) next(errMessage);

  next();
};