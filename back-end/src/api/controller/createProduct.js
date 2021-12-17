const createProductService = require('../service/createProduct');

module.exports = async (req, res) => {
    const {
        productName,
        price,
        amount } = req.body;

    const id = await createProductService({
        productName,
        price,
        amount });

    res.status(201).json(id);
};