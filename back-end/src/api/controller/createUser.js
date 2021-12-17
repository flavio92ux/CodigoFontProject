const createUserService = require('../service/createUser');

module.exports = async (req, res) => {
    const { email, password } = req.body;
    const token = await createUserService(email, password);

    res.status(201).json({ token });
};
