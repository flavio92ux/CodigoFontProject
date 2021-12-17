const path = require('path');

const getImage = (req, res) => {
  const { image } = req.params;
  const imagePath = path.resolve('uploads', image);

  return res.status(200).sendFile(imagePath);
};

module.exports = getImage;