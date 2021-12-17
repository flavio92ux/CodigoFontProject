const { ObjectId } = require('bson');

const getProductById = require('../model/getProductById');
const { productDoesNotExist } = require('./errMessages');

module.exports = async (id) => {
  const product = await getProductById(ObjectId(id));
  if (!product) throw productDoesNotExist;
  return product;
};