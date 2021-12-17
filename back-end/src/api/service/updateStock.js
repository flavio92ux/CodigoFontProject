const { ObjectId } = require('bson');
const updateStockModel = require('../model/updateStock');
const deleteProduct = require('../model/deleteProduct');
const checkProduct = require('../utils/checkProductIfExist');
const checkId = require('../utils/checkId');

module.exports = async (id) => {
  checkId(id);

  const { amount } = await checkProduct(id);

  const stock = Number(amount);

  if (stock === 1) {
    await deleteProduct(ObjectId(id));
  } else {
    await updateStockModel(ObjectId(id), stock - 1);
  }
};
