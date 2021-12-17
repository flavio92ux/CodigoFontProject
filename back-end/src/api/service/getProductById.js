const checkId = require('../utils/checkId');
const checkProduct = require('../utils/checkProductIfExist');

module.exports = async (id) => {
  checkId(id);
  
  const product = await checkProduct(id);

  return product;
};