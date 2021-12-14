const { createUserService } = require('../service/createUser');

const createUserController = async (req, res) => {
    const { email, password } = req.body;
    const result = await createUserService(email, password);

    res.status(200).send(result);
};

module.exports = { createUserController };