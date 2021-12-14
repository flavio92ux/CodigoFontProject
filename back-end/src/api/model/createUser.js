const mongoConnection = require('./connection');

module.exports = async (email, password) => {
    const db = await mongoConnection.getConnection();
    const result = await db.collection('users').insertOne({ email, password });
    return result.insertedId;
  };
