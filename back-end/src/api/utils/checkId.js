const { ObjectId } = require('bson');
const { invalidId } = require('./errMessages');

module.exports = (id) => {
  try {
    ObjectId(id);
  } catch (_err) {
    throw invalidId;
  }
};