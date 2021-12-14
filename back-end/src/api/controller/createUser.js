const createUserService = require('../service/createUser');

module.exports = async (req, res) => {
    const { email, password } = req.body;
    const result = await createUserService(email, password);

    res.status(200).json(result);
};
