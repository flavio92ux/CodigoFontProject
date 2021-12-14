const md5 = require('md5');
const createUser = require('../model/createUser');
const getUserByEmail = require('../model/getUserByEmail');
const { createToken } = require('../jwtToken/getAndSetJwtToken');

const errMessage = {
    status: 409,
    message: 'User already exists',
  };

const checkUserIfExists = async (email) => {
    const user = await getUserByEmail(email);

    if (user) throw errMessage;
};

module.exports = async (email, passwd) => {
    const password = md5(passwd);
    await checkUserIfExists(email);

    try {
        await createUser(email, password);
    } catch (err) {
        const objError = { status: err.status, message: err.message };
        throw objError;
    }    

    const token = createToken(email);

    return { token };
};
