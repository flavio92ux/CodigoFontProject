const md5 = require('md5');
const getUserByEmail = require('../model/getUserByEmail');
const { createToken } = require('../jwtToken/getAndSetJwtToken');

const invalidPassword = {
    status: 400,
    message: 'Password Incorrect',
  };

const userDoesNotExist = {
    status: 400,
    message: 'User does not exist',
};

const checkUser = async (email, passwd) => {
    const user = await getUserByEmail(email);
    if (!user) throw userDoesNotExist;
    if (user.password !== passwd) throw invalidPassword;
};

module.exports = async (email, passwd) => {
    const password = md5(passwd);
    await checkUser(email, password);

    return createToken(email);
};
