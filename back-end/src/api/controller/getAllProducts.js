const getAllProductsService = require('../service/getAllProducts');

module.exports = async (_req, res) => {
  const products = await getAllProductsService();

  res.status(200).json(products);
};