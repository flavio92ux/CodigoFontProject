const mongoConnection = require('./connection');

const createUser = async (email, password) => {
    const db = await mongoConnection.getConnection();
    const result = await db.collection('users').insertOne({ email, password });
    return result.insertedId;
  };

module.exports = { createUser };