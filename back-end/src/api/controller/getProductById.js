const getProductById = require('../service/getProductById');

module.exports = async (req, res) => {
  const { id } = req.params;
  
  const product = await getProductById(id);

  res.status(200).json(product);
};
