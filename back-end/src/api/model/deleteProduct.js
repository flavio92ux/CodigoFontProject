const mongoConnection = require('./connection');

module.exports = async (_id) => {
  const db = await mongoConnection.getConnection();
  await db.collection('products').deleteOne({ _id });
};