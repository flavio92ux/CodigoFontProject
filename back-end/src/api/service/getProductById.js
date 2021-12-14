const { ObjectId } = require('bson');
const getProductById = require('../model/getProductById');
const { productDoesNotExist, invalidId } = require('../utils/errMessages');

const checkId = (id) => {
  try {
    ObjectId(id);
  } catch (_err) {
    throw invalidId;
  }
};

const checkProduct = async (id) => {
  const product = await getProductById(ObjectId(id));
  if (!product) throw productDoesNotExist;
  return product;
};

module.exports = async (id) => {
  checkId(id);
  const product = await checkProduct(id);

  return product;
};