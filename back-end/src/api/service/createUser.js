const { createUser } = require('../model/createUser');

const createUserService = async (email, password) => {
    const id = await createUser(email, password);

    return { id, email, password };
};

module.exports = { createUserService };