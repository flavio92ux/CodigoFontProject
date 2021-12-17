const { ObjectId } = require('bson');
require('dotenv').config();
const updateImageModel = require('../model/updateImage');

const url = process.env.url || 'http://localhost:3001';

module.exports = async (id) => {
  const image = `${url}/image/${id}.jpeg`;

  await updateImageModel(ObjectId(id), image);
};