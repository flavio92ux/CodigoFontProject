const loginService = require('../service/loginUser');

module.exports = async (req, res) => {
    const { email, password } = req.body;

    const token = await loginService(email, password);

    res.status(200).json({ token });
};
