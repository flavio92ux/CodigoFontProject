const { ObjectId } = require('bson');
const updateImageModel = require('../model/updateImage');

module.exports = async (id) => {
  const image = `localhost:3001/image/${id}.jpeg`;

  await updateImageModel(ObjectId(id), image);
};