const updateStockService = require('../service/updateStock');

module.exports = async (req, res) => {
  const { id } = req.params;

  await updateStockService(id);

  res.status(200).json({});
};