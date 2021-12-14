const mongoConnection = require('./connection');

module.exports = async (id) => {
    const db = await mongoConnection.getConnection();
    const product = await db.collection('products').findOne({ _id: id });
    return product;
  };