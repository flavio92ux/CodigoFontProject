const updateImageService = require('../service/updateImage');

module.exports = async (req, res) => {
  const { id } = req.params;

  await updateImageService(id);

  res.status(200).json({ message: 'Image Updated' });
};