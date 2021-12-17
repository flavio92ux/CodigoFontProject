const mongoConnection = require('./connection');

module.exports = async (product) => {
    const db = await mongoConnection.getConnection();
    const result = await db.collection('products').insertOne(product);
    return result.insertedId;
  };