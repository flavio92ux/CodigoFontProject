const createUser = require('../model/createUser');
const getUserByEmail = require('../model/getUserByEmail');

const errMessage = {
    status: 409,
    message: 'User already exists',
  };

const checkUserIfExists = async (email) => {
    const user = await getUserByEmail(email);

    if (user) throw errMessage;
};

module.exports = async (email, password) => {
    await checkUserIfExists(email);
    const id = await createUser(email, password);

    return { id, email };
};
