const getAllProductsModel = require('../model/getAllProducts');

module.exports = async () => {
  const products = await getAllProductsModel();

  return products;
};
